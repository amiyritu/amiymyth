import { w as bt } from "./with-props-drQTeSIz.js";
import {
  r as _t,
  x as wt,
  w as xt,
  i as nt,
  j as z,
  N as jt
} from "./chunk-7R3XDUXW-BHIEIWN9.js";
import { c as Et, B as Ot, I as St } from "./index-DZJQCNLv.js";
import { L as Tt } from "./logo-CZee6gEJ.js";
import { g as At } from "./meta-CzSvdXGV.js";
import "./stegaClean-YpGXIuvF.js";
import "./image-url.umd-DV0ObBZQ.js";
var pt = { exports: {} };
(function (H, J) {
  (function (U, I) {
    H.exports = I(_t);
  })(typeof self < "u" ? self : wt, (U) =>
    (() => {
      var I = {
          7403: (e, o, t) => {
            t.d(o, { default: () => W });
            var r = t(4087),
              s = t.n(r);
            const a = function (x) {
                return new RegExp(/<[a-z][\s\S]*>/i).test(x);
              },
              n = function (x, h) {
                return Math.floor(Math.random() * (h - x + 1)) + x;
              };
            var u = "TYPE_CHARACTER",
              c = "REMOVE_CHARACTER",
              p = "REMOVE_ALL",
              f = "REMOVE_LAST_VISIBLE_NODE",
              l = "PAUSE_FOR",
              d = "CALL_FUNCTION",
              y = "ADD_HTML_TAG_ELEMENT",
              v = "CHANGE_DELETE_SPEED",
              b = "CHANGE_DELAY",
              _ = "CHANGE_CURSOR",
              E = "PASTE_STRING",
              T = "HTML_TAG";
            function O(x) {
              return (
                (O =
                  typeof Symbol == "function" &&
                  typeof Symbol.iterator == "symbol"
                    ? function (h) {
                        return typeof h;
                      }
                    : function (h) {
                        return h &&
                          typeof Symbol == "function" &&
                          h.constructor === Symbol &&
                          h !== Symbol.prototype
                          ? "symbol"
                          : typeof h;
                      }),
                O(x)
              );
            }
            function m(x, h) {
              var S = Object.keys(x);
              if (Object.getOwnPropertySymbols) {
                var j = Object.getOwnPropertySymbols(x);
                (h &&
                  (j = j.filter(function (Q) {
                    return Object.getOwnPropertyDescriptor(x, Q).enumerable;
                  })),
                  S.push.apply(S, j));
              }
              return S;
            }
            function w(x) {
              for (var h = 1; h < arguments.length; h++) {
                var S = arguments[h] != null ? arguments[h] : {};
                h % 2
                  ? m(Object(S), !0).forEach(function (j) {
                      A(x, j, S[j]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        x,
                        Object.getOwnPropertyDescriptors(S)
                      )
                    : m(Object(S)).forEach(function (j) {
                        Object.defineProperty(
                          x,
                          j,
                          Object.getOwnPropertyDescriptor(S, j)
                        );
                      });
              }
              return x;
            }
            function N(x) {
              return (
                (function (h) {
                  if (Array.isArray(h)) return C(h);
                })(x) ||
                (function (h) {
                  if (
                    (typeof Symbol < "u" && h[Symbol.iterator] != null) ||
                    h["@@iterator"] != null
                  )
                    return Array.from(h);
                })(x) ||
                (function (h, S) {
                  if (h) {
                    if (typeof h == "string") return C(h, S);
                    var j = Object.prototype.toString.call(h).slice(8, -1);
                    return (
                      j === "Object" &&
                        h.constructor &&
                        (j = h.constructor.name),
                      j === "Map" || j === "Set"
                        ? Array.from(h)
                        : j === "Arguments" ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)
                          ? C(h, S)
                          : void 0
                    );
                  }
                })(x) ||
                (function () {
                  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function C(x, h) {
              (h == null || h > x.length) && (h = x.length);
              for (var S = 0, j = new Array(h); S < h; S++) j[S] = x[S];
              return j;
            }
            function P(x, h) {
              for (var S = 0; S < h.length; S++) {
                var j = h[S];
                ((j.enumerable = j.enumerable || !1),
                  (j.configurable = !0),
                  "value" in j && (j.writable = !0),
                  Object.defineProperty(x, B(j.key), j));
              }
            }
            function A(x, h, S) {
              return (
                (h = B(h)) in x
                  ? Object.defineProperty(x, h, {
                      value: S,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (x[h] = S),
                x
              );
            }
            function B(x) {
              var h = (function (S, j) {
                if (O(S) !== "object" || S === null) return S;
                var Q = S[Symbol.toPrimitive];
                if (Q !== void 0) {
                  var i = Q.call(S, "string");
                  if (O(i) !== "object") return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(S);
              })(x);
              return O(h) === "symbol" ? h : String(h);
            }
            const W = (function () {
              function x(j, Q) {
                var i = this;
                if (
                  ((function (g, k) {
                    if (!(g instanceof k))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, x),
                  A(this, "state", {
                    cursorAnimation: null,
                    lastFrameTime: null,
                    pauseUntil: null,
                    eventQueue: [],
                    eventLoop: null,
                    eventLoopPaused: !1,
                    reverseCalledEvents: [],
                    calledEvents: [],
                    visibleNodes: [],
                    initialOptions: null,
                    elements: {
                      container: null,
                      wrapper: document.createElement("span"),
                      cursor: document.createElement("span")
                    }
                  }),
                  A(this, "options", {
                    strings: null,
                    cursor: "|",
                    delay: "natural",
                    pauseFor: 1500,
                    deleteSpeed: "natural",
                    loop: !1,
                    autoStart: !1,
                    devMode: !1,
                    skipAddStyles: !1,
                    wrapperClassName: "Typewriter__wrapper",
                    cursorClassName: "Typewriter__cursor",
                    stringSplitter: null,
                    onCreateTextNode: null,
                    onRemoveNode: null
                  }),
                  A(this, "setupWrapperElement", function () {
                    i.state.elements.container &&
                      ((i.state.elements.wrapper.className =
                        i.options.wrapperClassName),
                      (i.state.elements.cursor.className =
                        i.options.cursorClassName),
                      (i.state.elements.cursor.innerHTML = i.options.cursor),
                      (i.state.elements.container.innerHTML = ""),
                      i.state.elements.container.appendChild(
                        i.state.elements.wrapper
                      ),
                      i.state.elements.container.appendChild(
                        i.state.elements.cursor
                      ));
                  }),
                  A(this, "start", function () {
                    return (
                      (i.state.eventLoopPaused = !1),
                      i.runEventLoop(),
                      i
                    );
                  }),
                  A(this, "pause", function () {
                    return ((i.state.eventLoopPaused = !0), i);
                  }),
                  A(this, "stop", function () {
                    return (
                      i.state.eventLoop &&
                        ((0, r.cancel)(i.state.eventLoop),
                        (i.state.eventLoop = null)),
                      i
                    );
                  }),
                  A(this, "pauseFor", function (g) {
                    return (i.addEventToQueue(l, { ms: g }), i);
                  }),
                  A(this, "typeOutAllStrings", function () {
                    return typeof i.options.strings == "string"
                      ? (i
                          .typeString(i.options.strings)
                          .pauseFor(i.options.pauseFor),
                        i)
                      : (i.options.strings.forEach(function (g) {
                          i.typeString(g)
                            .pauseFor(i.options.pauseFor)
                            .deleteAll(i.options.deleteSpeed);
                        }),
                        i);
                  }),
                  A(this, "typeString", function (g) {
                    var k =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    if (a(g)) return i.typeOutHTMLString(g, k);
                    if (g) {
                      var M = (i.options || {}).stringSplitter,
                        D = typeof M == "function" ? M(g) : g.split("");
                      i.typeCharacters(D, k);
                    }
                    return i;
                  }),
                  A(this, "pasteString", function (g) {
                    var k =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    return a(g)
                      ? i.typeOutHTMLString(g, k, !0)
                      : (g && i.addEventToQueue(E, { character: g, node: k }),
                        i);
                  }),
                  A(this, "typeOutHTMLString", function (g) {
                    var k =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : null,
                      M = arguments.length > 2 ? arguments[2] : void 0,
                      D = (function (V) {
                        var Y = document.createElement("div");
                        return ((Y.innerHTML = V), Y.childNodes);
                      })(g);
                    if (D.length > 0)
                      for (var L = 0; L < D.length; L++) {
                        var R = D[L],
                          $ = R.innerHTML;
                        R && R.nodeType !== 3
                          ? ((R.innerHTML = ""),
                            i.addEventToQueue(y, { node: R, parentNode: k }),
                            M ? i.pasteString($, R) : i.typeString($, R))
                          : R.textContent &&
                            (M
                              ? i.pasteString(R.textContent, k)
                              : i.typeString(R.textContent, k));
                      }
                    return i;
                  }),
                  A(this, "deleteAll", function () {
                    var g =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : "natural";
                    return (i.addEventToQueue(p, { speed: g }), i);
                  }),
                  A(this, "changeDeleteSpeed", function (g) {
                    if (!g) throw new Error("Must provide new delete speed");
                    return (i.addEventToQueue(v, { speed: g }), i);
                  }),
                  A(this, "changeDelay", function (g) {
                    if (!g) throw new Error("Must provide new delay");
                    return (i.addEventToQueue(b, { delay: g }), i);
                  }),
                  A(this, "changeCursor", function (g) {
                    if (!g) throw new Error("Must provide new cursor");
                    return (i.addEventToQueue(_, { cursor: g }), i);
                  }),
                  A(this, "deleteChars", function (g) {
                    if (!g)
                      throw new Error(
                        "Must provide amount of characters to delete"
                      );
                    for (var k = 0; k < g; k++) i.addEventToQueue(c);
                    return i;
                  }),
                  A(this, "callFunction", function (g, k) {
                    if (!g || typeof g != "function")
                      throw new Error("Callback must be a function");
                    return (i.addEventToQueue(d, { cb: g, thisArg: k }), i);
                  }),
                  A(this, "typeCharacters", function (g) {
                    var k =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    if (!g || !Array.isArray(g))
                      throw new Error("Characters must be an array");
                    return (
                      g.forEach(function (M) {
                        i.addEventToQueue(u, { character: M, node: k });
                      }),
                      i
                    );
                  }),
                  A(this, "removeCharacters", function (g) {
                    if (!g || !Array.isArray(g))
                      throw new Error("Characters must be an array");
                    return (
                      g.forEach(function () {
                        i.addEventToQueue(c);
                      }),
                      i
                    );
                  }),
                  A(this, "addEventToQueue", function (g, k) {
                    var M =
                      arguments.length > 2 &&
                      arguments[2] !== void 0 &&
                      arguments[2];
                    return i.addEventToStateProperty(g, k, M, "eventQueue");
                  }),
                  A(this, "addReverseCalledEvent", function (g, k) {
                    var M =
                      arguments.length > 2 &&
                      arguments[2] !== void 0 &&
                      arguments[2];
                    return i.options.loop
                      ? i.addEventToStateProperty(
                          g,
                          k,
                          M,
                          "reverseCalledEvents"
                        )
                      : i;
                  }),
                  A(this, "addEventToStateProperty", function (g, k) {
                    var M =
                        arguments.length > 2 &&
                        arguments[2] !== void 0 &&
                        arguments[2],
                      D = arguments.length > 3 ? arguments[3] : void 0,
                      L = { eventName: g, eventArgs: k || {} };
                    return (
                      (i.state[D] = M
                        ? [L].concat(N(i.state[D]))
                        : [].concat(N(i.state[D]), [L])),
                      i
                    );
                  }),
                  A(this, "runEventLoop", function () {
                    i.state.lastFrameTime ||
                      (i.state.lastFrameTime = Date.now());
                    var g = Date.now(),
                      k = g - i.state.lastFrameTime;
                    if (!i.state.eventQueue.length) {
                      if (!i.options.loop) return;
                      ((i.state.eventQueue = N(i.state.calledEvents)),
                        (i.state.calledEvents = []),
                        (i.options = w({}, i.state.initialOptions)));
                    }
                    if (
                      ((i.state.eventLoop = s()(i.runEventLoop)),
                      !i.state.eventLoopPaused)
                    ) {
                      if (i.state.pauseUntil) {
                        if (g < i.state.pauseUntil) return;
                        i.state.pauseUntil = null;
                      }
                      var M,
                        D = N(i.state.eventQueue),
                        L = D.shift();
                      if (
                        !(
                          k <=
                          (M =
                            L.eventName === f || L.eventName === c
                              ? i.options.deleteSpeed === "natural"
                                ? n(40, 80)
                                : i.options.deleteSpeed
                              : i.options.delay === "natural"
                                ? n(120, 160)
                                : i.options.delay)
                        )
                      ) {
                        var R = L.eventName,
                          $ = L.eventArgs;
                        switch (
                          (i.logInDevMode({
                            currentEvent: L,
                            state: i.state,
                            delay: M
                          }),
                          R)
                        ) {
                          case E:
                          case u:
                            var V = $.character,
                              Y = $.node,
                              st = document.createTextNode(V),
                              q = st;
                            (i.options.onCreateTextNode &&
                              typeof i.options.onCreateTextNode == "function" &&
                              (q = i.options.onCreateTextNode(V, st)),
                              q &&
                                (Y
                                  ? Y.appendChild(q)
                                  : i.state.elements.wrapper.appendChild(q)),
                              (i.state.visibleNodes = [].concat(
                                N(i.state.visibleNodes),
                                [{ type: "TEXT_NODE", character: V, node: q }]
                              )));
                            break;
                          case c:
                            D.unshift({
                              eventName: f,
                              eventArgs: { removingCharacterNode: !0 }
                            });
                            break;
                          case l:
                            var lt = L.eventArgs.ms;
                            i.state.pauseUntil = Date.now() + parseInt(lt);
                            break;
                          case d:
                            var it = L.eventArgs,
                              ft = it.cb,
                              dt = it.thisArg;
                            ft.call(dt, { elements: i.state.elements });
                            break;
                          case y:
                            var ut = L.eventArgs,
                              Z = ut.node,
                              tt = ut.parentNode;
                            (tt
                              ? tt.appendChild(Z)
                              : i.state.elements.wrapper.appendChild(Z),
                              (i.state.visibleNodes = [].concat(
                                N(i.state.visibleNodes),
                                [
                                  {
                                    type: T,
                                    node: Z,
                                    parentNode: tt || i.state.elements.wrapper
                                  }
                                ]
                              )));
                            break;
                          case p:
                            var vt = i.state.visibleNodes,
                              et = $.speed,
                              X = [];
                            et &&
                              X.push({
                                eventName: v,
                                eventArgs: { speed: et, temp: !0 }
                              });
                            for (var ct = 0, ht = vt.length; ct < ht; ct++)
                              X.push({
                                eventName: f,
                                eventArgs: { removingCharacterNode: !1 }
                              });
                            (et &&
                              X.push({
                                eventName: v,
                                eventArgs: {
                                  speed: i.options.deleteSpeed,
                                  temp: !0
                                }
                              }),
                              D.unshift.apply(D, X));
                            break;
                          case f:
                            var yt = L.eventArgs.removingCharacterNode;
                            if (i.state.visibleNodes.length) {
                              var rt = i.state.visibleNodes.pop(),
                                mt = rt.type,
                                K = rt.node,
                                gt = rt.character;
                              (i.options.onRemoveNode &&
                                typeof i.options.onRemoveNode == "function" &&
                                i.options.onRemoveNode({
                                  node: K,
                                  character: gt
                                }),
                                K && K.parentNode.removeChild(K),
                                mt === T &&
                                  yt &&
                                  D.unshift({ eventName: f, eventArgs: {} }));
                            }
                            break;
                          case v:
                            i.options.deleteSpeed = L.eventArgs.speed;
                            break;
                          case b:
                            i.options.delay = L.eventArgs.delay;
                            break;
                          case _:
                            ((i.options.cursor = L.eventArgs.cursor),
                              (i.state.elements.cursor.innerHTML =
                                L.eventArgs.cursor));
                        }
                        (i.options.loop &&
                          (L.eventName === f ||
                            (L.eventArgs && L.eventArgs.temp) ||
                            (i.state.calledEvents = [].concat(
                              N(i.state.calledEvents),
                              [L]
                            ))),
                          (i.state.eventQueue = D),
                          (i.state.lastFrameTime = g));
                      }
                    }
                  }),
                  j)
                )
                  if (typeof j == "string") {
                    var at = document.querySelector(j);
                    if (!at)
                      throw new Error("Could not find container element");
                    this.state.elements.container = at;
                  } else this.state.elements.container = j;
                (Q && (this.options = w(w({}, this.options), Q)),
                  (this.state.initialOptions = w({}, this.options)),
                  this.init());
              }
              var h, S;
              return (
                (h = x),
                (S = [
                  {
                    key: "init",
                    value: function () {
                      var j, Q;
                      (this.setupWrapperElement(),
                        this.addEventToQueue(
                          _,
                          { cursor: this.options.cursor },
                          !0
                        ),
                        this.addEventToQueue(p, null, !0),
                        !window ||
                          window.___TYPEWRITER_JS_STYLES_ADDED___ ||
                          this.options.skipAddStyles ||
                          ((j =
                            ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),
                          (Q = document.createElement("style")).appendChild(
                            document.createTextNode(j)
                          ),
                          document.head.appendChild(Q),
                          (window.___TYPEWRITER_JS_STYLES_ADDED___ = !0)),
                        this.options.autoStart === !0 &&
                          this.options.strings &&
                          this.typeOutAllStrings().start());
                    }
                  },
                  {
                    key: "logInDevMode",
                    value: function (j) {
                      this.options.devMode && console.log(j);
                    }
                  }
                ]) && P(h.prototype, S),
                Object.defineProperty(h, "prototype", { writable: !1 }),
                x
              );
            })();
          },
          8552: (e, o, t) => {
            var r = t(852)(t(5639), "DataView");
            e.exports = r;
          },
          1989: (e, o, t) => {
            var r = t(1789),
              s = t(401),
              a = t(7667),
              n = t(1327),
              u = t(1866);
            function c(p) {
              var f = -1,
                l = p == null ? 0 : p.length;
              for (this.clear(); ++f < l; ) {
                var d = p[f];
                this.set(d[0], d[1]);
              }
            }
            ((c.prototype.clear = r),
              (c.prototype.delete = s),
              (c.prototype.get = a),
              (c.prototype.has = n),
              (c.prototype.set = u),
              (e.exports = c));
          },
          8407: (e, o, t) => {
            var r = t(7040),
              s = t(4125),
              a = t(2117),
              n = t(7518),
              u = t(4705);
            function c(p) {
              var f = -1,
                l = p == null ? 0 : p.length;
              for (this.clear(); ++f < l; ) {
                var d = p[f];
                this.set(d[0], d[1]);
              }
            }
            ((c.prototype.clear = r),
              (c.prototype.delete = s),
              (c.prototype.get = a),
              (c.prototype.has = n),
              (c.prototype.set = u),
              (e.exports = c));
          },
          7071: (e, o, t) => {
            var r = t(852)(t(5639), "Map");
            e.exports = r;
          },
          3369: (e, o, t) => {
            var r = t(4785),
              s = t(1285),
              a = t(6e3),
              n = t(9916),
              u = t(5265);
            function c(p) {
              var f = -1,
                l = p == null ? 0 : p.length;
              for (this.clear(); ++f < l; ) {
                var d = p[f];
                this.set(d[0], d[1]);
              }
            }
            ((c.prototype.clear = r),
              (c.prototype.delete = s),
              (c.prototype.get = a),
              (c.prototype.has = n),
              (c.prototype.set = u),
              (e.exports = c));
          },
          3818: (e, o, t) => {
            var r = t(852)(t(5639), "Promise");
            e.exports = r;
          },
          8525: (e, o, t) => {
            var r = t(852)(t(5639), "Set");
            e.exports = r;
          },
          8668: (e, o, t) => {
            var r = t(3369),
              s = t(619),
              a = t(2385);
            function n(u) {
              var c = -1,
                p = u == null ? 0 : u.length;
              for (this.__data__ = new r(); ++c < p; ) this.add(u[c]);
            }
            ((n.prototype.add = n.prototype.push = s),
              (n.prototype.has = a),
              (e.exports = n));
          },
          6384: (e, o, t) => {
            var r = t(8407),
              s = t(7465),
              a = t(3779),
              n = t(7599),
              u = t(4758),
              c = t(4309);
            function p(f) {
              var l = (this.__data__ = new r(f));
              this.size = l.size;
            }
            ((p.prototype.clear = s),
              (p.prototype.delete = a),
              (p.prototype.get = n),
              (p.prototype.has = u),
              (p.prototype.set = c),
              (e.exports = p));
          },
          2705: (e, o, t) => {
            var r = t(5639).Symbol;
            e.exports = r;
          },
          1149: (e, o, t) => {
            var r = t(5639).Uint8Array;
            e.exports = r;
          },
          577: (e, o, t) => {
            var r = t(852)(t(5639), "WeakMap");
            e.exports = r;
          },
          4963: (e) => {
            e.exports = function (o, t) {
              for (
                var r = -1, s = o == null ? 0 : o.length, a = 0, n = [];
                ++r < s;
              ) {
                var u = o[r];
                t(u, r, o) && (n[a++] = u);
              }
              return n;
            };
          },
          4636: (e, o, t) => {
            var r = t(2545),
              s = t(5694),
              a = t(1469),
              n = t(4144),
              u = t(5776),
              c = t(6719),
              p = Object.prototype.hasOwnProperty;
            e.exports = function (f, l) {
              var d = a(f),
                y = !d && s(f),
                v = !d && !y && n(f),
                b = !d && !y && !v && c(f),
                _ = d || y || v || b,
                E = _ ? r(f.length, String) : [],
                T = E.length;
              for (var O in f)
                (!l && !p.call(f, O)) ||
                  (_ &&
                    (O == "length" ||
                      (v && (O == "offset" || O == "parent")) ||
                      (b &&
                        (O == "buffer" ||
                          O == "byteLength" ||
                          O == "byteOffset")) ||
                      u(O, T))) ||
                  E.push(O);
              return E;
            };
          },
          2488: (e) => {
            e.exports = function (o, t) {
              for (var r = -1, s = t.length, a = o.length; ++r < s; )
                o[a + r] = t[r];
              return o;
            };
          },
          2908: (e) => {
            e.exports = function (o, t) {
              for (var r = -1, s = o == null ? 0 : o.length; ++r < s; )
                if (t(o[r], r, o)) return !0;
              return !1;
            };
          },
          8470: (e, o, t) => {
            var r = t(7813);
            e.exports = function (s, a) {
              for (var n = s.length; n--; ) if (r(s[n][0], a)) return n;
              return -1;
            };
          },
          8866: (e, o, t) => {
            var r = t(2488),
              s = t(1469);
            e.exports = function (a, n, u) {
              var c = n(a);
              return s(a) ? c : r(c, u(a));
            };
          },
          4239: (e, o, t) => {
            var r = t(2705),
              s = t(9607),
              a = t(2333),
              n = r ? r.toStringTag : void 0;
            e.exports = function (u) {
              return u == null
                ? u === void 0
                  ? "[object Undefined]"
                  : "[object Null]"
                : n && n in Object(u)
                  ? s(u)
                  : a(u);
            };
          },
          9454: (e, o, t) => {
            var r = t(4239),
              s = t(7005);
            e.exports = function (a) {
              return s(a) && r(a) == "[object Arguments]";
            };
          },
          939: (e, o, t) => {
            var r = t(2492),
              s = t(7005);
            e.exports = function a(n, u, c, p, f) {
              return (
                n === u ||
                (n == null || u == null || (!s(n) && !s(u))
                  ? n != n && u != u
                  : r(n, u, c, p, a, f))
              );
            };
          },
          2492: (e, o, t) => {
            var r = t(6384),
              s = t(7114),
              a = t(8351),
              n = t(6096),
              u = t(4160),
              c = t(1469),
              p = t(4144),
              f = t(6719),
              l = "[object Arguments]",
              d = "[object Array]",
              y = "[object Object]",
              v = Object.prototype.hasOwnProperty;
            e.exports = function (b, _, E, T, O, m) {
              var w = c(b),
                N = c(_),
                C = w ? d : u(b),
                P = N ? d : u(_),
                A = (C = C == l ? y : C) == y,
                B = (P = P == l ? y : P) == y,
                W = C == P;
              if (W && p(b)) {
                if (!p(_)) return !1;
                ((w = !0), (A = !1));
              }
              if (W && !A)
                return (
                  m || (m = new r()),
                  w || f(b) ? s(b, _, E, T, O, m) : a(b, _, C, E, T, O, m)
                );
              if (!(1 & E)) {
                var x = A && v.call(b, "__wrapped__"),
                  h = B && v.call(_, "__wrapped__");
                if (x || h) {
                  var S = x ? b.value() : b,
                    j = h ? _.value() : _;
                  return (m || (m = new r()), O(S, j, E, T, m));
                }
              }
              return !!W && (m || (m = new r()), n(b, _, E, T, O, m));
            };
          },
          8458: (e, o, t) => {
            var r = t(3560),
              s = t(5346),
              a = t(3218),
              n = t(346),
              u = /^\[object .+?Constructor\]$/,
              c = Function.prototype,
              p = Object.prototype,
              f = c.toString,
              l = p.hasOwnProperty,
              d = RegExp(
                "^" +
                  f
                    .call(l)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              );
            e.exports = function (y) {
              return !(!a(y) || s(y)) && (r(y) ? d : u).test(n(y));
            };
          },
          8749: (e, o, t) => {
            var r = t(4239),
              s = t(1780),
              a = t(7005),
              n = {};
            ((n["[object Float32Array]"] =
              n["[object Float64Array]"] =
              n["[object Int8Array]"] =
              n["[object Int16Array]"] =
              n["[object Int32Array]"] =
              n["[object Uint8Array]"] =
              n["[object Uint8ClampedArray]"] =
              n["[object Uint16Array]"] =
              n["[object Uint32Array]"] =
                !0),
              (n["[object Arguments]"] =
                n["[object Array]"] =
                n["[object ArrayBuffer]"] =
                n["[object Boolean]"] =
                n["[object DataView]"] =
                n["[object Date]"] =
                n["[object Error]"] =
                n["[object Function]"] =
                n["[object Map]"] =
                n["[object Number]"] =
                n["[object Object]"] =
                n["[object RegExp]"] =
                n["[object Set]"] =
                n["[object String]"] =
                n["[object WeakMap]"] =
                  !1),
              (e.exports = function (u) {
                return a(u) && s(u.length) && !!n[r(u)];
              }));
          },
          280: (e, o, t) => {
            var r = t(5726),
              s = t(6916),
              a = Object.prototype.hasOwnProperty;
            e.exports = function (n) {
              if (!r(n)) return s(n);
              var u = [];
              for (var c in Object(n))
                a.call(n, c) && c != "constructor" && u.push(c);
              return u;
            };
          },
          2545: (e) => {
            e.exports = function (o, t) {
              for (var r = -1, s = Array(o); ++r < o; ) s[r] = t(r);
              return s;
            };
          },
          1717: (e) => {
            e.exports = function (o) {
              return function (t) {
                return o(t);
              };
            };
          },
          4757: (e) => {
            e.exports = function (o, t) {
              return o.has(t);
            };
          },
          4429: (e, o, t) => {
            var r = t(5639)["__core-js_shared__"];
            e.exports = r;
          },
          7114: (e, o, t) => {
            var r = t(8668),
              s = t(2908),
              a = t(4757);
            e.exports = function (n, u, c, p, f, l) {
              var d = 1 & c,
                y = n.length,
                v = u.length;
              if (y != v && !(d && v > y)) return !1;
              var b = l.get(n),
                _ = l.get(u);
              if (b && _) return b == u && _ == n;
              var E = -1,
                T = !0,
                O = 2 & c ? new r() : void 0;
              for (l.set(n, u), l.set(u, n); ++E < y; ) {
                var m = n[E],
                  w = u[E];
                if (p) var N = d ? p(w, m, E, u, n, l) : p(m, w, E, n, u, l);
                if (N !== void 0) {
                  if (N) continue;
                  T = !1;
                  break;
                }
                if (O) {
                  if (
                    !s(u, function (C, P) {
                      if (!a(O, P) && (m === C || f(m, C, c, p, l)))
                        return O.push(P);
                    })
                  ) {
                    T = !1;
                    break;
                  }
                } else if (m !== w && !f(m, w, c, p, l)) {
                  T = !1;
                  break;
                }
              }
              return (l.delete(n), l.delete(u), T);
            };
          },
          8351: (e, o, t) => {
            var r = t(2705),
              s = t(1149),
              a = t(7813),
              n = t(7114),
              u = t(8776),
              c = t(1814),
              p = r ? r.prototype : void 0,
              f = p ? p.valueOf : void 0;
            e.exports = function (l, d, y, v, b, _, E) {
              switch (y) {
                case "[object DataView]":
                  if (
                    l.byteLength != d.byteLength ||
                    l.byteOffset != d.byteOffset
                  )
                    return !1;
                  ((l = l.buffer), (d = d.buffer));
                case "[object ArrayBuffer]":
                  return !(
                    l.byteLength != d.byteLength || !_(new s(l), new s(d))
                  );
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                  return a(+l, +d);
                case "[object Error]":
                  return l.name == d.name && l.message == d.message;
                case "[object RegExp]":
                case "[object String]":
                  return l == d + "";
                case "[object Map]":
                  var T = u;
                case "[object Set]":
                  var O = 1 & v;
                  if ((T || (T = c), l.size != d.size && !O)) return !1;
                  var m = E.get(l);
                  if (m) return m == d;
                  ((v |= 2), E.set(l, d));
                  var w = n(T(l), T(d), v, b, _, E);
                  return (E.delete(l), w);
                case "[object Symbol]":
                  if (f) return f.call(l) == f.call(d);
              }
              return !1;
            };
          },
          6096: (e, o, t) => {
            var r = t(8234),
              s = Object.prototype.hasOwnProperty;
            e.exports = function (a, n, u, c, p, f) {
              var l = 1 & u,
                d = r(a),
                y = d.length;
              if (y != r(n).length && !l) return !1;
              for (var v = y; v--; ) {
                var b = d[v];
                if (!(l ? b in n : s.call(n, b))) return !1;
              }
              var _ = f.get(a),
                E = f.get(n);
              if (_ && E) return _ == n && E == a;
              var T = !0;
              (f.set(a, n), f.set(n, a));
              for (var O = l; ++v < y; ) {
                var m = a[(b = d[v])],
                  w = n[b];
                if (c) var N = l ? c(w, m, b, n, a, f) : c(m, w, b, a, n, f);
                if (!(N === void 0 ? m === w || p(m, w, u, c, f) : N)) {
                  T = !1;
                  break;
                }
                O || (O = b == "constructor");
              }
              if (T && !O) {
                var C = a.constructor,
                  P = n.constructor;
                C == P ||
                  !("constructor" in a) ||
                  !("constructor" in n) ||
                  (typeof C == "function" &&
                    C instanceof C &&
                    typeof P == "function" &&
                    P instanceof P) ||
                  (T = !1);
              }
              return (f.delete(a), f.delete(n), T);
            };
          },
          1957: (e, o, t) => {
            var r =
              typeof t.g == "object" && t.g && t.g.Object === Object && t.g;
            e.exports = r;
          },
          8234: (e, o, t) => {
            var r = t(8866),
              s = t(9551),
              a = t(3674);
            e.exports = function (n) {
              return r(n, a, s);
            };
          },
          5050: (e, o, t) => {
            var r = t(7019);
            e.exports = function (s, a) {
              var n = s.__data__;
              return r(a) ? n[typeof a == "string" ? "string" : "hash"] : n.map;
            };
          },
          852: (e, o, t) => {
            var r = t(8458),
              s = t(7801);
            e.exports = function (a, n) {
              var u = s(a, n);
              return r(u) ? u : void 0;
            };
          },
          9607: (e, o, t) => {
            var r = t(2705),
              s = Object.prototype,
              a = s.hasOwnProperty,
              n = s.toString,
              u = r ? r.toStringTag : void 0;
            e.exports = function (c) {
              var p = a.call(c, u),
                f = c[u];
              try {
                c[u] = void 0;
                var l = !0;
              } catch {}
              var d = n.call(c);
              return (l && (p ? (c[u] = f) : delete c[u]), d);
            };
          },
          9551: (e, o, t) => {
            var r = t(4963),
              s = t(479),
              a = Object.prototype.propertyIsEnumerable,
              n = Object.getOwnPropertySymbols,
              u = n
                ? function (c) {
                    return c == null
                      ? []
                      : ((c = Object(c)),
                        r(n(c), function (p) {
                          return a.call(c, p);
                        }));
                  }
                : s;
            e.exports = u;
          },
          4160: (e, o, t) => {
            var r = t(8552),
              s = t(7071),
              a = t(3818),
              n = t(8525),
              u = t(577),
              c = t(4239),
              p = t(346),
              f = "[object Map]",
              l = "[object Promise]",
              d = "[object Set]",
              y = "[object WeakMap]",
              v = "[object DataView]",
              b = p(r),
              _ = p(s),
              E = p(a),
              T = p(n),
              O = p(u),
              m = c;
            (((r && m(new r(new ArrayBuffer(1))) != v) ||
              (s && m(new s()) != f) ||
              (a && m(a.resolve()) != l) ||
              (n && m(new n()) != d) ||
              (u && m(new u()) != y)) &&
              (m = function (w) {
                var N = c(w),
                  C = N == "[object Object]" ? w.constructor : void 0,
                  P = C ? p(C) : "";
                if (P)
                  switch (P) {
                    case b:
                      return v;
                    case _:
                      return f;
                    case E:
                      return l;
                    case T:
                      return d;
                    case O:
                      return y;
                  }
                return N;
              }),
              (e.exports = m));
          },
          7801: (e) => {
            e.exports = function (o, t) {
              return o == null ? void 0 : o[t];
            };
          },
          1789: (e, o, t) => {
            var r = t(4536);
            e.exports = function () {
              ((this.__data__ = r ? r(null) : {}), (this.size = 0));
            };
          },
          401: (e) => {
            e.exports = function (o) {
              var t = this.has(o) && delete this.__data__[o];
              return ((this.size -= t ? 1 : 0), t);
            };
          },
          7667: (e, o, t) => {
            var r = t(4536),
              s = Object.prototype.hasOwnProperty;
            e.exports = function (a) {
              var n = this.__data__;
              if (r) {
                var u = n[a];
                return u === "__lodash_hash_undefined__" ? void 0 : u;
              }
              return s.call(n, a) ? n[a] : void 0;
            };
          },
          1327: (e, o, t) => {
            var r = t(4536),
              s = Object.prototype.hasOwnProperty;
            e.exports = function (a) {
              var n = this.__data__;
              return r ? n[a] !== void 0 : s.call(n, a);
            };
          },
          1866: (e, o, t) => {
            var r = t(4536);
            e.exports = function (s, a) {
              var n = this.__data__;
              return (
                (this.size += this.has(s) ? 0 : 1),
                (n[s] = r && a === void 0 ? "__lodash_hash_undefined__" : a),
                this
              );
            };
          },
          5776: (e) => {
            var o = /^(?:0|[1-9]\d*)$/;
            e.exports = function (t, r) {
              var s = typeof t;
              return (
                !!(r = r ?? 9007199254740991) &&
                (s == "number" || (s != "symbol" && o.test(t))) &&
                t > -1 &&
                t % 1 == 0 &&
                t < r
              );
            };
          },
          7019: (e) => {
            e.exports = function (o) {
              var t = typeof o;
              return t == "string" ||
                t == "number" ||
                t == "symbol" ||
                t == "boolean"
                ? o !== "__proto__"
                : o === null;
            };
          },
          5346: (e, o, t) => {
            var r,
              s = t(4429),
              a = (r = /[^.]+$/.exec((s && s.keys && s.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + r
                : "";
            e.exports = function (n) {
              return !!a && a in n;
            };
          },
          5726: (e) => {
            var o = Object.prototype;
            e.exports = function (t) {
              var r = t && t.constructor;
              return t === ((typeof r == "function" && r.prototype) || o);
            };
          },
          7040: (e) => {
            e.exports = function () {
              ((this.__data__ = []), (this.size = 0));
            };
          },
          4125: (e, o, t) => {
            var r = t(8470),
              s = Array.prototype.splice;
            e.exports = function (a) {
              var n = this.__data__,
                u = r(n, a);
              return !(
                u < 0 ||
                (u == n.length - 1 ? n.pop() : s.call(n, u, 1), --this.size, 0)
              );
            };
          },
          2117: (e, o, t) => {
            var r = t(8470);
            e.exports = function (s) {
              var a = this.__data__,
                n = r(a, s);
              return n < 0 ? void 0 : a[n][1];
            };
          },
          7518: (e, o, t) => {
            var r = t(8470);
            e.exports = function (s) {
              return r(this.__data__, s) > -1;
            };
          },
          4705: (e, o, t) => {
            var r = t(8470);
            e.exports = function (s, a) {
              var n = this.__data__,
                u = r(n, s);
              return (
                u < 0 ? (++this.size, n.push([s, a])) : (n[u][1] = a),
                this
              );
            };
          },
          4785: (e, o, t) => {
            var r = t(1989),
              s = t(8407),
              a = t(7071);
            e.exports = function () {
              ((this.size = 0),
                (this.__data__ = {
                  hash: new r(),
                  map: new (a || s)(),
                  string: new r()
                }));
            };
          },
          1285: (e, o, t) => {
            var r = t(5050);
            e.exports = function (s) {
              var a = r(this, s).delete(s);
              return ((this.size -= a ? 1 : 0), a);
            };
          },
          6e3: (e, o, t) => {
            var r = t(5050);
            e.exports = function (s) {
              return r(this, s).get(s);
            };
          },
          9916: (e, o, t) => {
            var r = t(5050);
            e.exports = function (s) {
              return r(this, s).has(s);
            };
          },
          5265: (e, o, t) => {
            var r = t(5050);
            e.exports = function (s, a) {
              var n = r(this, s),
                u = n.size;
              return (n.set(s, a), (this.size += n.size == u ? 0 : 1), this);
            };
          },
          8776: (e) => {
            e.exports = function (o) {
              var t = -1,
                r = Array(o.size);
              return (
                o.forEach(function (s, a) {
                  r[++t] = [a, s];
                }),
                r
              );
            };
          },
          4536: (e, o, t) => {
            var r = t(852)(Object, "create");
            e.exports = r;
          },
          6916: (e, o, t) => {
            var r = t(5569)(Object.keys, Object);
            e.exports = r;
          },
          1167: (e, o, t) => {
            e = t.nmd(e);
            var r = t(1957),
              s = o && !o.nodeType && o,
              a = s && e && !e.nodeType && e,
              n = a && a.exports === s && r.process,
              u = (function () {
                try {
                  return (
                    (a && a.require && a.require("util").types) ||
                    (n && n.binding && n.binding("util"))
                  );
                } catch {}
              })();
            e.exports = u;
          },
          2333: (e) => {
            var o = Object.prototype.toString;
            e.exports = function (t) {
              return o.call(t);
            };
          },
          5569: (e) => {
            e.exports = function (o, t) {
              return function (r) {
                return o(t(r));
              };
            };
          },
          5639: (e, o, t) => {
            var r = t(1957),
              s =
                typeof self == "object" &&
                self &&
                self.Object === Object &&
                self,
              a = r || s || Function("return this")();
            e.exports = a;
          },
          619: (e) => {
            e.exports = function (o) {
              return (this.__data__.set(o, "__lodash_hash_undefined__"), this);
            };
          },
          2385: (e) => {
            e.exports = function (o) {
              return this.__data__.has(o);
            };
          },
          1814: (e) => {
            e.exports = function (o) {
              var t = -1,
                r = Array(o.size);
              return (
                o.forEach(function (s) {
                  r[++t] = s;
                }),
                r
              );
            };
          },
          7465: (e, o, t) => {
            var r = t(8407);
            e.exports = function () {
              ((this.__data__ = new r()), (this.size = 0));
            };
          },
          3779: (e) => {
            e.exports = function (o) {
              var t = this.__data__,
                r = t.delete(o);
              return ((this.size = t.size), r);
            };
          },
          7599: (e) => {
            e.exports = function (o) {
              return this.__data__.get(o);
            };
          },
          4758: (e) => {
            e.exports = function (o) {
              return this.__data__.has(o);
            };
          },
          4309: (e, o, t) => {
            var r = t(8407),
              s = t(7071),
              a = t(3369);
            e.exports = function (n, u) {
              var c = this.__data__;
              if (c instanceof r) {
                var p = c.__data__;
                if (!s || p.length < 199)
                  return (p.push([n, u]), (this.size = ++c.size), this);
                c = this.__data__ = new a(p);
              }
              return (c.set(n, u), (this.size = c.size), this);
            };
          },
          346: (e) => {
            var o = Function.prototype.toString;
            e.exports = function (t) {
              if (t != null) {
                try {
                  return o.call(t);
                } catch {}
                try {
                  return t + "";
                } catch {}
              }
              return "";
            };
          },
          7813: (e) => {
            e.exports = function (o, t) {
              return o === t || (o != o && t != t);
            };
          },
          5694: (e, o, t) => {
            var r = t(9454),
              s = t(7005),
              a = Object.prototype,
              n = a.hasOwnProperty,
              u = a.propertyIsEnumerable,
              c = r(
                (function () {
                  return arguments;
                })()
              )
                ? r
                : function (p) {
                    return s(p) && n.call(p, "callee") && !u.call(p, "callee");
                  };
            e.exports = c;
          },
          1469: (e) => {
            var o = Array.isArray;
            e.exports = o;
          },
          8612: (e, o, t) => {
            var r = t(3560),
              s = t(1780);
            e.exports = function (a) {
              return a != null && s(a.length) && !r(a);
            };
          },
          4144: (e, o, t) => {
            e = t.nmd(e);
            var r = t(5639),
              s = t(5062),
              a = o && !o.nodeType && o,
              n = a && e && !e.nodeType && e,
              u = n && n.exports === a ? r.Buffer : void 0,
              c = (u ? u.isBuffer : void 0) || s;
            e.exports = c;
          },
          8446: (e, o, t) => {
            var r = t(939);
            e.exports = function (s, a) {
              return r(s, a);
            };
          },
          3560: (e, o, t) => {
            var r = t(4239),
              s = t(3218);
            e.exports = function (a) {
              if (!s(a)) return !1;
              var n = r(a);
              return (
                n == "[object Function]" ||
                n == "[object GeneratorFunction]" ||
                n == "[object AsyncFunction]" ||
                n == "[object Proxy]"
              );
            };
          },
          1780: (e) => {
            e.exports = function (o) {
              return (
                typeof o == "number" &&
                o > -1 &&
                o % 1 == 0 &&
                o <= 9007199254740991
              );
            };
          },
          3218: (e) => {
            e.exports = function (o) {
              var t = typeof o;
              return o != null && (t == "object" || t == "function");
            };
          },
          7005: (e) => {
            e.exports = function (o) {
              return o != null && typeof o == "object";
            };
          },
          6719: (e, o, t) => {
            var r = t(8749),
              s = t(1717),
              a = t(1167),
              n = a && a.isTypedArray,
              u = n ? s(n) : r;
            e.exports = u;
          },
          3674: (e, o, t) => {
            var r = t(4636),
              s = t(280),
              a = t(8612);
            e.exports = function (n) {
              return a(n) ? r(n) : s(n);
            };
          },
          479: (e) => {
            e.exports = function () {
              return [];
            };
          },
          5062: (e) => {
            e.exports = function () {
              return !1;
            };
          },
          75: function (e) {
            (function () {
              var o, t, r, s, a, n;
              typeof performance < "u" &&
              performance !== null &&
              performance.now
                ? (e.exports = function () {
                    return performance.now();
                  })
                : typeof process < "u" && process !== null && process.hrtime
                  ? ((e.exports = function () {
                      return (o() - a) / 1e6;
                    }),
                    (t = process.hrtime),
                    (s = (o = function () {
                      var u;
                      return 1e9 * (u = t())[0] + u[1];
                    })()),
                    (n = 1e9 * process.uptime()),
                    (a = s - n))
                  : Date.now
                    ? ((e.exports = function () {
                        return Date.now() - r;
                      }),
                      (r = Date.now()))
                    : ((e.exports = function () {
                        return new Date().getTime() - r;
                      }),
                      (r = new Date().getTime()));
            }).call(this);
          },
          4087: (e, o, t) => {
            for (
              var r = t(75),
                s = typeof window > "u" ? t.g : window,
                a = ["moz", "webkit"],
                n = "AnimationFrame",
                u = s["request" + n],
                c = s["cancel" + n] || s["cancelRequest" + n],
                p = 0;
              !u && p < a.length;
              p++
            )
              ((u = s[a[p] + "Request" + n]),
                (c = s[a[p] + "Cancel" + n] || s[a[p] + "CancelRequest" + n]));
            if (!u || !c) {
              var f = 0,
                l = 0,
                d = [];
              ((u = function (y) {
                if (d.length === 0) {
                  var v = r(),
                    b = Math.max(0, 16.666666666666668 - (v - f));
                  ((f = b + v),
                    setTimeout(function () {
                      var _ = d.slice(0);
                      d.length = 0;
                      for (var E = 0; E < _.length; E++)
                        if (!_[E].cancelled)
                          try {
                            _[E].callback(f);
                          } catch (T) {
                            setTimeout(function () {
                              throw T;
                            }, 0);
                          }
                    }, Math.round(b)));
                }
                return (d.push({ handle: ++l, callback: y, cancelled: !1 }), l);
              }),
                (c = function (y) {
                  for (var v = 0; v < d.length; v++)
                    d[v].handle === y && (d[v].cancelled = !0);
                }));
            }
            ((e.exports = function (y) {
              return u.call(s, y);
            }),
              (e.exports.cancel = function () {
                c.apply(s, arguments);
              }),
              (e.exports.polyfill = function (y) {
                (y || (y = s),
                  (y.requestAnimationFrame = u),
                  (y.cancelAnimationFrame = c));
              }));
          },
          8156: (e) => {
            e.exports = U;
          }
        },
        G = {};
      function F(e) {
        var o = G[e];
        if (o !== void 0) return o.exports;
        var t = (G[e] = { id: e, loaded: !1, exports: {} });
        return (
          I[e].call(t.exports, t, t.exports, F),
          (t.loaded = !0),
          t.exports
        );
      }
      ((F.n = (e) => {
        var o = e && e.__esModule ? () => e.default : () => e;
        return (F.d(o, { a: o }), o);
      }),
        (F.d = (e, o) => {
          for (var t in o)
            F.o(o, t) &&
              !F.o(e, t) &&
              Object.defineProperty(e, t, { enumerable: !0, get: o[t] });
        }),
        (F.g = (function () {
          if (typeof globalThis == "object") return globalThis;
          try {
            return this || new Function("return this")();
          } catch {
            if (typeof window == "object") return window;
          }
        })()),
        (F.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
        (F.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)));
      var ot = {};
      return (
        (() => {
          F.d(ot, { default: () => d });
          var e = F(8156),
            o = F.n(e),
            t = F(7403),
            r = F(8446),
            s = F.n(r);
          function a(y) {
            return (
              (a =
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? function (v) {
                      return typeof v;
                    }
                  : function (v) {
                      return v &&
                        typeof Symbol == "function" &&
                        v.constructor === Symbol &&
                        v !== Symbol.prototype
                        ? "symbol"
                        : typeof v;
                    }),
              a(y)
            );
          }
          function n(y, v) {
            for (var b = 0; b < v.length; b++) {
              var _ = v[b];
              ((_.enumerable = _.enumerable || !1),
                (_.configurable = !0),
                "value" in _ && (_.writable = !0),
                Object.defineProperty(y, f(_.key), _));
            }
          }
          function u(y, v) {
            return (
              (u = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (b, _) {
                    return ((b.__proto__ = _), b);
                  }),
              u(y, v)
            );
          }
          function c(y) {
            if (y === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return y;
          }
          function p(y) {
            return (
              (p = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (v) {
                    return v.__proto__ || Object.getPrototypeOf(v);
                  }),
              p(y)
            );
          }
          function f(y) {
            var v = (function (b, _) {
              if (a(b) !== "object" || b === null) return b;
              var E = b[Symbol.toPrimitive];
              if (E !== void 0) {
                var T = E.call(b, "string");
                if (a(T) !== "object") return T;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(b);
            })(y);
            return a(v) === "symbol" ? v : String(v);
          }
          var l = (function (y) {
            (function (m, w) {
              if (typeof w != "function" && w !== null)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              ((m.prototype = Object.create(w && w.prototype, {
                constructor: { value: m, writable: !0, configurable: !0 }
              })),
                Object.defineProperty(m, "prototype", { writable: !1 }),
                w && u(m, w));
            })(O, y);
            var v,
              b,
              _,
              E,
              T =
                ((_ = O),
                (E = (function () {
                  if (
                    typeof Reflect > "u" ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if (typeof Proxy == "function") return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      !0
                    );
                  } catch {
                    return !1;
                  }
                })()),
                function () {
                  var m,
                    w = p(_);
                  if (E) {
                    var N = p(this).constructor;
                    m = Reflect.construct(w, arguments, N);
                  } else m = w.apply(this, arguments);
                  return (function (C, P) {
                    if (P && (a(P) === "object" || typeof P == "function"))
                      return P;
                    if (P !== void 0)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined"
                      );
                    return c(C);
                  })(this, m);
                });
            function O() {
              var m, w, N, C;
              (function (W, x) {
                if (!(W instanceof x))
                  throw new TypeError("Cannot call a class as a function");
              })(this, O);
              for (
                var P = arguments.length, A = new Array(P), B = 0;
                B < P;
                B++
              )
                A[B] = arguments[B];
              return (
                (w = c((m = T.call.apply(T, [this].concat(A))))),
                (C = { instance: null }),
                (N = f((N = "state"))) in w
                  ? Object.defineProperty(w, N, {
                      value: C,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (w[N] = C),
                m
              );
            }
            return (
              (v = O),
              (b = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var m = this,
                      w = new t.default(this.typewriter, this.props.options);
                    this.setState({ instance: w }, function () {
                      var N = m.props.onInit;
                      N && N(w);
                    });
                  }
                },
                {
                  key: "componentDidUpdate",
                  value: function (m) {
                    s()(this.props.options, m.options) ||
                      this.setState({
                        instance: new t.default(
                          this.typewriter,
                          this.props.options
                        )
                      });
                  }
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.state.instance && this.state.instance.stop();
                  }
                },
                {
                  key: "render",
                  value: function () {
                    var m = this,
                      w = this.props.component;
                    return o().createElement(w, {
                      ref: function (N) {
                        return (m.typewriter = N);
                      },
                      className: "Typewriter",
                      "data-testid": "typewriter-wrapper"
                    });
                  }
                }
              ]) && n(v.prototype, b),
              Object.defineProperty(v, "prototype", { writable: !1 }),
              O
            );
          })(e.Component);
          l.defaultProps = { component: "div" };
          const d = l;
        })(),
        ot.default
      );
    })()
  );
})(pt);
var Nt = pt.exports;
const Ct = xt(Nt);
function Pt() {
  const [H, J] = nt.useState(!1);
  nt.useEffect(() => {
    J(!0);
  }, []);
  const U = nt.useRef(null),
    I = () => {
      U.current &&
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth"
        });
    };
  return z.jsxs(z.Fragment, {
    children: [
      z.jsx("div", {
        ref: U,
        className:
          "pb-120 font-mono text-body-30 vt-name-[main-content] md:pb-40",
        children: z.jsx("div", {
          "aria-label":
            "Picture a skincare miracle: Not something which smooths or plumps, But which clarifies the beauty industry. Which targets misinformation Promotes transparency And makes innovation more accessible for everyone. A solution designed Not to correct acne or redness. But myths. And in doing so, shows us all A more honest way is possible. After all, knowledge is power. And when you know things You can change them. Because the truth is the Truth should be Ordinary.",
          children:
            H &&
            z.jsx(Ct, {
              onInit: (G) => {
                G.pauseFor(500)
                  .typeString("In a world where facts can be blurred")
                  .typeString("<br />and science, often filtered,")
                  .typeString(
                    "<br /><strong>the truth can be hard to find.</strong>"
                  )
                  .typeString("<br />")
                  .pauseFor(75)
                  .typeString("<br />")
                  .pauseFor(75)
                  .typeString("So as we launch our new GF 15% Solution")
                  .callFunction(I)
                  .typeString("<br />we're taking complex scientific papers")
                  .callFunction(I)
                  .typeString("<br />and breaking them down")
                  .typeString("<br />to clarify industry myths.")
                  .typeString("<br />")
                  .pauseFor(75)
                  .typeString("<br />")
                  .pauseFor(75)
                  .callFunction(I)
                  .changeDelay(25)
                  .typeString(
                    "<strong>Because the Truth should be Ordinary.</strong>"
                  )
                  .callFunction(I)
                  .start();
              },
              options: { delay: 0 }
            })
        })
      }),
      z.jsx("div", {
        className: Et([
          "fixed bottom-0 left-0 w-full",
          "transition-opacity delay-500 duration-700 ease-out",
          "md:bottom-container-padding md:left-container-padding md:w-auto"
        ]),
        children: z.jsx(Ot, {
          asChild: !0,
          after: z.jsx(St, { hasBorder: !0, name: "caret-right" }),
          className: "w-full font-mono text-body-20 uppercase",
          children: z.jsx(jt, {
            to: "/articles",
            viewTransition: !0,
            children: "Enter"
          })
        })
      })
    ]
  });
}
function It({ data: H }) {
  var U, I, G;
  const J =
    (G =
      (I = (U = H == null ? void 0 : H.initial) == null ? void 0 : U.data) ==
      null
        ? void 0
        : I.site) == null
      ? void 0
      : G.seoMetadata;
  return At({ seoMetadata: J });
}
const Qt = bt(function () {
  return z.jsxs("main", {
    className: "container py-container-padding",
    children: [
      z.jsx(Tt, { className: "mb-40 w-[max(180px,11vw)]" }),
      z.jsx(Pt, {})
    ]
  });
});
export { Qt as default, It as meta };

