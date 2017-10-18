!function(t, n) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = n(); else if ("function" == typeof define && define.amd) define([], n); else {
        var r = n();
        for (var e in r) ("object" == typeof exports ? exports : t)[e] = r[e];
    }
}(this, function() {
    return function(t) {
        function n(e) {
            if (r[e]) return r[e].exports;
            var u = r[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return t[e].call(u.exports, u, u.exports, n), u.l = !0, u.exports;
        }
        var r = {};
        return n.m = t, n.c = r, n.d = function(t, r, e) {
            n.o(t, r) || Object.defineProperty(t, r, {
                configurable: !1,
                enumerable: !0,
                get: e
            });
        }, n.n = function(t) {
            var r = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return n.d(r, "a", r), r;
        }, n.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n);
        }, n.p = "", n(n.s = 14);
    }([ function(t, n, r) {
        "use strict";
        var e = r(1), u = r(3);
        t.exports = function(t) {
            return function n(r, o) {
                switch (arguments.length) {
                  case 0:
                    return n;

                  case 1:
                    return u(r) ? n : e(function(n) {
                        return t(r, n);
                    });

                  default:
                    return u(r) && u(o) ? n : u(r) ? e(function(n) {
                        return t(n, o);
                    }) : u(o) ? e(function(n) {
                        return t(r, n);
                    }) : t(r, o);
                }
            };
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(3);
        t.exports = function(t) {
            return function n(r) {
                return 0 === arguments.length || e(r) ? n : t.apply(this, arguments);
            };
        };
    }, function(t, n, r) {
        "use strict";
        t.exports = function(t, n) {
            return Object.prototype.hasOwnProperty.call(n, t);
        };
    }, function(t, n, r) {
        "use strict";
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        };
        t.exports = function(t) {
            return null != t && "object" === (void 0 === t ? "undefined" : e(t)) && !0 === t["@@functional/placeholder"];
        };
    }, function(t, n, r) {
        "use strict";
        t.exports = Array.isArray || function(t) {
            return null != t && t.length >= 0 && "[object Array]" === Object.prototype.toString.call(t);
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(1), u = r(2), o = r(23);
        t.exports = function() {
            var t = !{
                toString: null
            }.propertyIsEnumerable("toString"), n = [ "constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ], r = function() {
                return arguments.propertyIsEnumerable("length");
            }(), i = function(t, n) {
                for (var r = 0; r < t.length; ) {
                    if (t[r] === n) return !0;
                    r += 1;
                }
                return !1;
            };
            return e("function" != typeof Object.keys || r ? function(e) {
                if (Object(e) !== e) return [];
                var c, s, f = [], a = r && o(e);
                for (c in e) !u(c, e) || a && "length" === c || (f[f.length] = c);
                if (t) for (s = n.length - 1; s >= 0; ) c = n[s], u(c, e) && !i(f, c) && (f[f.length] = c), 
                s -= 1;
                return f;
            } : function(t) {
                return Object(t) !== t ? [] : Object.keys(t);
            });
        }();
    }, function(t, n, r) {
        "use strict";
        t.exports = function(t, n) {
            switch (t) {
              case 0:
                return function() {
                    return n.apply(this, arguments);
                };

              case 1:
                return function(t) {
                    return n.apply(this, arguments);
                };

              case 2:
                return function(t, r) {
                    return n.apply(this, arguments);
                };

              case 3:
                return function(t, r, e) {
                    return n.apply(this, arguments);
                };

              case 4:
                return function(t, r, e, u) {
                    return n.apply(this, arguments);
                };

              case 5:
                return function(t, r, e, u, o) {
                    return n.apply(this, arguments);
                };

              case 6:
                return function(t, r, e, u, o, i) {
                    return n.apply(this, arguments);
                };

              case 7:
                return function(t, r, e, u, o, i, c) {
                    return n.apply(this, arguments);
                };

              case 8:
                return function(t, r, e, u, o, i, c, s) {
                    return n.apply(this, arguments);
                };

              case 9:
                return function(t, r, e, u, o, i, c, s, f) {
                    return n.apply(this, arguments);
                };

              case 10:
                return function(t, r, e, u, o, i, c, s, f, a) {
                    return n.apply(this, arguments);
                };

              default:
                throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
            }
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(1), u = r(0), o = r(3);
        t.exports = function(t) {
            return function n(r, i, c) {
                switch (arguments.length) {
                  case 0:
                    return n;

                  case 1:
                    return o(r) ? n : u(function(n, e) {
                        return t(r, n, e);
                    });

                  case 2:
                    return o(r) && o(i) ? n : o(r) ? u(function(n, r) {
                        return t(n, i, r);
                    }) : o(i) ? u(function(n, e) {
                        return t(r, n, e);
                    }) : e(function(n) {
                        return t(r, i, n);
                    });

                  default:
                    return o(r) && o(i) && o(c) ? n : o(r) && o(i) ? u(function(n, r) {
                        return t(n, r, c);
                    }) : o(r) && o(c) ? u(function(n, r) {
                        return t(n, i, r);
                    }) : o(i) && o(c) ? u(function(n, e) {
                        return t(r, n, e);
                    }) : o(r) ? e(function(n) {
                        return t(n, i, c);
                    }) : o(i) ? e(function(n) {
                        return t(r, n, c);
                    }) : o(c) ? e(function(n) {
                        return t(r, i, n);
                    }) : t(r, i, c);
                }
            };
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(1);
        t.exports = e(function(t) {
            return null == t;
        });
    }, function(t, n, r) {
        "use strict";
        var e = r(0), u = r(19);
        t.exports = e(function(t, n) {
            return u(t, n, [], []);
        });
    }, function(t, n, r) {
        "use strict";
        var e = r(4), u = r(26);
        t.exports = function(t, n, r) {
            return function() {
                if (0 === arguments.length) return r();
                var o = Array.prototype.slice.call(arguments, 0), i = o.pop();
                if (!e(i)) {
                    for (var c = 0; c < t.length; ) {
                        if ("function" == typeof i[t[c]]) return i[t[c]].apply(i, o);
                        c += 1;
                    }
                    if (u(i)) {
                        return n.apply(null, o)(i);
                    }
                }
                return r.apply(this, arguments);
            };
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(28), u = r(30), o = r(31);
        t.exports = function() {
            function t(t, n, r) {
                for (var e = 0, u = r.length; e < u; ) {
                    if ((n = t["@@transducer/step"](n, r[e])) && n["@@transducer/reduced"]) {
                        n = n["@@transducer/value"];
                        break;
                    }
                    e += 1;
                }
                return t["@@transducer/result"](n);
            }
            function n(t, n, r) {
                for (var e = r.next(); !e.done; ) {
                    if ((n = t["@@transducer/step"](n, e.value)) && n["@@transducer/reduced"]) {
                        n = n["@@transducer/value"];
                        break;
                    }
                    e = r.next();
                }
                return t["@@transducer/result"](n);
            }
            function r(t, n, r, e) {
                return t["@@transducer/result"](r[e](o(t["@@transducer/step"], t), n));
            }
            var i = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
            return function(o, c, s) {
                if ("function" == typeof o && (o = u(o)), e(s)) return t(o, c, s);
                if ("function" == typeof s["fantasy-land/reduce"]) return r(o, c, s, "fantasy-land/reduce");
                if (null != s[i]) return n(o, c, s[i]());
                if ("function" == typeof s.next) return n(o, c, s);
                if ("function" == typeof s.reduce) return r(o, c, s, "reduce");
                throw new TypeError("reduce: list must be array or iterable");
            };
        }();
    }, function(t, n, r) {
        "use strict";
        t.exports = {
            init: function() {
                return this.xf["@@transducer/init"]();
            },
            result: function(t) {
                return this.xf["@@transducer/result"](t);
            }
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(6), u = r(1), o = r(0), i = r(33);
        t.exports = o(function(t, n) {
            return 1 === t ? u(n) : e(t, i(t, [], n));
        });
    }, function(t, n, r) {
        "use strict";
        function e(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function u(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.cursor = n.watchOnce = n.watch = n.swap = n.reset = n.deref = n.atom = n.isAtom = void 0;
        var o = function() {
            function t(t, n) {
                for (var r = 0; r < n.length; r++) {
                    var e = n[r];
                    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), 
                    Object.defineProperty(t, e.key, e);
                }
            }
            return function(n, r, e) {
                return r && t(n.prototype, r), e && t(n, e), n;
            };
        }(), i = r(15), c = e(i), s = r(16), f = e(s), a = r(9), l = e(a), p = r(8), y = e(p), h = r(25), v = (e(h), 
        r(34)), d = (e(v), r(37)), b = e(d), g = r(48), x = (e(g), r(50)), m = (e(x), r(51)), w = (e(m), 
        function() {
            function t() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                u(this, t), this.value = n, this.watchers = [];
            }
            return o(t, [ {
                key: "deref",
                value: function() {
                    return this.value;
                }
            }, {
                key: "reset",
                value: function(t) {
                    var n = this.value;
                    return this.value = t, this.watchers.forEach(function(r) {
                        r(t, n);
                    }), this;
                }
            }, {
                key: "swap",
                value: function(t) {
                    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) r[e - 1] = arguments[e];
                    return this.reset(t.apply(void 0, [ this.value ].concat(r)));
                }
            }, {
                key: "watch",
                value: function(t) {
                    var n = this;
                    return this.watchers = this.watchers.concat(t), function() {
                        n.watchers = (0, b.default)([ t ], n.watchers);
                    };
                }
            } ]), t;
        }()), O = n.isAtom = function(t) {
            return !(0, y.default)(t) && "function" == typeof t.deref && "function" == typeof t.reset && "function" == typeof t.swap && "function" == typeof t.watch;
        }, S = (n.atom = function(t) {
            return new w(t);
        }, function(t) {
            return O(t) ? t.deref() : t;
        });
        n.deref = S;
        var j = n.reset = function(t, n) {
            return t.reset(n);
        }, A = n.swap = function(t, n) {
            for (var r = arguments.length, e = Array(r > 2 ? r - 2 : 0), u = 2; u < r; u++) e[u - 2] = arguments[u];
            return t.swap.apply(t, [ n ].concat(e));
        }, k = function(t, n) {
            return t.watch(n);
        };
        n.watch = k;
        var P = (n.watchOnce = function(t, n) {
            var r = k(t, function(t, e) {
                r(), n(t, e);
            });
            return r;
        }, function() {
            function t(n, r) {
                u(this, t), this.cursorPath = r, this.ref = n;
            }
            return o(t, [ {
                key: "deref",
                value: function() {
                    return (0, c.default)(this.cursorPath, S(this.ref));
                }
            }, {
                key: "reset",
                value: function(t) {
                    return A(this.ref, (0, f.default)(this.cursorPath, t));
                }
            }, {
                key: "swap",
                value: function(t) {
                    for (var n = S(this), r = arguments.length, e = Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++) e[u - 1] = arguments[u];
                    return j(this, t.apply(void 0, [ n ].concat(e)));
                }
            }, {
                key: "watch",
                value: function(t) {
                    var n = this;
                    return k(this.ref, function(r, e) {
                        var u = (0, c.default)(n.cursorPath, r), o = (0, c.default)(n.cursorPath, e);
                        (0, l.default)(u, o) || t(u, o);
                    });
                }
            } ]), t;
        }());
        n.cursor = function(t, n) {
            return new P(t, n);
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(0);
        t.exports = e(function(t, n) {
            for (var r = n, e = 0; e < t.length; ) {
                if (null == r) return;
                r = r[t[e]], e += 1;
            }
            return r;
        });
    }, function(t, n, r) {
        "use strict";
        var e = r(7), u = r(2), o = r(4), i = r(17), c = r(18), s = r(8);
        t.exports = e(function t(n, r, e) {
            if (0 === n.length) return r;
            var f = n[0];
            if (n.length > 1) {
                var a = !s(e) && u(f, e) ? e[f] : i(n[1]) ? [] : {};
                r = t(Array.prototype.slice.call(n, 1), r, a);
            }
            if (i(f) && o(e)) {
                var l = [].concat(e);
                return l[f] = r, l;
            }
            return c(f, r, e);
        });
    }, function(t, n, r) {
        "use strict";
        t.exports = Number.isInteger || function(t) {
            return t << 0 === t;
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(7);
        t.exports = e(function(t, n, r) {
            var e = {};
            for (var u in r) e[u] = r[u];
            return e[t] = n, e;
        });
    }, function(t, n, r) {
        "use strict";
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, u = r(20), o = r(21), i = r(2), c = r(22), s = r(5), f = r(24);
        t.exports = function t(n, r, a, l) {
            if (c(n, r)) return !0;
            if (f(n) !== f(r)) return !1;
            if (null == n || null == r) return !1;
            if ("function" == typeof n["fantasy-land/equals"] || "function" == typeof r["fantasy-land/equals"]) return "function" == typeof n["fantasy-land/equals"] && n["fantasy-land/equals"](r) && "function" == typeof r["fantasy-land/equals"] && r["fantasy-land/equals"](n);
            if ("function" == typeof n.equals || "function" == typeof r.equals) return "function" == typeof n.equals && n.equals(r) && "function" == typeof r.equals && r.equals(n);
            switch (f(n)) {
              case "Arguments":
              case "Array":
              case "Object":
                if ("function" == typeof n.constructor && "Promise" === o(n.constructor)) return n === r;
                break;

              case "Boolean":
              case "Number":
              case "String":
                if ((void 0 === n ? "undefined" : e(n)) !== (void 0 === r ? "undefined" : e(r)) || !c(n.valueOf(), r.valueOf())) return !1;
                break;

              case "Date":
                if (!c(n.valueOf(), r.valueOf())) return !1;
                break;

              case "Error":
                return n.name === r.name && n.message === r.message;

              case "RegExp":
                if (n.source !== r.source || n.global !== r.global || n.ignoreCase !== r.ignoreCase || n.multiline !== r.multiline || n.sticky !== r.sticky || n.unicode !== r.unicode) return !1;
                break;

              case "Map":
              case "Set":
                if (!t(u(n.entries()), u(r.entries()), a, l)) return !1;
                break;

              case "Int8Array":
              case "Uint8Array":
              case "Uint8ClampedArray":
              case "Int16Array":
              case "Uint16Array":
              case "Int32Array":
              case "Uint32Array":
              case "Float32Array":
              case "Float64Array":
              case "ArrayBuffer":
                break;

              default:
                return !1;
            }
            var p = s(n);
            if (p.length !== s(r).length) return !1;
            for (var y = a.length - 1; y >= 0; ) {
                if (a[y] === n) return l[y] === r;
                y -= 1;
            }
            for (a.push(n), l.push(r), y = p.length - 1; y >= 0; ) {
                var h = p[y];
                if (!i(h, r) || !t(r[h], n[h], a, l)) return !1;
                y -= 1;
            }
            return a.pop(), l.pop(), !0;
        };
    }, function(t, n, r) {
        "use strict";
        t.exports = function(t) {
            for (var n, r = []; !(n = t.next()).done; ) r.push(n.value);
            return r;
        };
    }, function(t, n, r) {
        "use strict";
        t.exports = function(t) {
            var n = String(t).match(/^function (\w*)/);
            return null == n ? "" : n[1];
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(0);
        t.exports = e(function(t, n) {
            return t === n ? 0 !== t || 1 / t == 1 / n : t !== t && n !== n;
        });
    }, function(t, n, r) {
        "use strict";
        var e = r(2);
        t.exports = function() {
            var t = Object.prototype.toString;
            return "[object Arguments]" === t.call(arguments) ? function(n) {
                return "[object Arguments]" === t.call(n);
            } : function(t) {
                return e("callee", t);
            };
        }();
    }, function(t, n, r) {
        "use strict";
        var e = r(1);
        t.exports = e(function(t) {
            return null === t ? "Null" : void 0 === t ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
        });
    }, function(t, n, r) {
        "use strict";
        var e = r(0), u = r(10), o = r(27), i = r(11), c = r(32), s = r(13), f = r(5);
        t.exports = e(u([ "fantasy-land/map", "map" ], c, function(t, n) {
            switch (Object.prototype.toString.call(n)) {
              case "[object Function]":
                return s(n.length, function() {
                    return t.call(this, n.apply(this, arguments));
                });

              case "[object Object]":
                return i(function(r, e) {
                    return r[e] = t(n[e]), r;
                }, {}, f(n));

              default:
                return o(t, n);
            }
        }));
    }, function(t, n, r) {
        "use strict";
        t.exports = function(t) {
            return "function" == typeof t["@@transducer/step"];
        };
    }, function(t, n, r) {
        "use strict";
        t.exports = function(t, n) {
            for (var r = 0, e = n.length, u = Array(e); r < e; ) u[r] = t(n[r]), r += 1;
            return u;
        };
    }, function(t, n, r) {
        "use strict";
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, u = r(1), o = r(4), i = r(29);
        t.exports = u(function(t) {
            return !!o(t) || !!t && ("object" === (void 0 === t ? "undefined" : e(t)) && (!i(t) && (1 === t.nodeType ? !!t.length : 0 === t.length || t.length > 0 && (t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1)))));
        });
    }, function(t, n, r) {
        "use strict";
        t.exports = function(t) {
            return "[object String]" === Object.prototype.toString.call(t);
        };
    }, function(t, n, r) {
        "use strict";
        t.exports = function() {
            function t(t) {
                this.f = t;
            }
            return t.prototype["@@transducer/init"] = function() {
                throw new Error("init not implemented on XWrap");
            }, t.prototype["@@transducer/result"] = function(t) {
                return t;
            }, t.prototype["@@transducer/step"] = function(t, n) {
                return this.f(t, n);
            }, function(n) {
                return new t(n);
            };
        }();
    }, function(t, n, r) {
        "use strict";
        var e = r(6), u = r(0);
        t.exports = u(function(t, n) {
            return e(t.length, function() {
                return t.apply(n, arguments);
            });
        });
    }, function(t, n, r) {
        "use strict";
        var e = r(0), u = r(12);
        t.exports = function() {
            function t(t, n) {
                this.xf = n, this.f = t;
            }
            return t.prototype["@@transducer/init"] = u.init, t.prototype["@@transducer/result"] = u.result, 
            t.prototype["@@transducer/step"] = function(t, n) {
                return this.xf["@@transducer/step"](t, this.f(n));
            }, e(function(n, r) {
                return new t(n, r);
            });
        }();
    }, function(t, n, r) {
        "use strict";
        var e = r(6), u = r(3);
        t.exports = function t(n, r, o) {
            return function() {
                for (var i = [], c = 0, s = n, f = 0; f < r.length || c < arguments.length; ) {
                    var a;
                    f < r.length && (!u(r[f]) || c >= arguments.length) ? a = r[f] : (a = arguments[c], 
                    c += 1), i[f] = a, u(a) || (s -= 1), f += 1;
                }
                return s <= 0 ? o.apply(this, i) : e(s, t(n, i, o));
            };
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(35), u = r(0);
        t.exports = u(function(t, n) {
            return e({}, t, n);
        });
    }, function(t, n, r) {
        "use strict";
        var e = r(36);
        t.exports = "function" == typeof Object.assign ? Object.assign : e;
    }, function(t, n, r) {
        "use strict";
        var e = r(2);
        t.exports = function(t) {
            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(t), r = 1, u = arguments.length; r < u; ) {
                var o = arguments[r];
                if (null != o) for (var i in o) e(i, o) && (n[i] = o[i]);
                r += 1;
            }
            return n;
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(38), u = r(0), o = r(40), i = r(42);
        t.exports = u(function(t, n) {
            return i(o(e)(t), n);
        });
    }, function(t, n, r) {
        "use strict";
        var e = r(39);
        t.exports = function(t, n) {
            return e(n, t, 0) >= 0;
        };
    }, function(t, n, r) {
        "use strict";
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, u = r(9);
        t.exports = function(t, n, r) {
            var o, i;
            if ("function" == typeof t.indexOf) switch (void 0 === n ? "undefined" : e(n)) {
              case "number":
                if (0 === n) {
                    for (o = 1 / n; r < t.length; ) {
                        if (0 === (i = t[r]) && 1 / i === o) return r;
                        r += 1;
                    }
                    return -1;
                }
                if (n !== n) {
                    for (;r < t.length; ) {
                        if ("number" == typeof (i = t[r]) && i !== i) return r;
                        r += 1;
                    }
                    return -1;
                }
                return t.indexOf(n, r);

              case "string":
              case "boolean":
              case "function":
              case "undefined":
                return t.indexOf(n, r);

              case "object":
                if (null === n) return t.indexOf(n, r);
            }
            for (;r < t.length; ) {
                if (u(t[r], n)) return r;
                r += 1;
            }
            return -1;
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(1), u = r(41);
        t.exports = e(function(t) {
            return u(function(n, r) {
                var e = Array.prototype.slice.call(arguments, 0);
                return e[0] = r, e[1] = n, t.apply(this, e);
            });
        });
    }, function(t, n, r) {
        "use strict";
        var e = r(1), u = r(13);
        t.exports = e(function(t) {
            return u(t.length, t);
        });
    }, function(t, n, r) {
        "use strict";
        var e = r(43), u = r(0), o = r(44);
        t.exports = u(function(t, n) {
            return o(e(t), n);
        });
    }, function(t, n, r) {
        "use strict";
        t.exports = function(t) {
            return function() {
                return !t.apply(this, arguments);
            };
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(0), u = r(10), o = r(45), i = r(46), c = r(11), s = r(47), f = r(5);
        t.exports = e(u([ "filter" ], s, function(t, n) {
            return i(n) ? c(function(r, e) {
                return t(n[e]) && (r[e] = n[e]), r;
            }, {}, f(n)) : o(t, n);
        }));
    }, function(t, n, r) {
        "use strict";
        t.exports = function(t, n) {
            for (var r = 0, e = n.length, u = []; r < e; ) t(n[r]) && (u[u.length] = n[r]), 
            r += 1;
            return u;
        };
    }, function(t, n, r) {
        "use strict";
        t.exports = function(t) {
            return "[object Object]" === Object.prototype.toString.call(t);
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(0), u = r(12);
        t.exports = function() {
            function t(t, n) {
                this.xf = n, this.f = t;
            }
            return t.prototype["@@transducer/init"] = u.init, t.prototype["@@transducer/result"] = u.result, 
            t.prototype["@@transducer/step"] = function(t, n) {
                return this.f(n) ? this.xf["@@transducer/step"](t, n) : t;
            }, e(function(n, r) {
                return new t(n, r);
            });
        }();
    }, function(t, n, r) {
        "use strict";
        var e = r(1), u = r(49);
        t.exports = e(u);
    }, function(t, n, r) {
        "use strict";
        t.exports = function(t) {
            return t;
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(0);
        t.exports = e(function(t, n) {
            return null != n && n.constructor === t || n instanceof t;
        });
    }, function(t, n, r) {
        "use strict";
        var e = r(0);
        t.exports = e(function(t, n) {
            return t.apply(this, n);
        });
    } ]);
});