const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/enableLiveMode-D0jB9pgO.js",
      "assets/index-DEHOFT4-.js",
      "assets/takeUntil-s4z_mEAq.js",
      "assets/filter-CoGxb22B.js",
      "assets/bufferCount-Bacvc1_Q.js",
      "assets/index.browser-C4jpNZ5n.js",
      "assets/preload-helper-D7HrI6pR.js",
      "assets/stegaClean-YpGXIuvF.js",
      "assets/stegaEncodeSourceMap-BAz5QJeY.js",
      "assets/chunk-7R3XDUXW-BHIEIWN9.js",
      "assets/resolveEditInfo-Bqo3GpHw.js"
    ])
) => i.map((i) => d[i]);
import { _ as rt } from "./preload-helper-D7HrI6pR.js";
import { r as G } from "./chunk-7R3XDUXW-BHIEIWN9.js";
import {
  g as nt,
  s as Re,
  b as st,
  c as it,
  j as ot
} from "./resolveEditInfo-Bqo3GpHw.js";
var ie = {},
  oe,
  _e;
function at() {
  if (_e) return oe;
  _e = 1;
  const e = Symbol("values"),
    s = Symbol("kStorage"),
    i = Symbol("kStorages"),
    r = Symbol("kTransformer"),
    a = Symbol("kTTL"),
    u = Symbol("kOnDedupe"),
    h = Symbol("kOnError"),
    l = Symbol("kOnHit"),
    c = Symbol("kOnMiss"),
    d = Symbol("kStale");
  return (
    (oe = {
      kValues: e,
      kStorage: s,
      kStorages: i,
      kTransfromer: r,
      kTTL: a,
      kOnDedupe: u,
      kOnError: h,
      kOnHit: l,
      kOnMiss: c,
      kStale: d
    }),
    oe
  );
}
var ae = { exports: {} },
  Ae;
