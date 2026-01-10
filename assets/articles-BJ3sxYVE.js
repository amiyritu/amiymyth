import { w as on } from "./with-props-drQTeSIz.js";
import {
  E as ln,
  j as T,
  i as Ae,
  N as tr
} from "./chunk-7R3XDUXW-BHIEIWN9.js";
import { b as fn } from "./index.browser-BaKoqjVW.js";
import { P as hn, L as Oi, A as Dn } from "./app-footer-GtgmRUmX.js";
import { c as Q, I as St, B as _i } from "./index-DZJQCNLv.js";
import { u as _n } from "./theme-context-QVWfqZKI.js";
import { L as dn } from "./logo-CZee6gEJ.js";
import { i as Mi, f as cn, a as pn } from "./utils-CVA2UsiT.js";
import { g as mn } from "./meta-CzSvdXGV.js";
import "./preload-helper-D7HrI6pR.js";
import "./resolveEditInfo-Bqo3GpHw.js";
import "./stegaClean-YpGXIuvF.js";
import "./image-url.umd-DV0ObBZQ.js";
function vt(a) {
  if (a === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return a;
}
function er(a, t) {
  ((a.prototype = Object.create(t.prototype)),
    (a.prototype.constructor = a),
    (a.__proto__ = t));
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ht = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" }
  },
  ie = { duration: 0.5, overwrite: !1, delay: 0 },
  di,
  Z,
  j,
  ct = 1e8,
  z = 1 / ct,
  Ke = Math.PI * 2,
  gn = Ke / 4,
  xn = 0,
  ir = Math.sqrt,
  Cn = Math.cos,
  Fn = Math.sin,
  H = function (t) {
    return typeof t == "string";
  },
  V = function (t) {
    return typeof t == "function";
  },
  wt = function (t) {
    return typeof t == "number";
  },
  ci = function (t) {
    return typeof t > "u";
  },
  Et = function (t) {
    return typeof t == "object";
  },
  rt = function (t) {
    return t !== !1;
  },
  pi = function () {
    return typeof window < "u";
  },
  Ee = function (t) {
    return V(t) || H(t);
  },
  rr =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  J = Array.isArray,
  Ze = /(?:-?\.?\d|\.)+/gi,
  nr = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Qt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Ve = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  sr = /[+-]=-?[.\d]+/,
  ur = /[^,'"\[\]\s]+/gi,
  yn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  L,
  Ct,
  Je,
  mi,
  Dt = {},
  Se = {},
  ar,
  or = function (t) {
    return (Se = Xt(t, Dt)) && at;
  },
  gi = function (t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  ce = function (t, e) {
    return !e && console.warn(t);
  },
  lr = function (t, e) {
    return (t && (Dt[t] = e) && Se && (Se[t] = e)) || Dt;
  },
  pe = function () {
    return 0;
  },
  bn = { suppressEvents: !0, isStart: !0, kill: !1 },
  ve = { suppressEvents: !0, kill: !1 },
  En = { suppressEvents: !0 },
  xi = {},
  Ot = [],
  ti = {},
  fr,
  ot = {},
  Ue = {},
  Ni = 30,
  Te = [],
  Ci = "",
  Fi = function (t) {
    var e = t[0],
      i,
      r;
    if ((Et(e) || V(e) || (t = [t]), !(i = (e._gsap || {}).harness))) {
      for (r = Te.length; r-- && !Te[r].targetTest(e); );
      i = Te[r];
    }
    for (r = t.length; r--; )
      (t[r] && (t[r]._gsap || (t[r]._gsap = new Mr(t[r], i)))) ||
        t.splice(r, 1);
    return t;
  },
  Ut = function (t) {
    return t._gsap || Fi(pt(t))[0]._gsap;
  },
  hr = function (t, e, i) {
    return (i = t[e]) && V(i)
      ? t[e]()
      : (ci(i) && t.getAttribute && t.getAttribute(e)) || i;
  },
  nt = function (t, e) {
    return (t = t.split(",")).forEach(e) || t;
  },
  W = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  $ = function (t) {
    return Math.round(t * 1e7) / 1e7 || 0;
  },
  Jt = function (t, e) {
    var i = e.charAt(0),
      r = parseFloat(e.substr(2));
    return (
      (t = parseFloat(t)),
      i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
    );
  },
  vn = function (t, e) {
    for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
    return r < i;
  },
  Pe = function () {
    var t = Ot.length,
      e = Ot.slice(0),
      i,
      r;
    for (ti = {}, Ot.length = 0, i = 0; i < t; i++)
      ((r = e[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0));
  },
  Dr = function (t, e, i, r) {
    (Ot.length && !Z && Pe(),
      t.render(e, i, Z && e < 0 && (t._initted || t._startAt)),
      Ot.length && !Z && Pe());
  },
  _r = function (t) {
    var e = parseFloat(t);
    return (e || e === 0) && (t + "").match(ur).length < 2
      ? e
      : H(t)
        ? t.trim()
        : t;
  },
  dr = function (t) {
    return t;
  },
  mt = function (t, e) {
    for (var i in e) i in t || (t[i] = e[i]);
    return t;
  },
  Tn = function (t) {
    return function (e, i) {
      for (var r in i)
        r in e || (r === "duration" && t) || r === "ease" || (e[r] = i[r]);
    };
  },
  Xt = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  Ri = function a(t, e) {
    for (var i in e)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (t[i] = Et(e[i]) ? a(t[i] || (t[i] = {}), e[i]) : e[i]);
    return t;
  },
  Be = function (t, e) {
    var i = {},
      r;
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  },
  De = function (t) {
    var e = t.parent || L,
      i = t.keyframes ? Tn(J(t.keyframes)) : mt;
    if (rt(t.inherit))
      for (; e; ) (i(t, e.vars.defaults), (e = e.parent || e._dp));
    return t;
  },
  wn = function (t, e) {
    for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; );
    return i < 0;
  },
  cr = function (t, e, i, r, n) {
    var s = t[r],
      u;
    if (n) for (u = e[n]; s && s[n] > u; ) s = s._prev;
    return (
      s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[i]), (t[i] = e)),
      e._next ? (e._next._prev = e) : (t[r] = e),
      (e._prev = s),
      (e.parent = e._dp = t),
      e
    );
  },
  ze = function (t, e, i, r) {
    (i === void 0 && (i = "_first"), r === void 0 && (r = "_last"));
    var n = e._prev,
      s = e._next;
    (n ? (n._next = s) : t[i] === e && (t[i] = s),
      s ? (s._prev = n) : t[r] === e && (t[r] = n),
      (e._next = e._prev = e.parent = null));
  },
  Nt = function (t, e) {
    (t.parent &&
      (!e || t.parent.autoRemoveChildren) &&
      t.parent.remove &&
      t.parent.remove(t),
      (t._act = 0));
  },
  Yt = function (t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var i = t; i; ) ((i._dirty = 1), (i = i.parent));
    return t;
  },
  An = function (t) {
    for (var e = t.parent; e && e.parent; )
      ((e._dirty = 1), e.totalDuration(), (e = e.parent));
    return t;
  },
  ei = function (t, e, i, r) {
    return (
      t._startAt &&
      (Z
        ? t._startAt.revert(ve)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(e, !0, r))
    );
  },
  Sn = function a(t) {
    return !t || (t._ts && a(t.parent));
  },
  zi = function (t) {
    return t._repeat ? re(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  re = function (t, e) {
    var i = Math.floor((t /= e));
    return t && i === t ? i - 1 : i;
  },
  ke = function (t, e) {
    return (
      (t - e._start) * e._ts +
      (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  },
  je = function (t) {
    return (t._end = $(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || z) || 0)
    ));
  },
  Le = function (t, e) {
    var i = t._dp;
    return (
      i &&
        i.smoothChildTiming &&
        t._ts &&
        ((t._start = $(
          i._time -
            (t._ts > 0
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        je(t),
        i._dirty || Yt(i, t)),
      t
    );
  },
  pr = function (t, e) {
    var i;
    if (
      ((e._time ||
        (!e._dur && e._initted) ||
        (e._start < t._time && (e._dur || !e.add))) &&
        ((i = ke(t.rawTime(), e)),
        (!e._dur || be(0, e.totalDuration(), i) - e._tTime > z) &&
          e.render(i, !0)),
      Yt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (i = t; i._dp; )
          (i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp));
      t._zTime = -z;
    }
  },
  Ft = function (t, e, i, r) {
    return (
      e.parent && Nt(e),
      (e._start = $(
        (wt(i) ? i : i || t !== L ? dt(t, i, e) : t._time) + e._delay
      )),
      (e._end = $(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      cr(t, e, "_first", "_last", t._sort ? "_start" : 0),
      ii(e) || (t._recent = e),
      r || pr(t, e),
      t._ts < 0 && Le(t, t._tTime),
      t
    );
  },
  mr = function (t, e) {
    return (
      (Dt.ScrollTrigger || gi("scrollTrigger", e)) &&
      Dt.ScrollTrigger.create(e, t)
    );
  },
  gr = function (t, e, i, r, n) {
    if ((bi(t, e, n), !t._initted)) return 1;
    if (
      !i &&
      t._pt &&
      !Z &&
      ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
      fr !== lt.frame
    )
      return (Ot.push(t), (t._lazy = [n, r]), 1);
  },
  Pn = function a(t) {
    var e = t.parent;
    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e));
  },
  ii = function (t) {
    var e = t.data;
    return e === "isFromStart" || e === "isStart";
  },
  Bn = function (t, e, i, r) {
    var n = t.ratio,
      s =
        e < 0 ||
        (!e &&
          ((!t._start && Pn(t) && !(!t._initted && ii(t))) ||
            ((t._ts < 0 || t._dp._ts < 0) && !ii(t))))
          ? 0
          : 1,
      u = t._rDelay,
      o = 0,
      l,
      f,
      D;
    if (
      (u &&
        t._repeat &&
        ((o = be(0, t._tDur, e)),
        (f = re(o, u)),
        t._yoyo && f & 1 && (s = 1 - s),
        f !== re(t._tTime, u) &&
          ((n = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
      s !== n || Z || r || t._zTime === z || (!e && t._zTime))
    ) {
      if (!t._initted && gr(t, e, r, i, o)) return;
      for (
        D = t._zTime,
          t._zTime = e || (i ? z : 0),
          i || (i = e && !D),
          t.ratio = s,
          t._from && (s = 1 - s),
          t._time = 0,
          t._tTime = o,
          l = t._pt;
        l;
      )
        (l.r(s, l.d), (l = l._next));
      (e < 0 && ei(t, e, i, !0),
        t._onUpdate && !i && ft(t, "onUpdate"),
        o && t._repeat && !i && t.parent && ft(t, "onRepeat"),
        (e >= t._tDur || e < 0) &&
          t.ratio === s &&
          (s && Nt(t, 1),
          !i &&
            !Z &&
            (ft(t, s ? "onComplete" : "onReverseComplete", !0),
            t._prom && t._prom())));
    } else t._zTime || (t._zTime = e);
  },
  kn = function (t, e, i) {
    var r;
    if (i > e)
      for (r = t._first; r && r._start <= i; ) {
        if (r.data === "isPause" && r._start > e) return r;
        r = r._next;
      }
    else
      for (r = t._last; r && r._start >= i; ) {
        if (r.data === "isPause" && r._start < e) return r;
        r = r._prev;
      }
  },
  ne = function (t, e, i, r) {
    var n = t._repeat,
      s = $(e) || 0,
      u = t._tTime / t._tDur;
    return (
      u && !r && (t._time *= s / t._dur),
      (t._dur = s),
      (t._tDur = n ? (n < 0 ? 1e10 : $(s * (n + 1) + t._rDelay * n)) : s),
      u > 0 && !r && Le(t, (t._tTime = t._tDur * u)),
      t.parent && je(t),
      i || Yt(t.parent, t),
      t
    );
  },
  ji = function (t) {
    return t instanceof it ? Yt(t) : ne(t, t._dur);
  },
  On = { _start: 0, endTime: pe, totalDuration: pe },
  dt = function a(t, e, i) {
    var r = t.labels,
      n = t._recent || On,
      s = t.duration() >= ct ? n.endTime(!1) : t._dur,
      u,
      o,
      l;
    return H(e) && (isNaN(e) || e in r)
      ? ((o = e.charAt(0)),
        (l = e.substr(-1) === "%"),
        (u = e.indexOf("=")),
        o === "<" || o === ">"
          ? (u >= 0 && (e = e.replace(/=/, "")),
            (o === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(e.substr(1)) || 0) *
                (l ? (u < 0 ? n : i).totalDuration() / 100 : 1))
          : u < 0
            ? (e in r || (r[e] = s), r[e])
            : ((o = parseFloat(e.charAt(u - 1) + e.substr(u + 1))),
              l && i && (o = (o / 100) * (J(i) ? i[0] : i).totalDuration()),
              u > 1 ? a(t, e.substr(0, u - 1), i) + o : s + o))
      : e == null
        ? s
        : +e;
  },
  _e = function (t, e, i) {
    var r = wt(e[1]),
      n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
      s = e[n],
      u,
      o;
    if ((r && (s.duration = e[1]), (s.parent = i), t)) {
      for (u = s, o = i; o && !("immediateRender" in u); )
        ((u = o.vars.defaults || {}), (o = rt(o.vars.inherit) && o.parent));
      ((s.immediateRender = rt(u.immediateRender)),
        t < 2 ? (s.runBackwards = 1) : (s.startAt = e[n - 1]));
    }
    return new X(e[0], s, e[n + 1]);
  },
  zt = function (t, e) {
    return t || t === 0 ? e(t) : e;
  },
  be = function (t, e, i) {
    return i < t ? t : i > e ? e : i;
  },
  K = function (t, e) {
    return !H(t) || !(e = yn.exec(t)) ? "" : e[1];
  },
  Mn = function (t, e, i) {
    return zt(i, function (r) {
      return be(t, e, r);
    });
  },
  ri = [].slice,
  xr = function (t, e) {
    return (
      t &&
      Et(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && Et(t[0]))) &&
      !t.nodeType &&
      t !== Ct
    );
  },
  Nn = function (t, e, i) {
    return (
      i === void 0 && (i = []),
      t.forEach(function (r) {
        var n;
        return (H(r) && !e) || xr(r, 1)
          ? (n = i).push.apply(n, pt(r))
          : i.push(r);
      }) || i
    );
  },
  pt = function (t, e, i) {
    return j && !e && j.selector
      ? j.selector(t)
      : H(t) && !i && (Je || !se())
        ? ri.call((e || mi).querySelectorAll(t), 0)
        : J(t)
          ? Nn(t, i)
          : xr(t)
            ? ri.call(t, 0)
            : t
              ? [t]
              : [];
  },
  ni = function (t) {
    return (
      (t = pt(t)[0] || ce("Invalid scope") || {}),
      function (e) {
        var i = t.current || t.nativeElement || t;
        return pt(
          e,
          i.querySelectorAll
            ? i
            : i === t
              ? ce("Invalid scope") || mi.createElement("div")
              : t
        );
      }
    );
  },
  Cr = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Fr = function (t) {
    if (V(t)) return t;
    var e = Et(t) ? t : { each: t },
      i = Wt(e.ease),
      r = e.from || 0,
      n = parseFloat(e.base) || 0,
      s = {},
      u = r > 0 && r < 1,
      o = isNaN(r) || u,
      l = e.axis,
      f = r,
      D = r;
    return (
      H(r)
        ? (f = D = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !u && o && ((f = r[0]), (D = r[1])),
      function (_, d, p) {
        var h = (p || e).length,
          c = s[h],
          m,
          C,
          y,
          x,
          g,
          w,
          E,
          v,
          F;
        if (!c) {
          if (((F = e.grid === "auto" ? 0 : (e.grid || [1, ct])[1]), !F)) {
            for (
              E = -ct;
              E < (E = p[F++].getBoundingClientRect().left) && F < h;
            );
            F < h && F--;
          }
          for (
            c = s[h] = [],
              m = o ? Math.min(F, h) * f - 0.5 : r % F,
              C = F === ct ? 0 : o ? (h * D) / F - 0.5 : (r / F) | 0,
              E = 0,
              v = ct,
              w = 0;
            w < h;
            w++
          )
            ((y = (w % F) - m),
              (x = C - ((w / F) | 0)),
              (c[w] = g = l ? Math.abs(l === "y" ? x : y) : ir(y * y + x * x)),
              g > E && (E = g),
              g < v && (v = g));
          (r === "random" && Cr(c),
            (c.max = E - v),
            (c.min = v),
            (c.v = h =
              (parseFloat(e.amount) ||
                parseFloat(e.each) *
                  (F > h
                    ? h - 1
                    : l
                      ? l === "y"
                        ? h / F
                        : F
                      : Math.max(F, h / F)) ||
                0) * (r === "edges" ? -1 : 1)),
            (c.b = h < 0 ? n - h : n),
            (c.u = K(e.amount || e.each) || 0),
            (i = i && h < 0 ? Br(i) : i));
        }
        return (
          (h = (c[_] - c.min) / c.max || 0),
          $(c.b + (i ? i(h) : h) * c.v) + c.u
        );
      }
    );
  },
  si = function (t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (i) {
      var r = $(Math.round(parseFloat(i) / t) * t * e);
      return (r - (r % 1)) / e + (wt(i) ? 0 : K(i));
    };
  },
  yr = function (t, e) {
    var i = J(t),
      r,
      n;
    return (
      !i &&
        Et(t) &&
        ((r = i = t.radius || ct),
        t.values
          ? ((t = pt(t.values)), (n = !wt(t[0])) && (r *= r))
          : (t = si(t.increment))),
      zt(
        e,
        i
          ? V(t)
            ? function (s) {
                return ((n = t(s)), Math.abs(n - s) <= r ? n : s);
              }
            : function (s) {
                for (
                  var u = parseFloat(n ? s.x : s),
                    o = parseFloat(n ? s.y : 0),
                    l = ct,
                    f = 0,
                    D = t.length,
                    _,
                    d;
                  D--;
                )
                  (n
                    ? ((_ = t[D].x - u), (d = t[D].y - o), (_ = _ * _ + d * d))
                    : (_ = Math.abs(t[D] - u)),
                    _ < l && ((l = _), (f = D)));
                return (
                  (f = !r || l <= r ? t[f] : s),
                  n || f === s || wt(s) ? f : f + K(s)
                );
              }
          : si(t)
      )
    );
  },
  br = function (t, e, i, r) {
    return zt(J(t) ? !e : i === !0 ? !!(i = 0) : !r, function () {
      return J(t)
        ? t[~~(Math.random() * t.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) *
                i *
                r
            ) / r;
    });
  },
  Rn = function () {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return function (r) {
      return e.reduce(function (n, s) {
        return s(n);
      }, r);
    };
  },
  zn = function (t, e) {
    return function (i) {
      return t(parseFloat(i)) + (e || K(i));
    };
  },
  jn = function (t, e, i) {
    return vr(t, e, 0, 1, i);
  },
  Er = function (t, e, i) {
    return zt(i, function (r) {
      return t[~~e(r)];
    });
  },
  Ln = function a(t, e, i) {
    var r = e - t;
    return J(t)
      ? Er(t, a(0, t.length), e)
      : zt(i, function (n) {
          return ((r + ((n - t) % r)) % r) + t;
        });
  },
  In = function a(t, e, i) {
    var r = e - t,
      n = r * 2;
    return J(t)
      ? Er(t, a(0, t.length - 1), e)
      : zt(i, function (s) {
          return ((s = (n + ((s - t) % n)) % n || 0), t + (s > r ? n - s : s));
        });
  },
  me = function (t) {
    for (var e = 0, i = "", r, n, s, u; ~(r = t.indexOf("random(", e)); )
      ((s = t.indexOf(")", r)),
        (u = t.charAt(r + 7) === "["),
        (n = t.substr(r + 7, s - r - 7).match(u ? ur : Ze)),
        (i +=
          t.substr(e, r - e) + br(u ? n : +n[0], u ? 0 : +n[1], +n[2] || 1e-5)),
        (e = s + 1));
    return i + t.substr(e, t.length - e);
  },
  vr = function (t, e, i, r, n) {
    var s = e - t,
      u = r - i;
    return zt(n, function (o) {
      return i + (((o - t) / s) * u || 0);
    });
  },
  Vn = function a(t, e, i, r) {
    var n = isNaN(t + e)
      ? 0
      : function (d) {
          return (1 - d) * t + d * e;
        };
    if (!n) {
      var s = H(t),
        u = {},
        o,
        l,
        f,
        D,
        _;
      if ((i === !0 && (r = 1) && (i = null), s))
        ((t = { p: t }), (e = { p: e }));
      else if (J(t) && !J(e)) {
        for (f = [], D = t.length, _ = D - 2, l = 1; l < D; l++)
          f.push(a(t[l - 1], t[l]));
        (D--,
          (n = function (p) {
            p *= D;
            var h = Math.min(_, ~~p);
            return f[h](p - h);
          }),
          (i = e));
      } else r || (t = Xt(J(t) ? [] : {}, t));
      if (!f) {
        for (o in e) yi.call(u, t, o, "get", e[o]);
        n = function (p) {
          return Ti(p, u) || (s ? t.p : t);
        };
      }
    }
    return zt(i, n);
  },
  Li = function (t, e, i) {
    var r = t.labels,
      n = ct,
      s,
      u,
      o;
    for (s in r)
      ((u = r[s] - e),
        u < 0 == !!i && u && n > (u = Math.abs(u)) && ((o = s), (n = u)));
    return o;
  },
  ft = function (t, e, i) {
    var r = t.vars,
      n = r[e],
      s = j,
      u = t._ctx,
      o,
      l,
      f;
    if (n)
      return (
        (o = r[e + "Params"]),
        (l = r.callbackScope || t),
        i && Ot.length && Pe(),
        u && (j = u),
        (f = o ? n.apply(l, o) : n.call(l)),
        (j = s),
        f
      );
  },
  fe = function (t) {
    return (
      Nt(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!Z),
      t.progress() < 1 && ft(t, "onInterrupt"),
      t
    );
  },
  Kt,
  Tr = [],
  wr = function (t) {
    if (t)
      if (((t = (!t.name && t.default) || t), pi() || t.headless)) {
        var e = t.name,
          i = V(t),
          r =
            e && !i && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          n = {
            init: pe,
            render: Ti,
            add: yi,
            kill: rs,
            modifier: is,
            rawVars: 0
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: vi,
            aliases: {},
            register: 0
          };
        if ((se(), t !== r)) {
          if (ot[e]) return;
          (mt(r, mt(Be(t, n), s)),
            Xt(r.prototype, Xt(n, Be(t, s))),
            (ot[(r.prop = e)] = r),
            t.targetTest && (Te.push(r), (xi[e] = 1)),
            (e =
              (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
              "Plugin"));
        }
        (lr(e, r), t.register && t.register(at, r, st));
      } else Tr.push(t);
  },
  R = 255,
  he = {
    aqua: [0, R, R],
    lime: [0, R, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, R],
    navy: [0, 0, 128],
    white: [R, R, R],
    olive: [128, 128, 0],
    yellow: [R, R, 0],
    orange: [R, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [R, 0, 0],
    pink: [R, 192, 203],
    cyan: [0, R, R],
    transparent: [R, R, R, 0]
  },
  Ye = function (t, e, i) {
    return (
      (t += t < 0 ? 1 : t > 1 ? -1 : 0),
      ((t * 6 < 1
        ? e + (i - e) * t * 6
        : t < 0.5
          ? i
          : t * 3 < 2
            ? e + (i - e) * (2 / 3 - t) * 6
            : e) *
        R +
        0.5) |
        0
    );
  },
  Ar = function (t, e, i) {
    var r = t ? (wt(t) ? [t >> 16, (t >> 8) & R, t & R] : 0) : he.black,
      n,
      s,
      u,
      o,
      l,
      f,
      D,
      _,
      d,
      p;
    if (!r) {
      if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), he[t]))
        r = he[t];
      else if (t.charAt(0) === "#") {
        if (
          (t.length < 6 &&
            ((n = t.charAt(1)),
            (s = t.charAt(2)),
            (u = t.charAt(3)),
            (t =
              "#" +
              n +
              n +
              s +
              s +
              u +
              u +
              (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
          t.length === 9)
        )
          return (
            (r = parseInt(t.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & R, r & R, parseInt(t.substr(7), 16) / 255]
          );
        ((t = parseInt(t.substr(1), 16)), (r = [t >> 16, (t >> 8) & R, t & R]));
      } else if (t.substr(0, 3) === "hsl") {
        if (((r = p = t.match(Ze)), !e))
          ((o = (+r[0] % 360) / 360),
            (l = +r[1] / 100),
            (f = +r[2] / 100),
            (s = f <= 0.5 ? f * (l + 1) : f + l - f * l),
            (n = f * 2 - s),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Ye(o + 1 / 3, n, s)),
            (r[1] = Ye(o, n, s)),
            (r[2] = Ye(o - 1 / 3, n, s)));
        else if (~t.indexOf("="))
          return ((r = t.match(nr)), i && r.length < 4 && (r[3] = 1), r);
      } else r = t.match(Ze) || he.transparent;
      r = r.map(Number);
    }
    return (
      e &&
        !p &&
        ((n = r[0] / R),
        (s = r[1] / R),
        (u = r[2] / R),
        (D = Math.max(n, s, u)),
        (_ = Math.min(n, s, u)),
        (f = (D + _) / 2),
        D === _
          ? (o = l = 0)
          : ((d = D - _),
            (l = f > 0.5 ? d / (2 - D - _) : d / (D + _)),
            (o =
              D === n
                ? (s - u) / d + (s < u ? 6 : 0)
                : D === s
                  ? (u - n) / d + 2
                  : (n - s) / d + 4),
            (o *= 60)),
        (r[0] = ~~(o + 0.5)),
        (r[1] = ~~(l * 100 + 0.5)),
        (r[2] = ~~(f * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  },
  Sr = function (t) {
    var e = [],
      i = [],
      r = -1;
    return (
      t.split(Mt).forEach(function (n) {
        var s = n.match(Qt) || [];
        (e.push.apply(e, s), i.push((r += s.length + 1)));
      }),
      (e.c = i),
      e
    );
  },
  Ii = function (t, e, i) {
    var r = "",
      n = (t + r).match(Mt),
      s = e ? "hsla(" : "rgba(",
      u = 0,
      o,
      l,
      f,
      D;
    if (!n) return t;
    if (
      ((n = n.map(function (_) {
        return (
          (_ = Ar(_, e, 1)) &&
          s +
            (e ? _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : _.join(",")) +
            ")"
        );
      })),
      i && ((f = Sr(t)), (o = i.c), o.join(r) !== f.c.join(r)))
    )
      for (l = t.replace(Mt, "1").split(Qt), D = l.length - 1; u < D; u++)
        r +=
          l[u] +
          (~o.indexOf(u)
            ? n.shift() || s + "0,0,0,0)"
            : (f.length ? f : n.length ? n : i).shift());
    if (!l)
      for (l = t.split(Mt), D = l.length - 1; u < D; u++) r += l[u] + n[u];
    return r + l[D];
  },
  Mt = (function () {
    var a =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      t;
    for (t in he) a += "|" + t + "\\b";
    return new RegExp(a + ")", "gi");
  })(),
  Un = /hsl[a]?\(/,
  Pr = function (t) {
    var e = t.join(" "),
      i;
    if (((Mt.lastIndex = 0), Mt.test(e)))
      return (
        (i = Un.test(e)),
        (t[1] = Ii(t[1], i)),
        (t[0] = Ii(t[0], i, Sr(t[1]))),
        !0
      );
  },
  ge,
  lt = (function () {
    var a = Date.now,
      t = 500,
      e = 33,
      i = a(),
      r = i,
      n = 1e3 / 240,
      s = n,
      u = [],
      o,
      l,
      f,
      D,
      _,
      d,
      p = function h(c) {
        var m = a() - r,
          C = c === !0,
          y,
          x,
          g,
          w;
        if (
          ((m > t || m < 0) && (i += m - e),
          (r += m),
          (g = r - i),
          (y = g - s),
          (y > 0 || C) &&
            ((w = ++D.frame),
            (_ = g - D.time * 1e3),
            (D.time = g = g / 1e3),
            (s += y + (y >= n ? 4 : n - y)),
            (x = 1)),
          C || (o = l(h)),
          x)
        )
          for (d = 0; d < u.length; d++) u[d](g, _, w, c);
      };
    return (
      (D = {
        time: 0,
        frame: 0,
        tick: function () {
          p(!0);
        },
        deltaRatio: function (c) {
          return _ / (1e3 / (c || 60));
        },
        wake: function () {
          ar &&
            (!Je &&
              pi() &&
              ((Ct = Je = window),
              (mi = Ct.document || {}),
              (Dt.gsap = at),
              (Ct.gsapVersions || (Ct.gsapVersions = [])).push(at.version),
              or(Se || Ct.GreenSockGlobals || (!Ct.gsap && Ct) || {}),
              Tr.forEach(wr)),
            (f = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            o && D.sleep(),
            (l =
              f ||
              function (c) {
                return setTimeout(c, (s - D.time * 1e3 + 1) | 0);
              }),
            (ge = 1),
            p(2));
        },
        sleep: function () {
          ((f ? cancelAnimationFrame : clearTimeout)(o), (ge = 0), (l = pe));
        },
        lagSmoothing: function (c, m) {
          ((t = c || 1 / 0), (e = Math.min(m || 33, t)));
        },
        fps: function (c) {
          ((n = 1e3 / (c || 240)), (s = D.time * 1e3 + n));
        },
        add: function (c, m, C) {
          var y = m
            ? function (x, g, w, E) {
                (c(x, g, w, E), D.remove(y));
              }
            : c;
          return (D.remove(c), u[C ? "unshift" : "push"](y), se(), y);
        },
        remove: function (c, m) {
          ~(m = u.indexOf(c)) && u.splice(m, 1) && d >= m && d--;
        },
        _listeners: u
      }),
      D
    );
  })(),
  se = function () {
    return !ge && lt.wake();
  },
  B = {},
  Yn = /^[\d.\-M][\d.\-,\s]/,
  Wn = /["']/g,
  qn = function (t) {
    for (
      var e = {},
        i = t.substr(1, t.length - 3).split(":"),
        r = i[0],
        n = 1,
        s = i.length,
        u,
        o,
        l;
      n < s;
      n++
    )
      ((o = i[n]),
        (u = n !== s - 1 ? o.lastIndexOf(",") : o.length),
        (l = o.substr(0, u)),
        (e[r] = isNaN(l) ? l.replace(Wn, "").trim() : +l),
        (r = o.substr(u + 1).trim()));
    return e;
  },
  Xn = function (t) {
    var e = t.indexOf("(") + 1,
      i = t.indexOf(")"),
      r = t.indexOf("(", e);
    return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
  },
  Gn = function (t) {
    var e = (t + "").split("("),
      i = B[e[0]];
    return i && e.length > 1 && i.config
      ? i.config.apply(
          null,
          ~t.indexOf("{") ? [qn(e[1])] : Xn(t).split(",").map(_r)
        )
      : B._CE && Yn.test(t)
        ? B._CE("", t)
        : i;
  },
  Br = function (t) {
    return function (e) {
      return 1 - t(1 - e);
    };
  },
  kr = function a(t, e) {
    for (var i = t._first, r; i; )
      (i instanceof it
        ? a(i, e)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== e &&
          (i.timeline
            ? a(i.timeline, e)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = e))),
        (i = i._next));
  },
  Wt = function (t, e) {
    return (t && (V(t) ? t : B[t] || Gn(t))) || e;
  },
  $t = function (t, e, i, r) {
    (i === void 0 &&
      (i = function (o) {
        return 1 - e(1 - o);
      }),
      r === void 0 &&
        (r = function (o) {
          return o < 0.5 ? e(o * 2) / 2 : 1 - e((1 - o) * 2) / 2;
        }));
    var n = { easeIn: e, easeOut: i, easeInOut: r },
      s;
    return (
      nt(t, function (u) {
        ((B[u] = Dt[u] = n), (B[(s = u.toLowerCase())] = i));
        for (var o in n)
          B[
            s + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")
          ] = B[u + "." + o] = n[o];
      }),
      n
    );
  },
  Or = function (t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
    };
  },
  We = function a(t, e, i) {
    var r = e >= 1 ? e : 1,
      n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
      s = (n / Ke) * (Math.asin(1 / r) || 0),
      u = function (f) {
        return f === 1 ? 1 : r * Math.pow(2, -10 * f) * Fn((f - s) * n) + 1;
      },
      o =
        t === "out"
          ? u
          : t === "in"
            ? function (l) {
                return 1 - u(1 - l);
              }
            : Or(u);
    return (
      (n = Ke / n),
      (o.config = function (l, f) {
        return a(t, l, f);
      }),
      o
    );
  },
  qe = function a(t, e) {
    e === void 0 && (e = 1.70158);
    var i = function (s) {
        return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
      },
      r =
        t === "out"
          ? i
          : t === "in"
            ? function (n) {
                return 1 - i(1 - n);
              }
            : Or(i);
    return (
      (r.config = function (n) {
        return a(t, n);
      }),
      r
    );
  };
nt("Linear,Quad,Cubic,Quart,Quint,Strong", function (a, t) {
  var e = t < 5 ? t + 1 : t;
  $t(
    a + ",Power" + (e - 1),
    t
      ? function (i) {
          return Math.pow(i, e);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, e);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, e) / 2
        : 1 - Math.pow((1 - i) * 2, e) / 2;
    }
  );
});
B.Linear.easeNone = B.none = B.Linear.easeIn;
$t("Elastic", We("in"), We("out"), We());
(function (a, t) {
  var e = 1 / t,
    i = 2 * e,
    r = 2.5 * e,
    n = function (u) {
      return u < e
        ? a * u * u
        : u < i
          ? a * Math.pow(u - 1.5 / t, 2) + 0.75
          : u < r
            ? a * (u -= 2.25 / t) * u + 0.9375
            : a * Math.pow(u - 2.625 / t, 2) + 0.984375;
    };
  $t(
    "Bounce",
    function (s) {
      return 1 - n(1 - s);
    },
    n
  );
})(7.5625, 2.75);
$t("Expo", function (a) {
  return a ? Math.pow(2, 10 * (a - 1)) : 0;
});
$t("Circ", function (a) {
  return -(ir(1 - a * a) - 1);
});
$t("Sine", function (a) {
  return a === 1 ? 1 : -Cn(a * gn) + 1;
});
$t("Back", qe("in"), qe("out"), qe());
B.SteppedEase =
  B.steps =
  Dt.SteppedEase =
    {
      config: function (t, e) {
        t === void 0 && (t = 1);
        var i = 1 / t,
          r = t + (e ? 0 : 1),
          n = e ? 1 : 0,
          s = 1 - z;
        return function (u) {
          return (((r * be(0, s, u)) | 0) + n) * i;
        };
      }
    };
ie.ease = B["quad.out"];
nt(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (a) {
    return (Ci += a + "," + a + "Params,");
  }
);
var Mr = function (t, e) {
    ((this.id = xn++),
      (t._gsap = this),
      (this.target = t),
      (this.harness = e),
      (this.get = e ? e.get : hr),
      (this.set = e ? e.getSetter : vi));
  },
  xe = (function () {
    function a(e) {
      ((this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          ((this._rDelay = e.repeatDelay || 0),
          (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        ne(this, +e.duration, 1, 1),
        (this.data = e.data),
        j && ((this._ctx = j), j.data.push(this)),
        ge || lt.wake());
    }
    var t = a.prototype;
    return (
      (t.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (t.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            ne(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (t.totalTime = function (i, r) {
        if ((se(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (Le(this, i), !n._dp || n.parent || pr(n, this); n && n.parent; )
            (n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            Ft(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === z) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), Dr(this, i, r)),
          this
        );
      }),
      (t.time = function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + zi(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              r
            )
          : this._time;
      }),
      (t.totalProgress = function (i, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, r)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (t.progress = function (i, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                zi(this),
              r
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (t.iteration = function (i, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * n, r)
          : this._repeat
            ? re(this._tTime, n) + 1
            : 1;
      }),
      (t.timeScale = function (i, r) {
        if (!arguments.length) return this._rts === -z ? 0 : this._rts;
        if (this._rts === i) return this;
        var n =
          this.parent && this._ts ? ke(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -z ? 0 : this._rts),
          this.totalTime(be(-Math.abs(this._delay), this._tDur, n), r !== !1),
          je(this),
          An(this)
        );
      }),
      (t.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (se(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== z &&
                      (this._tTime -= z)
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (i) {
        if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && Ft(r, this, i - this._delay),
            this
          );
        }
        return this._start;
      }),
      (t.endTime = function (i) {
        return (
          this._start +
          (rt(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (i) {
        var r = this.parent || this._dp;
        return r
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? ke(r.rawTime(i), this)
              : this._tTime
          : this._tTime;
      }),
      (t.revert = function (i) {
        i === void 0 && (i = En);
        var r = Z;
        return (
          (Z = i),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (Z = r),
          this
        );
      }),
      (t.globalTime = function (i) {
        for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
          ((n = r._start + n / (Math.abs(r._ts) || 1)), (r = r._dp));
        return !this.parent && this._sat ? this._sat.globalTime(i) : n;
      }),
      (t.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), ji(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (t.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time;
          return ((this._rDelay = i), ji(this), r ? this.time(r) : this);
        }
        return this._rDelay;
      }),
      (t.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (t.seek = function (i, r) {
        return this.totalTime(dt(this, i), rt(r));
      }),
      (t.restart = function (i, r) {
        return this.play().totalTime(i ? -this._delay : 0, rt(r));
      }),
      (t.play = function (i, r) {
        return (i != null && this.seek(i, r), this.reversed(!1).paused(!1));
      }),
      (t.reverse = function (i, r) {
        return (
          i != null && this.seek(i || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (i, r) {
        return (i != null && this.seek(i, r), this.paused(!0));
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -z : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -z), this);
      }),
      (t.isActive = function () {
        var i = this.parent || this._dp,
          r = this._start,
          n;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (n = i.rawTime(!0)) >= r &&
            n < this.endTime(!0) - z)
        );
      }),
      (t.eventCallback = function (i, r, n) {
        var s = this.vars;
        return arguments.length > 1
          ? (r
              ? ((s[i] = r),
                n && (s[i + "Params"] = n),
                i === "onUpdate" && (this._onUpdate = r))
              : delete s[i],
            this)
          : s[i];
      }),
      (t.then = function (i) {
        var r = this;
        return new Promise(function (n) {
          var s = V(i) ? i : dr,
            u = function () {
              var l = r.then;
              ((r.then = null),
                V(s) && (s = s(r)) && (s.then || s === r) && (r.then = l),
                n(s),
                (r.then = l));
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? u()
            : (r._prom = u);
        });
      }),
      (t.kill = function () {
        fe(this);
      }),
      a
    );
  })();
mt(xe.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -z,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var it = (function (a) {
  er(t, a);
  function t(i, r) {
    var n;
    return (
      i === void 0 && (i = {}),
      (n = a.call(this, i) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!i.smoothChildTiming),
      (n.autoRemoveChildren = !!i.autoRemoveChildren),
      (n._sort = rt(i.sortChildren)),
      L && Ft(i.parent || L, vt(n), r),
      i.reversed && n.reverse(),
      i.paused && n.paused(!0),
      i.scrollTrigger && mr(vt(n), i.scrollTrigger),
      n
    );
  }
  var e = t.prototype;
  return (
    (e.to = function (r, n, s) {
      return (_e(0, arguments, this), this);
    }),
    (e.from = function (r, n, s) {
      return (_e(1, arguments, this), this);
    }),
    (e.fromTo = function (r, n, s, u) {
      return (_e(2, arguments, this), this);
    }),
    (e.set = function (r, n, s) {
      return (
        (n.duration = 0),
        (n.parent = this),
        De(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new X(r, n, dt(this, s), 1),
        this
      );
    }),
    (e.call = function (r, n, s) {
      return Ft(this, X.delayedCall(0, r, n), s);
    }),
    (e.staggerTo = function (r, n, s, u, o, l, f) {
      return (
        (s.duration = n),
        (s.stagger = s.stagger || u),
        (s.onComplete = l),
        (s.onCompleteParams = f),
        (s.parent = this),
        new X(r, s, dt(this, o)),
        this
      );
    }),
    (e.staggerFrom = function (r, n, s, u, o, l, f) {
      return (
        (s.runBackwards = 1),
        (De(s).immediateRender = rt(s.immediateRender)),
        this.staggerTo(r, n, s, u, o, l, f)
      );
    }),
    (e.staggerFromTo = function (r, n, s, u, o, l, f, D) {
      return (
        (u.startAt = s),
        (De(u).immediateRender = rt(u.immediateRender)),
        this.staggerTo(r, n, u, o, l, f, D)
      );
    }),
    (e.render = function (r, n, s) {
      var u = this._time,
        o = this._dirty ? this.totalDuration() : this._tDur,
        l = this._dur,
        f = r <= 0 ? 0 : $(r),
        D = this._zTime < 0 != r < 0 && (this._initted || !l),
        _,
        d,
        p,
        h,
        c,
        m,
        C,
        y,
        x,
        g,
        w,
        E;
      if (
        (this !== L && f > o && r >= 0 && (f = o), f !== this._tTime || s || D)
      ) {
        if (
          (u !== this._time &&
            l &&
            ((f += this._time - u), (r += this._time - u)),
          (_ = f),
          (x = this._start),
          (y = this._ts),
          (m = !y),
          D && (l || (u = this._zTime), (r || !n) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((w = this._yoyo),
            (c = l + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(c * 100 + r, n, s);
          if (
            ((_ = $(f % c)),
            f === o
              ? ((h = this._repeat), (_ = l))
              : ((h = ~~(f / c)),
                h && h === f / c && ((_ = l), h--),
                _ > l && (_ = l)),
            (g = re(this._tTime, c)),
            !u &&
              this._tTime &&
              g !== h &&
              this._tTime - g * c - this._dur <= 0 &&
              (g = h),
            w && h & 1 && ((_ = l - _), (E = 1)),
            h !== g && !this._lock)
          ) {
            var v = w && g & 1,
              F = v === (w && h & 1);
            if (
              (h < g && (v = !v),
              (u = v ? 0 : f % l ? l : f),
              (this._lock = 1),
              (this.render(u || (E ? 0 : $(h * c)), n, !l)._lock = 0),
              (this._tTime = f),
              !n && this.parent && ft(this, "onRepeat"),
              this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1),
              (u && u !== this._time) ||
                m !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((l = this._dur),
              (o = this._tDur),
              F &&
                ((this._lock = 2),
                (u = v ? l : -1e-4),
                this.render(u, !0),
                this.vars.repeatRefresh && !E && this.invalidate()),
              (this._lock = 0),
              !this._ts && !m)
            )
              return this;
            kr(this, E);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((C = kn(this, $(u), $(_))), C && (f -= _ - (_ = C._start))),
          (this._tTime = f),
          (this._time = _),
          (this._act = !y),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (u = 0)),
          !u && _ && !n && !h && (ft(this, "onStart"), this._tTime !== f))
        )
          return this;
        if (_ >= u && r >= 0)
          for (d = this._first; d; ) {
            if (
              ((p = d._next), (d._act || _ >= d._start) && d._ts && C !== d)
            ) {
              if (d.parent !== this) return this.render(r, n, s);
              if (
                (d.render(
                  d._ts > 0
                    ? (_ - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (_ - d._start) * d._ts,
                  n,
                  s
                ),
                _ !== this._time || (!this._ts && !m))
              ) {
                ((C = 0), p && (f += this._zTime = -z));
                break;
              }
            }
            d = p;
          }
        else {
          d = this._last;
          for (var S = r < 0 ? r : _; d; ) {
            if (((p = d._prev), (d._act || S <= d._end) && d._ts && C !== d)) {
              if (d.parent !== this) return this.render(r, n, s);
              if (
                (d.render(
                  d._ts > 0
                    ? (S - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (S - d._start) * d._ts,
                  n,
                  s || (Z && (d._initted || d._startAt))
                ),
                _ !== this._time || (!this._ts && !m))
              ) {
                ((C = 0), p && (f += this._zTime = S ? -z : z));
                break;
              }
            }
            d = p;
          }
        }
        if (
          C &&
          !n &&
          (this.pause(),
          (C.render(_ >= u ? 0 : -z)._zTime = _ >= u ? 1 : -1),
          this._ts)
        )
          return ((this._start = x), je(this), this.render(r, n, s));
        (this._onUpdate && !n && ft(this, "onUpdate", !0),
          ((f === o && this._tTime >= this.totalDuration()) || (!f && u)) &&
            (x === this._start || Math.abs(y) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !l) &&
                ((f === o && this._ts > 0) || (!f && this._ts < 0)) &&
                Nt(this, 1),
              !n &&
                !(r < 0 && !u) &&
                (f || u || !o) &&
                (ft(
                  this,
                  f === o && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(f < o && this.timeScale() > 0) &&
                  this._prom()))));
      }
      return this;
    }),
    (e.add = function (r, n) {
      var s = this;
      if ((wt(n) || (n = dt(this, n, r)), !(r instanceof xe))) {
        if (J(r))
          return (
            r.forEach(function (u) {
              return s.add(u, n);
            }),
            this
          );
        if (H(r)) return this.addLabel(r, n);
        if (V(r)) r = X.delayedCall(0, r);
        else return this;
      }
      return this !== r ? Ft(this, r, n) : this;
    }),
    (e.getChildren = function (r, n, s, u) {
      (r === void 0 && (r = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        u === void 0 && (u = -ct));
      for (var o = [], l = this._first; l; )
        (l._start >= u &&
          (l instanceof X
            ? n && o.push(l)
            : (s && o.push(l), r && o.push.apply(o, l.getChildren(!0, n, s)))),
          (l = l._next));
      return o;
    }),
    (e.getById = function (r) {
      for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
        if (n[s].vars.id === r) return n[s];
    }),
    (e.remove = function (r) {
      return H(r)
        ? this.removeLabel(r)
        : V(r)
          ? this.killTweensOf(r)
          : (ze(this, r),
            r === this._recent && (this._recent = this._last),
            Yt(this));
    }),
    (e.totalTime = function (r, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = $(
              lt.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          a.prototype.totalTime.call(this, r, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (e.addLabel = function (r, n) {
      return ((this.labels[r] = dt(this, n)), this);
    }),
    (e.removeLabel = function (r) {
      return (delete this.labels[r], this);
    }),
    (e.addPause = function (r, n, s) {
      var u = X.delayedCall(0, n || pe, s);
      return (
        (u.data = "isPause"),
        (this._hasPause = 1),
        Ft(this, u, dt(this, r))
      );
    }),
    (e.removePause = function (r) {
      var n = this._first;
      for (r = dt(this, r); n; )
        (n._start === r && n.data === "isPause" && Nt(n), (n = n._next));
    }),
    (e.killTweensOf = function (r, n, s) {
      for (var u = this.getTweensOf(r, s), o = u.length; o--; )
        Pt !== u[o] && u[o].kill(r, n);
      return this;
    }),
    (e.getTweensOf = function (r, n) {
      for (var s = [], u = pt(r), o = this._first, l = wt(n), f; o; )
        (o instanceof X
          ? vn(o._targets, u) &&
            (l
              ? (!Pt || (o._initted && o._ts)) &&
                o.globalTime(0) <= n &&
                o.globalTime(o.totalDuration()) > n
              : !n || o.isActive()) &&
            s.push(o)
          : (f = o.getTweensOf(u, n)).length && s.push.apply(s, f),
          (o = o._next));
      return s;
    }),
    (e.tweenTo = function (r, n) {
      n = n || {};
      var s = this,
        u = dt(s, r),
        o = n,
        l = o.startAt,
        f = o.onStart,
        D = o.onStartParams,
        _ = o.immediateRender,
        d,
        p = X.to(
          s,
          mt(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: u,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (u - (l && "time" in l ? l.time : s._time)) / s.timeScale()
                ) ||
                z,
              onStart: function () {
                if ((s.pause(), !d)) {
                  var c =
                    n.duration ||
                    Math.abs(
                      (u - (l && "time" in l ? l.time : s._time)) /
                        s.timeScale()
                    );
                  (p._dur !== c && ne(p, c, 0, 1).render(p._time, !0, !0),
                    (d = 1));
                }
                f && f.apply(p, D || []);
              }
            },
            n
          )
        );
      return _ ? p.render(0) : p;
    }),
    (e.tweenFromTo = function (r, n, s) {
      return this.tweenTo(n, mt({ startAt: { time: dt(this, r) } }, s));
    }),
    (e.recent = function () {
      return this._recent;
    }),
    (e.nextLabel = function (r) {
      return (r === void 0 && (r = this._time), Li(this, dt(this, r)));
    }),
    (e.previousLabel = function (r) {
      return (r === void 0 && (r = this._time), Li(this, dt(this, r), 1));
    }),
    (e.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + z);
    }),
    (e.shiftChildren = function (r, n, s) {
      s === void 0 && (s = 0);
      for (var u = this._first, o = this.labels, l; u; )
        (u._start >= s && ((u._start += r), (u._end += r)), (u = u._next));
      if (n) for (l in o) o[l] >= s && (o[l] += r);
      return Yt(this);
    }),
    (e.invalidate = function (r) {
      var n = this._first;
      for (this._lock = 0; n; ) (n.invalidate(r), (n = n._next));
      return a.prototype.invalidate.call(this, r);
    }),
    (e.clear = function (r) {
      r === void 0 && (r = !0);
      for (var n = this._first, s; n; )
        ((s = n._next), this.remove(n), (n = s));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Yt(this)
      );
    }),
    (e.totalDuration = function (r) {
      var n = 0,
        s = this,
        u = s._last,
        o = ct,
        l,
        f,
        D;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -r : r)
        );
      if (s._dirty) {
        for (D = s.parent; u; )
          ((l = u._prev),
            u._dirty && u.totalDuration(),
            (f = u._start),
            f > o && s._sort && u._ts && !s._lock
              ? ((s._lock = 1), (Ft(s, u, f - u._delay, 1)._lock = 0))
              : (o = f),
            f < 0 &&
              u._ts &&
              ((n -= f),
              ((!D && !s._dp) || (D && D.smoothChildTiming)) &&
                ((s._start += f / s._ts), (s._time -= f), (s._tTime -= f)),
              s.shiftChildren(-f, !1, -1 / 0),
              (o = 0)),
            u._end > n && u._ts && (n = u._end),
            (u = l));
        (ne(s, s === L && s._time > n ? s._time : n, 1, 1), (s._dirty = 0));
      }
      return s._tDur;
    }),
    (t.updateRoot = function (r) {
      if ((L._ts && (Dr(L, ke(r, L)), (fr = lt.frame)), lt.frame >= Ni)) {
        Ni += ht.autoSleep || 120;
        var n = L._first;
        if ((!n || !n._ts) && ht.autoSleep && lt._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || lt.sleep();
        }
      }
    }),
    t
  );
})(xe);
mt(it.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var $n = function (t, e, i, r, n, s, u) {
    var o = new st(this._pt, t, e, 0, 1, Ir, null, n),
      l = 0,
      f = 0,
      D,
      _,
      d,
      p,
      h,
      c,
      m,
      C;
    for (
      o.b = i,
        o.e = r,
        i += "",
        r += "",
        (m = ~r.indexOf("random(")) && (r = me(r)),
        s && ((C = [i, r]), s(C, t, e), (i = C[0]), (r = C[1])),
        _ = i.match(Ve) || [];
      (D = Ve.exec(r));
    )
      ((p = D[0]),
        (h = r.substring(l, D.index)),
        d ? (d = (d + 1) % 5) : h.substr(-5) === "rgba(" && (d = 1),
        p !== _[f++] &&
          ((c = parseFloat(_[f - 1]) || 0),
          (o._pt = {
            _next: o._pt,
            p: h || f === 1 ? h : ",",
            s: c,
            c: p.charAt(1) === "=" ? Jt(c, p) - c : parseFloat(p) - c,
            m: d && d < 4 ? Math.round : 0
          }),
          (l = Ve.lastIndex)));
    return (
      (o.c = l < r.length ? r.substring(l, r.length) : ""),
      (o.fp = u),
      (sr.test(r) || m) && (o.e = 0),
      (this._pt = o),
      o
    );
  },
  yi = function (t, e, i, r, n, s, u, o, l, f) {
    V(r) && (r = r(n || 0, t, s));
    var D = t[e],
      _ =
        i !== "get"
          ? i
          : V(D)
            ? l
              ? t[
                  e.indexOf("set") || !V(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](l)
              : t[e]()
            : D,
      d = V(D) ? (l ? Jn : jr) : Ei,
      p;
    if (
      (H(r) &&
        (~r.indexOf("random(") && (r = me(r)),
        r.charAt(1) === "=" &&
          ((p = Jt(_, r) + (K(_) || 0)), (p || p === 0) && (r = p))),
      !f || _ !== r || ui)
    )
      return !isNaN(_ * r) && r !== ""
        ? ((p = new st(
            this._pt,
            t,
            e,
            +_ || 0,
            r - (_ || 0),
            typeof D == "boolean" ? es : Lr,
            0,
            d
          )),
          l && (p.fp = l),
          u && p.modifier(u, this, t),
          (this._pt = p))
        : (!D && !(e in t) && gi(e, r),
          $n.call(this, t, e, _, r, d, o || ht.stringFilter, l));
  },
  Hn = function (t, e, i, r, n) {
    if (
      (V(t) && (t = de(t, n, e, i, r)),
      !Et(t) || (t.style && t.nodeType) || J(t) || rr(t))
    )
      return H(t) ? de(t, n, e, i, r) : t;
    var s = {},
      u;
    for (u in t) s[u] = de(t[u], n, e, i, r);
    return s;
  },
  Nr = function (t, e, i, r, n, s) {
    var u, o, l, f;
    if (
      ot[t] &&
      (u = new ot[t]()).init(
        n,
        u.rawVars ? e[t] : Hn(e[t], r, n, s, i),
        i,
        r,
        s
      ) !== !1 &&
      ((i._pt = o = new st(i._pt, n, t, 0, 1, u.render, u, 0, u.priority)),
      i !== Kt)
    )
      for (l = i._ptLookup[i._targets.indexOf(n)], f = u._props.length; f--; )
        l[u._props[f]] = o;
    return u;
  },
  Pt,
  ui,
  bi = function a(t, e, i) {
    var r = t.vars,
      n = r.ease,
      s = r.startAt,
      u = r.immediateRender,
      o = r.lazy,
      l = r.onUpdate,
      f = r.runBackwards,
      D = r.yoyoEase,
      _ = r.keyframes,
      d = r.autoRevert,
      p = t._dur,
      h = t._startAt,
      c = t._targets,
      m = t.parent,
      C = m && m.data === "nested" ? m.vars.targets : c,
      y = t._overwrite === "auto" && !di,
      x = t.timeline,
      g,
      w,
      E,
      v,
      F,
      S,
      O,
      M,
      k,
      q,
      U,
      A,
      P;
    if (
      (x && (!_ || !n) && (n = "none"),
      (t._ease = Wt(n, ie.ease)),
      (t._yEase = D ? Br(Wt(D === !0 ? n : D, ie.ease)) : 0),
      D &&
        t._yoyo &&
        !t._repeat &&
        ((D = t._yEase), (t._yEase = t._ease), (t._ease = D)),
      (t._from = !x && !!r.runBackwards),
      !x || (_ && !r.stagger))
    ) {
      if (
        ((M = c[0] ? Ut(c[0]).harness : 0),
        (A = M && r[M.prop]),
        (g = Be(r, xi)),
        h &&
          (h._zTime < 0 && h.progress(1),
          e < 0 && f && u && !d ? h.render(-1, !0) : h.revert(f && p ? ve : bn),
          (h._lazy = 0)),
        s)
      ) {
        if (
          (Nt(
            (t._startAt = X.set(
              c,
              mt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: m,
                  immediateRender: !0,
                  lazy: !h && rt(o),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    l &&
                    function () {
                      return ft(t, "onUpdate");
                    },
                  stagger: 0
                },
                s
              )
            ))
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          e < 0 && (Z || (!u && !d)) && t._startAt.revert(ve),
          u && p && e <= 0 && i <= 0)
        ) {
          e && (t._zTime = e);
          return;
        }
      } else if (f && p && !h) {
        if (
          (e && (u = !1),
          (E = mt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: u && !h && rt(o),
              immediateRender: u,
              stagger: 0,
              parent: m
            },
            g
          )),
          A && (E[M.prop] = A),
          Nt((t._startAt = X.set(c, E))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          e < 0 && (Z ? t._startAt.revert(ve) : t._startAt.render(-1, !0)),
          (t._zTime = e),
          !u)
        )
          a(t._startAt, z, z);
        else if (!e) return;
      }
      for (
        t._pt = t._ptCache = 0, o = (p && rt(o)) || (o && !p), w = 0;
        w < c.length;
        w++
      ) {
        if (
          ((F = c[w]),
          (O = F._gsap || Fi(c)[w]._gsap),
          (t._ptLookup[w] = q = {}),
          ti[O.id] && Ot.length && Pe(),
          (U = C === c ? w : C.indexOf(F)),
          M &&
            (k = new M()).init(F, A || g, t, U, C) !== !1 &&
            ((t._pt = v =
              new st(t._pt, F, k.name, 0, 1, k.render, k, 0, k.priority)),
            k._props.forEach(function (Y) {
              q[Y] = v;
            }),
            k.priority && (S = 1)),
          !M || A)
        )
          for (E in g)
            ot[E] && (k = Nr(E, g, t, U, F, C))
              ? k.priority && (S = 1)
              : (q[E] = v =
                  yi.call(t, F, E, "get", g[E], U, C, 0, r.stringFilter));
        (t._op && t._op[w] && t.kill(F, t._op[w]),
          y &&
            t._pt &&
            ((Pt = t),
            L.killTweensOf(F, q, t.globalTime(e)),
            (P = !t.parent),
            (Pt = 0)),
          t._pt && o && (ti[O.id] = 1));
      }
      (S && Vr(t), t._onInit && t._onInit(t));
    }
    ((t._onUpdate = l),
      (t._initted = (!t._op || t._pt) && !P),
      _ && e <= 0 && x.render(ct, !0, !0));
  },
  Qn = function (t, e, i, r, n, s, u, o) {
    var l = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
      f,
      D,
      _,
      d;
    if (!l)
      for (
        l = t._ptCache[e] = [], _ = t._ptLookup, d = t._targets.length;
        d--;
      ) {
        if (((f = _[d][e]), f && f.d && f.d._pt))
          for (f = f.d._pt; f && f.p !== e && f.fp !== e; ) f = f._next;
        if (!f)
          return (
            (ui = 1),
            (t.vars[e] = "+=0"),
            bi(t, u),
            (ui = 0),
            o ? ce(e + " not eligible for reset") : 1
          );
        l.push(f);
      }
    for (d = l.length; d--; )
      ((D = l[d]),
        (f = D._pt || D),
        (f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + s * f.c),
        (f.c = i - f.s),
        D.e && (D.e = W(i) + K(D.e)),
        D.b && (D.b = f.s + K(D.b)));
  },
  Kn = function (t, e) {
    var i = t[0] ? Ut(t[0]).harness : 0,
      r = i && i.aliases,
      n,
      s,
      u,
      o;
    if (!r) return e;
    n = Xt({}, e);
    for (s in r)
      if (s in n) for (o = r[s].split(","), u = o.length; u--; ) n[o[u]] = n[s];
    return n;
  },
  Zn = function (t, e, i, r) {
    var n = e.ease || r || "power1.inOut",
      s,
      u;
    if (J(e))
      ((u = i[t] || (i[t] = [])),
        e.forEach(function (o, l) {
          return u.push({ t: (l / (e.length - 1)) * 100, v: o, e: n });
        }));
    else
      for (s in e)
        ((u = i[s] || (i[s] = [])),
          s === "ease" || u.push({ t: parseFloat(t), v: e[s], e: n }));
  },
  de = function (t, e, i, r, n) {
    return V(t)
      ? t.call(e, i, r, n)
      : H(t) && ~t.indexOf("random(")
        ? me(t)
        : t;
  },
  Rr = Ci + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  zr = {};
nt(Rr + ",id,stagger,delay,duration,paused,scrollTrigger", function (a) {
  return (zr[a] = 1);
});
var X = (function (a) {
  er(t, a);
  function t(i, r, n, s) {
    var u;
    (typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
      (u = a.call(this, s ? r : De(r)) || this));
    var o = u.vars,
      l = o.duration,
      f = o.delay,
      D = o.immediateRender,
      _ = o.stagger,
      d = o.overwrite,
      p = o.keyframes,
      h = o.defaults,
      c = o.scrollTrigger,
      m = o.yoyoEase,
      C = r.parent || L,
      y = (J(i) || rr(i) ? wt(i[0]) : "length" in r) ? [i] : pt(i),
      x,
      g,
      w,
      E,
      v,
      F,
      S,
      O;
    if (
      ((u._targets = y.length
        ? Fi(y)
        : ce(
            "GSAP target " + i + " not found. https://gsap.com",
            !ht.nullTargetWarn
          ) || []),
      (u._ptLookup = []),
      (u._overwrite = d),
      p || _ || Ee(l) || Ee(f))
    ) {
      if (
        ((r = u.vars),
        (x = u.timeline =
          new it({
            data: "nested",
            defaults: h || {},
            targets: C && C.data === "nested" ? C.vars.targets : y
          })),
        x.kill(),
        (x.parent = x._dp = vt(u)),
        (x._start = 0),
        _ || Ee(l) || Ee(f))
      ) {
        if (((E = y.length), (S = _ && Fr(_)), Et(_)))
          for (v in _) ~Rr.indexOf(v) && (O || (O = {}), (O[v] = _[v]));
        for (g = 0; g < E; g++)
          ((w = Be(r, zr)),
            (w.stagger = 0),
            m && (w.yoyoEase = m),
            O && Xt(w, O),
            (F = y[g]),
            (w.duration = +de(l, vt(u), g, F, y)),
            (w.delay = (+de(f, vt(u), g, F, y) || 0) - u._delay),
            !_ &&
              E === 1 &&
              w.delay &&
              ((u._delay = f = w.delay), (u._start += f), (w.delay = 0)),
            x.to(F, w, S ? S(g, F, y) : 0),
            (x._ease = B.none));
        x.duration() ? (l = f = 0) : (u.timeline = 0);
      } else if (p) {
        (De(mt(x.vars.defaults, { ease: "none" })),
          (x._ease = Wt(p.ease || r.ease || "none")));
        var M = 0,
          k,
          q,
          U;
        if (J(p))
          (p.forEach(function (A) {
            return x.to(y, A, ">");
          }),
            x.duration());
        else {
          w = {};
          for (v in p)
            v === "ease" || v === "easeEach" || Zn(v, p[v], w, p.easeEach);
          for (v in w)
            for (
              k = w[v].sort(function (A, P) {
                return A.t - P.t;
              }),
                M = 0,
                g = 0;
              g < k.length;
              g++
            )
              ((q = k[g]),
                (U = {
                  ease: q.e,
                  duration: ((q.t - (g ? k[g - 1].t : 0)) / 100) * l
                }),
                (U[v] = q.v),
                x.to(y, U, M),
                (M += U.duration));
          x.duration() < l && x.to({}, { duration: l - x.duration() });
        }
      }
      l || u.duration((l = x.duration()));
    } else u.timeline = 0;
    return (
      d === !0 && !di && ((Pt = vt(u)), L.killTweensOf(y), (Pt = 0)),
      Ft(C, vt(u), n),
      r.reversed && u.reverse(),
      r.paused && u.paused(!0),
      (D ||
        (!l &&
          !p &&
          u._start === $(C._time) &&
          rt(D) &&
          Sn(vt(u)) &&
          C.data !== "nested")) &&
        ((u._tTime = -z), u.render(Math.max(0, -f) || 0)),
      c && mr(vt(u), c),
      u
    );
  }
  var e = t.prototype;
  return (
    (e.render = function (r, n, s) {
      var u = this._time,
        o = this._tDur,
        l = this._dur,
        f = r < 0,
        D = r > o - z && !f ? o : r < z ? 0 : r,
        _,
        d,
        p,
        h,
        c,
        m,
        C,
        y,
        x;
      if (!l) Bn(this, r, n, s);
      else if (
        D !== this._tTime ||
        !r ||
        s ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== f)
      ) {
        if (((_ = D), (y = this.timeline), this._repeat)) {
          if (((h = l + this._rDelay), this._repeat < -1 && f))
            return this.totalTime(h * 100 + r, n, s);
          if (
            ((_ = $(D % h)),
            D === o
              ? ((p = this._repeat), (_ = l))
              : ((p = ~~(D / h)),
                p && p === $(D / h) && ((_ = l), p--),
                _ > l && (_ = l)),
            (m = this._yoyo && p & 1),
            m && ((x = this._yEase), (_ = l - _)),
            (c = re(this._tTime, h)),
            _ === u && !s && this._initted && p === c)
          )
            return ((this._tTime = D), this);
          p !== c &&
            (y && this._yEase && kr(y, m),
            this.vars.repeatRefresh &&
              !m &&
              !this._lock &&
              this._time !== h &&
              this._initted &&
              ((this._lock = s = 1),
              (this.render($(h * p), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (gr(this, f ? r : _, s, n, D)) return ((this._tTime = 0), this);
          if (u !== this._time && !(s && this.vars.repeatRefresh && p !== c))
            return this;
          if (l !== this._dur) return this.render(r, n, s);
        }
        if (
          ((this._tTime = D),
          (this._time = _),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = C = (x || this._ease)(_ / l)),
          this._from && (this.ratio = C = 1 - C),
          _ && !u && !n && !p && (ft(this, "onStart"), this._tTime !== D))
        )
          return this;
        for (d = this._pt; d; ) (d.r(C, d.d), (d = d._next));
        ((y && y.render(r < 0 ? r : y._dur * y._ease(_ / this._dur), n, s)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !n &&
            (f && ei(this, r, n, s), ft(this, "onUpdate")),
          this._repeat &&
            p !== c &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            ft(this, "onRepeat"),
          (D === this._tDur || !D) &&
            this._tTime === D &&
            (f && !this._onUpdate && ei(this, r, !0, !0),
            (r || !l) &&
              ((D === this._tDur && this._ts > 0) || (!D && this._ts < 0)) &&
              Nt(this, 1),
            !n &&
              !(f && !u) &&
              (D || u || m) &&
              (ft(this, D === o ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(D < o && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (e.targets = function () {
      return this._targets;
    }),
    (e.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        a.prototype.invalidate.call(this, r)
      );
    }),
    (e.resetTo = function (r, n, s, u, o) {
      (ge || lt.wake(), this._ts || this.play());
      var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        f;
      return (
        this._initted || bi(this, l),
        (f = this._ease(l / this._dur)),
        Qn(this, r, n, s, u, f, l, o)
          ? this.resetTo(r, n, s, u, 1)
          : (Le(this, 0),
            this.parent ||
              cr(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (e.kill = function (r, n) {
      if ((n === void 0 && (n = "all"), !r && (!n || n === "all")))
        return ((this._lazy = this._pt = 0), this.parent ? fe(this) : this);
      if (this.timeline) {
        var s = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, n, Pt && Pt.vars.overwrite !== !0)
            ._first || fe(this),
          this.parent &&
            s !== this.timeline.totalDuration() &&
            ne(this, (this._dur * this.timeline._tDur) / s, 0, 1),
          this
        );
      }
      var u = this._targets,
        o = r ? pt(r) : u,
        l = this._ptLookup,
        f = this._pt,
        D,
        _,
        d,
        p,
        h,
        c,
        m;
      if ((!n || n === "all") && wn(u, o))
        return (n === "all" && (this._pt = 0), fe(this));
      for (
        D = this._op = this._op || [],
          n !== "all" &&
            (H(n) &&
              ((h = {}),
              nt(n, function (C) {
                return (h[C] = 1);
              }),
              (n = h)),
            (n = Kn(u, n))),
          m = u.length;
        m--;
      )
        if (~o.indexOf(u[m])) {
          ((_ = l[m]),
            n === "all"
              ? ((D[m] = n), (p = _), (d = {}))
              : ((d = D[m] = D[m] || {}), (p = n)));
          for (h in p)
            ((c = _ && _[h]),
              c &&
                ((!("kill" in c.d) || c.d.kill(h) === !0) && ze(this, c, "_pt"),
                delete _[h]),
              d !== "all" && (d[h] = 1));
        }
      return (this._initted && !this._pt && f && fe(this), this);
    }),
    (t.to = function (r, n) {
      return new t(r, n, arguments[2]);
    }),
    (t.from = function (r, n) {
      return _e(1, arguments);
    }),
    (t.delayedCall = function (r, n, s, u) {
      return new t(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: s,
        onReverseCompleteParams: s,
        callbackScope: u
      });
    }),
    (t.fromTo = function (r, n, s) {
      return _e(2, arguments);
    }),
    (t.set = function (r, n) {
      return ((n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(r, n));
    }),
    (t.killTweensOf = function (r, n, s) {
      return L.killTweensOf(r, n, s);
    }),
    t
  );
})(xe);
mt(X.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
nt("staggerTo,staggerFrom,staggerFromTo", function (a) {
  X[a] = function () {
    var t = new it(),
      e = ri.call(arguments, 0);
    return (e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, e));
  };
});
var Ei = function (t, e, i) {
    return (t[e] = i);
  },
  jr = function (t, e, i) {
    return t[e](i);
  },
  Jn = function (t, e, i, r) {
    return t[e](r.fp, i);
  },
  ts = function (t, e, i) {
    return t.setAttribute(e, i);
  },
  vi = function (t, e) {
    return V(t[e]) ? jr : ci(t[e]) && t.setAttribute ? ts : Ei;
  },
  Lr = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
  },
  es = function (t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
  Ir = function (t, e) {
    var i = e._pt,
      r = "";
    if (!t && e.b) r = e.b;
    else if (t === 1 && e.e) r = e.e;
    else {
      for (; i; )
        ((r =
          i.p +
          (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) +
          r),
          (i = i._next));
      r += e.c;
    }
    e.set(e.t, e.p, r, e);
  },
  Ti = function (t, e) {
    for (var i = e._pt; i; ) (i.r(t, i.d), (i = i._next));
  },
  is = function (t, e, i, r) {
    for (var n = this._pt, s; n; )
      ((s = n._next), n.p === r && n.modifier(t, e, i), (n = s));
  },
  rs = function (t) {
    for (var e = this._pt, i, r; e; )
      ((r = e._next),
        (e.p === t && !e.op) || e.op === t
          ? ze(this, e, "_pt")
          : e.dep || (i = 1),
        (e = r));
    return !i;
  },
  ns = function (t, e, i, r) {
    r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
  },
  Vr = function (t) {
    for (var e = t._pt, i, r, n, s; e; ) {
      for (i = e._next, r = n; r && r.pr > e.pr; ) r = r._next;
      ((e._prev = r ? r._prev : s) ? (e._prev._next = e) : (n = e),
        (e._next = r) ? (r._prev = e) : (s = e),
        (e = i));
    }
    t._pt = n;
  },
  st = (function () {
    function a(e, i, r, n, s, u, o, l, f) {
      ((this.t = i),
        (this.s = n),
        (this.c = s),
        (this.p = r),
        (this.r = u || Lr),
        (this.d = o || this),
        (this.set = l || Ei),
        (this.pr = f || 0),
        (this._next = e),
        e && (e._prev = this));
    }
    var t = a.prototype;
    return (
      (t.modifier = function (i, r, n) {
        ((this.mSet = this.mSet || this.set),
          (this.set = ns),
          (this.m = i),
          (this.mt = n),
          (this.tween = r));
      }),
      a
    );
  })();
nt(
  Ci +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (a) {
    return (xi[a] = 1);
  }
);
Dt.TweenMax = Dt.TweenLite = X;
Dt.TimelineLite = Dt.TimelineMax = it;
L = new it({
  sortChildren: !1,
  defaults: ie,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ht.stringFilter = Pr;
var qt = [],
  we = {},
  ss = [],
  Vi = 0,
  us = 0,
  Xe = function (t) {
    return (we[t] || ss).map(function (e) {
      return e();
    });
  },
  ai = function () {
    var t = Date.now(),
      e = [];
    t - Vi > 2 &&
      (Xe("matchMediaInit"),
      qt.forEach(function (i) {
        var r = i.queries,
          n = i.conditions,
          s,
          u,
          o,
          l;
        for (u in r)
          ((s = Ct.matchMedia(r[u]).matches),
            s && (o = 1),
            s !== n[u] && ((n[u] = s), (l = 1)));
        l && (i.revert(), o && e.push(i));
      }),
      Xe("matchMediaRevert"),
      e.forEach(function (i) {
        return i.onMatch(i, function (r) {
          return i.add(null, r);
        });
      }),
      (Vi = t),
      Xe("matchMedia"));
  },
  Ur = (function () {
    function a(e, i) {
      ((this.selector = i && ni(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = us++),
        e && this.add(e));
    }
    var t = a.prototype;
    return (
      (t.add = function (i, r, n) {
        V(i) && ((n = r), (r = i), (i = V));
        var s = this,
          u = function () {
            var l = j,
              f = s.selector,
              D;
            return (
              l && l !== s && l.data.push(s),
              n && (s.selector = ni(n)),
              (j = s),
              (D = r.apply(s, arguments)),
              V(D) && s._r.push(D),
              (j = l),
              (s.selector = f),
              (s.isReverted = !1),
              D
            );
          };
        return (
          (s.last = u),
          i === V
            ? u(s, function (o) {
                return s.add(null, o);
              })
            : i
              ? (s[i] = u)
              : u
        );
      }),
      (t.ignore = function (i) {
        var r = j;
        ((j = null), i(this), (j = r));
      }),
      (t.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof a
              ? i.push.apply(i, r.getTweens())
              : r instanceof X &&
                  !(r.parent && r.parent.data === "nested") &&
                  i.push(r);
          }),
          i
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (i, r) {
        var n = this;
        if (
          (i
            ? (function () {
                for (var u = n.getTweens(), o = n.data.length, l; o--; )
                  ((l = n.data[o]),
                    l.data === "isFlip" &&
                      (l.revert(),
                      l.getChildren(!0, !0, !1).forEach(function (f) {
                        return u.splice(u.indexOf(f), 1);
                      })));
                for (
                  u
                    .map(function (f) {
                      return {
                        g:
                          f._dur ||
                          f._delay ||
                          (f._sat && !f._sat.vars.immediateRender)
                            ? f.globalTime(0)
                            : -1 / 0,
                        t: f
                      };
                    })
                    .sort(function (f, D) {
                      return D.g - f.g || -1 / 0;
                    })
                    .forEach(function (f) {
                      return f.t.revert(i);
                    }),
                    o = n.data.length;
                  o--;
                )
                  ((l = n.data[o]),
                    l instanceof it
                      ? l.data !== "nested" &&
                        (l.scrollTrigger && l.scrollTrigger.revert(), l.kill())
                      : !(l instanceof X) && l.revert && l.revert(i));
                (n._r.forEach(function (f) {
                  return f(i, n);
                }),
                  (n.isReverted = !0));
              })()
            : this.data.forEach(function (u) {
                return u.kill && u.kill();
              }),
          this.clear(),
          r)
        )
          for (var s = qt.length; s--; )
            qt[s].id === this.id && qt.splice(s, 1);
      }),
      (t.revert = function (i) {
        this.kill(i || {});
      }),
      a
    );
  })(),
  as = (function () {
    function a(e) {
      ((this.contexts = []), (this.scope = e), j && j.data.push(this));
    }
    var t = a.prototype;
    return (
      (t.add = function (i, r, n) {
        Et(i) || (i = { matches: i });
        var s = new Ur(0, n || this.scope),
          u = (s.conditions = {}),
          o,
          l,
          f;
        (j && !s.selector && (s.selector = j.selector),
          this.contexts.push(s),
          (r = s.add("onMatch", r)),
          (s.queries = i));
        for (l in i)
          l === "all"
            ? (f = 1)
            : ((o = Ct.matchMedia(i[l])),
              o &&
                (qt.indexOf(s) < 0 && qt.push(s),
                (u[l] = o.matches) && (f = 1),
                o.addListener
                  ? o.addListener(ai)
                  : o.addEventListener("change", ai)));
        return (
          f &&
            r(s, function (D) {
              return s.add(null, D);
            }),
          this
        );
      }),
      (t.revert = function (i) {
        this.kill(i || {});
      }),
      (t.kill = function (i) {
        this.contexts.forEach(function (r) {
          return r.kill(i, !0);
        });
      }),
      a
    );
  })(),
  Oe = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      e.forEach(function (r) {
        return wr(r);
      });
    },
    timeline: function (t) {
      return new it(t);
    },
    getTweensOf: function (t, e) {
      return L.getTweensOf(t, e);
    },
    getProperty: function (t, e, i, r) {
      H(t) && (t = pt(t)[0]);
      var n = Ut(t || {}).get,
        s = i ? dr : _r;
      return (
        i === "native" && (i = ""),
        t &&
          (e
            ? s(((ot[e] && ot[e].get) || n)(t, e, i, r))
            : function (u, o, l) {
                return s(((ot[u] && ot[u].get) || n)(t, u, o, l));
              })
      );
    },
    quickSetter: function (t, e, i) {
      if (((t = pt(t)), t.length > 1)) {
        var r = t.map(function (f) {
            return at.quickSetter(f, e, i);
          }),
          n = r.length;
        return function (f) {
          for (var D = n; D--; ) r[D](f);
        };
      }
      t = t[0] || {};
      var s = ot[e],
        u = Ut(t),
        o = (u.harness && (u.harness.aliases || {})[e]) || e,
        l = s
          ? function (f) {
              var D = new s();
              ((Kt._pt = 0),
                D.init(t, i ? f + i : f, Kt, 0, [t]),
                D.render(1, D),
                Kt._pt && Ti(1, Kt));
            }
          : u.set(t, o);
      return s
        ? l
        : function (f) {
            return l(t, o, i ? f + i : f, u, 1);
          };
    },
    quickTo: function (t, e, i) {
      var r,
        n = at.to(
          t,
          Xt(((r = {}), (r[e] = "+=0.1"), (r.paused = !0), r), i || {})
        ),
        s = function (o, l, f) {
          return n.resetTo(e, o, l, f);
        };
      return ((s.tween = n), s);
    },
    isTweening: function (t) {
      return L.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return (t && t.ease && (t.ease = Wt(t.ease, ie.ease)), Ri(ie, t || {}));
    },
    config: function (t) {
      return Ri(ht, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        i = t.effect,
        r = t.plugins,
        n = t.defaults,
        s = t.extendTimeline;
      ((r || "").split(",").forEach(function (u) {
        return (
          u && !ot[u] && !Dt[u] && ce(e + " effect requires " + u + " plugin.")
        );
      }),
        (Ue[e] = function (u, o, l) {
          return i(pt(u), mt(o || {}, n), l);
        }),
        s &&
          (it.prototype[e] = function (u, o, l) {
            return this.add(Ue[e](u, Et(o) ? o : (l = o) && {}, this), l);
          }));
    },
    registerEase: function (t, e) {
      B[t] = Wt(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? Wt(t, e) : B;
    },
    getById: function (t) {
      return L.getById(t);
    },
    exportRoot: function (t, e) {
      t === void 0 && (t = {});
      var i = new it(t),
        r,
        n;
      for (
        i.smoothChildTiming = rt(t.smoothChildTiming),
          L.remove(i),
          i._dp = 0,
          i._time = i._tTime = L._time,
          r = L._first;
        r;
      )
        ((n = r._next),
          (e ||
            !(
              !r._dur &&
              r instanceof X &&
              r.vars.onComplete === r._targets[0]
            )) &&
            Ft(i, r, r._start - r._delay),
          (r = n));
      return (Ft(L, i, 0), i);
    },
    context: function (t, e) {
      return t ? new Ur(t, e) : j;
    },
    matchMedia: function (t) {
      return new as(t);
    },
    matchMediaRefresh: function () {
      return (
        qt.forEach(function (t) {
          var e = t.conditions,
            i,
            r;
          for (r in e) e[r] && ((e[r] = !1), (i = 1));
          i && t.revert();
        }) || ai()
      );
    },
    addEventListener: function (t, e) {
      var i = we[t] || (we[t] = []);
      ~i.indexOf(e) || i.push(e);
    },
    removeEventListener: function (t, e) {
      var i = we[t],
        r = i && i.indexOf(e);
      r >= 0 && i.splice(r, 1);
    },
    utils: {
      wrap: Ln,
      wrapYoyo: In,
      distribute: Fr,
      random: br,
      snap: yr,
      normalize: jn,
      getUnit: K,
      clamp: Mn,
      splitColor: Ar,
      toArray: pt,
      selector: ni,
      mapRange: vr,
      pipe: Rn,
      unitize: zn,
      interpolate: Vn,
      shuffle: Cr
    },
    install: or,
    effects: Ue,
    ticker: lt,
    updateRoot: it.updateRoot,
    plugins: ot,
    globalTimeline: L,
    core: {
      PropTween: st,
      globals: lr,
      Tween: X,
      Timeline: it,
      Animation: xe,
      getCache: Ut,
      _removeLinkedListItem: ze,
      reverting: function () {
        return Z;
      },
      context: function (t) {
        return (t && j && (j.data.push(t), (t._ctx = j)), j);
      },
      suppressOverwrites: function (t) {
        return (di = t);
      }
    }
  };
nt("to,from,fromTo,delayedCall,set,killTweensOf", function (a) {
  return (Oe[a] = X[a]);
});
lt.add(it.updateRoot);
Kt = Oe.to({}, { duration: 0 });
var os = function (t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
      i = i._next;
    return i;
  },
  ls = function (t, e) {
    var i = t._targets,
      r,
      n,
      s;
    for (r in e)
      for (n = i.length; n--; )
        ((s = t._ptLookup[n][r]),
          s &&
            (s = s.d) &&
            (s._pt && (s = os(s, r)),
            s && s.modifier && s.modifier(e[r], t, i[n], r)));
  },
  Ge = function (t, e) {
    return {
      name: t,
      rawVars: 1,
      init: function (r, n, s) {
        s._onInit = function (u) {
          var o, l;
          if (
            (H(n) &&
              ((o = {}),
              nt(n, function (f) {
                return (o[f] = 1);
              }),
              (n = o)),
            e)
          ) {
            o = {};
            for (l in n) o[l] = e(n[l]);
            n = o;
          }
          ls(u, n);
        };
      }
    };
  },
  at =
    Oe.registerPlugin(
      {
        name: "attr",
        init: function (t, e, i, r, n) {
          var s, u, o;
          this.tween = i;
          for (s in e)
            ((o = t.getAttribute(s) || ""),
              (u = this.add(
                t,
                "setAttribute",
                (o || 0) + "",
                e[s],
                r,
                n,
                0,
                0,
                s
              )),
              (u.op = s),
              (u.b = o),
              this._props.push(s));
        },
        render: function (t, e) {
          for (var i = e._pt; i; )
            (Z ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next));
        }
      },
      {
        name: "endArray",
        init: function (t, e) {
          for (var i = e.length; i--; )
            this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
        }
      },
      Ge("roundProps", si),
      Ge("modifiers"),
      Ge("snap", yr)
    ) || Oe;
X.version = it.version = at.version = "3.12.5";
ar = 1;
pi() && se();
B.Power0;
B.Power1;
B.Power2;
B.Power3;
B.Power4;
B.Linear;
B.Quad;
B.Cubic;
B.Quart;
B.Quint;
B.Strong;
B.Elastic;
B.Back;
B.SteppedEase;
B.Bounce;
B.Sine;
B.Expo;
B.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Ui,
  Bt,
  te,
  wi,
  Vt,
  Yi,
  Ai,
  fs = function () {
    return typeof window < "u";
  },
  At = {},
  It = 180 / Math.PI,
  ee = Math.PI / 180,
  Ht = Math.atan2,
  Wi = 1e8,
  Si = /([A-Z])/g,
  hs = /(left|right|width|margin|padding|x)/i,
  Ds = /[\s,\(]\S/,
  yt = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
  oi = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
  },
  _s = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
      e
    );
  },
  ds = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
      e
    );
  },
  cs = function (t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
  },
  Yr = function (t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  },
  Wr = function (t, e) {
    return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
  },
  ps = function (t, e, i) {
    return (t.style[e] = i);
  },
  ms = function (t, e, i) {
    return t.style.setProperty(e, i);
  },
  gs = function (t, e, i) {
    return (t._gsap[e] = i);
  },
  xs = function (t, e, i) {
    return (t._gsap.scaleX = t._gsap.scaleY = i);
  },
  Cs = function (t, e, i, r, n) {
    var s = t._gsap;
    ((s.scaleX = s.scaleY = i), s.renderTransform(n, s));
  },
  Fs = function (t, e, i, r, n) {
    var s = t._gsap;
    ((s[e] = i), s.renderTransform(n, s));
  },
  I = "transform",
  ut = I + "Origin",
  ys = function a(t, e) {
    var i = this,
      r = this.target,
      n = r.style,
      s = r._gsap;
    if (t in At && n) {
      if (((this.tfm = this.tfm || {}), t !== "transform"))
        ((t = yt[t] || t),
          ~t.indexOf(",")
            ? t.split(",").forEach(function (u) {
                return (i.tfm[u] = Tt(r, u));
              })
            : (this.tfm[t] = s.x ? s[t] : Tt(r, t)),
          t === ut && (this.tfm.zOrigin = s.zOrigin));
      else
        return yt.transform.split(",").forEach(function (u) {
          return a.call(i, u, e);
        });
      if (this.props.indexOf(I) >= 0) return;
      (s.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(ut, e, "")),
        (t = I));
    }
    (n || e) && this.props.push(t, e, n[t]);
  },
  qr = function (t) {
    t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  },
  bs = function () {
    var t = this.props,
      e = this.target,
      i = e.style,
      r = e._gsap,
      n,
      s;
    for (n = 0; n < t.length; n += 3)
      t[n + 1]
        ? (e[t[n]] = t[n + 2])
        : t[n + 2]
          ? (i[t[n]] = t[n + 2])
          : i.removeProperty(
              t[n].substr(0, 2) === "--"
                ? t[n]
                : t[n].replace(Si, "-$1").toLowerCase()
            );
    if (this.tfm) {
      for (s in this.tfm) r[s] = this.tfm[s];
      (r.svg &&
        (r.renderTransform(),
        e.setAttribute("data-svg-origin", this.svgo || "")),
        (n = Ai()),
        (!n || !n.isStart) &&
          !i[I] &&
          (qr(i),
          r.zOrigin &&
            i[ut] &&
            ((i[ut] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1)));
    }
  },
  Xr = function (t, e) {
    var i = { target: t, props: [], revert: bs, save: ys };
    return (
      t._gsap || at.core.getCache(t),
      e &&
        e.split(",").forEach(function (r) {
          return i.save(r);
        }),
      i
    );
  },
  Gr,
  li = function (t, e) {
    var i = Bt.createElementNS
      ? Bt.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : Bt.createElement(t);
    return i && i.style ? i : Bt.createElement(t);
  },
  bt = function a(t, e, i) {
    var r = getComputedStyle(t);
    return (
      r[e] ||
      r.getPropertyValue(e.replace(Si, "-$1").toLowerCase()) ||
      r.getPropertyValue(e) ||
      (!i && a(t, ue(e) || e, 1)) ||
      ""
    );
  },
  qi = "O,Moz,ms,Ms,Webkit".split(","),
  ue = function (t, e, i) {
    var r = e || Vt,
      n = r.style,
      s = 5;
    if (t in n && !i) return t;
    for (
      t = t.charAt(0).toUpperCase() + t.substr(1);
      s-- && !(qi[s] + t in n);
    );
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? qi[s] : "") + t;
  },
  fi = function () {
    fs() &&
      window.document &&
      ((Ui = window),
      (Bt = Ui.document),
      (te = Bt.documentElement),
      (Vt = li("div") || { style: {} }),
      li("div"),
      (I = ue(I)),
      (ut = I + "Origin"),
      (Vt.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Gr = !!ue("perspective")),
      (Ai = at.core.reverting),
      (wi = 1));
  },
  $e = function a(t) {
    var e = li(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      r = this.nextSibling,
      n = this.style.cssText,
      s;
    if (
      (te.appendChild(e),
      e.appendChild(this),
      (this.style.display = "block"),
      t)
    )
      try {
        ((s = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = a));
      } catch {}
    else this._gsapBBox && (s = this._gsapBBox());
    return (
      i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
      te.removeChild(e),
      (this.style.cssText = n),
      s
    );
  },
  Xi = function (t, e) {
    for (var i = e.length; i--; )
      if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
  },
  $r = function (t) {
    var e;
    try {
      e = t.getBBox();
    } catch {
      e = $e.call(t, !0);
    }
    return (
      (e && (e.width || e.height)) || t.getBBox === $e || (e = $e.call(t, !0)),
      e && !e.width && !e.x && !e.y
        ? {
            x: +Xi(t, ["x", "cx", "x1"]) || 0,
            y: +Xi(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        : e
    );
  },
  Hr = function (t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && $r(t));
  },
  Gt = function (t, e) {
    if (e) {
      var i = t.style,
        r;
      (e in At && e !== ut && (e = I),
        i.removeProperty
          ? ((r = e.substr(0, 2)),
            (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
            i.removeProperty(
              r === "--" ? e : e.replace(Si, "-$1").toLowerCase()
            ))
          : i.removeAttribute(e));
    }
  },
  kt = function (t, e, i, r, n, s) {
    var u = new st(t._pt, e, i, 0, 1, s ? Wr : Yr);
    return ((t._pt = u), (u.b = r), (u.e = n), t._props.push(i), u);
  },
  Gi = { deg: 1, rad: 1, turn: 1 },
  Es = { grid: 1, flex: 1 },
  Rt = function a(t, e, i, r) {
    var n = parseFloat(i) || 0,
      s = (i + "").trim().substr((n + "").length) || "px",
      u = Vt.style,
      o = hs.test(e),
      l = t.tagName.toLowerCase() === "svg",
      f = (l ? "client" : "offset") + (o ? "Width" : "Height"),
      D = 100,
      _ = r === "px",
      d = r === "%",
      p,
      h,
      c,
      m;
    if (r === s || !n || Gi[r] || Gi[s]) return n;
    if (
      (s !== "px" && !_ && (n = a(t, e, i, "px")),
      (m = t.getCTM && Hr(t)),
      (d || s === "%") && (At[e] || ~e.indexOf("adius")))
    )
      return (
        (p = m ? t.getBBox()[o ? "width" : "height"] : t[f]),
        W(d ? (n / p) * D : (n / 100) * p)
      );
    if (
      ((u[o ? "width" : "height"] = D + (_ ? s : r)),
      (h =
        ~e.indexOf("adius") || (r === "em" && t.appendChild && !l)
          ? t
          : t.parentNode),
      m && (h = (t.ownerSVGElement || {}).parentNode),
      (!h || h === Bt || !h.appendChild) && (h = Bt.body),
      (c = h._gsap),
      c && d && c.width && o && c.time === lt.time && !c.uncache)
    )
      return W((n / c.width) * D);
    if (d && (e === "height" || e === "width")) {
      var C = t.style[e];
      ((t.style[e] = D + r), (p = t[f]), C ? (t.style[e] = C) : Gt(t, e));
    } else
      ((d || s === "%") &&
        !Es[bt(h, "display")] &&
        (u.position = bt(t, "position")),
        h === t && (u.position = "static"),
        h.appendChild(Vt),
        (p = Vt[f]),
        h.removeChild(Vt),
        (u.position = "absolute"));
    return (
      o && d && ((c = Ut(h)), (c.time = lt.time), (c.width = h[f])),
      W(_ ? (p * n) / D : p && n ? (D / p) * n : 0)
    );
  },
  Tt = function (t, e, i, r) {
    var n;
    return (
      wi || fi(),
      e in yt &&
        e !== "transform" &&
        ((e = yt[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
      At[e] && e !== "transform"
        ? ((n = Fe(t, r)),
          (n =
            e !== "transformOrigin"
              ? n[e]
              : n.svg
                ? n.origin
                : Ne(bt(t, ut)) + " " + n.zOrigin + "px"))
        : ((n = t.style[e]),
          (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
            (n =
              (Me[e] && Me[e](t, e, i)) ||
              bt(t, e) ||
              hr(t, e) ||
              (e === "opacity" ? 1 : 0))),
      i && !~(n + "").trim().indexOf(" ") ? Rt(t, e, n, i) + i : n
    );
  },
  vs = function (t, e, i, r) {
    if (!i || i === "none") {
      var n = ue(e, t, 1),
        s = n && bt(t, n, 1);
      s && s !== i
        ? ((e = n), (i = s))
        : e === "borderColor" && (i = bt(t, "borderTopColor"));
    }
    var u = new st(this._pt, t.style, e, 0, 1, Ir),
      o = 0,
      l = 0,
      f,
      D,
      _,
      d,
      p,
      h,
      c,
      m,
      C,
      y,
      x,
      g;
    if (
      ((u.b = i),
      (u.e = r),
      (i += ""),
      (r += ""),
      r === "auto" &&
        ((h = t.style[e]),
        (t.style[e] = r),
        (r = bt(t, e) || r),
        h ? (t.style[e] = h) : Gt(t, e)),
      (f = [i, r]),
      Pr(f),
      (i = f[0]),
      (r = f[1]),
      (_ = i.match(Qt) || []),
      (g = r.match(Qt) || []),
      g.length)
    ) {
      for (; (D = Qt.exec(r)); )
        ((c = D[0]),
          (C = r.substring(o, D.index)),
          p
            ? (p = (p + 1) % 5)
            : (C.substr(-5) === "rgba(" || C.substr(-5) === "hsla(") && (p = 1),
          c !== (h = _[l++] || "") &&
            ((d = parseFloat(h) || 0),
            (x = h.substr((d + "").length)),
            c.charAt(1) === "=" && (c = Jt(d, c) + x),
            (m = parseFloat(c)),
            (y = c.substr((m + "").length)),
            (o = Qt.lastIndex - y.length),
            y ||
              ((y = y || ht.units[e] || x),
              o === r.length && ((r += y), (u.e += y))),
            x !== y && (d = Rt(t, e, h, y) || 0),
            (u._pt = {
              _next: u._pt,
              p: C || l === 1 ? C : ",",
              s: d,
              c: m - d,
              m: (p && p < 4) || e === "zIndex" ? Math.round : 0
            })));
      u.c = o < r.length ? r.substring(o, r.length) : "";
    } else u.r = e === "display" && r === "none" ? Wr : Yr;
    return (sr.test(r) && (u.e = 0), (this._pt = u), u);
  },
  $i = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Ts = function (t) {
    var e = t.split(" "),
      i = e[0],
      r = e[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((t = i), (i = r), (r = t)),
      (e[0] = $i[i] || i),
      (e[1] = $i[r] || r),
      e.join(" ")
    );
  },
  ws = function (t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var i = e.t,
        r = i.style,
        n = e.u,
        s = i._gsap,
        u,
        o,
        l;
      if (n === "all" || n === !0) ((r.cssText = ""), (o = 1));
      else
        for (n = n.split(","), l = n.length; --l > -1; )
          ((u = n[l]),
            At[u] && ((o = 1), (u = u === "transformOrigin" ? ut : I)),
            Gt(i, u));
      o &&
        (Gt(i, I),
        s &&
          (s.svg && i.removeAttribute("transform"),
          Fe(i, 1),
          (s.uncache = 1),
          qr(r)));
    }
  },
  Me = {
    clearProps: function (t, e, i, r, n) {
      if (n.data !== "isFromStart") {
        var s = (t._pt = new st(t._pt, e, i, 0, 0, ws));
        return ((s.u = r), (s.pr = -10), (s.tween = n), t._props.push(i), 1);
      }
    }
  },
  Ce = [1, 0, 0, 1, 0, 0],
  Qr = {},
  Kr = function (t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
  },
  Hi = function (t) {
    var e = bt(t, I);
    return Kr(e) ? Ce : e.substr(7).match(nr).map(W);
  },
  Pi = function (t, e) {
    var i = t._gsap || Ut(t),
      r = t.style,
      n = Hi(t),
      s,
      u,
      o,
      l;
    return i.svg && t.getAttribute("transform")
      ? ((o = t.transform.baseVal.consolidate().matrix),
        (n = [o.a, o.b, o.c, o.d, o.e, o.f]),
        n.join(",") === "1,0,0,1,0,0" ? Ce : n)
      : (n === Ce &&
          !t.offsetParent &&
          t !== te &&
          !i.svg &&
          ((o = r.display),
          (r.display = "block"),
          (s = t.parentNode),
          (!s || !t.offsetParent) &&
            ((l = 1), (u = t.nextElementSibling), te.appendChild(t)),
          (n = Hi(t)),
          o ? (r.display = o) : Gt(t, "display"),
          l &&
            (u
              ? s.insertBefore(t, u)
              : s
                ? s.appendChild(t)
                : te.removeChild(t))),
        e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  },
  hi = function (t, e, i, r, n, s) {
    var u = t._gsap,
      o = n || Pi(t, !0),
      l = u.xOrigin || 0,
      f = u.yOrigin || 0,
      D = u.xOffset || 0,
      _ = u.yOffset || 0,
      d = o[0],
      p = o[1],
      h = o[2],
      c = o[3],
      m = o[4],
      C = o[5],
      y = e.split(" "),
      x = parseFloat(y[0]) || 0,
      g = parseFloat(y[1]) || 0,
      w,
      E,
      v,
      F;
    (i
      ? o !== Ce &&
        (E = d * c - p * h) &&
        ((v = x * (c / E) + g * (-h / E) + (h * C - c * m) / E),
        (F = x * (-p / E) + g * (d / E) - (d * C - p * m) / E),
        (x = v),
        (g = F))
      : ((w = $r(t)),
        (x = w.x + (~y[0].indexOf("%") ? (x / 100) * w.width : x)),
        (g = w.y + (~(y[1] || y[0]).indexOf("%") ? (g / 100) * w.height : g))),
      r || (r !== !1 && u.smooth)
        ? ((m = x - l),
          (C = g - f),
          (u.xOffset = D + (m * d + C * h) - m),
          (u.yOffset = _ + (m * p + C * c) - C))
        : (u.xOffset = u.yOffset = 0),
      (u.xOrigin = x),
      (u.yOrigin = g),
      (u.smooth = !!r),
      (u.origin = e),
      (u.originIsAbsolute = !!i),
      (t.style[ut] = "0px 0px"),
      s &&
        (kt(s, u, "xOrigin", l, x),
        kt(s, u, "yOrigin", f, g),
        kt(s, u, "xOffset", D, u.xOffset),
        kt(s, u, "yOffset", _, u.yOffset)),
      t.setAttribute("data-svg-origin", x + " " + g));
  },
  Fe = function (t, e) {
    var i = t._gsap || new Mr(t);
    if ("x" in i && !e && !i.uncache) return i;
    var r = t.style,
      n = i.scaleX < 0,
      s = "px",
      u = "deg",
      o = getComputedStyle(t),
      l = bt(t, ut) || "0",
      f,
      D,
      _,
      d,
      p,
      h,
      c,
      m,
      C,
      y,
      x,
      g,
      w,
      E,
      v,
      F,
      S,
      O,
      M,
      k,
      q,
      U,
      A,
      P,
      Y,
      b,
      _t,
      tt,
      et,
      ae,
      G,
      N;
    return (
      (f = D = _ = h = c = m = C = y = x = 0),
      (d = p = 1),
      (i.svg = !!(t.getCTM && Hr(t))),
      o.translate &&
        ((o.translate !== "none" ||
          o.scale !== "none" ||
          o.rotate !== "none") &&
          (r[I] =
            (o.translate !== "none"
              ? "translate3d(" +
                (o.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (o.rotate !== "none" ? "rotate(" + o.rotate + ") " : "") +
            (o.scale !== "none"
              ? "scale(" + o.scale.split(" ").join(",") + ") "
              : "") +
            (o[I] !== "none" ? o[I] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (E = Pi(t, i.svg)),
      i.svg &&
        (i.uncache
          ? ((Y = t.getBBox()),
            (l = i.xOrigin - Y.x + "px " + (i.yOrigin - Y.y) + "px"),
            (P = ""))
          : (P = !e && t.getAttribute("data-svg-origin")),
        hi(t, P || l, !!P || i.originIsAbsolute, i.smooth !== !1, E)),
      (g = i.xOrigin || 0),
      (w = i.yOrigin || 0),
      E !== Ce &&
        ((O = E[0]),
        (M = E[1]),
        (k = E[2]),
        (q = E[3]),
        (f = U = E[4]),
        (D = A = E[5]),
        E.length === 6
          ? ((d = Math.sqrt(O * O + M * M)),
            (p = Math.sqrt(q * q + k * k)),
            (h = O || M ? Ht(M, O) * It : 0),
            (C = k || q ? Ht(k, q) * It + h : 0),
            C && (p *= Math.abs(Math.cos(C * ee))),
            i.svg && ((f -= g - (g * O + w * k)), (D -= w - (g * M + w * q))))
          : ((N = E[6]),
            (ae = E[7]),
            (_t = E[8]),
            (tt = E[9]),
            (et = E[10]),
            (G = E[11]),
            (f = E[12]),
            (D = E[13]),
            (_ = E[14]),
            (v = Ht(N, et)),
            (c = v * It),
            v &&
              ((F = Math.cos(-v)),
              (S = Math.sin(-v)),
              (P = U * F + _t * S),
              (Y = A * F + tt * S),
              (b = N * F + et * S),
              (_t = U * -S + _t * F),
              (tt = A * -S + tt * F),
              (et = N * -S + et * F),
              (G = ae * -S + G * F),
              (U = P),
              (A = Y),
              (N = b)),
            (v = Ht(-k, et)),
            (m = v * It),
            v &&
              ((F = Math.cos(-v)),
              (S = Math.sin(-v)),
              (P = O * F - _t * S),
              (Y = M * F - tt * S),
              (b = k * F - et * S),
              (G = q * S + G * F),
              (O = P),
              (M = Y),
              (k = b)),
            (v = Ht(M, O)),
            (h = v * It),
            v &&
              ((F = Math.cos(v)),
              (S = Math.sin(v)),
              (P = O * F + M * S),
              (Y = U * F + A * S),
              (M = M * F - O * S),
              (A = A * F - U * S),
              (O = P),
              (U = Y)),
            c &&
              Math.abs(c) + Math.abs(h) > 359.9 &&
              ((c = h = 0), (m = 180 - m)),
            (d = W(Math.sqrt(O * O + M * M + k * k))),
            (p = W(Math.sqrt(A * A + N * N))),
            (v = Ht(U, A)),
            (C = Math.abs(v) > 2e-4 ? v * It : 0),
            (x = G ? 1 / (G < 0 ? -G : G) : 0)),
        i.svg &&
          ((P = t.getAttribute("transform")),
          (i.forceCSS = t.setAttribute("transform", "") || !Kr(bt(t, I))),
          P && t.setAttribute("transform", P))),
      Math.abs(C) > 90 &&
        Math.abs(C) < 270 &&
        (n
          ? ((d *= -1), (C += h <= 0 ? 180 : -180), (h += h <= 0 ? 180 : -180))
          : ((p *= -1), (C += C <= 0 ? 180 : -180))),
      (e = e || i.uncache),
      (i.x =
        f -
        ((i.xPercent =
          f &&
          ((!e && i.xPercent) ||
            (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0)))
          ? (t.offsetWidth * i.xPercent) / 100
          : 0) +
        s),
      (i.y =
        D -
        ((i.yPercent =
          D &&
          ((!e && i.yPercent) ||
            (Math.round(t.offsetHeight / 2) === Math.round(-D) ? -50 : 0)))
          ? (t.offsetHeight * i.yPercent) / 100
          : 0) +
        s),
      (i.z = _ + s),
      (i.scaleX = W(d)),
      (i.scaleY = W(p)),
      (i.rotation = W(h) + u),
      (i.rotationX = W(c) + u),
      (i.rotationY = W(m) + u),
      (i.skewX = C + u),
      (i.skewY = y + u),
      (i.transformPerspective = x + s),
      (i.zOrigin = parseFloat(l.split(" ")[2]) || (!e && i.zOrigin) || 0) &&
        (r[ut] = Ne(l)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = ht.force3D),
      (i.renderTransform = i.svg ? Ss : Gr ? Zr : As),
      (i.uncache = 0),
      i
    );
  },
  Ne = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  He = function (t, e, i) {
    var r = K(e);
    return W(parseFloat(e) + parseFloat(Rt(t, "x", i + "px", r))) + r;
  },
  As = function (t, e) {
    ((e.z = "0px"),
      (e.rotationY = e.rotationX = "0deg"),
      (e.force3D = 0),
      Zr(t, e));
  },
  jt = "0deg",
  oe = "0px",
  Lt = ") ",
  Zr = function (t, e) {
    var i = e || this,
      r = i.xPercent,
      n = i.yPercent,
      s = i.x,
      u = i.y,
      o = i.z,
      l = i.rotation,
      f = i.rotationY,
      D = i.rotationX,
      _ = i.skewX,
      d = i.skewY,
      p = i.scaleX,
      h = i.scaleY,
      c = i.transformPerspective,
      m = i.force3D,
      C = i.target,
      y = i.zOrigin,
      x = "",
      g = (m === "auto" && t && t !== 1) || m === !0;
    if (y && (D !== jt || f !== jt)) {
      var w = parseFloat(f) * ee,
        E = Math.sin(w),
        v = Math.cos(w),
        F;
      ((w = parseFloat(D) * ee),
        (F = Math.cos(w)),
        (s = He(C, s, E * F * -y)),
        (u = He(C, u, -Math.sin(w) * -y)),
        (o = He(C, o, v * F * -y + y)));
    }
    (c !== oe && (x += "perspective(" + c + Lt),
      (r || n) && (x += "translate(" + r + "%, " + n + "%) "),
      (g || s !== oe || u !== oe || o !== oe) &&
        (x +=
          o !== oe || g
            ? "translate3d(" + s + ", " + u + ", " + o + ") "
            : "translate(" + s + ", " + u + Lt),
      l !== jt && (x += "rotate(" + l + Lt),
      f !== jt && (x += "rotateY(" + f + Lt),
      D !== jt && (x += "rotateX(" + D + Lt),
      (_ !== jt || d !== jt) && (x += "skew(" + _ + ", " + d + Lt),
      (p !== 1 || h !== 1) && (x += "scale(" + p + ", " + h + Lt),
      (C.style[I] = x || "translate(0, 0)"));
  },
  Ss = function (t, e) {
    var i = e || this,
      r = i.xPercent,
      n = i.yPercent,
      s = i.x,
      u = i.y,
      o = i.rotation,
      l = i.skewX,
      f = i.skewY,
      D = i.scaleX,
      _ = i.scaleY,
      d = i.target,
      p = i.xOrigin,
      h = i.yOrigin,
      c = i.xOffset,
      m = i.yOffset,
      C = i.forceCSS,
      y = parseFloat(s),
      x = parseFloat(u),
      g,
      w,
      E,
      v,
      F;
    ((o = parseFloat(o)),
      (l = parseFloat(l)),
      (f = parseFloat(f)),
      f && ((f = parseFloat(f)), (l += f), (o += f)),
      o || l
        ? ((o *= ee),
          (l *= ee),
          (g = Math.cos(o) * D),
          (w = Math.sin(o) * D),
          (E = Math.sin(o - l) * -_),
          (v = Math.cos(o - l) * _),
          l &&
            ((f *= ee),
            (F = Math.tan(l - f)),
            (F = Math.sqrt(1 + F * F)),
            (E *= F),
            (v *= F),
            f &&
              ((F = Math.tan(f)),
              (F = Math.sqrt(1 + F * F)),
              (g *= F),
              (w *= F))),
          (g = W(g)),
          (w = W(w)),
          (E = W(E)),
          (v = W(v)))
        : ((g = D), (v = _), (w = E = 0)),
      ((y && !~(s + "").indexOf("px")) || (x && !~(u + "").indexOf("px"))) &&
        ((y = Rt(d, "x", s, "px")), (x = Rt(d, "y", u, "px"))),
      (p || h || c || m) &&
        ((y = W(y + p - (p * g + h * E) + c)),
        (x = W(x + h - (p * w + h * v) + m))),
      (r || n) &&
        ((F = d.getBBox()),
        (y = W(y + (r / 100) * F.width)),
        (x = W(x + (n / 100) * F.height))),
      (F =
        "matrix(" + g + "," + w + "," + E + "," + v + "," + y + "," + x + ")"),
      d.setAttribute("transform", F),
      C && (d.style[I] = F));
  },
  Ps = function (t, e, i, r, n) {
    var s = 360,
      u = H(n),
      o = parseFloat(n) * (u && ~n.indexOf("rad") ? It : 1),
      l = o - r,
      f = r + l + "deg",
      D,
      _;
    return (
      u &&
        ((D = n.split("_")[1]),
        D === "short" && ((l %= s), l !== l % (s / 2) && (l += l < 0 ? s : -s)),
        D === "cw" && l < 0
          ? (l = ((l + s * Wi) % s) - ~~(l / s) * s)
          : D === "ccw" && l > 0 && (l = ((l - s * Wi) % s) - ~~(l / s) * s)),
      (t._pt = _ = new st(t._pt, e, i, r, l, _s)),
      (_.e = f),
      (_.u = "deg"),
      t._props.push(i),
      _
    );
  },
  Qi = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  Bs = function (t, e, i) {
    var r = Qi({}, i._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      s = i.style,
      u,
      o,
      l,
      f,
      D,
      _,
      d,
      p;
    r.svg
      ? ((l = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (s[I] = e),
        (u = Fe(i, 1)),
        Gt(i, I),
        i.setAttribute("transform", l))
      : ((l = getComputedStyle(i)[I]), (s[I] = e), (u = Fe(i, 1)), (s[I] = l));
    for (o in At)
      ((l = r[o]),
        (f = u[o]),
        l !== f &&
          n.indexOf(o) < 0 &&
          ((d = K(l)),
          (p = K(f)),
          (D = d !== p ? Rt(i, o, l, p) : parseFloat(l)),
          (_ = parseFloat(f)),
          (t._pt = new st(t._pt, u, o, D, _ - D, oi)),
          (t._pt.u = p || 0),
          t._props.push(o)));
    Qi(u, r);
  };
nt("padding,margin,Width,Radius", function (a, t) {
  var e = "Top",
    i = "Right",
    r = "Bottom",
    n = "Left",
    s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function (u) {
      return t < 2 ? a + u : "border" + u + a;
    });
  Me[t > 1 ? "border" + a : a] = function (u, o, l, f, D) {
    var _, d;
    if (arguments.length < 4)
      return (
        (_ = s.map(function (p) {
          return Tt(u, p, l);
        })),
        (d = _.join(" ")),
        d.split(_[0]).length === 5 ? _[0] : d
      );
    ((_ = (f + "").split(" ")),
      (d = {}),
      s.forEach(function (p, h) {
        return (d[p] = _[h] = _[h] || _[((h - 1) / 2) | 0]);
      }),
      u.init(o, d, D));
  };
});
var Jr = {
  name: "css",
  register: fi,
  targetTest: function (t) {
    return t.style && t.nodeType;
  },
  init: function (t, e, i, r, n) {
    var s = this._props,
      u = t.style,
      o = i.vars.startAt,
      l,
      f,
      D,
      _,
      d,
      p,
      h,
      c,
      m,
      C,
      y,
      x,
      g,
      w,
      E,
      v;
    (wi || fi(),
      (this.styles = this.styles || Xr(t)),
      (v = this.styles.props),
      (this.tween = i));
    for (h in e)
      if (h !== "autoRound" && ((f = e[h]), !(ot[h] && Nr(h, e, i, r, t, n)))) {
        if (
          ((d = typeof f),
          (p = Me[h]),
          d === "function" && ((f = f.call(i, r, t, n)), (d = typeof f)),
          d === "string" && ~f.indexOf("random(") && (f = me(f)),
          p)
        )
          p(this, t, h, f, i) && (E = 1);
        else if (h.substr(0, 2) === "--")
          ((l = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
            (f += ""),
            (Mt.lastIndex = 0),
            Mt.test(l) || ((c = K(l)), (m = K(f))),
            m ? c !== m && (l = Rt(t, h, l, m) + m) : c && (f += c),
            this.add(u, "setProperty", l, f, r, n, 0, 0, h),
            s.push(h),
            v.push(h, 0, u[h]));
        else if (d !== "undefined") {
          if (
            (o && h in o
              ? ((l = typeof o[h] == "function" ? o[h].call(i, r, t, n) : o[h]),
                H(l) && ~l.indexOf("random(") && (l = me(l)),
                K(l + "") ||
                  l === "auto" ||
                  (l += ht.units[h] || K(Tt(t, h)) || ""),
                (l + "").charAt(1) === "=" && (l = Tt(t, h)))
              : (l = Tt(t, h)),
            (_ = parseFloat(l)),
            (C = d === "string" && f.charAt(1) === "=" && f.substr(0, 2)),
            C && (f = f.substr(2)),
            (D = parseFloat(f)),
            h in yt &&
              (h === "autoAlpha" &&
                (_ === 1 && Tt(t, "visibility") === "hidden" && D && (_ = 0),
                v.push("visibility", 0, u.visibility),
                kt(
                  this,
                  u,
                  "visibility",
                  _ ? "inherit" : "hidden",
                  D ? "inherit" : "hidden",
                  !D
                )),
              h !== "scale" &&
                h !== "transform" &&
                ((h = yt[h]), ~h.indexOf(",") && (h = h.split(",")[0]))),
            (y = h in At),
            y)
          ) {
            if (
              (this.styles.save(h),
              x ||
                ((g = t._gsap),
                (g.renderTransform && !e.parseTransform) ||
                  Fe(t, e.parseTransform),
                (w = e.smoothOrigin !== !1 && g.smooth),
                (x = this._pt =
                  new st(this._pt, u, I, 0, 1, g.renderTransform, g, 0, -1)),
                (x.dep = 1)),
              h === "scale")
            )
              ((this._pt = new st(
                this._pt,
                g,
                "scaleY",
                g.scaleY,
                (C ? Jt(g.scaleY, C + D) : D) - g.scaleY || 0,
                oi
              )),
                (this._pt.u = 0),
                s.push("scaleY", h),
                (h += "X"));
            else if (h === "transformOrigin") {
              (v.push(ut, 0, u[ut]),
                (f = Ts(f)),
                g.svg
                  ? hi(t, f, 0, w, 0, this)
                  : ((m = parseFloat(f.split(" ")[2]) || 0),
                    m !== g.zOrigin && kt(this, g, "zOrigin", g.zOrigin, m),
                    kt(this, u, h, Ne(l), Ne(f))));
              continue;
            } else if (h === "svgOrigin") {
              hi(t, f, 1, w, 0, this);
              continue;
            } else if (h in Qr) {
              Ps(this, g, h, _, C ? Jt(_, C + f) : f);
              continue;
            } else if (h === "smoothOrigin") {
              kt(this, g, "smooth", g.smooth, f);
              continue;
            } else if (h === "force3D") {
              g[h] = f;
              continue;
            } else if (h === "transform") {
              Bs(this, f, t);
              continue;
            }
          } else h in u || (h = ue(h) || h);
          if (y || ((D || D === 0) && (_ || _ === 0) && !Ds.test(f) && h in u))
            ((c = (l + "").substr((_ + "").length)),
              D || (D = 0),
              (m = K(f) || (h in ht.units ? ht.units[h] : c)),
              c !== m && (_ = Rt(t, h, l, m)),
              (this._pt = new st(
                this._pt,
                y ? g : u,
                h,
                _,
                (C ? Jt(_, C + D) : D) - _,
                !y && (m === "px" || h === "zIndex") && e.autoRound !== !1
                  ? cs
                  : oi
              )),
              (this._pt.u = m || 0),
              c !== m && m !== "%" && ((this._pt.b = l), (this._pt.r = ds)));
          else if (h in u) vs.call(this, t, h, l, C ? C + f : f);
          else if (h in t) this.add(t, h, l || t[h], C ? C + f : f, r, n);
          else if (h !== "parseTransform") {
            gi(h, f);
            continue;
          }
          (y || (h in u ? v.push(h, 0, u[h]) : v.push(h, 1, l || t[h])),
            s.push(h));
        }
      }
    E && Vr(this);
  },
  render: function (t, e) {
    if (e.tween._time || !Ai())
      for (var i = e._pt; i; ) (i.r(t, i.d), (i = i._next));
    else e.styles.revert();
  },
  get: Tt,
  aliases: yt,
  getSetter: function (t, e, i) {
    var r = yt[e];
    return (
      r && r.indexOf(",") < 0 && (e = r),
      e in At && e !== ut && (t._gsap.x || Tt(t, "x"))
        ? i && Yi === i
          ? e === "scale"
            ? xs
            : gs
          : (Yi = i || {}) && (e === "scale" ? Cs : Fs)
        : t.style && !ci(t.style[e])
          ? ps
          : ~e.indexOf("-")
            ? ms
            : vi(t, e)
    );
  },
  core: { _removeProperty: Gt, _getMatrix: Pi }
};
at.utils.checkPrefix = ue;
at.core.getStyleSaver = Xr;
(function (a, t, e, i) {
  var r = nt(a + "," + t + "," + e, function (n) {
    At[n] = 1;
  });
  (nt(t, function (n) {
    ((ht.units[n] = "deg"), (Qr[n] = 1));
  }),
    (yt[r[13]] = a + "," + t),
    nt(i, function (n) {
      var s = n.split(":");
      yt[s[1]] = r[s[0]];
    }));
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
nt(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (a) {
    ht.units[a] = "px";
  }
);
at.registerPlugin(Jr);
var tn = at.registerPlugin(Jr) || at;
tn.core.Tween;
/*!
 * strings: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ks =
  /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function en(a) {
  var t = a.nodeType,
    e = "";
  if (t === 1 || t === 9 || t === 11) {
    if (typeof a.textContent == "string") return a.textContent;
    for (a = a.firstChild; a; a = a.nextSibling) e += en(a);
  } else if (t === 3 || t === 4) return a.nodeValue;
  return e;
}
/*!
 * SplitText: 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Zt,
  Di,
  rn,
  le,
  nn,
  Ie,
  Os = /(?:\r|\n|\t\t)/g,
  Ms = /(?:\s\s+)/g,
  Ns = " ",
  sn = function (t) {
    ((Zt = document),
      (Di = window),
      (le =
        le ||
        t ||
        Di.gsap ||
        console.warn("Please gsap.registerPlugin(SplitText)")),
      le &&
        ((Ie = le.utils.toArray),
        (nn = le.core.context || function () {}),
        (rn = 1)));
  },
  un = function (t) {
    return Di.getComputedStyle(t);
  },
  Bi = function (t) {
    return t.position === "absolute" || t.absolute === !0;
  },
  Rs = function (t, e) {
    for (var i = e.length, r; --i > -1; )
      if (((r = e[i]), t.substr(0, r.length) === r)) return r.length;
  },
  zs = " style='position:relative;display:inline-block;'",
  Ki = function (t, e) {
    t === void 0 && (t = "");
    var i = ~t.indexOf("++"),
      r = 1;
    return (
      i && (t = t.split("++").join("")),
      function () {
        return (
          "<" + e + zs + (t ? " class='" + t + (i ? r++ : "") + "'>" : ">")
        );
      }
    );
  },
  an = function a(t, e, i) {
    var r = t.nodeType;
    if (r === 1 || r === 9 || r === 11)
      for (t = t.firstChild; t; t = t.nextSibling) a(t, e, i);
    else (r === 3 || r === 4) && (t.nodeValue = t.nodeValue.split(e).join(i));
  },
  Qe = function (t, e) {
    for (var i = e.length; --i > -1; ) t.push(e[i]);
  },
  Zi = function (t, e, i) {
    for (var r; t && t !== e; ) {
      if (((r = t._next || t.nextSibling), r))
        return r.textContent.charAt(0) === i;
      t = t.parentNode || t._parent;
    }
  },
  js = function a(t) {
    var e = Ie(t.childNodes),
      i = e.length,
      r,
      n;
    for (r = 0; r < i; r++)
      ((n = e[r]),
        n._isSplit
          ? a(n)
          : r && n.previousSibling && n.previousSibling.nodeType === 3
            ? ((n.previousSibling.nodeValue +=
                n.nodeType === 3 ? n.nodeValue : n.firstChild.nodeValue),
              t.removeChild(n))
            : n.nodeType !== 3 &&
              (t.insertBefore(n.firstChild, n), t.removeChild(n)));
  },
  xt = function (t, e) {
    return parseFloat(e[t]) || 0;
  },
  Ls = function (t, e, i, r, n, s, u) {
    var o = un(t),
      l = xt("paddingLeft", o),
      f = -999,
      D = xt("borderBottomWidth", o) + xt("borderTopWidth", o),
      _ = xt("borderLeftWidth", o) + xt("borderRightWidth", o),
      d = xt("paddingTop", o) + xt("paddingBottom", o),
      p = xt("paddingLeft", o) + xt("paddingRight", o),
      h = xt("fontSize", o) * (e.lineThreshold || 0.2),
      c = o.textAlign,
      m = [],
      C = [],
      y = [],
      x = e.wordDelimiter || " ",
      g = e.tag ? e.tag : e.span ? "span" : "div",
      w = e.type || e.split || "chars,words,lines",
      E = n && ~w.indexOf("lines") ? [] : null,
      v = ~w.indexOf("words"),
      F = ~w.indexOf("chars"),
      S = Bi(e),
      O = e.linesClass,
      M = ~(O || "").indexOf("++"),
      k = [],
      q = o.display === "flex",
      U = t.style.display,
      A,
      P,
      Y,
      b,
      _t,
      tt,
      et,
      ae,
      G,
      N,
      ki,
      gt;
    for (
      M && (O = O.split("++").join("")),
        q && (t.style.display = "block"),
        P = t.getElementsByTagName("*"),
        Y = P.length,
        _t = [],
        A = 0;
      A < Y;
      A++
    )
      _t[A] = P[A];
    if (E || S)
      for (A = 0; A < Y; A++)
        ((b = _t[A]),
          (tt = b.parentNode === t),
          (tt || S || (F && !v)) &&
            ((gt = b.offsetTop),
            E &&
              tt &&
              Math.abs(gt - f) > h &&
              (b.nodeName !== "BR" || A === 0) &&
              ((et = []), E.push(et), (f = gt)),
            S &&
              ((b._x = b.offsetLeft),
              (b._y = gt),
              (b._w = b.offsetWidth),
              (b._h = b.offsetHeight)),
            E &&
              (((b._isSplit && tt) ||
                (!F && tt) ||
                (v && tt) ||
                (!v &&
                  b.parentNode.parentNode === t &&
                  !b.parentNode._isSplit)) &&
                (et.push(b), (b._x -= l), Zi(b, t, x) && (b._wordEnd = !0)),
              b.nodeName === "BR" &&
                ((b.nextSibling && b.nextSibling.nodeName === "BR") ||
                  A === 0) &&
                E.push([]))));
    for (A = 0; A < Y; A++) {
      if (((b = _t[A]), (tt = b.parentNode === t), b.nodeName === "BR")) {
        E || S
          ? (b.parentNode && b.parentNode.removeChild(b),
            _t.splice(A--, 1),
            Y--)
          : v || t.appendChild(b);
        continue;
      }
      if (
        (S &&
          ((G = b.style),
          !v && !tt && ((b._x += b.parentNode._x), (b._y += b.parentNode._y)),
          (G.left = b._x + "px"),
          (G.top = b._y + "px"),
          (G.position = "absolute"),
          (G.display = "block"),
          (G.width = b._w + 1 + "px"),
          (G.height = b._h + "px")),
        !v && F)
      )
        if (b._isSplit)
          for (
            b._next = P = b.nextSibling, b.parentNode.appendChild(b);
            P && P.nodeType === 3 && P.textContent === " ";
          )
            ((b._next = P.nextSibling),
              b.parentNode.appendChild(P),
              (P = P.nextSibling));
        else
          b.parentNode._isSplit
            ? ((b._parent = b.parentNode),
              !b.previousSibling &&
                b.firstChild &&
                (b.firstChild._isFirst = !0),
              b.nextSibling &&
                b.nextSibling.textContent === " " &&
                !b.nextSibling.nextSibling &&
                k.push(b.nextSibling),
              (b._next =
                b.nextSibling && b.nextSibling._isFirst ? null : b.nextSibling),
              b.parentNode.removeChild(b),
              _t.splice(A--, 1),
              Y--)
            : tt ||
              ((gt = !b.nextSibling && Zi(b.parentNode, t, x)),
              b.parentNode._parent && b.parentNode._parent.appendChild(b),
              gt && b.parentNode.appendChild(Zt.createTextNode(" ")),
              g === "span" && (b.style.display = "inline"),
              m.push(b));
      else
        b.parentNode._isSplit && !b._isSplit && b.innerHTML !== ""
          ? C.push(b)
          : F &&
            !b._isSplit &&
            (g === "span" && (b.style.display = "inline"), m.push(b));
    }
    for (A = k.length; --A > -1; ) k[A].parentNode.removeChild(k[A]);
    if (E) {
      for (
        S &&
          ((N = Zt.createElement(g)),
          t.appendChild(N),
          (ki = N.offsetWidth + "px"),
          (gt = N.offsetParent === t ? 0 : t.offsetLeft),
          t.removeChild(N)),
          G = t.style.cssText,
          t.style.cssText = "display:none;";
        t.firstChild;
      )
        t.removeChild(t.firstChild);
      for (ae = x === " " && (!S || (!v && !F)), A = 0; A < E.length; A++) {
        for (
          et = E[A],
            N = Zt.createElement(g),
            N.style.cssText =
              "display:block;text-align:" +
              c +
              ";position:" +
              (S ? "absolute;" : "relative;"),
            O && (N.className = O + (M ? A + 1 : "")),
            y.push(N),
            Y = et.length,
            P = 0;
          P < Y;
          P++
        )
          et[P].nodeName !== "BR" &&
            ((b = et[P]),
            N.appendChild(b),
            ae && b._wordEnd && N.appendChild(Zt.createTextNode(" ")),
            S &&
              (P === 0 &&
                ((N.style.top = b._y + "px"), (N.style.left = l + gt + "px")),
              (b.style.top = "0px"),
              gt && (b.style.left = b._x - gt + "px")));
        (Y === 0
          ? (N.innerHTML = "&nbsp;")
          : !v && !F && (js(N), an(N, " ", " ")),
          S && ((N.style.width = ki), (N.style.height = b._h + "px")),
          t.appendChild(N));
      }
      t.style.cssText = G;
    }
    (S &&
      (u > t.clientHeight &&
        ((t.style.height = u - d + "px"),
        t.clientHeight < u && (t.style.height = u + D + "px")),
      s > t.clientWidth &&
        ((t.style.width = s - p + "px"),
        t.clientWidth < s && (t.style.width = s + _ + "px"))),
      q && (U ? (t.style.display = U) : t.style.removeProperty("display")),
      Qe(i, m),
      v && Qe(r, C),
      Qe(n, y));
  },
  Is = function (t, e, i, r) {
    var n = e.tag ? e.tag : e.span ? "span" : "div",
      s = e.type || e.split || "chars,words,lines",
      u = ~s.indexOf("chars"),
      o = Bi(e),
      l = e.wordDelimiter || " ",
      f = function (S) {
        return S === l || (S === Ns && l === " ");
      },
      D = l !== " " ? "" : o ? "&#173; " : " ",
      _ = "</" + n + ">",
      d = 1,
      p = e.specialChars
        ? typeof e.specialChars == "function"
          ? e.specialChars
          : Rs
        : null,
      h,
      c,
      m,
      C,
      y,
      x,
      g,
      w,
      E = Zt.createElement("div"),
      v = t.parentNode;
    for (
      v.insertBefore(E, t),
        E.textContent = t.nodeValue,
        v.removeChild(t),
        t = E,
        h = en(t),
        g = h.indexOf("<") !== -1,
        e.reduceWhiteSpace !== !1 && (h = h.replace(Ms, " ").replace(Os, "")),
        g && (h = h.split("<").join("{{LT}}")),
        y = h.length,
        c = (h.charAt(0) === " " ? D : "") + i(),
        m = 0;
      m < y;
      m++
    )
      if (((x = h.charAt(m)), p && (w = p(h.substr(m), e.specialChars))))
        ((x = h.substr(m, w || 1)),
          (c += u && x !== " " ? r() + x + "</" + n + ">" : x),
          (m += w - 1));
      else if (f(x) && !f(h.charAt(m - 1)) && m) {
        for (c += d ? _ : "", d = 0; f(h.charAt(m + 1)); ) ((c += D), m++);
        m === y - 1
          ? (c += D)
          : h.charAt(m + 1) !== ")" && ((c += D + i()), (d = 1));
      } else
        x === "{" && h.substr(m, 6) === "{{LT}}"
          ? ((c += u ? r() + "{{LT}}</" + n + ">" : "{{LT}}"), (m += 5))
          : (x.charCodeAt(0) >= 55296 && x.charCodeAt(0) <= 56319) ||
              (h.charCodeAt(m + 1) >= 65024 && h.charCodeAt(m + 1) <= 65039)
            ? ((C = ((h.substr(m, 12).split(ks) || [])[1] || "").length || 2),
              (c +=
                u && x !== " "
                  ? r() + h.substr(m, C) + "</" + n + ">"
                  : h.substr(m, C)),
              (m += C - 1))
            : (c += u && x !== " " ? r() + x + "</" + n + ">" : x);
    ((t.outerHTML = c + (d ? _ : "")), g && an(v, "{{LT}}", "<"));
  },
  Vs = function a(t, e, i, r) {
    var n = Ie(t.childNodes),
      s = n.length,
      u = Bi(e),
      o,
      l;
    if (t.nodeType !== 3 || s > 1) {
      for (e.absolute = !1, o = 0; o < s; o++)
        ((l = n[o]),
          (l._next = l._isFirst = l._parent = l._wordEnd = null),
          (l.nodeType !== 3 || /\S+/.test(l.nodeValue)) &&
            (u &&
              l.nodeType !== 3 &&
              un(l).display === "inline" &&
              ((l.style.display = "inline-block"),
              (l.style.position = "relative")),
            (l._isSplit = !0),
            a(l, e, i, r)));
      ((e.absolute = u), (t._isSplit = !0));
      return;
    }
    Is(t, e, i, r);
  },
  Re = (function () {
    function a(e, i) {
      (rn || sn(),
        (this.elements = Ie(e)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this._originals = []),
        (this.vars = i || {}),
        nn(this),
        this.split(i));
    }
    var t = a.prototype;
    return (
      (t.split = function (i) {
        (this.isSplit && this.revert(),
          (this.vars = i = i || this.vars),
          (this._originals.length =
            this.chars.length =
            this.words.length =
            this.lines.length =
              0));
        for (
          var r = this.elements.length,
            n = i.tag ? i.tag : i.span ? "span" : "div",
            s = Ki(i.wordsClass, n),
            u = Ki(i.charsClass, n),
            o,
            l,
            f;
          --r > -1;
        )
          ((f = this.elements[r]),
            (this._originals[r] = {
              html: f.innerHTML,
              style: f.getAttribute("style")
            }),
            (o = f.clientHeight),
            (l = f.clientWidth),
            Vs(f, i, s, u),
            Ls(f, i, this.chars, this.words, this.lines, l, o));
        return (
          this.chars.reverse(),
          this.words.reverse(),
          this.lines.reverse(),
          (this.isSplit = !0),
          this
        );
      }),
      (t.revert = function () {
        var i = this._originals;
        if (!i) throw "revert() call wasn't scoped properly.";
        return (
          this.elements.forEach(function (r, n) {
            ((r.innerHTML = i[n].html), r.setAttribute("style", i[n].style));
          }),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this.isSplit = !1),
          this
        );
      }),
      (a.create = function (i, r) {
        return new a(i, r);
      }),
      a
    );
  })();
Re.version = "3.12.5";
Re.register = sn;
function Us({ className: a }) {
  const { Form: t, state: e } = ln(),
    { theme: i } = _n(),
    r = i === "dark";
  return T.jsx(t, {
    className: Q("inline-block", a),
    method: "post",
    action: "/api/toggle-theme",
    children: T.jsxs("button", {
      className:
        "relative flex h-32 items-center justify-between gap-8 overflow-hidden border border-black p-3",
      type: "submit",
      disabled: e === "submitting",
      children: [
        T.jsx("span", {
          className: Q([
            "absolute right-auto z-behind h-24 min-w-24 transition-all",
            r ? "translate-x-32 bg-grey" : "bg-light-grey"
          ])
        }),
        T.jsxs("div", {
          className: Q([
            "relative flex -translate-y-12 flex-col transition-transform duration-500 ease-in-out",
            !r && "translate-y-12"
          ]),
          children: [
            T.jsx(St, { className: "size-24", name: "lightmode" }),
            T.jsx(St, { className: "size-24", name: "lightmode" })
          ]
        }),
        T.jsxs("div", {
          className: Q([
            "relative flex -translate-y-12 flex-col transition-transform duration-500",
            r && "translate-y-12"
          ]),
          children: [
            T.jsx(St, {
              className: Q(["size-24", r ? "text-white" : "text-black"]),
              name: "darkmode"
            }),
            T.jsx(St, {
              className: Q(["size-24", r ? "text-white" : "text-black"]),
              name: "darkmode"
            })
          ]
        })
      ]
    })
  });
}
function Ys({ className: a, ...t }) {
  const [e, i] = Ae.useState("");
  return (
    Ae.useEffect(() => {
      const r = new Intl.DateTimeFormat("en-GB", {
          timeZone: "UTC",
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: !1
        }),
        n = () => {
          const u = new Date(),
            l = r.format(u).replace(/\//g, ".").replace(",", " at");
          i(`${l}`);
        };
      n();
      const s = setInterval(n, 1e3);
      return () => clearInterval(s);
    }, []),
    e ? T.jsxs("span", { className: a, ...t, children: [e, " GMT"] }) : null
  );
}
function Ws({ className: a, children: t, ...e }) {
  return T.jsx("div", {
    ...e,
    className: Q("whitespace-nowrap overflow-clip marquee-text flex py-2", a),
    children: T.jsxs("div", {
      className: "marquee-animation flex items-start w-max [&>*]:px-[0.35em]",
      children: [t, t, t, t, t]
    })
  });
}
function au({ data: a }) {
  var e, i, r;
  const t =
    (r =
      (i = (e = a.siteData) == null ? void 0 : e.data) == null
        ? void 0
        : i.site) == null
      ? void 0
      : r.seoMetadata;
  return mn({ seoMetadata: t, titlePrefix: "Articles" });
}
const ou = on(function ({ loaderData: t }) {
  const { initial: e, query: i, params: r } = t,
    { data: n } = fn(i, r, { initial: e }),
    s =
      n == null
        ? void 0
        : n.articles.filter((o) => o.publishAt && Mi(o.publishAt)),
    u =
      n == null
        ? void 0
        : n.articles
            .filter((o) => o.publishAt && !Mi(o.publishAt))
            .sort(
              (o, l) =>
                new Date(o.publishAt).getTime() -
                new Date(l.publishAt).getTime()
            );
  return T.jsxs(T.Fragment, {
    children: [
      T.jsxs(hn, {
        className:
          "relative animate-glitch-1-horizontal font-mono text-subtitle-30 motion-reduce:animate-none",
        children: [
          T.jsxs("div", {
            className: "mb-40 justify-between md:flex",
            children: [
              T.jsxs("div", {
                className: "flex flex-col items-start gap-24 md:flex-row",
                children: [
                  T.jsx(tr, {
                    viewTransition: !0,
                    to: "/",
                    className: "mt-6 w-[1.7em] md:w-[3em]",
                    children: T.jsx(dn, { isMark: !0 })
                  }),
                  T.jsxs("div", {
                    children: [
                      T.jsx("h1", {
                        className: "mb-4 font-bold",
                        children: "The Truth Should Be Ordinary."
                      }),
                      T.jsxs("h2", {
                        className: "text-charcoal",
                        children: [
                          T.jsx("span", {
                            className: "text-grey",
                            children: "Powered by"
                          }),
                          " GF 15% Solution"
                        ]
                      })
                    ]
                  })
                ]
              }),
              T.jsxs("div", {
                className:
                  "flex-col items-end text-body-20 font-medium md:flex",
                children: [
                  T.jsx(Us, {
                    className:
                      "absolute right-container-padding top-container-padding md:static"
                  }),
                  T.jsxs("div", {
                    className: "flex justify-between gap-16 md:justify-end",
                    children: [
                      T.jsx(Oi, {
                        to: "/manifesto",
                        className: "mt-24 md:mt-8",
                        after: T.jsx(St, {
                          hasBorder: !0,
                          name: "caret-right",
                          className: "size-[1.5em] group-hover:bg-light-grey"
                        }),
                        children: T.jsx("span", {
                          className: "uppercase",
                          children: "Manifesto"
                        })
                      }),
                      T.jsx(Oi, {
                        to: "/about",
                        className: "mt-24 md:mt-8",
                        after: T.jsx(St, {
                          hasBorder: !0,
                          name: "caret-right",
                          className: "size-[1.5em] group-hover:bg-light-grey"
                        }),
                        children: T.jsx("span", {
                          className: "uppercase",
                          children: "About"
                        })
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          T.jsx("div", {
            className:
              "fixed bottom-0 left-0 z-10 h-48 w-full bg-white md:static md:h-auto",
            "aria-hidden": "true",
            children: T.jsx(Ws, {
              className: "flex h-full items-center",
              children: T.jsxs("p", {
                className: "text-caption-20",
                children: [
                  T.jsx(Ys, { className: "text-black/50" }),
                  T.jsxs("span", {
                    children: [
                      " [",
                      String(s.length + 2).padStart(2, "0"),
                      " TRUTH DROPS]"
                    ]
                  })
                ]
              })
            })
          })
        ]
      }),
      T.jsxs("main", {
        className:
          "container animate-glitch-1-horizontal motion-reduce:animate-none",
        children: [
          T.jsxs("ul", {
            children: [
              s.map((o) => T.jsx(qs, { article: o }, o._id)),
              T.jsx(Ji, {
                title: "Innovative skin care can cost $15.50",
                number: "02",
                label: "About",
                slug: "about"
              }),
              T.jsx(Ji, {
                title:
                  "“Miracle creams” aren't miracles if no one can afford them",
                number: "01",
                label: "Manifesto",
                slug: "manifesto"
              })
            ]
          }),
          (u == null ? void 0 : u.length) > 0 &&
            T.jsx("ul", {
              children: u.map((o) => T.jsx(Xs, { article: o }, o._id))
            })
        ]
      }),
      T.jsx(Dn, {})
    ]
  });
});
function qs({ article: a }) {
  var t;
  return T.jsx(
    "li",
    {
      children: T.jsx(tr, {
        className: Q([
          "group relative mb-24 flex flex-col gap-24 pb-40 pt-16",
          "overflow-hidden border-b border-dashed border-light-grey",
          "md:mb-0 md:flex-row md:py-24"
        ]),
        to: `/articles/${(t = a.slug) == null ? void 0 : t.current}`,
        viewTransition: !0,
        children: ({ isTransitioning: e }) =>
          T.jsxs("div", {
            className: Q("flex flex-col gap-24 md:flex-row", {
              "vt-name-[main-content]": e
            }),
            children: [
              T.jsxs("div", {
                className:
                  "flex min-w-[13vw] flex-col gap-24 font-mono md:mt-8 lg:mt-12 lg:gap-48",
                children: [
                  a.number &&
                    T.jsx("p", {
                      className: "text-caption-30",
                      children: T.jsx(ye, { children: cn(a.number) })
                    }),
                  a.publishAt &&
                    T.jsx("p", {
                      className: "text-caption-20 text-black/50",
                      children: T.jsx(ye, {
                        className:
                          "before:bottom-1 before:opacity-40 before:delay-100",
                        children: pn(a.publishAt)
                      })
                    })
                ]
              }),
              T.jsx("div", {
                children: T.jsx("p", {
                  className: "text-title-30 font-bold",
                  children: T.jsx(Gs, { children: a.title })
                })
              }),
              T.jsx(_i, {
                tabIndex: -1,
                className: Q([
                  "absolute -bottom-1 right-0 py-8 font-mono text-body-20 uppercase",
                  "translate-y-full transition-all duration-300",
                  "lg:group-hover:translate-y-0"
                ]),
                children: ".Open"
              })
            ]
          })
      })
    },
    a._id
  );
}
function Xs({ article: a }) {
  return T.jsx(
    "li",
    {
      children: T.jsxs("a", {
        className: Q([
          "group relative mb-24 flex flex-col gap-24 pb-40 pt-16",
          "overflow-hidden border-b border-dashed border-light-grey",
          "md:mb-0 md:flex-row md:py-24"
        ]),
        href: "https://theordinary.com/en-gb/gf-15-solution-growth-factor-serum-100702.html",
        target: "_blank",
        children: [
          T.jsxs("div", {
            className:
              "flex min-w-[13vw] flex-col gap-24 font-mono uppercase md:mt-8 lg:mt-12 lg:gap-48",
            children: [
              a.number &&
                T.jsx("p", {
                  className: "text-caption-30 text-black/50",
                  children: T.jsx(ye, { children: "[coming soon]" })
                }),
              a.publishAt &&
                T.jsx("p", { className: "text-caption-20 text-black/50" })
            ]
          }),
          T.jsx("div", {
            children: T.jsx("p", {
              className: "text-title-30 font-bold text-grey",
              children: a.title
            })
          }),
          T.jsx(_i, {
            className: Q([
              "absolute -bottom-1 right-0 py-8 font-mono text-body-20 uppercase",
              "transition-all duration-300 lg:translate-y-full",
              "group-hover:translate-y-0"
            ]),
            after: T.jsx(St, { hasBorder: !0, name: "arrow-external" }),
            children: ".SHOP GF 15% Solution"
          })
        ]
      })
    },
    a._id
  );
}
function Ji({ title: a, number: t, label: e, slug: i }) {
  return T.jsx("li", {
    children: T.jsxs("a", {
      className: Q([
        "group relative mb-24 flex flex-col gap-24 pb-40 pt-16",
        "overflow-hidden border-b border-dashed border-light-grey",
        "md:mb-0 md:flex-row md:py-24"
      ]),
      href: `/${i}`,
      children: [
        T.jsxs("div", {
          className:
            "flex min-w-[13vw] flex-col gap-24 font-mono uppercase md:mt-8 lg:mt-12 lg:gap-48",
          children: [
            t &&
              T.jsx("p", {
                className: "text-caption-30 text-black/50",
                children: T.jsxs(ye, { children: ["[", t, "]"] })
              }),
            T.jsx("p", {
              className: "text-caption-20",
              children: T.jsx(ye, {
                className: "before:bottom-1 before:opacity-40 before:delay-100",
                children: e
              })
            })
          ]
        }),
        T.jsx("div", {
          children: T.jsx("p", {
            className: "text-title-30 font-bold text-grey",
            children: a
          })
        }),
        T.jsxs(_i, {
          tabIndex: -1,
          className: Q([
            "absolute -bottom-1 right-0 py-8 font-mono text-body-20 uppercase",
            "transition-all duration-300 lg:translate-y-full",
            "group-hover:translate-y-0"
          ]),
          after: T.jsx(St, { hasBorder: !0, name: "arrow-right" }),
          children: [".", e]
        })
      ]
    })
  });
}
function Gs({ className: a, children: t }) {
  const e = Ae.useRef(null);
  return (
    Ae.useEffect(() => {
      tn.registerPlugin(Re);
      const i = () => {
        const s = new Re(e.current, { type: "lines" });
        return () => s.revert();
      };
      let r = i();
      const n = () => {
        (r(), (r = i()));
      };
      return (
        window.addEventListener("resize", n),
        () => {
          (r(), window.removeEventListener("resize", n));
        }
      );
    }, []),
    T.jsx("span", {
      ref: e,
      className: Q([
        "[&>div]:relative [&>div]:!inline-block [&>div]:w-auto [&>div]:overflow-hidden",
        "[&>div]:before:absolute [&>div]:before:z-behind [&>div]:before:hidden [&>div]:before:h-full [&>div]:before:w-[110%] [&>div]:before:bg-light-grey",
        "[&>div]:before:-translate-x-full [&>div]:before:transition-transform [&>div]:before:duration-300",
        "group-hover:[&>div]:before:translate-x-0",
        "lg:[&>div]:before:block",
        "[&>div:nth-of-type(1)]:before:delay-0",
        "[&>div:nth-of-type(2)]:before:delay-300",
        "[&>div:nth-of-type(3)]:before:delay-600",
        "[&>div:nth-of-type(4)]:before:delay-900",
        "[&>div]:mb-[-0.15em] [&>div]:pb-[0.15em]",
        a
      ]),
      children: t
    })
  );
}
function ye({ className: a, children: t }) {
  return T.jsx("span", {
    className: Q([
      "relative w-auto overflow-hidden",
      "before:absolute before:z-behind before:hidden before:h-full before:w-[110%] before:bg-light-grey",
      "before:-translate-x-full before:transition-transform before:duration-300",
      "group-hover:before:translate-x-0",
      "lg:before:block",
      "mb-[-0.1em] pb-[0.1em]",
      a
    ]),
    children: t
  });
}
export { ou as default, au as meta };

