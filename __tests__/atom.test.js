import {
    not, pipe, path, toUpper,
    assoc, assocPath, concat,
    reverse
  } from 'ramda'
  
  import {
    atom, cursor,
    isAtom, deref, reset, swap, watch, watchOnce
  } from '../src/main'
  
  describe('ctor tests', () => {
    it('creates new instance', () => {
      expect(
        [
          atom(),
          cursor(),
        ].every(isAtom)
      ).toBe(true)
    })
  })
  
  describe('deref value tests', () => {
    let value = { foo: { bar: 'buzz' } }
    let a = atom(value)
  
    it('deref: non-atomic', () => {
      expect(deref(value)).toEqual(value)
    })
  
    it('deref: atom & cursor', () => {
      expect(deref(a)).toEqual(value)
      expect(
        deref(cursor(a, ['foo', 'bar']))
      ).toEqual('buzz')
    })
  })
  
  describe('reset value tests', () => {
    let value = { foo: { bar: 'buzz' } }
  
    it('resets atom value', () => {
      let a = reset(atom(), value)
      expect(deref(a)).toEqual(value)
    })
  
    // note that cursor.reset call returns root ref
    // not the cursor instance!
    it('resets cursor value', () => {
      let c = cursor(
        atom(value), ['foo', 'bar']
      )
      reset(c, 'poop')
      expect(deref(c)).toEqual('poop')
    })
  })
  
  describe('swap value tests', () => {
    let value = { foo: { bar: 'buzz' } }
  
    it('swaps atom value', () => {
      let a = atom('buzz')
      swap(a, toUpper)
      expect(deref(a)).toEqual('BUZZ')
    })
  
    // note that cursor.swap call returns swapped root ref
    // not the cursor instance!
    it('swaps cursor value', () => {
      let a = atom(value)
      let c = cursor(a, ['foo', 'bar'])
      swap(c, toUpper)
      expect(deref(c)).toEqual('BUZZ')
    })
  })
  
  describe('watch tests', () => {
    it('watch atom', () => {
      let mockFn = jest.fn()
      let a = atom(false)
      let unsub = watch(a, mockFn)
  
      reset(a, true)
      expect(mockFn.mock.calls.length).toBe(1)
  
      reset(a, false)
      expect(mockFn.mock.calls.length).toBe(2)
  
      swap(a, not)
      expect(mockFn.mock.calls.length).toBe(3)
  
      unsub()
      swap(a, not)
      expect(mockFn.mock.calls.length).toBe(3)
    })
  
    it('watch atom & cursor', () => {
      let mockFn = jest.fn()
      let value = { foo: { bar: 'buzz' } }
      let a = atom(value)
      let c = cursor(a, ['foo'])
      let d = cursor(c, ['bar'])
  
      watch(c, mockFn)
  
      swap(c, assoc('bar', 'poop'))
      expect(mockFn.mock.calls.length).toBe(1)
  
      swap(c, assoc('bar', 'peep'))
      expect(mockFn.mock.calls.length).toBe(2)
  
      // altering the parent atom
      swap(a, assocPath(['foo', 'bar'], 'oops'))
      expect(mockFn.mock.calls.length).toBe(3)
  
      // altering the child cursor
      swap(d, toUpper)
      expect(mockFn.mock.calls.length).toBe(4)
    })
  
    it('watchOnce', () => {
      let mockFn = jest.fn()
      let a = atom(true)
  
      watchOnce(a, mockFn)
  
      swap(a, not)
      expect(mockFn.mock.calls.length).toBe(1)
  
      // once more =)
      swap(a, not)
      expect(mockFn.mock.calls.length).toBe(1)
    })
  })