function Je() {
  return (
    Ae ||
      ((Ae = 1),
      (function (e, s) {
        const { hasOwnProperty: i } = Object.prototype,
          r = E();
        ((r.configure = E),
          (r.stringify = r),
          (r.default = r),
          (s.stringify = r),
          (s.configure = E),
          (e.exports = r));
        const a =
          /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/;
        function u(t) {
          return t.length < 5e3 && !a.test(t) ? `"${t}"` : JSON.stringify(t);
        }
        function h(t) {
          if (t.length > 200) return t.sort();
          for (let n = 1; n < t.length; n++) {
            const p = t[n];
            let v = n;
            for (; v !== 0 && t[v - 1] > p; ) ((t[v] = t[v - 1]), v--);
            t[v] = p;
          }
          return t;
        }
        const l = Object.getOwnPropertyDescriptor(
          Object.getPrototypeOf(Object.getPrototypeOf(new Int8Array())),
          Symbol.toStringTag
        ).get;
        function c(t) {
          return l.call(t) !== void 0 && t.length !== 0;
        }
        function d(t, n, p) {
          t.length < p && (p = t.length);
          const v = n === "," ? "" : " ";
          let I = `"0":${v}${t[0]}`;
          for (let O = 1; O < p; O++) I += `${n}"${O}":${v}${t[O]}`;
          return I;
        }
        function o(t) {
          if (i.call(t, "circularValue")) {
            const n = t.circularValue;
            if (typeof n == "string") return `"${n}"`;
            if (n == null) return n;
            if (n === Error || n === TypeError)
              return {
                toString() {
                  throw new TypeError("Converting circular structure to JSON");
                }
              };
            throw new TypeError(
              'The "circularValue" argument must be of type string or the value null or undefined'
            );
          }
          return '"[Circular]"';
        }
        function g(t, n) {
          let p;
          if (i.call(t, n) && ((p = t[n]), typeof p != "boolean"))
            throw new TypeError(`The "${n}" argument must be of type boolean`);
          return p === void 0 ? !0 : p;
        }
        function b(t, n) {
          let p;
          if (i.call(t, n)) {
            if (((p = t[n]), typeof p != "number"))
              throw new TypeError(`The "${n}" argument must be of type number`);
            if (!Number.isInteger(p))
              throw new TypeError(`The "${n}" argument must be an integer`);
            if (p < 1) throw new RangeError(`The "${n}" argument must be >= 1`);
          }
          return p === void 0 ? 1 / 0 : p;
        }
        function m(t) {
          return t === 1 ? "1 item" : `${t} items`;
        }
        function f(t) {
          const n = new Set();
          for (const p of t)
            (typeof p == "string" || typeof p == "number") && n.add(String(p));
          return n;
        }
        function w(t) {
          if (i.call(t, "strict")) {
            const n = t.strict;
            if (typeof n != "boolean")
              throw new TypeError(
                'The "strict" argument must be of type boolean'
              );
            if (n)
              return (p) => {
                let v = `Object can not safely be stringified. Received type ${typeof p}`;
                throw (
                  typeof p != "function" && (v += ` (${p.toString()})`),
                  new Error(v)
                );
              };
          }
        }
        function E(t) {
          t = { ...t };
          const n = w(t);
          n &&
            (t.bigint === void 0 && (t.bigint = !1),
            "circularValue" in t || (t.circularValue = Error));
          const p = o(t),
            v = g(t, "bigint"),
            I = g(t, "deterministic"),
            O = b(t, "maximumDepth"),
            _ = b(t, "maximumBreadth");
          function L(k, y, S, R, A, M) {
            let T = y[k];
            switch (
              (typeof T == "object" &&
                T !== null &&
                typeof T.toJSON == "function" &&
                (T = T.toJSON(k)),
              (T = R.call(y, k, T)),
              typeof T)
            ) {
              case "string":
                return u(T);
              case "object": {
                if (T === null) return "null";
                if (S.indexOf(T) !== -1) return p;
                let $ = "",
                  x = ",";
                const P = M;
                if (Array.isArray(T)) {
                  if (T.length === 0) return "[]";
                  if (O < S.length + 1) return '"[Array]"';
                  (S.push(T),
                    A !== "" &&
                      ((M += A),
                      ($ += `
${M}`),
                      (x = `,
${M}`)));
                  const U = Math.min(T.length, _);
                  let J = 0;
                  for (; J < U - 1; J++) {
                    const W = L(String(J), T, S, R, A, M);
                    (($ += W !== void 0 ? W : "null"), ($ += x));
                  }
                  const H = L(String(J), T, S, R, A, M);
                  if ((($ += H !== void 0 ? H : "null"), T.length - 1 > _)) {
                    const W = T.length - _ - 1;
                    $ += `${x}"... ${m(W)} not stringified"`;
                  }
                  return (
                    A !== "" &&
                      ($ += `
${P}`),
                    S.pop(),
                    `[${$}]`
                  );
                }
                let j = Object.keys(T);
                const N = j.length;
                if (N === 0) return "{}";
                if (O < S.length + 1) return '"[Object]"';
                let K = "",
                  C = "";
                A !== "" &&
                  ((M += A),
                  (x = `,
${M}`),
                  (K = " "));
                const B = Math.min(N, _);
                (I && !c(T) && (j = h(j)), S.push(T));
                for (let U = 0; U < B; U++) {
                  const J = j[U],
                    H = L(J, T, S, R, A, M);
                  H !== void 0 && (($ += `${C}${u(J)}:${K}${H}`), (C = x));
                }
                if (N > _) {
                  const U = N - _;
                  (($ += `${C}"...":${K}"${m(U)} not stringified"`), (C = x));
                }
                return (
                  A !== "" &&
                    C.length > 1 &&
                    ($ = `
${M}${$}
${P}`),
                  S.pop(),
                  `{${$}}`
                );
              }
              case "number":
                return isFinite(T) ? String(T) : n ? n(T) : "null";
              case "boolean":
                return T === !0 ? "true" : "false";
              case "undefined":
                return;
              case "bigint":
                if (v) return String(T);
              default:
                return n ? n(T) : void 0;
            }
          }
          function q(k, y, S, R, A, M) {
            switch (
              (typeof y == "object" &&
                y !== null &&
                typeof y.toJSON == "function" &&
                (y = y.toJSON(k)),
              typeof y)
            ) {
              case "string":
                return u(y);
              case "object": {
                if (y === null) return "null";
                if (S.indexOf(y) !== -1) return p;
                const T = M;
                let $ = "",
                  x = ",";
                if (Array.isArray(y)) {
                  if (y.length === 0) return "[]";
                  if (O < S.length + 1) return '"[Array]"';
                  (S.push(y),
                    A !== "" &&
                      ((M += A),
                      ($ += `
${M}`),
                      (x = `,
${M}`)));
                  const N = Math.min(y.length, _);
                  let K = 0;
                  for (; K < N - 1; K++) {
                    const B = q(String(K), y[K], S, R, A, M);
                    (($ += B !== void 0 ? B : "null"), ($ += x));
                  }
                  const C = q(String(K), y[K], S, R, A, M);
                  if ((($ += C !== void 0 ? C : "null"), y.length - 1 > _)) {
                    const B = y.length - _ - 1;
                    $ += `${x}"... ${m(B)} not stringified"`;
                  }
                  return (
                    A !== "" &&
                      ($ += `
${T}`),
                    S.pop(),
                    `[${$}]`
                  );
                }
                S.push(y);
                let P = "";
                A !== "" &&
                  ((M += A),
                  (x = `,
${M}`),
                  (P = " "));
                let j = "";
                for (const N of R) {
                  const K = q(N, y[N], S, R, A, M);
                  K !== void 0 && (($ += `${j}${u(N)}:${P}${K}`), (j = x));
                }
                return (
                  A !== "" &&
                    j.length > 1 &&
                    ($ = `
${M}${$}
${T}`),
                  S.pop(),
                  `{${$}}`
                );
              }
              case "number":
                return isFinite(y) ? String(y) : n ? n(y) : "null";
              case "boolean":
                return y === !0 ? "true" : "false";
              case "undefined":
                return;
              case "bigint":
                if (v) return String(y);
              default:
                return n ? n(y) : void 0;
            }
          }
          function z(k, y, S, R, A) {
            switch (typeof y) {
              case "string":
                return u(y);
              case "object": {
                if (y === null) return "null";
                if (typeof y.toJSON == "function") {
                  if (((y = y.toJSON(k)), typeof y != "object"))
                    return z(k, y, S, R, A);
                  if (y === null) return "null";
                }
                if (S.indexOf(y) !== -1) return p;
                const M = A;
                if (Array.isArray(y)) {
                  if (y.length === 0) return "[]";
                  if (O < S.length + 1) return '"[Array]"';
                  (S.push(y), (A += R));
                  let K = `
${A}`;
                  const C = `,
${A}`,
                    B = Math.min(y.length, _);
                  let U = 0;
                  for (; U < B - 1; U++) {
                    const H = z(String(U), y[U], S, R, A);
                    ((K += H !== void 0 ? H : "null"), (K += C));
                  }
                  const J = z(String(U), y[U], S, R, A);
                  if (((K += J !== void 0 ? J : "null"), y.length - 1 > _)) {
                    const H = y.length - _ - 1;
                    K += `${C}"... ${m(H)} not stringified"`;
                  }
                  return (
                    (K += `
${M}`),
                    S.pop(),
                    `[${K}]`
                  );
                }
                let T = Object.keys(y);
                const $ = T.length;
                if ($ === 0) return "{}";
                if (O < S.length + 1) return '"[Object]"';
                A += R;
                const x = `,
${A}`;
                let P = "",
                  j = "",
                  N = Math.min($, _);
                (c(y) &&
                  ((P += d(y, x, _)),
                  (T = T.slice(y.length)),
                  (N -= y.length),
                  (j = x)),
                  I && (T = h(T)),
                  S.push(y));
                for (let K = 0; K < N; K++) {
                  const C = T[K],
                    B = z(C, y[C], S, R, A);
                  B !== void 0 && ((P += `${j}${u(C)}: ${B}`), (j = x));
                }
                if ($ > _) {
                  const K = $ - _;
                  ((P += `${j}"...": "${m(K)} not stringified"`), (j = x));
                }
                return (
                  j !== "" &&
                    (P = `
${A}${P}
${M}`),
                  S.pop(),
                  `{${P}}`
                );
              }
              case "number":
                return isFinite(y) ? String(y) : n ? n(y) : "null";
              case "boolean":
                return y === !0 ? "true" : "false";
              case "undefined":
                return;
              case "bigint":
                if (v) return String(y);
              default:
                return n ? n(y) : void 0;
            }
          }
          function V(k, y, S) {
            switch (typeof y) {
              case "string":
                return u(y);
              case "object": {
                if (y === null) return "null";
                if (typeof y.toJSON == "function") {
                  if (((y = y.toJSON(k)), typeof y != "object"))
                    return V(k, y, S);
                  if (y === null) return "null";
                }
                if (S.indexOf(y) !== -1) return p;
                let R = "";
                if (Array.isArray(y)) {
                  if (y.length === 0) return "[]";
                  if (O < S.length + 1) return '"[Array]"';
                  S.push(y);
                  const x = Math.min(y.length, _);
                  let P = 0;
                  for (; P < x - 1; P++) {
                    const N = V(String(P), y[P], S);
                    ((R += N !== void 0 ? N : "null"), (R += ","));
                  }
                  const j = V(String(P), y[P], S);
                  if (((R += j !== void 0 ? j : "null"), y.length - 1 > _)) {
                    const N = y.length - _ - 1;
                    R += `,"... ${m(N)} not stringified"`;
                  }
                  return (S.pop(), `[${R}]`);
                }
                let A = Object.keys(y);
                const M = A.length;
                if (M === 0) return "{}";
                if (O < S.length + 1) return '"[Object]"';
                let T = "",
                  $ = Math.min(M, _);
                (c(y) &&
                  ((R += d(y, ",", _)),
                  (A = A.slice(y.length)),
                  ($ -= y.length),
                  (T = ",")),
                  I && (A = h(A)),
                  S.push(y));
                for (let x = 0; x < $; x++) {
                  const P = A[x],
                    j = V(P, y[P], S);
                  j !== void 0 && ((R += `${T}${u(P)}:${j}`), (T = ","));
                }
                if (M > _) {
                  const x = M - _;
                  R += `${T}"...":"${m(x)} not stringified"`;
                }
                return (S.pop(), `{${R}}`);
              }
              case "number":
                return isFinite(y) ? String(y) : n ? n(y) : "null";
              case "boolean":
                return y === !0 ? "true" : "false";
              case "undefined":
                return;
              case "bigint":
                if (v) return String(y);
              default:
                return n ? n(y) : void 0;
            }
          }
          function F(k, y, S) {
            if (arguments.length > 1) {
              let R = "";
              if (
                (typeof S == "number"
                  ? (R = " ".repeat(Math.min(S, 10)))
                  : typeof S == "string" && (R = S.slice(0, 10)),
                y != null)
              ) {
                if (typeof y == "function")
                  return L("", { "": k }, [], y, R, "");
                if (Array.isArray(y)) return q("", k, [], f(y), R, "");
              }
              if (R.length !== 0) return z("", k, [], R, "");
            }
            return V("", k, []);
          }
          return F;
        }
      })(ae, ae.exports)),
    ae.exports
  );
}
var ue, Oe;
function te() {
  if (Oe) return ue;
  Oe = 1;
  function e(c, d) {
    const o = [];
    let g = 0;
    for (let b = 0; b < c.length; b++)
      for (let m = g; m < d.length; m++)
        c[b] === d[m] && (o.push(m), (g = m + 1));
    return o;
  }
  function s(c, d) {
    const o = [];
    let g = 0;
    for (let b = 0; b < c.length; b++)
      for (let m = g; m < d.length; m++)
        c[b] !== d[m] && (o.push(d[m]), (g = m + 1));
    return o;
  }
  function i(c, d) {
    let o = 0,
      g = c.length - 1;
    for (; o <= g; ) {
      const b = ((o + g) / 2) | 0;
      if (c[b] === d) return b;
      c[b] < d ? (o = b + 1) : (g = b - 1);
    }
    return -1;
  }
  function r(c) {
    return (c * Math.random()) | 0;
  }
  function a(c, d) {
    return ((c = Math.floor(c)), (d = Math.floor(d)), c + r(1 + d - c));
  }
  function u(c, d) {
    if (c.length < 1 || d < 1) return [];
    const o = Math.min(c.length, d),
      g = a(1, o),
      b = new Set();
    for (let f = 0; f < g; f++) b.add(r(c.length));
    const m = [];
    for (const f of b) m.push(c[f]);
    return m;
  }
  function h(c, d) {
    if (c === "*" || (c.length === d.length && c === d)) return !0;
    let o = 0,
      g = 0;
    for (; o < c.length && g < d.length; ) {
      if (c[o] === d[g]) {
        (o++, g++);
        continue;
      }
      if (c[o] === "*") {
        if (c[o + 1] === d[g]) {
          o++;
          continue;
        }
        g++;
        continue;
      }
      return !1;
    }
    return o >= c.length - 1;
  }
  function l() {
    const c = () => {};
    return { fatal: c, error: c, warn: c, info: c, debug: c, trace: c };
  }
  return (
    (ue = {
      findNotMatching: s,
      findMatchingIndexes: e,
      bsearchIndex: i,
      wildcardMatch: h,
      randomSubset: u,
      abstractLogging: l,
      isServerSide: typeof window > "u"
    }),
    ue
  );
}
var ce, Me;
function He() {
  if (Me) return ce;
  Me = 1;
  class e {
    constructor(i) {
      this.options = i;
    }
    async get(i) {
      throw new Error("storage get method not implemented");
    }
    async set(i, r, a, u) {
      throw new Error("storage set method not implemented");
    }
    async remove(i) {
      throw new Error("storage remove method not implemented");
    }
    async invalidate(i) {
      throw new Error("storage invalidate method not implemented");
    }
    async clear(i) {
      throw new Error("storage clear method not implemented");
    }
    async refresh() {
      throw new Error("storage refresh method not implemented");
    }
  }
  return ((ce = e), ce);
}
var fe, $e;
function ut() {
  if ($e) return fe;
  $e = 1;
  const e = Je(),
    s = He(),
    { findNotMatching: i, randomSubset: r, abstractLogging: a } = te(),
    u = 64,
    h = 64,
    l = 60;
  class c extends s {
    constructor(o = {}) {
      if (!o.client || typeof o.client != "object")
        throw new Error("Redis client is required");
      if (
        (super(o),
        o.invalidation &&
          o.invalidation.referencesTTL &&
          (typeof o.invalidation.referencesTTL != "number" ||
            o.invalidation.referencesTTL < 1))
      )
        throw new Error(
          "invalidation.referencesTTL must be a positive integer greater than 1"
        );
      ((this.log = o.log || a()),
        (this.store = o.client),
        (this.invalidation = !!o.invalidation),
        (this.referencesTTL =
          (o.invalidation && o.invalidation.referencesTTL) || l));
    }
    getReferenceKeyLabel(o) {
      return `r:${o}`;
    }
    getKeyReferenceLabel(o) {
      return `k:${o}`;
    }
    async get(o) {
      this.log.debug({ msg: "acd/storage/redis.get", key: o });
      try {
        const g = await this.store.get(o);
        if (!g) {
          if (!this.invalidation) return;
          this.clearReferences(o);
          return;
        }
        return JSON.parse(g);
      } catch (g) {
        this.log.error({ msg: "acd/storage/redis.get error", err: g, key: o });
      }
    }
    async getTTL(o) {
      this.log.debug({ msg: "acd/storage/memory.getTTL", key: o });
      let g = await this.store.pttl(o);
      return g < 0 ? 0 : ((g = Math.ceil(g / 1e3)), g);
    }
    async set(o, g, b, m) {
      if (
        (this.log.debug({
          msg: "acd/storage/redis.set key",
          key: o,
          value: g,
          ttl: b,
          references: m
        }),
        (b = Number(b)),
        !(!b || b < 0))
      )
        try {
          if ((await this.store.set(o, e(g), "EX", b), !m || m.length < 1))
            return;
          if (!this.invalidation) {
            this.log.warn({
              msg: "acd/storage/redis.set, invalidation is disabled, references are useless",
              key: o,
              references: m
            });
            return;
          }
          const f = [],
            w = await this.store.smembers(this.getKeyReferenceLabel(o));
          if (
            (this.log.debug({
              msg: "acd/storage/redis.set current references",
              key: o,
              currentReferences: w
            }),
            w.length > 1)
          ) {
            (w.sort(), m.sort());
            const n = i(m, w);
            for (const p of n)
              f.push(["srem", this.getReferenceKeyLabel(p), o]);
            f.push(["del", this.getKeyReferenceLabel(o)]);
          }
          const E = w.length > 1 ? i(w, m) : m;
          this.log.debug({
            msg: "acd/storage/redis.set references to add",
            key: o,
            referencesToAdd: E
          });
          for (let n = 0; n < E.length; n++) {
            const p = E[n],
              v = this.getReferenceKeyLabel(p);
            (f.push(["sadd", v, o]), f.push(["expire", v, this.referencesTTL]));
          }
          const t = this.getKeyReferenceLabel(o);
          (f.push(["sadd", t, m]),
            f.push(["expire", t, b]),
            this.log.debug({
              msg: "acd/storage/redis.set references writes",
              writes: f
            }),
            await this.store.pipeline(f).exec());
        } catch (f) {
          this.log.error({
            msg: "acd/storage/redis.set error",
            err: f,
            key: o,
            ttl: b,
            references: m
          });
        }
    }
    async remove(o) {
      this.log.debug({ msg: "acd/storage/redis.remove", key: o });
      try {
        const g = (await this.store.del(o)) > 0;
        return (g && this.invalidation && (await this.clearReferences(o)), g);
      } catch (g) {
        this.log.error({
          msg: "acd/storage/redis.remove error",
          err: g,
          key: o
        });
      }
    }
    async invalidate(o) {
      if (!this.invalidation)
        return (
          this.log.warn({
            msg: "acd/storage/redis.invalidate, exit due invalidation is disabled"
          }),
          []
        );
      this.log.debug({ msg: "acd/storage/redis.invalidate", references: o });
      try {
        return Array.isArray(o)
          ? await this._invalidateReferences(o)
          : await this._invalidateReference(o);
      } catch (g) {
        return (
          this.log.error({
            msg: "acd/storage/redis.invalidate error",
            err: g,
            references: o
          }),
          []
        );
      }
    }
    async _invalidateReferences(o, g = !0) {
      const b = o.map((E) => [
          "smembers",
          g ? this.getReferenceKeyLabel(E) : E
        ]),
        m = await this.store.pipeline(b).exec();
      this.log.debug({
        msg: "acd/storage/redis._invalidateReferences keys",
        keys: m
      });
      const f = [],
        w = [];
      for (let E = 0; E < m.length; E++) {
        const t = m[E][1];
        if (t) {
          this.log.debug({
            msg: "acd/storage/redis._invalidateReferences got keys to be invalidated",
            keys: t
          });
          for (let n = 0; n < t.length; n++) {
            const p = t[n];
            (this.log.debug({
              msg: "acd/storage/redis._invalidateReferences del key" + p
            }),
              w.push(p),
              f.push(["del", p]));
          }
        }
      }
      return (
        await this.store.pipeline(f).exec(),
        await this.clearReferences(w),
        w
      );
    }
    async _invalidateReference(o) {
      let g;
      if (o.includes("*")) {
        const f = await this.store.keys(this.getReferenceKeyLabel(o));
        return this._invalidateReferences(f, !1);
      } else g = await this.store.smembers(this.getReferenceKeyLabel(o));
      this.log.debug({
        msg: "acd/storage/redis._invalidateReference keys",
        keys: g
      });
      const b = [],
        m = [];
      for (let f = 0; f < g.length; f++) {
        const w = g[f];
        (this.log.debug({
          msg: "acd/storage/redis._invalidateReference del key" + w
        }),
          m.push(w),
          b.push(["del", w]));
      }
      return (
        await this.store.pipeline(b).exec(),
        await this.clearReferences(m),
        m
      );
    }
    async clear(o) {
      this.log.debug({ msg: "acd/storage/redis.clear", name: o });
      try {
        if (!o) {
          await this.store.flushall();
          return;
        }
        const g = await this.store.keys(`${o}*`);
        this.log.debug({ msg: "acd/storage/redis.clear keys", keys: g });
        const b = g.map((m) => ["del", m]);
        if ((await this.store.pipeline(b).exec(), !this.invalidation)) return;
        await this.clearReferences(g);
      } catch (g) {
        this.log.error({
          msg: "acd/storage/redis.clear error",
          err: g,
          name: o
        });
      }
    }
    async refresh() {
      try {
        await this.store.flushall();
      } catch (o) {
        this.log.error({ msg: "acd/storage/redis.refresh error", err: o });
      }
    }
    async clearReferences(o) {
      try {
        if (!o) {
          this.log.warn({
            msg: "acd/storage/redis.clearReferences invalid call due to empty key"
          });
          return;
        }
        Array.isArray(o) || (o = [o]);
        const g = o.map((f) => ["smembers", this.getKeyReferenceLabel(f)]),
          b = await this.store.pipeline(g).exec();
        this.log.debug({
          msg: "acd/storage/redis.clearReferences references",
          keys: o,
          referencesKeys: b
        });
        const m = {};
        for (let f = 0; f < o.length; f++) {
          for (let E = 0; E < b[f][1].length; E++) {
            const t = this.getReferenceKeyLabel(b[f][1][E]);
            m[t] || (m[t] = ["srem", t, o]);
          }
          const w = this.getKeyReferenceLabel(o[f]);
          m[w] = ["del", w];
        }
        (this.log.debug({
          msg: "acd/storage/redis.clearReferences writes pipeline",
          writes: m
        }),
          await this.store.pipeline(Object.values(m)).exec());
      } catch (g) {
        this.log.error({
          msg: "acd/storage/redis.clearReferences error",
          err: g
        });
      }
    }
    async gc(o = "lazy", g = {}) {
      if (
        (this.log.debug({ msg: "acd/storage/redis.gc", mode: o, options: g }),
        !this.invalidation)
      ) {
        this.log.warn({
          msg: "acd/storage/redis.gc does not run due to invalidation is disabled"
        });
        return;
      }
      o !== "strict" && o !== "lazy" && (o = "lazy");
      const b = {
        references: { scanned: [], removed: [] },
        keys: { scanned: new Set(), removed: new Set() },
        loops: 0,
        cursor: 0,
        error: null
      };
      try {
        let m = 0,
          f = h;
        if (g.chunk && (typeof g.chunk != "number" || g.chunk < 1))
          return (
            (b.error = new Error(
              "chunk must be a positive integer greater than 1"
            )),
            b
          );
        if (g.lazy) {
          if (g.lazy.chunk) {
            if (typeof g.lazy.chunk != "number" || g.lazy.chunk < 1)
              return (
                (b.error = new Error(
                  "lazy.chunk must be a positive integer greater than 1"
                )),
                b
              );
            f = g.lazy.chunk;
          }
          if (g.lazy.cursor) {
            if (typeof g.lazy.cursor != "number" || g.lazy.cursor < 0)
              return (
                (b.error = new Error(
                  "lazy.cursor must be a positive integer greater than 0"
                )),
                b
              );
            m = g.lazy.cursor;
          }
        }
        const w = g.chunk || u,
          E = Math.min(f, w),
          t = m;
        let n = -1,
          p = -1;
        do {
          b.loops++;
          const v = await this.store.scan(m, "match", "r:*", "count", E);
          ((m = Number(v[0])), (n = v[1].length));
          const I = o === "lazy" ? r(v[1], f) : v[1];
          b.references.scanned = b.references.scanned.concat(I);
          let O = [];
          for (let S = 0; S < I.length; S++) {
            const R = I[S];
            O.push(["smembers", R]);
          }
          const _ = await this.store.pipeline(O).exec(),
            L = {},
            q = {};
          for (let S = 0; S < _.length; S++) {
            const R = _[S],
              A = I[S];
            q[A] = R[1];
            for (let M = 0; M < R[1].length; M++) {
              const T = R[1][M];
              (L[T] ? L[T].push(A) : (L[T] = [A]), b.keys.scanned.add(T));
            }
          }
          const z = Object.keys(L);
          O = z.map((S) => ["exists", S]);
          const V = await this.store.pipeline(O).exec(),
            F = {};
          for (let S = 0; S < z.length; S++) {
            const R = z[S];
            if (V[S][1] !== 1)
              for (let A = 0; A < L[R].length; A++) {
                const M = L[R][A];
                (F[M] ? F[M].push(R) : (F[M] = [R]), b.keys.removed.add(R));
              }
          }
          const k = Object.keys(F),
            y = [];
          for (let S = 0; S < k.length; S++) {
            const R = k[S];
            q[R].length === F[R].length
              ? (y.push(["del", R]), b.references.removed.push(R))
              : y.push(["srem", R, F[R]]);
          }
          if (
            (await this.store.pipeline(y).exec(),
            (p = y.length),
            o === "lazy" && b.references.scanned.length >= f)
          )
            break;
        } while (t !== m && n > 0 && p > 0);
        ((b.cursor = m),
          (b.keys.scanned = Array.from(b.keys.scanned)),
          (b.keys.removed = Array.from(b.keys.removed)));
      } catch (m) {
        (this.log.error({ msg: "acd/storage/redis.gc error", err: m }),
          (b.error = m));
      }
      return b;
    }
  }
  return ((fe = c), fe);
}
var le, Ie;
function ct() {
  if (Ie) return le;
  Ie = 1;
  function e(s) {
    if (typeof s != "function")
      throw new Error("obliterator/iterator: expecting a function!");
    this.next = s;
  }
  return (
    typeof Symbol < "u" &&
      (e.prototype[Symbol.iterator] = function () {
        return this;
      }),
    (e.of = function () {
      var s = arguments,
        i = s.length,
        r = 0;
      return new e(function () {
        return r >= i ? { done: !0 } : { done: !1, value: s[r++] };
      });
    }),
    (e.empty = function () {
      var s = new e(function () {
        return { done: !0 };
      });
      return s;
    }),
    (e.fromSequence = function (s) {
      var i = 0,
        r = s.length;
      return new e(function () {
        return i >= r ? { done: !0 } : { done: !1, value: s[i++] };
      });
    }),
    (e.is = function (s) {
      return s instanceof e
        ? !0
        : typeof s == "object" && s !== null && typeof s.next == "function";
    }),
    (le = e),
    le
  );
}
var he = {},
  Le;
