import { path, assocPath, equals, isNil, map, merge, without, identity } from 'ramda'

class Atom {
  constructor(defaultValue = null) {
    this.value = defaultValue
    this.watchers = []
  }

  deref() {
    return this.value
  }

  reset(newValue) {
    let oldValue = this.value
    this.value = newValue

    this.watchers.forEach((watcher) => { watcher(newValue, oldValue) })

    return this
  }

  swap(updateFn, ...args) {
    return this.reset(updateFn(this.value, ...args))
  }

  watch(callback) {
    this.watchers = this.watchers.concat(callback)

    return () => {
      this.watchers = without([callback], this.watchers)
    }
  }
}

export let isAtom = (ref) =>
  !isNil(ref) && typeof ref.deref === 'function'
  && typeof ref.reset === 'function'
  && typeof ref.swap === 'function'
  && typeof ref.watch === 'function'

export let atom = (defaultValue) => new Atom(defaultValue)
export let deref = (ref) => isAtom(ref) ? ref.deref() : ref
export let reset = (ref, newValue) => ref.reset(newValue)
export let swap = (ref, updateFn, ...args) => ref.swap(updateFn, ...args)
export let watch = (ref, callback) => ref.watch(callback)
export let watchOnce = (ref, callback) => {
  let cancel = watch(ref, (newValue, oldValue) => {
    cancel()
    callback(newValue, oldValue)
  })

  return cancel
}

class Cursor {
  constructor(ref, cursorPath) {
    this.cursorPath = cursorPath
    this.ref = ref
  }

  deref() {
    return path(this.cursorPath, deref(this.ref))
  }

  reset(newValue) {
    return swap(this.ref, assocPath(this.cursorPath, newValue))
  }

  swap(updateFn, ...args) {
    let currentValue = deref(this)
    return reset(this, updateFn(currentValue, ...args))
  }

  watch(callback) {
    return watch(this.ref, (newValue, oldValue) => {
      let cursorNewValue = path(this.cursorPath, newValue)
      let cursorOldValue = path(this.cursorPath, oldValue)

      if (!equals(cursorNewValue, cursorOldValue)) {
        callback(cursorNewValue, cursorOldValue)
      }
    })
  }
}

export let cursor = (ref, cursorPath) => new Cursor(ref, cursorPath)