function ft() {
  return (
    Le ||
      ((Le = 1),
      (he.ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer < "u"),
      (he.SYMBOL_SUPPORT = typeof Symbol < "u")),
    he
  );
}
var ge, Ke;
function Ge() {
  if (Ke) return ge;
  Ke = 1;
  var e = ft(),
    s = e.ARRAY_BUFFER_SUPPORT,
    i = e.SYMBOL_SUPPORT;
  return (
    (ge = function (r, a) {
      var u, h, l, c, d;
      if (!r) throw new Error("obliterator/forEach: invalid iterable.");
      if (typeof a != "function")
        throw new Error("obliterator/forEach: expecting a callback.");
      if (
        Array.isArray(r) ||
        (s && ArrayBuffer.isView(r)) ||
        typeof r == "string" ||
        r.toString() === "[object Arguments]"
      ) {
        for (l = 0, c = r.length; l < c; l++) a(r[l], l);
        return;
      }
      if (typeof r.forEach == "function") {
        r.forEach(a);
        return;
      }
      if (
        (i &&
          Symbol.iterator in r &&
          typeof r.next != "function" &&
          (r = r[Symbol.iterator]()),
        typeof r.next == "function")
      ) {
        for (u = r, l = 0; (d = u.next()), d.done !== !0; )
          (a(d.value, l), l++);
        return;
      }
      for (h in r) r.hasOwnProperty(h) && a(r[h], h);
    }),
    ge
  );
}
var xe = {},
  Pe;
function Qe() {
  return (
    Pe ||
      ((Pe = 1),
      (function (e) {
        var s = Math.pow(2, 8) - 1,
          i = Math.pow(2, 16) - 1,
          r = Math.pow(2, 32) - 1,
          a = Math.pow(2, 7) - 1,
          u = Math.pow(2, 15) - 1,
          h = Math.pow(2, 31) - 1;
        ((e.getPointerArray = function (c) {
          var d = c - 1;
          if (d <= s) return Uint8Array;
          if (d <= i) return Uint16Array;
          if (d <= r) return Uint32Array;
          throw new Error(
            "mnemonist: Pointer Array of size > 4294967295 is not supported."
          );
        }),
          (e.getSignedPointerArray = function (c) {
            var d = c - 1;
            return d <= a
              ? Int8Array
              : d <= u
                ? Int16Array
                : d <= h
                  ? Int32Array
                  : Float64Array;
          }),
          (e.getNumberType = function (c) {
            return c === (c | 0)
              ? Math.sign(c) === -1
                ? c <= 127 && c >= -128
                  ? Int8Array
                  : c <= 32767 && c >= -32768
                    ? Int16Array
                    : Int32Array
                : c <= 255
                  ? Uint8Array
                  : c <= 65535
                    ? Uint16Array
                    : Uint32Array
              : Float64Array;
          }));
        var l = {
          Uint8Array: 1,
          Int8Array: 2,
          Uint16Array: 3,
          Int16Array: 4,
          Uint32Array: 5,
          Int32Array: 6,
          Float32Array: 7,
          Float64Array: 8
        };
        ((e.getMinimalRepresentation = function (c, d) {
          var o = null,
            g = 0,
            b,
            m,
            f,
            w,
            E;
          for (w = 0, E = c.length; w < E; w++)
            ((f = d ? d(c[w]) : c[w]),
              (m = e.getNumberType(f)),
              (b = l[m.name]),
              b > g && ((g = b), (o = m)));
          return o;
        }),
          (e.isTypedArray = function (c) {
            return typeof ArrayBuffer < "u" && ArrayBuffer.isView(c);
          }),
          (e.concat = function () {
            var c = 0,
              d,
              o,
              g;
            for (d = 0, g = arguments.length; d < g; d++)
              c += arguments[d].length;
            var b = new arguments[0].constructor(c);
            for (d = 0, o = 0; d < g; d++)
              (b.set(arguments[d], o), (o += arguments[d].length));
            return b;
          }),
          (e.indices = function (c) {
            for (var d = e.getPointerArray(c), o = new d(c), g = 0; g < c; g++)
              o[g] = g;
            return o;
          }));
      })(xe)),
    xe
  );
}
var Q = {},
  ke;
function lt() {
  if (ke) return Q;
  ke = 1;
  var e = Ge(),
    s = Qe();
  function i(h) {
    return Array.isArray(h) || s.isTypedArray(h);
  }
  function r(h) {
    if (typeof h.length == "number") return h.length;
    if (typeof h.size == "number") return h.size;
  }
  function a(h) {
    var l = r(h),
      c = typeof l == "number" ? new Array(l) : [],
      d = 0;
    return (
      e(h, function (o) {
        c[d++] = o;
      }),
      c
    );
  }
  function u(h) {
    var l = r(h),
      c = typeof l == "number" ? s.getPointerArray(l) : Array,
      d = typeof l == "number" ? new Array(l) : [],
      o = typeof l == "number" ? new c(l) : [],
      g = 0;
    return (
      e(h, function (b) {
        ((d[g] = b), (o[g] = g++));
      }),
      [d, o]
    );
  }
  return (
    (Q.isArrayLike = i),
    (Q.guessLength = r),
    (Q.toArray = a),
    (Q.toArrayWithIndices = u),
    Q
  );
}
var de, je;
function ht() {
  if (je) return de;
  je = 1;
  var e = ct(),
    s = Ge(),
    i = Qe(),
    r = lt();
  function a(u, h, l) {
    if (
      (arguments.length < 2 && ((l = u), (u = null), (h = null)),
      (this.capacity = l),
      typeof this.capacity != "number" || this.capacity <= 0)
    )
      throw new Error(
        "mnemonist/lru-cache: capacity should be positive number."
      );
    if (!isFinite(this.capacity) || Math.floor(this.capacity) !== this.capacity)
      throw new Error(
        "mnemonist/lru-cache: capacity should be a finite positive integer."
      );
    var c = i.getPointerArray(l);
    ((this.forward = new c(l)),
      (this.backward = new c(l)),
      (this.K = typeof u == "function" ? new u(l) : new Array(l)),
      (this.V = typeof h == "function" ? new h(l) : new Array(l)),
      (this.size = 0),
      (this.head = 0),
      (this.tail = 0),
      (this.items = {}));
  }
  return (
    (a.prototype.clear = function () {
      ((this.size = 0), (this.head = 0), (this.tail = 0), (this.items = {}));
    }),
    (a.prototype.splayOnTop = function (u) {
      var h = this.head;
      if (this.head === u) return this;
      var l = this.backward[u],
        c = this.forward[u];
      return (
        this.tail === u ? (this.tail = l) : (this.backward[c] = l),
        (this.forward[l] = c),
        (this.backward[h] = u),
        (this.head = u),
        (this.forward[u] = h),
        this
      );
    }),
    (a.prototype.set = function (u, h) {
      var l = this.items[u];
      if (typeof l < "u") {
        (this.splayOnTop(l), (this.V[l] = h));
        return;
      }
      (this.size < this.capacity
        ? (l = this.size++)
        : ((l = this.tail),
          (this.tail = this.backward[l]),
          delete this.items[this.K[l]]),
        (this.items[u] = l),
        (this.K[l] = u),
        (this.V[l] = h),
        (this.forward[l] = this.head),
        (this.backward[this.head] = l),
        (this.head = l));
    }),
    (a.prototype.setpop = function (u, h) {
      var l = null,
        c = null,
        d = this.items[u];
      return typeof d < "u"
        ? (this.splayOnTop(d),
          (l = this.V[d]),
          (this.V[d] = h),
          { evicted: !1, key: u, value: l })
        : (this.size < this.capacity
            ? (d = this.size++)
            : ((d = this.tail),
              (this.tail = this.backward[d]),
              (l = this.V[d]),
              (c = this.K[d]),
              delete this.items[c]),
          (this.items[u] = d),
          (this.K[d] = u),
          (this.V[d] = h),
          (this.forward[d] = this.head),
          (this.backward[this.head] = d),
          (this.head = d),
          c ? { evicted: !0, key: c, value: l } : null);
    }),
    (a.prototype.has = function (u) {
      return u in this.items;
    }),
    (a.prototype.get = function (u) {
      var h = this.items[u];
      if (!(typeof h > "u")) return (this.splayOnTop(h), this.V[h]);
    }),
    (a.prototype.peek = function (u) {
      var h = this.items[u];
      if (!(typeof h > "u")) return this.V[h];
    }),
    (a.prototype.forEach = function (u, h) {
      h = arguments.length > 1 ? h : this;
      for (
        var l = 0,
          c = this.size,
          d = this.head,
          o = this.K,
          g = this.V,
          b = this.forward;
        l < c;
      )
        (u.call(h, g[d], o[d], this), (d = b[d]), l++);
    }),
    (a.prototype.keys = function () {
      var u = 0,
        h = this.size,
        l = this.head,
        c = this.K,
        d = this.forward;
      return new e(function () {
        if (u >= h) return { done: !0 };
        var o = c[l];
        return (u++, u < h && (l = d[l]), { done: !1, value: o });
      });
    }),
    (a.prototype.values = function () {
      var u = 0,
        h = this.size,
        l = this.head,
        c = this.V,
        d = this.forward;
      return new e(function () {
        if (u >= h) return { done: !0 };
        var o = c[l];
        return (u++, u < h && (l = d[l]), { done: !1, value: o });
      });
    }),
    (a.prototype.entries = function () {
      var u = 0,
        h = this.size,
        l = this.head,
        c = this.K,
        d = this.V,
        o = this.forward;
      return new e(function () {
        if (u >= h) return { done: !0 };
        var g = c[l],
          b = d[l];
        return (u++, u < h && (l = o[l]), { done: !1, value: [g, b] });
      });
    }),
    typeof Symbol < "u" && (a.prototype[Symbol.iterator] = a.prototype.entries),
    (a.prototype.inspect = function () {
      for (var u = new Map(), h = this.entries(), l; (l = h.next()), !l.done; )
        u.set(l.value[0], l.value[1]);
      return (
        Object.defineProperty(u, "constructor", { value: a, enumerable: !1 }),
        u
      );
    }),
    typeof Symbol < "u" &&
      (a.prototype[Symbol.for("nodejs.util.inspect.custom")] =
        a.prototype.inspect),
    (a.from = function (u, h, l, c) {
      if (arguments.length < 2) {
        if (((c = r.guessLength(u)), typeof c != "number"))
          throw new Error(
            "mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument."
          );
      } else arguments.length === 2 && ((c = h), (h = null), (l = null));
      var d = new a(h, l, c);
      return (
        s(u, function (o, g) {
          d.set(g, o);
        }),
        d
      );
    }),
    (de = a),
    de
  );
}
var ye, Ne;
function gt() {
  if (Ne) return ye;
  Ne = 1;
  const e = ht(),
    { abstractLogging: s } = te(),
    i = He(),
    {
      findMatchingIndexes: r,
      findNotMatching: a,
      bsearchIndex: u,
      wildcardMatch: h
    } = te(),
    l =
      typeof globalThis.setImmediate < "u"
        ? globalThis.setImmediate
        : (m, ...f) => setTimeout(m, 0, ...f),
    c = 1024;
  class d extends i {
    constructor(f = {}) {
      if (f.size && (typeof f.size != "number" || f.size < 1))
        throw new Error("size must be a positive integer greater than 0");
      (super(f),
        (this.size = f.size || c),
        (this.log = f.log || s()),
        (this.invalidation = f.invalidation || !1),
        this.init());
    }
    init() {
      ((this.store = new e(this.size)),
        this.invalidation &&
          ((this.keysReferences = new Map()),
          (this.referencesKeys = new Map())));
    }
    get(f) {
      this.log.debug({ msg: "acd/storage/memory.get", key: f });
      const w = this.store.get(f);
      if (w) {
        if (
          (this.log.debug({
            msg: "acd/storage/memory.get, entry",
            entry: w,
            now: g()
          }),
          w.start + w.ttl > g())
        )
          return (
            this.log.debug({
              msg: "acd/storage/memory.get, key is NOT expired",
              key: f,
              entry: w
            }),
            w.value
          );
        (this.log.debug({
          msg: "acd/storage/memory.get, key is EXPIRED",
          key: f,
          entry: w
        }),
          l(() => this.remove(f)));
      }
    }
    getTTL(f) {
      this.log.debug({ msg: "acd/storage/memory.getTTL", key: f });
      const w = this.store.peek(f);
      let E = 0;
      return (w && ((E = w.start + w.ttl - g()), E < 0 && (E = 0)), E);
    }
    set(f, w, E, t) {
      if (
        (this.log.debug({
          msg: "acd/storage/memory.set",
          key: f,
          value: w,
          ttl: E,
          references: t
        }),
        (E = Number(E)),
        !E || E < 0)
      )
        return;
      const n = this.store.has(f),
        p = this.store.setpop(f, { value: w, ttl: E, start: g() });
      if (
        (this.log.debug({ msg: "acd/storage/memory.set, evicted", removed: p }),
        p &&
          p.evicted &&
          (this.log.debug({
            msg: "acd/storage/memory.set, remove evicted key",
            key: p.key
          }),
          this._removeReferences([p.key])),
        !t || t.length < 1)
      )
        return;
      if (!this.invalidation) {
        this.log.warn({
          msg: "acd/storage/memory.set, invalidation is disabled, references are useless"
        });
        return;
      }
      t = [...new Set(t)];
      let v;
      if (
        n &&
        ((v = this.keysReferences.get(f)),
        this.log.debug({
          msg: "acd/storage/memory.set, current keys-references",
          key: f,
          references: v
        }),
        v)
      ) {
        (v.sort(), t.sort());
        const O = a(t, v);
        for (const _ of O) {
          const L = this.referencesKeys.get(_);
          if (!L) continue;
          const q = u(L, f);
          if (!(q < 0)) {
            if ((L.splice(q, 1), L.length < 1)) {
              this.referencesKeys.delete(_);
              continue;
            }
            this.referencesKeys.set(_, L);
          }
        }
      }
      const I = v ? a(v, t) : t;
      for (let O = 0; O < I.length; O++) {
        const _ = I[O];
        let L = this.referencesKeys.get(_);
        (L
          ? (this.log.debug({
              msg: "acd/storage/memory.set, add reference-key",
              key: f,
              reference: _
            }),
            L.push(f))
          : (L = [f]),
          this.log.debug({
            msg: "acd/storage/memory.set, set reference-keys",
            keys: L,
            reference: _
          }),
          this.referencesKeys.set(_, L));
      }
      this.keysReferences.set(f, t);
    }
    remove(f) {
      this.log.debug({ msg: "acd/storage/memory.remove", key: f });
      const w = this._removeKey(f);
      return (this._removeReferences([f]), w);
    }
    _removeKey(f) {
      return (
        this.log.debug({ msg: "acd/storage/memory._removeKey", key: f }),
        this.store.has(f) ? (this.store.set(f, void 0), !0) : !1
      );
    }
    _removeReferences(f) {
      if (!this.invalidation) return;
      this.log.debug({ msg: "acd/storage/memory._removeReferences", keys: f });
      const w = new Set();
      for (let E = 0; E < f.length; E++) {
        const t = f[E],
          n = this.keysReferences.get(t);
        if (n) {
          for (let p = 0; p < n.length; p++) w.add(n[p]);
          (this.log.debug({
            msg: "acd/storage/memory._removeReferences, delete key-references",
            key: t
          }),
            this.keysReferences.delete(t));
        }
      }
      this._removeReferencesKeys([...w], f);
    }
    _removeReferencesKeys(f, w) {
      (w.sort(),
        this.log.debug({
          msg: "acd/storage/memory._removeReferencesKeys",
          references: f,
          keys: w
        }));
      for (let E = 0; E < f.length; E++) {
        const t = f[E],
          n = this.referencesKeys.get(t);
        if (
          (this.log.debug({
            msg: "acd/storage/memory._removeReferencesKeys, get reference-key",
            reference: t,
            keys: w,
            referencesKeys: n
          }),
          !n)
        )
          continue;
        const p = r(w, n);
        if (
          (this.log.debug({
            msg: "acd/storage/memory._removeReferencesKeys, removing",
            reference: t,
            referencesToRemove: p,
            referencesKeys: n
          }),
          p.length === n.length)
        ) {
          (this.log.debug({
            msg: "acd/storage/memory._removeReferencesKeys, delete",
            reference: t
          }),
            this.referencesKeys.delete(t));
          continue;
        }
        for (let v = p.length - 1; v >= 0; v--)
          (this.log.debug({
            msg: "acd/storage/memory._removeReferencesKeys, remove",
            reference: t,
            referencesKeys: n,
            at: p[v]
          }),
            n.splice(p[v], 1));
      }
    }
    invalidate(f) {
      return this.invalidation
        ? (this.log.debug({
            msg: "acd/storage/memory.invalidate",
            references: f
          }),
          Array.isArray(f)
            ? this._invalidateReferences(f)
            : this._invalidateReference(f))
        : (this.log.warn({
            msg: "acd/storage/memory.invalidate, exit due invalidation is disabled"
          }),
          []);
    }
    _invalidateReferences(f) {
      const w = [];
      for (let E = 0; E < f.length; E++) {
        const t = f[E],
          n = this.referencesKeys.get(t);
        if (
          (this.log.debug({
            msg: "acd/storage/memory._invalidateReferences, remove keys on reference",
            reference: t,
            keys: n
          }),
          !!n)
        ) {
          for (let p = 0; p < n.length; p++) {
            const v = n[p];
            (this.log.debug({
              msg: "acd/storage/memory._invalidateReferences, remove key on reference",
              reference: t,
              key: v
            }),
              this._removeKey(v) && w.push(v));
          }
          (this.log.debug({
            msg: "acd/storage/memory._invalidateReferences, remove references of",
            reference: t,
            keys: n
          }),
            this._removeReferences([...n]));
        }
      }
      return w;
    }
    _invalidateReference(f) {
      if (f.includes("*")) {
        const t = [];
        for (const n of this.referencesKeys.keys()) h(f, n) && t.push(n);
        return this._invalidateReferences(t);
      }
      const w = this.referencesKeys.get(f),
        E = [];
      if (
        (this.log.debug({
          msg: "acd/storage/memory._invalidateReference, remove keys on reference",
          reference: f,
          keys: w
        }),
        !w)
      )
        return E;
      for (let t = 0; t < w.length; t++) {
        const n = w[t];
        (this.log.debug({
          msg: "acd/storage/memory._invalidateReference, remove key on reference",
          reference: f,
          key: n
        }),
          this._removeKey(n) && E.push(n));
      }
      return (
        this.log.debug({
          msg: "acd/storage/memory._invalidateReference, remove references of",
          reference: f,
          keys: w
        }),
        this._removeReferences([...w]),
        E
      );
    }
    clear(f) {
      if ((this.log.debug({ msg: "acd/storage/memory.clear", name: f }), !f)) {
        if ((this.store.clear(), !this.invalidation)) return;
        (this.referencesKeys.clear(), this.keysReferences.clear());
        return;
      }
      const w = [];
      this.store.forEach((t, n) => {
        (this.log.debug({
          msg: "acd/storage/memory.clear, iterate key",
          key: n
        }),
          n.indexOf(f) === 0 &&
            (this.log.debug({
              msg: "acd/storage/memory.clear, remove key",
              key: n
            }),
            w.push(n)));
      });
      const E = [];
      for (let t = 0; t < w.length; t++) this._removeKey(w[t]) && E.push(w[t]);
      return (this._removeReferences(E), E);
    }
    refresh() {
      (this.log.debug({ msg: "acd/storage/memory.refresh" }), this.init());
    }
  }
  let o;
  function g() {
    if (o !== void 0) return o;
    o = Math.floor(Date.now() / 1e3);
    const m = setTimeout(b, 1e3);
    return (typeof m.unref == "function" && m.unref(), o);
  }
  function b() {
    o = void 0;
  }
  return ((ye = d), ye);
}
var me, De;
function Ye() {
  if (De) return me;
  De = 1;
  const { isServerSide: e } = te();
  let s;
  e && (s = ut());
  const i = gt(),
    r = { redis: "redis", memory: "memory" };
  function a(u, h) {
    if (!e && u === r.redis)
      throw new Error("Redis storage is not supported in the browser");
    return u === r.redis ? new s(h) : new i(h);
  }
  return ((me = a), me);
}
var Ce;
function dt() {
  if (Ce) return ie;
  Ce = 1;
  const {
      kValues: e,
      kStorage: s,
      kStorages: i,
      kTransfromer: r,
      kTTL: a,
      kOnDedupe: u,
      kOnError: h,
      kOnHit: l,
      kOnMiss: c,
      kStale: d
    } = at(),
    o = Je(),
    g = Ye();
  class b {
    constructor(t = {}) {
      if (!t.storage) throw new Error("storage is required");
      if (
        t.ttl &&
        typeof t.ttl == "number" &&
        (t.ttl < 0 || !Number.isInteger(t.ttl))
      )
        throw new Error("ttl must be a positive integer greater than 0");
      if (t.onDedupe && typeof t.onDedupe != "function")
        throw new Error("onDedupe must be a function");
      if (t.onError && typeof t.onError != "function")
        throw new Error("onError must be a function");
      if (t.onHit && typeof t.onHit != "function")
        throw new Error("onHit must be a function");
      if (t.onMiss && typeof t.onMiss != "function")
        throw new Error("onMiss must be a function");
      if (
        typeof t.stale == "number" &&
        !(Math.floor(t.stale) === t.stale && t.stale >= 0)
      )
        throw new Error("stale must be an integer greater or equal to 0");
      ((this[e] = {}),
        (this[s] = t.storage),
        (this[i] = new Map()),
        this[i].set("_default", t.storage),
        (this[r] = t.transformer),
        (this[a] = t.ttl || 0),
        (this[u] = t.onDedupe || w),
        (this[h] = t.onError || w),
        (this[l] = t.onHit || w),
        (this[c] = t.onMiss || w),
        (this[d] = t.stale || 0));
    }
    define(t, n, p) {
      if ((typeof n == "function" && ((p = n), (n = {})), t && this[t]))
        throw new Error(
          `${t} is already defined in the cache or it is a forbidden name`
        );
      if (((n = n || {}), typeof p != "function"))
        throw new TypeError(`Missing the function parameter for '${t}'`);
      const v = n.serialize;
      if (v && typeof v != "function")
        throw new TypeError("serialize must be a function");
      const I = n.references;
      if (I && typeof I != "function")
        throw new TypeError("references must be a function");
      if (
        typeof n.ttl != "function" &&
        n.ttl &&
        (typeof n.ttl != "number" || n.ttl < 0 || !Number.isInteger(n.ttl))
      )
        throw new Error("ttl must be a positive integer greater than 0");
      let O;
      n.storage
        ? ((O = g(n.storage.type, n.storage.options)), this[i].set(t, O))
        : (O = this[s]);
      const _ = n.ttl !== void 0 ? n.ttl : this[a],
        L = n.stale !== void 0 ? n.stale : this[d],
        q = n.onDedupe || this[u],
        z = n.onError || this[h],
        V = n.onHit || this[l],
        F = n.onMiss || this[c],
        k = n.transformer || this[r],
        y = new m(p, t, v, I, O, k, _, q, z, V, F, L);
      return ((this[e][t] = y), (this[t] = y.add.bind(y)), this);
    }
    async clear(t, n) {
      if (t) {
        if (!this[e][t]) throw new Error(`${t} is not defined in the cache`);
        await this[e][t].clear(n);
        return;
      }
      const p = [];
      for (const v of Object.values(this[e])) p.push(v.clear());
      await Promise.all(p);
    }
    async get(t, n) {
      if (!this[e][t]) throw new Error(`${t} is not defined in the cache`);
      return this[e][t].get(n);
    }
    async set(t, n, p, v, I) {
      if (!this[e][t]) throw new Error(`${t} is not defined in the cache`);
      return this[e][t].set(n, p, v, I);
    }
    async invalidate(t, n) {
      if (!this[e][t]) throw new Error(`${t} is not defined in the cache`);
      return this[e][t].invalidate(n);
    }
    async invalidateAll(t, n = "_default") {
      if (!this[i].has(n))
        throw new Error(`${n} storage is not defined in the cache`);
      await this[i].get(n).invalidate(t);
    }
  }
  class m {
    constructor(t, n, p, v, I, O, _, L, q, z, V, F) {
      ((this.dedupes = new Map()),
        (this.func = t),
        (this.name = n),
        (this.serialize = p),
        (this.references = v),
        (this.storage = I),
        (this.transformer = O),
        (this.ttl = _),
        (this.onDedupe = L),
        (this.onError = q),
        (this.onHit = z),
        (this.onMiss = V),
        (this.stale = F));
    }
    getKey(t) {
      const n = this.serialize ? this.serialize(t) : t;
      return typeof n == "string" ? n : o(n);
    }
    getStorageKey(t) {
      return `${this.name}~${t}`;
    }
    getStorageName() {
      return `${this.name}~`;
    }
    add(t) {
      try {
        const n = this.getKey(t);
        let p = this.dedupes.get(n);
        return (
          p
            ? this.onDedupe(n)
            : ((p = new f()),
              this.buildPromise(p, t, n),
              this.dedupes.set(n, p)),
          p.promise
        );
      } catch (n) {
        this.onError(n);
      }
    }
    async wrapFunction(t, n) {
      const p = this.getStorageKey(n);
      if (this.ttl > 0 || typeof this.ttl == "function") {
        const v = await this.get(p);
        if (v !== void 0) {
          this.onHit(n);
          const I =
            typeof this.stale == "function" ? this.stale(v) : this.stale;
          return (
            I > 0 &&
              (await this.storage.getTTL(p)) <= I &&
              this._wrapFunction(p, t, n).catch(w),
            v
          );
        } else this.onMiss(n);
      }
      return this._wrapFunction(p, t, n);
    }
    async _wrapFunction(t, n, p) {
      const v = await this.func(n, p),
        I = typeof this.stale == "function" ? this.stale(v) : this.stale;
      let O = typeof this.ttl == "function" ? this.ttl(v) : this.ttl;
      if (O == null || typeof O != "number" || !Number.isInteger(O))
        return (this.onError(new Error("ttl must be an integer")), v);
      if (((O += I), O < 1)) return v;
      if (!this.references) return (await this.set(t, v, O), v);
      try {
        let _ = this.references(n, p, v),
          L = v;
        (_ && typeof _.then == "function" && (_ = await _),
          this.transformer && (L = this.transformer.serialize(v)),
          await this.storage.set(t, L, O, _));
      } catch (_) {
        this.onError(_);
      }
      return v;
    }
    buildPromise(t, n, p) {
      ((t.promise = this.wrapFunction(n, p)),
        t.promise
          .then((v) => (this.dedupes.delete(p), v))
          .catch((v) => {
            (this.onError(v), this.dedupes.delete(p));
            const I = this.storage.remove(this.getStorageKey(p));
            I && typeof I.catch == "function" && I.catch(w);
          }));
    }
    async clear(t) {
      if (t) {
        const n = this.getKey(t);
        (this.dedupes.delete(n),
          await this.storage.remove(this.getStorageKey(n)));
        return;
      }
      (await this.storage.clear(this.getStorageName()), this.dedupes.clear());
    }
    async get(t) {
      const n = await this.storage.get(t);
      return this.transformer && n ? await this.transformer.deserialize(n) : n;
    }
    async set(t, n, p, v) {
      return (
        this.transformer && (n = this.transformer.serialize(n)),
        this.storage.set(t, n, p, v)
      );
    }
    async invalidate(t) {
      return this.storage.invalidate(t);
    }
  }
  class f {
    constructor() {
      this.promise = null;
    }
  }
  function w() {}
  return ((ie.Cache = b), ie);
}
var pe, qe;
function yt() {
  if (qe) return pe;
  qe = 1;
  const { Cache: e } = dt(),
    s = Ye();
  function i(r) {
    r
      ? r.storage || (r.storage = { type: "memory" })
      : (r = { storage: { type: "memory" } });
    const a = s(r.storage.type, r.storage.options);
    return new e({ ...r, storage: a });
  }
  return ((pe = { Cache: e, createCache: i, createStorage: s }), pe);
}
var mt = yt();
let be = 0,
  Ue = [];
function pt() {
  return (
    (be += 1),
    () => {
      if (((be -= 1), be === 0)) {
        let e = Ue;
        Ue = [];
        for (let s of e) s();
      }
    }
  );
}
let D = [],
  Xe = (e, s) => {
    let i = [],
      r = {
        get() {
          return (r.lc || r.listen(() => {})(), r.value);
        },
        l: s || 0,
        lc: 0,
        listen(a, u) {
          return (
            (r.lc = i.push(a, u || r.l) / 2),
            () => {
              let h = i.indexOf(a);
              ~h && (i.splice(h, 2), --r.lc || r.off());
            }
          );
        },
        notify(a, u) {
          let h = !D.length;
          for (let l = 0; l < i.length; l += 2)
            D.push(i[l], i[l + 1], r.value, a, u);
          if (h) {
            for (let l = 0; l < D.length; l += 5) {
              let c;
              for (let d = l + 1; !c && (d += 5) < D.length; )
                D[d] < D[l + 1] &&
                  (c = D.push(D[l], D[l + 1], D[l + 2], D[l + 3], D[l + 4]));
              c || D[l](D[l + 2], D[l + 3], D[l + 4]);
            }
            D.length = 0;
          }
        },
        off() {},
        set(a) {
          let u = r.value;
          u !== a && ((r.value = a), r.notify(u));
        },
        subscribe(a, u) {
          let h = r.listen(a, u);
          return (a(r.value), h);
        },
        value: e
      };
    return r;
  };
const bt = 5,
  Z = 6,
  ee = 10;
let wt = (e, s, i, r) => (
    (e.events = e.events || {}),
    e.events[i + ee] ||
      (e.events[i + ee] = r((a) => {
        e.events[i].reduceRight((u, h) => (h(u), u), { shared: {}, ...a });
      })),
    (e.events[i] = e.events[i] || []),
    e.events[i].push(s),
    () => {
      let a = e.events[i],
        u = a.indexOf(s);
      (a.splice(u, 1),
        a.length ||
          (delete e.events[i], e.events[i + ee](), delete e.events[i + ee]));
    }
  ),
  vt = 1e3,
  St = (e, s) =>
    wt(
      e,
      (i) => {
        let r = s(i);
        r && e.events[Z].push(r);
      },
      bt,
      (i) => {
        let r = e.listen;
        e.listen = (...u) => (
          !e.lc && !e.active && ((e.active = !0), i()),
          r(...u)
        );
        let a = e.off;
        return (
          (e.events[Z] = []),
          (e.off = () => {
            (a(),
              setTimeout(() => {
                if (e.active && !e.lc) {
                  e.active = !1;
                  for (let u of e.events[Z]) u();
                  e.events[Z] = [];
                }
              }, vt));
          }),
          () => {
            ((e.listen = r), (e.off = a));
          }
        );
      }
    ),
  Et = (e = {}) => {
    let s = Xe(e);
    return (
      (s.setKey = function (i, r) {
        let a = s.value;
        typeof r > "u" && i in s.value
          ? ((s.value = { ...s.value }), delete s.value[i], s.notify(a, i))
          : s.value[i] !== r &&
            ((s.value = { ...s.value, [i]: r }), s.notify(a, i));
      }),
      s
    );
  };
const Ee = typeof document > "u" ? "server" : "browser",
  Rt = (e) => {
    const { ssr: s, setFetcher: i } = e;
    return (r) => {
      if (Ee === "server")
        throw new Error("Live mode is not supported in server environments");
      if (s && !r.client)
        throw new Error("The `client` option in `enableLiveMode` is required");
      const a = r.client || e.client || void 0,
        u = new AbortController();
      let h;
      return (
        rt(
          async () => {
            const { enableLiveMode: l } =
              await import("./enableLiveMode-D0jB9pgO.js");
            return { enableLiveMode: l };
          },
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        ).then(({ enableLiveMode: l }) => {
          u.signal.aborted ||
            (h = l({ ...r, client: a, setFetcher: i, ssr: s }));
        }),
        () => {
          (u.abort(), h == null || h());
        }
      );
    };
  };
function ze(e) {
  return e.withConfig({ allowReconfigure: !1 });
}
const Tt = (e) => {
  const { ssr: s = !1, tag: i = "core-loader" } = e;
  if (s && e.client)
    throw new TypeError(
      "`client` option is not allowed when `ssr: true`, use `setServerClient` from your server entry point instead"
    );
  if (!s && e.client === !1)
    throw new TypeError(
      "You must set `ssr: true` when `client: false` is used"
    );
  if (!s && !e.client) throw new TypeError("`client` is required");
  let r = s ? void 0 : ze(e.client);
  function a(g) {
    return mt.createCache().define("fetch", async (b) => {
      if (!g)
        throw new Error(
          "You have to set the Sanity client with `setServerClient` before any data fetching is done"
        );
      const {
          query: m,
          params: f = {},
          perspective: w,
          useCdn: E,
          stega: t
        } = JSON.parse(b),
        { result: n, resultSourceMap: p } = await g.fetch(m, f, {
          tag: i,
          filterResponse: !1,
          perspective: w,
          useCdn: E,
          stega: t
        });
      return { result: n, resultSourceMap: p };
    });
  }
  function u() {
    const g = (r == null ? void 0 : r.config().perspective) || "published";
    return (
      (h.instance = a(r)),
      {
        hydrate: (b, m, f) => ({
          loading:
            (f == null ? void 0 : f.data) === void 0 ||
            (f == null ? void 0 : f.sourceMap) === void 0,
          error: void 0,
          data: f == null ? void 0 : f.data,
          sourceMap: f == null ? void 0 : f.sourceMap,
          perspective: g
        }),
        fetch: (b, m, f, w) => {
          if (w.signal.aborted) return;
          const E = pt();
          (f.setKey("loading", !0),
            f.setKey("error", void 0),
            h.instance
              .fetch(JSON.stringify({ query: b, params: m }))
              .then((t) => {
                w.signal.aborted ||
                  (f.setKey("data", t.result),
                  f.setKey("sourceMap", t.resultSourceMap),
                  f.setKey("perspective", g));
              })
              .catch((t) => {
                f.setKey("error", t);
              })
              .finally(() => {
                (f.setKey("loading", !1), E());
              }));
        }
      }
    );
  }
  const h = { instance: a(r) },
    l = Xe(r ? u() : void 0),
    c = Rt({
      client: r || void 0,
      ssr: s,
      setFetcher: (g) => {
        const b = l.get();
        return (l.set(g), () => l.set(b));
      }
    }),
    d = (g, b = {}, m) => {
      const f = l.get(),
        w = Et(
          f
            ? f.hydrate(g, b, m)
            : {
                loading: !1,
                error:
                  typeof (m == null ? void 0 : m.data) > "u"
                    ? new Error(
                        "The `initial` option is required when `ssr: true`"
                      )
                    : void 0,
                data: m == null ? void 0 : m.data,
                sourceMap: m == null ? void 0 : m.sourceMap,
                perspective: m == null ? void 0 : m.perspective
              }
        );
      return (
        St(w, () => {
          let E = new AbortController();
          const t = l.subscribe((n) => {
            !n ||
              E.signal.aborted ||
              (E.abort(), (E = new AbortController()), n.fetch(g, b, w, E));
          });
          return () => {
            (E.abort(), t());
          };
        }),
        w
      );
    },
    o = { instance: void 0, canPreviewDrafts: !1 };
  return {
    createFetcherStore: d,
    enableLiveMode: c,
    setServerClient: (g) => {
      if (Ee !== "server")
        throw new Error(
          "`setServerClient` can only be called in server environments, detected: " +
            JSON.stringify(Ee)
        );
      if (!s)
        throw new Error(
          "`setServerClient` can only be called when `ssr: true`"
        );
      ((o.instance = r = ze(g)),
        (o.canPreviewDrafts = !!r.config().token),
        l.set(u()));
    },
    unstable__cache: h,
    unstable__serverClient: o
  };
};
var we;
function _t(e) {
  return we == null ? void 0 : we.get(e);
}
var ve;
function At(e) {
  return ve == null ? void 0 : ve.get(e);
}
var Se;
function Ot(e, s) {
  var i;
  return (i = Se == null ? void 0 : Se.get(e)) == null ? void 0 : i.get(s);
}
function Mt(e) {
  var i, r;
  let s = typeof e;
  return (
    s === "object" &&
      (s =
        (e &&
          ((r =
            (i = Object.getPrototypeOf(e)) == null ? void 0 : i.constructor) ==
          null
            ? void 0
            : r.name)) ??
        "null"),
    s === "string"
      ? `"${e}"`
      : s === "number" || s === "bigint" || s === "boolean"
        ? `${e}`
        : s
  );
}
function re(e, s, i, r, a) {
  const u = a && "input" in a ? a.input : i.value,
    h = (a == null ? void 0 : a.expected) ?? e.expects,
    l = (a == null ? void 0 : a.received) ?? Mt(u),
    c = {
      kind: e.kind,
      type: e.type,
      input: u,
      expected: h,
      received: l,
      message: `Invalid ${s}: ${h ? `Expected ${h} but r` : "R"}eceived ${l}`,
      requirement: e.requirement,
      path: a == null ? void 0 : a.path,
      issues: a == null ? void 0 : a.issues,
      lang: r.lang,
      abortEarly: r.abortEarly,
      abortPipeEarly: r.abortPipeEarly,
      skipPipe: r.skipPipe
    },
    d = e.kind === "schema",
    o =
      e.message ??
      Ot(e.reference, c.lang) ??
      (d ? At(c.lang) : null) ??
      r.message ??
      _t(c.lang);
  (o && (c.message = typeof o == "function" ? o(c) : o),
    d && (i.typed = !1),
    i.issues ? i.issues.push(c) : (i.issues = [c]));
}
function $t(e) {
  return e !== "__proto__" && e !== "prototype" && e !== "constructor";
}
function We(e, s) {
  return {
    kind: "validation",
    type: "min_length",
    reference: We,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: s,
    _run(i, r) {
      return (
        i.typed &&
          i.value.length < this.requirement &&
          re(this, "length", i, r, { received: `${i.value.length}` }),
        i
      );
    }
  };
}
function It(e, s, i) {
  return typeof e.default == "function" ? e.default(s, i) : e.default;
}
function Lt(e, s) {
  return !e._run({ typed: !1, value: s }, { abortEarly: !0 }).issues;
}
function Te(e, s) {
  return {
    kind: "schema",
    type: "object",
    reference: Te,
    expects: "Object",
    async: !1,
    entries: e,
    message: s,
    _run(i, r) {
      var u;
      const a = i.value;
      if (a && typeof a == "object") {
        ((i.typed = !0), (i.value = {}));
        for (const h in this.entries) {
          const l = a[h],
            c = this.entries[h]._run({ typed: !1, value: l }, r);
          if (c.issues) {
            const d = {
              type: "object",
              origin: "value",
              input: a,
              key: h,
              value: l
            };
            for (const o of c.issues)
              (o.path ? o.path.unshift(d) : (o.path = [d]),
                (u = i.issues) == null || u.push(o));
            if ((i.issues || (i.issues = c.issues), r.abortEarly)) {
              i.typed = !1;
              break;
            }
          }
          (c.typed || (i.typed = !1),
            (c.value !== void 0 || h in a) && (i.value[h] = c.value));
        }
      } else re(this, "type", i, r);
      return i;
    }
  };
}
function ne(e, ...s) {
  const i = {
    kind: "schema",
    type: "optional",
    reference: ne,
    expects: `${e.expects} | undefined`,
    async: !1,
    wrapped: e,
    _run(r, a) {
      return r.value === void 0 &&
        ("default" in this && (r.value = It(this, r, a)), r.value === void 0)
        ? ((r.typed = !0), r)
        : this.wrapped._run(r, a);
    }
  };
  return (0 in s && (i.default = s[0]), i);
}
function Ze(e, s, i) {
  return {
    kind: "schema",
    type: "record",
    reference: Ze,
    expects: "Object",
    async: !1,
    key: e,
    value: s,
    message: i,
    _run(r, a) {
      var h, l;
      const u = r.value;
      if (u && typeof u == "object") {
        ((r.typed = !0), (r.value = {}));
        for (const c in u)
          if ($t(c)) {
            const d = u[c],
              o = this.key._run({ typed: !1, value: c }, a);
            if (o.issues) {
              const b = {
                type: "record",
                origin: "key",
                input: u,
                key: c,
                value: d
              };
              for (const m of o.issues)
                ((m.path = [b]), (h = r.issues) == null || h.push(m));
              if ((r.issues || (r.issues = o.issues), a.abortEarly)) {
                r.typed = !1;
                break;
              }
            }
            const g = this.value._run({ typed: !1, value: d }, a);
            if (g.issues) {
              const b = {
                type: "record",
                origin: "value",
                input: u,
                key: c,
                value: d
              };
              for (const m of g.issues)
                (m.path ? m.path.unshift(b) : (m.path = [b]),
                  (l = r.issues) == null || l.push(m));
              if ((r.issues || (r.issues = g.issues), a.abortEarly)) {
                r.typed = !1;
                break;
              }
            }
            ((!o.typed || !g.typed) && (r.typed = !1),
              o.typed && (r.value[o.value] = g.value));
          }
      } else re(this, "type", r, a);
      return r;
    }
  };
}
function se(e) {
  return {
    kind: "schema",
    type: "string",
    reference: se,
    expects: "string",
    async: !1,
    message: e,
    _run(s, i) {
      return (
        typeof s.value == "string" ? (s.typed = !0) : re(this, "type", s, i),
        s
      );
    }
  };
}
function et() {
  return {
    kind: "schema",
    type: "unknown",
    reference: et,
    expects: "unknown",
    async: !1,
    _run(e) {
      return ((e.typed = !0), e);
    }
  };
}
function Kt(...e) {
  return {
    ...e[0],
    pipe: e,
    _run(s, i) {
      for (let r = 0; r < e.length; r++) {
        s = e[r]._run(s, i);
        const a = e[r + 1];
        if (
          i.skipPipe ||
          (s.issues &&
            (i.abortEarly ||
              i.abortPipeEarly ||
              (a == null ? void 0 : a.kind) === "schema" ||
              (a == null ? void 0 : a.kind) === "transformation"))
        ) {
          s.typed = !1;
          break;
        }
      }
      return s;
    }
  };
}
function xt(e) {
  return e !== null && Array.isArray(e);
}
function Pt(e) {
  let s = "";
  for (const i of e) {
    if (typeof i == "string") {
      (s && (s += "."), (s += i));
      continue;
    }
    if (typeof i == "number") {
      (s && (s += ":"), (s += `${i}`));
      continue;
    }
    if (xt(i)) {
      (s && (s += ":"), (s += `${i.join(",")}}`));
      continue;
    }
    if (i._key) {
      (s && (s += ":"), (s += `${i._key}`));
      continue;
    }
  }
  return s;
}
const kt = "drafts.",
  Y = Kt(se(), We(1)),
  X = ne(Y),
  jt = Te({
    baseUrl: Y,
    dataset: X,
    id: Y,
    path: Y,
    projectId: X,
    tool: X,
    type: X,
    workspace: X,
    isDraft: ne(se())
  });
Te({ origin: Y, href: Y, data: ne(Ze(se(), et())) });
function Nt(e) {
  return Lt(jt, e);
}
function Dt(e) {
  const { id: s, path: i, baseUrl: r, tool: a, workspace: u, type: h } = e;
  return Nt(e)
    ? [
        ["id", nt(s)],
        ["type", h],
        ["path", Pt(Re.fromString(i))],
        ["base", encodeURIComponent(r)],
        ["workspace", u],
        ["tool", a],
        ["isDraft", s.startsWith(kt)]
      ]
        .filter(([, l]) => !!l)
        .map((l) => {
          const [c, d] = l;
          return d === !0 ? c : l.join("=");
        })
        .join(";")
    : void 0;
}
const Ct = (e, s, i, r) => {
  if (!s || !i) return;
  const a = st(r),
    u = it({ resultPath: a, resultSourceMap: s, studioUrl: i });
  if (u)
    return Dt({
      baseUrl: u.baseUrl,
      workspace: u.workspace,
      tool: u.tool,
      type: u.type,
      id: u.id,
      path: typeof u.path == "string" ? u.path : Re.toString(ot(u.path))
    });
};
function tt(e, s, i, r) {
  const a = (h) => (h ? (typeof h == "string" ? Re.fromString(h) : h) : []),
    u = a(r);
  return Object.assign((h) => Ct(e, s, i, [...u, ...a(h)]), {
    scope: (h) => tt(e, s, i, [...u, ...a(h)])
  });
}
function qt(e) {
  let s =
    typeof e == "object"
      ? e == null
        ? void 0
        : e.config().stega.studioUrl
      : void 0;
  const i = s,
    r = new Set();
  return {
    subscribe(a) {
      return (r.add(a), () => r.delete(a));
    },
    getSnapshot() {
      return s;
    },
    getServerSnapshot() {
      return i;
    },
    setStudioUrl(a) {
      ((s = a), r.forEach((u) => u()));
    }
  };
}
function Ut({ enableLiveMode: e, setStudioUrl: s }) {
  return ({
    allowStudioOrigin: i,
    client: r,
    onConnect: a,
    onDisconnect: u,
    studioUrl: h
  }) => {
    (G.useEffect(() => {
      i &&
        console.warn("`allowStudioOrigin` is deprecated and no longer needed");
      const l = e({ client: r, onConnect: a, onDisconnect: u });
      return () => l();
    }, [i, r, a, u]),
      G.useEffect(() => {
        s(
          (h ?? typeof r == "object")
            ? r == null
              ? void 0
              : r.config().stega.studioUrl
            : void 0
        );
      }, [h, r]));
  };
}
function zt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Fe, Ve;
function Ft() {
  return (
    Ve ||
      ((Ve = 1),
      (Fe = function e(s, i) {
        if (s === i) return !0;
        if (s && i && typeof s == "object" && typeof i == "object") {
          if (s.constructor !== i.constructor) return !1;
          var r, a, u;
          if (Array.isArray(s)) {
            if (((r = s.length), r != i.length)) return !1;
            for (a = r; a-- !== 0; ) if (!e(s[a], i[a])) return !1;
            return !0;
          }
          if (s.constructor === RegExp)
            return s.source === i.source && s.flags === i.flags;
          if (s.valueOf !== Object.prototype.valueOf)
            return s.valueOf() === i.valueOf();
          if (s.toString !== Object.prototype.toString)
            return s.toString() === i.toString();
          if (
            ((u = Object.keys(s)), (r = u.length), r !== Object.keys(i).length)
          )
            return !1;
          for (a = r; a-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(i, u[a])) return !1;
          for (a = r; a-- !== 0; ) {
            var h = u[a];
            if (!e(s[h], i[h])) return !1;
          }
          return !0;
        }
        return s !== s && i !== i;
      })),
    Fe
  );
}
var Vt = Ft(),
  Be = zt(Vt);
function Bt(e, s, i) {
  return G.useMemo(() => tt(e, s, i), [e, s, i]);
}
function Jt({ createFetcherStore: e, studioUrlStore: s }) {
  const i = {};
  return (r, a = i, u = {}) => {
    const h = G.useMemo(
        () => (u.initial ? { perspective: "published", ...u.initial } : void 0),
        [u.initial]
      ),
      l = G.useMemo(() => JSON.stringify(a), [a]),
      [c, d] = G.useState(() => e(r, JSON.parse(l), h).value);
    G.useEffect(() => {
      const b = e(r, JSON.parse(l), h).subscribe((m) => {
        d((f) =>
          !Be(f.sourceMap, m.sourceMap) ||
          !Be(f.data, m.data) ||
          f.error !== m.error ||
          f.loading !== m.loading ||
          f.perspective !== m.perspective
            ? m
            : f
        );
      });
      return () => b();
    }, [l, h, r]);
    const o = G.useSyncExternalStore(
        s.subscribe,
        s.getSnapshot,
        s.getServerSnapshot
      ),
      g = Bt(c.data, c.sourceMap, o);
    return G.useMemo(() => ({ ...c, encodeDataAttribute: g }), [c, g]);
  };
}
const Ht = (e) => {
    const { createFetcherStore: s, enableLiveMode: i } = Tt({
        tag: "react-loader",
        ...e
      }),
      r = qt(e.client),
      a = Jt({ createFetcherStore: s, studioUrlStore: r }),
      u = Ut({ enableLiveMode: i, setStudioUrl: r.setStudioUrl });
    return {
      loadQuery: () => {
        throw new Error("The `loadQuery` function is server only.");
      },
      useQuery: a,
      setServerClient: () => {
        throw new Error("The `setServerClient` function is server only.");
      },
      useLiveMode: u
    };
  },
  {
    loadQuery: Xt,
    setServerClient: Wt,
    useLiveMode: Zt,
    useQuery: er
  } = Ht({ client: !1, ssr: !0 });
export { Xe as a, er as b, Zt as u };

