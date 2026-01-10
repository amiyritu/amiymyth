import { w as jt, a as Bt } from "./with-props-drQTeSIz.js";
import {
  i as nt,
  j as S,
  B as Ee,
  M as Ht,
  L as Nt,
  S as It,
  C as Ot,
  O as Dt,
  D as Pt,
  N as Et
} from "./chunk-7R3XDUXW-BHIEIWN9.js";
import { D as st, T as Rt } from "./theme-context-QVWfqZKI.js";
import { D as At, F as Gt } from "./font-size-context-BmeG6LFb.js";
import { c as Ft, B as Ut, I as Yt } from "./index-DZJQCNLv.js";
import { L as Zt } from "./logo-CZee6gEJ.js";
const zt = "/assets/fonts-Ba1hhX7K.css",
  Wt = "/assets/web-C-xyohTp.css";
/*!
 * CookieConsent 3.0.1
 * https://github.com/orestbida/cookieconsent
 * Author Orest Bida
 * Released under the MIT License
 */ const rt = "opt-in",
  ve = "opt-out",
  at = "show--consent",
  it = "show--preferences",
  Je = "disable--interaction",
  _e = "data-category",
  _ = "div",
  J = "button",
  V = "aria-hidden",
  xe = "btn-group",
  R = "click",
  ge = "data-role",
  Fe = "consentModal",
  Ue = "preferencesModal";
class qt {
  constructor() {
    ((this.t = {
      mode: rt,
      revision: 0,
      autoShow: !0,
      lazyHtmlGeneration: !0,
      autoClearCookies: !0,
      manageScriptTags: !0,
      hideFromBots: !0,
      cookie: {
        name: "cc_cookie",
        expiresAfterDays: 182,
        domain: "",
        path: "/",
        sameSite: "Lax"
      }
    }),
      (this.o = {
        i: {},
        l: "",
        _: {},
        u: {},
        p: {},
        m: [],
        v: !1,
        h: null,
        C: null,
        S: null,
        M: "",
        D: !0,
        T: !1,
        k: !1,
        A: !1,
        N: !1,
        H: [],
        V: !1,
        I: !0,
        L: [],
        j: !1,
        F: "",
        P: !1,
        O: [],
        R: [],
        B: [],
        G: [],
        J: !1,
        U: !1,
        $: !1,
        q: [],
        K: [],
        W: [],
        X: {},
        Y: {},
        Z: {},
        ee: {},
        te: {},
        oe: []
      }),
      (this.ne = { ae: {}, se: {} }),
      (this.ce = {}),
      (this.re = {
        ie: "cc:onFirstConsent",
        le: "cc:onConsent",
        de: "cc:onChange",
        fe: "cc:onModalShow",
        _e: "cc:onModalHide",
        ue: "cc:onModalReady"
      }));
  }
}
const s = new qt(),
  ct = (t, o) => t.indexOf(o),
  M = (t, o) => ct(t, o) !== -1,
  Be = (t) => Array.isArray(t),
  ye = (t) => typeof t == "string",
  Re = (t) => !!t && typeof t == "object" && !Be(t),
  $ = (t) => typeof t == "function",
  fe = (t) => Object.keys(t),
  lt = (t) => Array.from(new Set(t)),
  Me = () => document.activeElement,
  he = (t) => t.preventDefault(),
  Ye = (t, o) => t.querySelectorAll(o),
  f = (t) => {
    const o = document.createElement(t);
    return (t === J && (o.type = t), o);
  },
  w = (t, o, n) => t.setAttribute(o, n),
  Ne = (t, o, n) => {
    t.removeAttribute(n ? "data-" + o : o);
  },
  Se = (t, o, n) => t.getAttribute(n ? "data-" + o : o),
  d = (t, o) => t.appendChild(o),
  j = (t, o) => t.classList.add(o),
  A = (t, o) => j(t, "cm__" + o),
  T = (t, o) => j(t, "pm__" + o),
  ie = (t, o) => t.classList.remove(o),
  ae = (t) => {
    if (typeof t != "object") return t;
    if (t instanceof Date) return new Date(t.getTime());
    let o = Array.isArray(t) ? [] : {};
    for (let n in t) {
      let e = t[n];
      o[n] = ae(e);
    }
    return o;
  },
  Ve = (t, o) => dispatchEvent(new CustomEvent(t, { detail: o })),
  N = (t, o, n, e) => {
    (t.addEventListener(o, n), e && s.o.m.push({ pe: t, me: o, ge: n }));
  },
  Xt = () => {
    const t = s.t.cookie.expiresAfterDays;
    return $(t) ? t(s.o.F) : t;
  },
  Ie = (t, o) => {
    const n = t || [],
      e = o || [];
    return n.filter((c) => !M(e, c)).concat(e.filter((c) => !M(n, c)));
  },
  dt = (t) => {
    ((s.o.R = lt(t)),
      (s.o.F = (() => {
        let o = "custom";
        const { R: n, O: e, B: c } = s.o,
          m = n.length;
        return (
          m === e.length ? (o = "all") : m === c.length && (o = "necessary"),
          o
        );
      })()));
  },
  ft = (t, o, n, e) => {
    const c = "accept-",
      {
        show: m,
        showPreferences: u,
        hide: r,
        hidePreferences: a,
        acceptCategory: h
      } = o,
      g = t || document,
      i = (b) => Ye(g, `[data-cc="${b}"]`),
      p = (b, v) => {
        (he(b), h(v), a(), r());
      },
      y = i("show-preferencesModal"),
      l = i("show-consentModal"),
      x = i(c + "all"),
      k = i(c + "necessary"),
      C = i(c + "custom"),
      L = s.t.lazyHtmlGeneration;
    for (const b of y)
      (w(b, "aria-haspopup", "dialog"),
        N(b, R, (v) => {
          (he(v), u());
        }),
        L &&
          (N(
            b,
            "mouseenter",
            (v) => {
              (he(v), s.o.N || n(o, e));
            },
            !0
          ),
          N(b, "focus", () => {
            s.o.N || n(o, e);
          })));
    for (let b of l)
      (w(b, "aria-haspopup", "dialog"),
        N(
          b,
          R,
          (v) => {
            (he(v), m(!0));
          },
          !0
        ));
    for (let b of x)
      N(
        b,
        R,
        (v) => {
          p(v, "all");
        },
        !0
      );
    for (let b of C)
      N(
        b,
        R,
        (v) => {
          p(v);
        },
        !0
      );
    for (let b of k)
      N(
        b,
        R,
        (v) => {
          p(v, []);
        },
        !0
      );
  },
  K = (t, o) => {
    t &&
      (o && (t.tabIndex = -1), t.focus(), o && t.removeAttribute("tabindex"));
  },
  ut = (t, o) => {
    const n = (e) => {
      (e.target.removeEventListener("transitionend", n),
        e.propertyName === "opacity" &&
          getComputedStyle(t).opacity === "1" &&
          K(((c) => (c === 1 ? s.ne.be : s.ne.ve))(o)));
    };
    N(t, "transitionend", n);
  };
let $e;
const pt = (t) => {
    (clearTimeout($e),
      t
        ? j(s.ne.ye, Je)
        : ($e = setTimeout(() => {
            ie(s.ne.ye, Je);
          }, 500)));
  },
  Jt = [
    "M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5",
    "M 3.572 13.406 L 8.281 18.115 L 20.428 5.885",
    "M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 "
  ],
  Ce = (t = 0, o = 1.5) =>
    `<svg viewBox="0 0 24 24" stroke-width="${o}"><path d="${Jt[t]}"/></svg>`,
  mt = (t) => {
    const o = s.ne,
      n = s.o;
    ((e) => {
      const c = e === o.he,
        m = n.i.disablePageInteraction ? o.ye : c ? o.Ce : o.ye;
      N(
        m,
        "keydown",
        (u) => {
          if (u.key !== "Tab" || !(c ? n.k && !n.A : n.A)) return;
          const r = Me(),
            a = c ? n.q : n.K;
          a.length !== 0 &&
            (u.shiftKey
              ? (r !== a[0] && e.contains(r)) || (he(u), K(a[1]))
              : (r !== a[1] && e.contains(r)) || (he(u), K(a[0])));
        },
        !0
      );
    })(t);
  },
  Vt = ["[href]", J, "input", "details", "[tabindex]"]
    .map((t) => t + ':not([tabindex="-1"])')
    .join(","),
  ht = (t) => {
    const { o, ne: n } = s,
      e = (c, m) => {
        const u = Ye(c, Vt);
        ((m[0] = u[0]), (m[1] = u[u.length - 1]));
      };
    (t === 1 && o.T && e(n.he, o.q), t === 2 && o.N && e(n.we, o.K));
  },
  Q = (t, o, n) => {
    const { de: e, le: c, ie: m, _e: u, ue: r, fe: a } = s.ce,
      h = s.re;
    if (o) {
      const i = { modalName: o };
      return (
        t === h.fe
          ? $(a) && a(i)
          : t === h._e
            ? $(u) && u(i)
            : ((i.modal = n), $(r) && r(i)),
        Ve(t, i)
      );
    }
    const g = { cookie: s.o.p };
    (t === h.ie
      ? $(m) && m(ae(g))
      : t === h.le
        ? $(c) && c(ae(g))
        : ((g.changedCategories = s.o.L),
          (g.changedServices = s.o.ee),
          $(e) && e(ae(g))),
      Ve(t, ae(g)));
  },
  je = (t, o) => {
    try {
      return t();
    } catch (n) {
      return (!o && console.warn("CookieConsent:", n), !1);
    }
  },
  Ae = (t) => {
    const { Y: o, ee: n, O: e, X: c, oe: m, p: u, L: r } = s.o;
    for (const i of e) {
      const p = n[i] || o[i] || [];
      for (const y of p) {
        const l = c[i][y];
        if (!l) continue;
        const { onAccept: x, onReject: k } = l;
        !l.Se && M(o[i], y)
          ? ((l.Se = !0), $(x) && x())
          : l.Se && !M(o[i], y) && ((l.Se = !1), $(k) && k());
      }
    }
    if (!s.t.manageScriptTags) return;
    const a = m,
      h = t || u.categories || [],
      g = (i, p) => {
        if (p >= i.length) return;
        const y = m[p];
        if (y.xe) return g(i, p + 1);
        const l = y.Me,
          x = y.De,
          k = y.Te,
          C = M(h, x),
          L = !!k && M(o[x], k);
        if (
          (!k && !y.ke && C) ||
          (!k && y.ke && !C && M(r, x)) ||
          (k && !y.ke && L) ||
          (k && y.ke && !L && M(n[x] || [], k))
        ) {
          y.xe = !0;
          const b = Se(l, "type", !0);
          (Ne(l, "type", !!b), Ne(l, _e));
          let v = Se(l, "src", !0);
          v && Ne(l, "src", !0);
          const H = f("script");
          H.textContent = l.innerHTML;
          for (const { nodeName: B } of l.attributes) w(H, B, l[B] || Se(l, B));
          (b && (H.type = b), v ? (H.src = v) : (v = l.src));
          const O = !!v && (!b || ["text/javascript", "module"].includes(b));
          if (
            (O &&
              (H.onload = H.onerror =
                () => {
                  g(i, ++p);
                }),
            l.replaceWith(H),
            O)
          )
            return;
        }
        g(i, ++p);
      };
    g(a, 0);
  },
  Le = "bottom",
  Ge = "left",
  gt = "center",
  Ze = "right",
  Oe = "inline",
  yt = "wide",
  bt = "pm--",
  De = ["middle", "top", Le],
  Ke = [Ge, gt, Ze],
  $t = {
    box: { Ee: [yt, Oe], Ae: De, Ne: Ke, He: Le, Ve: Ze },
    cloud: { Ee: [Oe], Ae: De, Ne: Ke, He: Le, Ve: gt },
    bar: { Ee: [Oe], Ae: De.slice(1), Ne: [], He: Le, Ve: "" }
  },
  Kt = {
    box: { Ee: [], Ae: [], Ne: [], He: "", Ve: "" },
    bar: { Ee: [yt], Ae: [], Ne: [Ge, Ze], He: "", Ve: Ge }
  },
  wt = (t) => {
    const o = s.o.i.guiOptions,
      n = o && o.consentModal,
      e = o && o.preferencesModal;
    (t === 0 && Qe(s.ne.he, $t, n, "cm--", "box", "cm"),
      t === 1 && Qe(s.ne.we, Kt, e, bt, "box", "pm"));
  },
  Qe = (t, o, n, e, c, m) => {
    t.className = m;
    const u = n && n.layout,
      r = n && n.position,
      a = n && n.flipButtons,
      h = !n || n.equalWeightButtons !== !1,
      g = (u && u.split(" ")) || [],
      i = g[0],
      p = g[1],
      y = i in o ? i : c,
      l = o[y],
      x = M(l.Ee, p) && p,
      k = (r && r.split(" ")) || [],
      C = k[0],
      L = e === bt ? k[0] : k[1],
      b = M(l.Ae, C) ? C : l.He,
      v = M(l.Ne, L) ? L : l.Ve,
      H = (B) => {
        B && j(t, e + B);
      };
    (H(y), H(x), H(b), H(v), a && H("flip"));
    const O = m + "__btn--secondary";
    if (m === "cm") {
      const { Ie: B, Le: G } = s.ne;
      (B && (h ? ie(B, O) : j(B, O)), G && (h ? ie(G, O) : j(G, O)));
    } else {
      const { je: B } = s.ne;
      B && (h ? ie(B, O) : j(B, O));
    }
  },
  Te = (t, o) => {
    const n = s.o,
      e = s.ne,
      { hide: c, hidePreferences: m, acceptCategory: u } = t,
      r = (v) => {
        (u(v), m(), c());
      },
      a = n.u && n.u.preferencesModal;
    if (!a) return;
    const h = a.title,
      g = a.closeIconLabel,
      i = a.acceptAllBtn,
      p = a.acceptNecessaryBtn,
      y = a.savePreferencesBtn,
      l = a.sections || [],
      x = i || p || y;
    if (e.Fe) ((e.Pe = f(_)), T(e.Pe, "body"));
    else {
      ((e.Fe = f(_)), j(e.Fe, "pm-wrapper"));
      const v = f("div");
      (j(v, "pm-overlay"),
        d(e.Fe, v),
        N(v, R, m),
        (e.we = f(_)),
        j(e.we, "pm"),
        w(e.we, "role", "dialog"),
        w(e.we, V, !0),
        w(e.we, "aria-modal", !0),
        w(e.we, "aria-labelledby", "pm__title"),
        N(
          e.ye,
          "keydown",
          (H) => {
            H.keyCode === 27 && m();
          },
          !0
        ),
        (e.Oe = f(_)),
        T(e.Oe, "header"),
        (e.Re = f("h2")),
        T(e.Re, "title"),
        (e.Re.id = "pm__title"),
        (e.Be = f(J)),
        T(e.Be, "close-btn"),
        w(e.Be, "aria-label", a.closeIconLabel || ""),
        N(e.Be, R, m),
        (e.Ge = f("span")),
        (e.Ge.innerHTML = Ce()),
        d(e.Be, e.Ge),
        (e.Je = f(_)),
        T(e.Je, "body"),
        (e.Ue = f(_)),
        T(e.Ue, "footer"));
      var k = f(_);
      j(k, "btns");
      var C = f(_),
        L = f(_);
      (T(C, xe),
        T(L, xe),
        d(e.Ue, C),
        d(e.Ue, L),
        d(e.Oe, e.Re),
        d(e.Oe, e.Be),
        (e.ve = f(_)),
        w(e.ve, "tabIndex", -1),
        d(e.we, e.ve),
        d(e.we, e.Oe),
        d(e.we, e.Je),
        x && d(e.we, e.Ue),
        d(e.Fe, e.we));
    }
    let b;
    (h && ((e.Re.innerHTML = h), g && w(e.Be, "aria-label", g)),
      l.forEach((v, H) => {
        const O = v.title,
          B = v.description,
          G = v.linkedCategory,
          ue = G && n.P[G],
          ce = v.cookieTable,
          z = ce && ce.body,
          te = ce && ce.caption,
          W = z && z.length > 0,
          P = !!ue,
          F = P && n.X[G],
          oe = (Re(F) && fe(F)) || [],
          D = P && (!!B || !!W || fe(F).length > 0);
        var X = f(_);
        if ((T(X, "section"), D || B)) {
          var q = f(_);
          T(q, "section-desc-wrapper");
        }
        let ne = oe.length;
        if (D && ne > 0) {
          const E = f(_);
          T(E, "section-services");
          for (const Z of oe) {
            const I = F[Z],
              U = (I && I.label) || Z,
              le = f(_),
              de = f(_),
              be = f(_),
              pe = f(_);
            (T(le, "service"),
              T(pe, "service-title"),
              T(de, "service-header"),
              T(be, "service-icon"));
            const ee = et(U, Z, ue, !0, G);
            ((pe.innerHTML = U),
              d(de, be),
              d(de, pe),
              d(le, de),
              d(le, ee),
              d(E, le));
          }
          d(q, E);
        }
        if (O) {
          var se = f(_),
            Y = f(P ? J : _);
          if (
            (T(se, "section-title-wrapper"),
            T(Y, "section-title"),
            (Y.innerHTML = O),
            d(se, Y),
            P)
          ) {
            const E = f("span");
            ((E.innerHTML = Ce(2, 3.5)),
              T(E, "section-arrow"),
              d(se, E),
              (X.className += "--toggle"));
            const Z = et(O, G, ue);
            let I = a.serviceCounterLabel;
            if (ne > 0 && ye(I)) {
              let U = f("span");
              (T(U, "badge"),
                T(U, "service-counter"),
                w(U, V, !0),
                w(U, "data-servicecounter", ne),
                I &&
                  ((I = I.split("|")),
                  (I = I.length > 1 && ne > 1 ? I[1] : I[0]),
                  w(U, "data-counterlabel", I)),
                (U.innerHTML = ne + (I ? " " + I : "")),
                d(Y, U));
            }
            if (D) {
              T(X, "section--expandable");
              var We = G + "-desc";
              (w(Y, "aria-expanded", !1), w(Y, "aria-controls", We));
            }
            d(se, Z);
          } else (w(Y, "role", "heading"), w(Y, "aria-level", "3"));
          d(X, se);
        }
        if (B) {
          var He = f("p");
          (T(He, "section-desc"), (He.innerHTML = B), d(q, He));
        }
        if (
          D &&
          (w(q, V, "true"),
          (q.id = We),
          ((E, Z, I) => {
            N(Y, R, () => {
              Z.classList.contains("is-expanded")
                ? (ie(Z, "is-expanded"),
                  w(I, "aria-expanded", "false"),
                  w(E, V, "true"))
                : (j(Z, "is-expanded"),
                  w(I, "aria-expanded", "true"),
                  w(E, V, "false"));
            });
          })(q, X, Y),
          W)
        ) {
          const E = f("table"),
            Z = f("thead"),
            I = f("tbody");
          if (te) {
            const ee = f("caption");
            (T(ee, "table-caption"), (ee.innerHTML = te), E.appendChild(ee));
          }
          (T(E, "section-table"), T(Z, "table-head"), T(I, "table-body"));
          const U = ce.headers,
            le = fe(U),
            de = e.$e.createDocumentFragment(),
            be = f("tr");
          for (const ee of le) {
            const me = U[ee],
              re = f("th");
            ((re.id = "cc__row-" + me + H),
              w(re, "scope", "col"),
              T(re, "table-th"),
              (re.innerHTML = me),
              d(de, re));
          }
          (d(be, de), d(Z, be));
          const pe = e.$e.createDocumentFragment();
          for (const ee of z) {
            const me = f("tr");
            T(me, "table-tr");
            for (const re of le) {
              const qe = U[re],
                Mt = ee[re],
                we = f("td"),
                Xe = f(_);
              (T(we, "table-td"),
                w(we, "data-column", qe),
                w(we, "headers", "cc__row-" + qe + H),
                Xe.insertAdjacentHTML("beforeend", Mt),
                d(we, Xe),
                d(me, we));
            }
            d(pe, me);
          }
          (d(I, pe), d(E, Z), d(E, I), d(q, E));
        }
        (D || B) && d(X, q);
        const _t = e.Pe || e.Je;
        (P
          ? (b || ((b = f(_)), T(b, "section-toggles")), b.appendChild(X))
          : (b = null),
          d(_t, b || X));
      }),
      i &&
        (e.ze ||
          ((e.ze = f(J)),
          T(e.ze, "btn"),
          w(e.ze, ge, "all"),
          d(C, e.ze),
          N(e.ze, R, () => r("all"))),
        (e.ze.innerHTML = i)),
      p &&
        (e.je ||
          ((e.je = f(J)),
          T(e.je, "btn"),
          w(e.je, ge, "necessary"),
          d(C, e.je),
          N(e.je, R, () => r([]))),
        (e.je.innerHTML = p)),
      y &&
        (e.qe ||
          ((e.qe = f(J)),
          T(e.qe, "btn"),
          T(e.qe, "btn--secondary"),
          w(e.qe, ge, "save"),
          d(L, e.qe),
          N(e.qe, R, () => r())),
        (e.qe.innerHTML = y)),
      e.Pe && (e.we.replaceChild(e.Pe, e.Je), (e.Je = e.Pe)),
      wt(1),
      n.N ||
        ((n.N = !0),
        Q(s.re.ue, Ue, e.we),
        o(t),
        d(e.Ce, e.Fe),
        mt(e.we),
        setTimeout(() => j(e.Fe, "cc--anim"), 100)),
      ht(2));
  };
function et(t, o, n, e, c) {
  const m = s.o,
    u = s.ne,
    r = f("label"),
    a = f("input"),
    h = f("span"),
    g = f("span"),
    i = f("span"),
    p = f("span"),
    y = f("span");
  if (
    ((p.innerHTML = Ce(1, 3)),
    (y.innerHTML = Ce(0, 3)),
    (a.type = "checkbox"),
    j(r, "section__toggle-wrapper"),
    j(a, "section__toggle"),
    j(p, "toggle__icon-on"),
    j(y, "toggle__icon-off"),
    j(h, "toggle__icon"),
    j(g, "toggle__icon-circle"),
    j(i, "toggle__label"),
    w(h, V, "true"),
    e ? (j(r, "toggle-service"), w(a, _e, c), (u.se[c][o] = a)) : (u.ae[o] = a),
    e
      ? ((l) => {
          N(a, "change", () => {
            const x = u.se[l],
              k = u.ae[l];
            m.Z[l] = [];
            for (let C in x) {
              const L = x[C];
              L.checked && m.Z[l].push(L.value);
            }
            k.checked = m.Z[l].length > 0;
          });
        })(c)
      : ((l) => {
          N(a, R, () => {
            const x = u.se[l],
              k = a.checked;
            m.Z[l] = [];
            for (let C in x) ((x[C].checked = k), k && m.Z[l].push(C));
          });
        })(o),
    (a.value = o),
    (i.textContent = t.replace(/<.*>.*<\/.*>/gm, "")),
    d(g, y),
    d(g, p),
    d(h, g),
    m.D)
  )
    (n.readOnly || n.enabled) && (a.checked = !0);
  else if (e) {
    const l = m.Y[c];
    a.checked = n.readOnly || M(l, o);
  } else M(m.R, o) && (a.checked = !0);
  return (n.readOnly && (a.disabled = !0), d(r, a), d(r, h), d(r, i), r);
}
const Pe = () => {
    const t = f("span");
    return (s.ne.Ke || (s.ne.Ke = t), t);
  },
  vt = (t, o) => {
    const n = s.o,
      e = s.ne,
      { hide: c, showPreferences: m, acceptCategory: u } = t,
      r = n.u && n.u.consentModal;
    if (!r) return;
    const a = r.acceptAllBtn,
      h = r.acceptNecessaryBtn,
      g = r.showPreferencesBtn,
      i = r.closeIconLabel,
      p = r.footer,
      y = r.label,
      l = r.title,
      x = (C) => {
        (c(), u(C));
      };
    if (!e.Qe) {
      ((e.Qe = f(_)),
        (e.he = f(_)),
        (e.We = f(_)),
        (e.Xe = f(_)),
        (e.Ye = f(_)),
        j(e.Qe, "cm-wrapper"),
        j(e.he, "cm"),
        A(e.We, "body"),
        A(e.Xe, "texts"),
        A(e.Ye, "btns"),
        w(e.he, "role", "dialog"),
        w(e.he, "aria-modal", "true"),
        w(e.he, V, "false"),
        w(e.he, "aria-describedby", "cm__desc"),
        y
          ? w(e.he, "aria-label", y)
          : l && w(e.he, "aria-labelledby", "cm__title"));
      const C = "box",
        L = n.i.guiOptions,
        b = L && L.consentModal,
        v = ((b && b.layout) || C).split(" ")[0] === C;
      (l &&
        i &&
        v &&
        (e.Le ||
          ((e.Le = f(J)),
          (e.Le.innerHTML = Ce()),
          A(e.Le, "btn"),
          A(e.Le, "btn--close"),
          N(e.Le, R, () => {
            x([]);
          }),
          d(e.We, e.Le)),
        w(e.Le, "aria-label", i)),
        d(e.We, e.Xe),
        (a || h || g) && d(e.We, e.Ye),
        (e.be = f(_)),
        w(e.be, "tabIndex", -1),
        d(e.he, e.be),
        d(e.he, e.We),
        d(e.Qe, e.he));
    }
    l &&
      (e.Ze ||
        ((e.Ze = f("h2")),
        (e.Ze.className = e.Ze.id = "cm__title"),
        d(e.Xe, e.Ze)),
      (e.Ze.innerHTML = l));
    let k = r.description;
    if (
      (k &&
        (n.V &&
          (k = k.replace(
            "{{revisionMessage}}",
            n.I ? "" : r.revisionMessage || ""
          )),
        e.et ||
          ((e.et = f("p")),
          (e.et.className = e.et.id = "cm__desc"),
          d(e.Xe, e.et)),
        (e.et.innerHTML = k)),
      a &&
        (e.tt ||
          ((e.tt = f(J)),
          d(e.tt, Pe()),
          A(e.tt, "btn"),
          w(e.tt, ge, "all"),
          N(e.tt, R, () => {
            x("all");
          })),
        (e.tt.firstElementChild.innerHTML = a)),
      h &&
        (e.Ie ||
          ((e.Ie = f(J)),
          d(e.Ie, Pe()),
          A(e.Ie, "btn"),
          w(e.Ie, ge, "necessary"),
          N(e.Ie, R, () => {
            x([]);
          })),
        (e.Ie.firstElementChild.innerHTML = h)),
      g &&
        (e.ot ||
          ((e.ot = f(J)),
          d(e.ot, Pe()),
          A(e.ot, "btn"),
          A(e.ot, "btn--secondary"),
          w(e.ot, ge, "show"),
          N(e.ot, "mouseenter", () => {
            n.N || Te(t, o);
          }),
          N(e.ot, R, m)),
        (e.ot.firstElementChild.innerHTML = g)),
      e.nt ||
        ((e.nt = f(_)),
        A(e.nt, xe),
        a && d(e.nt, e.tt),
        h && d(e.nt, e.Ie),
        (a || h) && d(e.We, e.nt),
        d(e.Ye, e.nt)),
      e.ot &&
        !e.st &&
        ((e.st = f(_)),
        e.Ie && e.tt
          ? (A(e.st, xe), d(e.st, e.ot), d(e.Ye, e.st))
          : (d(e.nt, e.ot), A(e.nt, xe + "--uneven"))),
      p)
    ) {
      if (!e.ct) {
        let C = f(_),
          L = f(_);
        ((e.ct = f(_)),
          A(C, "footer"),
          A(L, "links"),
          A(e.ct, "link-group"),
          d(L, e.ct),
          d(C, L),
          d(e.he, C));
      }
      e.ct.innerHTML = p;
    }
    (wt(0),
      n.T ||
        ((n.T = !0),
        Q(s.re.ue, Fe, e.he),
        o(t),
        d(e.Ce, e.Qe),
        mt(e.he),
        setTimeout(() => j(e.Qe, "cc--anim"), 100)),
      ht(1),
      ft(e.We, t, Te, o));
  },
  xt = (t) => {
    if (!ye(t)) return null;
    if (t in s.o._) return t;
    let o = t.slice(0, 2);
    return o in s.o._ ? o : null;
  },
  kt = () => s.o.l || s.o.i.language.default,
  Ct = (t) => {
    t && (s.o.l = t);
  },
  Qt = async (t) => {
    const o = s.o;
    let n = xt(t) ? t : kt(),
      e = o._[n];
    return (
      ye(e)
        ? (e = await (async (c) => {
            try {
              return await (await fetch(c)).json();
            } catch (m) {
              return (console.error(m), !1);
            }
          })(e))
        : $(e) && (e = await e()),
      !!e && ((o.u = e), Ct(n), !0)
    );
  },
  eo = () => {
    let t = s.o.i.language.rtl,
      o = s.ne.Ce;
    t &&
      o &&
      (Be(t) || (t = [t]), M(t, s.o.l) ? j(o, "cc--rtl") : ie(o, "cc--rtl"));
  },
  ke = () => {
    const t = s.ne;
    if (t.Ce) return;
    ((t.Ce = f(_)),
      (t.Ce.id = "cc-main"),
      t.Ce.setAttribute("data-nosnippet", ""),
      eo());
    let o = s.o.i.root;
    (o && ye(o) && (o = document.querySelector(o)),
      (o || t.$e.body).appendChild(t.Ce));
  },
  to = (t) => je(() => localStorage.removeItem(t)),
  tt = (t, o) => {
    if (o instanceof RegExp) return t.filter((n) => o.test(n));
    {
      const n = ct(t, o);
      return n > -1 ? [t[n]] : [];
    }
  },
  oo = (t) => {
    const { hostname: o, protocol: n } = location,
      {
        name: e,
        path: c,
        domain: m,
        sameSite: u,
        useLocalStorage: r
      } = s.t.cookie,
      a = 864e5 * Xt(),
      h = new Date();
    (h.setTime(h.getTime() + a), (s.o.p.expirationTime = h.getTime()));
    const g = JSON.stringify(s.o.p);
    let i =
      e +
      "=" +
      encodeURIComponent(g) +
      (a !== 0 ? "; expires=" + h.toUTCString() : "") +
      "; Path=" +
      c +
      "; SameSite=" +
      u;
    (M(o, ".") && (i += "; Domain=" + m),
      n === "https:" && (i += "; Secure"),
      r
        ? ((p, y) => {
            je(() => localStorage.setItem(p, y));
          })(e, g)
        : (document.cookie = i),
      s.o.p);
  },
  ot = (t, o, n) => {
    if (t.length === 0) return;
    const e = n || s.t.cookie.domain,
      c = o || s.t.cookie.path,
      m = e.slice(0, 4) === "www.",
      u = m && e.substring(4),
      r = (a, h) => {
        document.cookie =
          a +
          "=; path=" +
          c +
          (h ? "; domain=." + h : "") +
          "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      };
    for (const a of t) (r(a), r(a, e), m && r(a, u));
  },
  no = (t) => {
    const o = s.t.cookie.name,
      n = s.t.cookie.useLocalStorage;
    return ((c, m) => {
      let u;
      return (
        (u = je(() => JSON.parse(m ? c : decodeURIComponent(c)), !0) || {}),
        u
      );
    })(n ? ((e = o), je(() => localStorage.getItem(e)) || "") : so(o), n);
    var e;
  },
  so = (t, o) => {
    const n = document.cookie.match("(^|;)\\s*" + t + "\\s*=\\s*([^;]+)");
    return n ? n.pop() : "";
  },
  ro = (t) => {
    const o = document.cookie.split(/;\s*/),
      n = [];
    for (const e of o) {
      let c = e.split("=")[0];
      n.push(c);
    }
    return n;
  },
  ao = (t, o = []) => {
    (((n, e) => {
      const { O: c, R: m, B: u, N: r, Z: a, G: h, X: g } = s.o;
      let i = [];
      if (n) {
        Be(n) ? i.push(...n) : ye(n) && (i = n === "all" ? c : [n]);
        for (const p of c) a[p] = M(i, p) ? fe(g[p]) : [];
      } else
        ((i = [...m, ...h]),
          r &&
            (i = (() => {
              const p = s.ne.ae;
              if (!p) return [];
              let y = [];
              for (let l in p) p[l].checked && y.push(l);
              return y;
            })()));
      ((i = i.filter((p) => !M(c, p) || !M(e, p))), i.push(...u), dt(i));
    })(t, o),
      ((n) => {
        const e = s.o,
          { Z: c, B: m, Y: u, X: r, O: a } = e,
          h = a;
        e.te = ae(u);
        for (const g of h) {
          const i = r[g],
            p = fe(i),
            y = c[g] && c[g].length > 0,
            l = M(m, g);
          if (p.length !== 0) {
            if (((u[g] = []), l)) u[g].push(...p);
            else if (y) {
              const x = c[g];
              u[g].push(...x);
            } else u[g] = e.Z[g];
            u[g] = lt(u[g]);
          }
        }
      })(),
      (() => {
        const n = s.o;
        n.L = s.t.mode === ve && n.D ? Ie(n.G, n.R) : Ie(n.R, n.p.categories);
        let e = n.L.length > 0,
          c = !1;
        for (const a of n.O)
          ((n.ee[a] = Ie(n.Y[a], n.te[a])), n.ee[a].length > 0 && (c = !0));
        const m = s.ne.ae;
        for (const a in m) m[a].checked = M(n.R, a);
        for (const a of n.O) {
          const h = s.ne.se[a],
            g = n.Y[a];
          for (const i in h) h[i].checked = M(g, i);
        }
        (n.C || (n.C = new Date()),
          n.M ||
            (n.M = ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, (a) =>
              (
                a ^
                (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (a / 4)))
              ).toString(16)
            )),
          (n.p = {
            categories: ae(n.R),
            revision: s.t.revision,
            data: n.h,
            consentTimestamp: n.C.toISOString(),
            consentId: n.M,
            services: ae(n.Y)
          }));
        let u = !1;
        const r = e || c;
        ((n.D || r) &&
          (n.D && ((n.D = !1), (u = !0)),
          (n.S = n.S ? new Date() : n.C),
          (n.p.lastConsentTimestamp = n.S.toISOString()),
          oo(),
          s.t.autoClearCookies &&
            (u || r) &&
            ((a) => {
              const h = s.o,
                g = ro(),
                i = ((p) => {
                  const y = s.o;
                  return (p ? y.O : y.L).filter((l) => {
                    const x = y.P[l];
                    return !!x && !x.readOnly && !!x.autoClear;
                  });
                })(a);
              for (const p in h.ee)
                for (const y of h.ee[p]) {
                  const l = h.X[p][y].cookies;
                  if (!M(h.Y[p], y) && l)
                    for (const x of l) {
                      const k = tt(g, x.name);
                      ot(k, x.path, x.domain);
                    }
                }
              for (const p of i) {
                const y = h.P[p].autoClear,
                  l = (y && y.cookies) || [],
                  x = M(h.L, p),
                  k = !M(h.R, p),
                  C = x && k;
                if (a ? k : C) {
                  y.reloadPage && C && (h.j = !0);
                  for (const L of l) {
                    const b = tt(g, L.name);
                    ot(b, L.path, L.domain);
                  }
                }
              }
            })(u),
          Ae()),
          (u && (Q(s.re.ie), Q(s.re.le), s.t.mode === rt)) ||
            (r && Q(s.re.de), n.j && ((n.j = !1), location.reload())));
      })());
  },
  Tt = (t) => {
    const o = s.o.D ? [] : s.o.R;
    return M(o, t);
  },
  io = (t, o) => {
    const n = s.o.D ? [] : s.o.Y[o] || [];
    return M(n, t);
  },
  St = (t) => {
    const { ne: o, o: n } = s;
    if (!n.k) {
      if (!n.T) {
        if (!t) return;
        vt(ze, ke);
      }
      ((n.k = !0),
        (n.U = Me()),
        n.v && pt(!0),
        ut(o.he, 1),
        j(o.ye, at),
        w(o.he, V, "false"),
        setTimeout(() => {
          K(s.ne.be);
        }, 100),
        Q(s.re.fe, Fe));
    }
  },
  co = () => {
    const { ne: t, o, re: n } = s;
    o.k &&
      ((o.k = !1),
      o.v && pt(),
      K(t.Ke, !0),
      ie(t.ye, at),
      w(t.he, V, "true"),
      K(o.U),
      (o.U = null),
      Q(n._e, Fe));
  },
  lo = () => {
    const t = s.o;
    t.A ||
      (t.N || Te(ze, ke),
      (t.A = !0),
      t.k ? (t.$ = Me()) : (t.U = Me()),
      ut(s.ne.we, 2),
      j(s.ne.ye, it),
      w(s.ne.we, V, "false"),
      setTimeout(() => {
        K(s.ne.ve);
      }, 100),
      Q(s.re.fe, Ue));
  },
  fo = () => {
    const t = s.o;
    t.A &&
      ((t.A = !1),
      (() => {
        const o = Lt(),
          n = s.o.P,
          e = s.ne.ae,
          c = s.ne.se,
          m = (u) => M(s.o.G, u);
        for (const u in e) {
          const r = !!n[u].readOnly;
          e[u].checked = r || (o ? Tt(u) : m(u));
          for (const a in c[u]) c[u][a].checked = r || (o ? io(a, u) : m(u));
        }
      })(),
      K(s.ne.Ge, !0),
      ie(s.ne.ye, it),
      w(s.ne.we, V, "true"),
      t.k ? (K(t.$), (t.$ = null)) : (K(t.U), (t.U = null)),
      Q(s.re._e, Ue));
  };
var ze = {
  show: St,
  hide: co,
  showPreferences: lo,
  hidePreferences: fo,
  acceptCategory: ao
};
const Lt = () => !s.o.D,
  uo = async (t) => {
    const { o, t: n, re: e } = s,
      c = window;
    if (!c._ccRun) {
      if (
        ((c._ccRun = !0),
        ((r) => {
          const { ne: a, t: h, o: g } = s,
            i = h,
            p = g,
            { cookie: y } = i,
            l = s.ce,
            x = r.cookie,
            k = r.categories,
            C = fe(k) || [],
            L = navigator,
            b = document;
          ((a.$e = b),
            (a.ye = b.documentElement),
            (y.domain = location.hostname),
            (p.i = r),
            (p.P = k),
            (p.O = C),
            (p._ = r.language.translations),
            (p.v = !!r.disablePageInteraction),
            (l.ie = r.onFirstConsent),
            (l.le = r.onConsent),
            (l.de = r.onChange),
            (l._e = r.onModalHide),
            (l.fe = r.onModalShow),
            (l.ue = r.onModalReady));
          const {
            mode: v,
            autoShow: H,
            lazyHtmlGeneration: O,
            autoClearCookies: B,
            revision: G,
            manageScriptTags: ue,
            hideFromBots: ce
          } = r;
          (v === ve && (i.mode = v),
            typeof B == "boolean" && (i.autoClearCookies = B),
            typeof ue == "boolean" && (i.manageScriptTags = ue),
            typeof G == "number" && G >= 0 && ((i.revision = G), (p.V = !0)),
            typeof H == "boolean" && (i.autoShow = H),
            typeof O == "boolean" && (i.lazyHtmlGeneration = O),
            ce === !1 && (i.hideFromBots = !1),
            i.hideFromBots === !0 &&
              L &&
              (p.J =
                (L.userAgent &&
                  /bot|crawl|spider|slurp|teoma/i.test(L.userAgent)) ||
                L.webdriver),
            Re(x) && (i.cookie = { ...y, ...x }),
            i.autoClearCookies,
            p.V,
            i.manageScriptTags,
            ((z) => {
              const { P: te, X: W, Y: P, Z: F, B: oe } = s.o;
              for (let D of z) {
                const X = te[D],
                  q = X.services || {},
                  ne = (Re(q) && fe(q)) || [];
                ((W[D] = {}),
                  (P[D] = []),
                  (F[D] = []),
                  X.readOnly && (oe.push(D), (P[D] = ne)),
                  (s.ne.se[D] = {}));
                for (let se of ne) {
                  const Y = q[se];
                  ((Y.Se = !1), (W[D][se] = Y));
                }
              }
            })(C),
            (() => {
              if (!s.t.manageScriptTags) return;
              const z = s.o,
                te = Ye(document, "script[" + _e + "]");
              for (const W of te) {
                let P = Se(W, _e),
                  F = W.dataset.service || "",
                  oe = !1;
                if (
                  (P && P.charAt(0) === "!" && ((P = P.slice(1)), (oe = !0)),
                  F.charAt(0) === "!" && ((F = F.slice(1)), (oe = !0)),
                  M(z.O, P) &&
                    (z.oe.push({ Me: W, xe: !1, ke: oe, De: P, Te: F }), F))
                ) {
                  const D = z.X[P];
                  D[F] || (D[F] = { Se: !1 });
                }
              }
            })(),
            Ct(
              (() => {
                const z = s.o.i.language.autoDetect;
                if (z) {
                  const te = {
                      browser: navigator.language,
                      document: document.documentElement.lang
                    },
                    W = xt(te[z]);
                  if (W) return W;
                }
                return kt();
              })()
            ));
        })(t),
        o.J)
      )
        return;
      (() => {
        const r = s.o,
          a = s.t,
          h = no(),
          {
            categories: g,
            services: i,
            consentId: p,
            consentTimestamp: y,
            lastConsentTimestamp: l,
            data: x,
            revision: k
          } = h,
          C = Be(g);
        ((r.p = h), (r.M = p));
        const L = !!p && ye(p);
        ((r.C = y),
          r.C && (r.C = new Date(y)),
          (r.S = l),
          r.S && (r.S = new Date(l)),
          (r.h = x !== void 0 ? x : null),
          r.V && L && k !== a.revision && (r.I = !1),
          (r.D = !(L && r.I && r.C && r.S && C)),
          a.cookie.useLocalStorage &&
            !r.D &&
            ((r.D = new Date().getTime() > (h.expirationTime || 0)),
            r.D && to(a.cookie.name)),
          r.D,
          (() => {
            const b = s.o;
            for (const v of b.O) {
              const H = b.P[v];
              if (H.readOnly || H.enabled) {
                b.G.push(v);
                const O = b.X[v] || {};
                for (let B in O)
                  (b.Z[v].push(B), b.i.mode === ve && b.Y[v].push(B));
              }
            }
          })(),
          r.D
            ? a.mode === ve && (r.R = [...r.G])
            : ((r.Z = { ...r.Y }),
              (r.Y = { ...r.Y, ...i }),
              dt([...r.B, ...g])));
      })();
      const u = Lt();
      if (!(await Qt())) return !1;
      if (
        (ft(null, (m = ze), Te, ke),
        s.o.D && vt(m, ke),
        s.t.lazyHtmlGeneration || Te(m, ke),
        n.autoShow && !u && St(!0),
        u)
      )
        return (Ae(), Q(e.le));
      n.mode === ve && Ae(o.G);
    }
    var m;
  },
  po = {
    autoShow: !0,
    autoClearCookies: !0,
    manageScriptTags: !0,
    hideFromBots: !0,
    disablePageInteraction: !0,
    lazyHtmlGeneration: !0,
    mode: "opt-in",
    guiOptions: {
      consentModal: {
        layout: "box wide",
        position: "bottom right",
        equalWeightButtons: !0,
        flipButtons: !1
      },
      preferencesModal: {
        layout: "box",
        position: "right",
        equalWeightButtons: !0,
        flipButtons: !1
      }
    },
    categories: {
      necessary: { readOnly: !0, enabled: !0 },
      analytics: {
        enabled: !0,
        autoClear: { cookies: [{ name: /^(_ga|_gid)/ }] }
      }
    },
    language: {
      default: "en",
      translations: {
        en: {
          consentModal: {
            title: "We use cookies",
            description: `Cookies make everything better. If you'd like to learn more about how we use cookies (the digital kind), please review our <a href="https://amiynaturals.com/pages/privacy-policy" target="_blank">Privacy Policy</a> and choose your preferred variety of cookie.`,
            acceptAllBtn: "I accept",
            acceptNecessaryBtn: "I decline",
            showPreferencesBtn: "Set cookie preferences"
          },
          preferencesModal: {
            title: "Cookie preferences",
            acceptAllBtn: "I accept",
            acceptNecessaryBtn: "I decline",
            savePreferencesBtn: "Save preferences",
            closeIconLabel: "Close",
            sections: [
              {
                description:
                  'Cookies are small text files that websites send to your computer or other Internet-connected device to uniquely identify your browser or to store information or settings in your browser. Your browser may tell you how to be notified when you receive certain types of cookies and how to restrict or disable certain cookies. Please note, however, that without cookies you may not be able to use all of the features of our Website. You can read more about how these cookies work on our <a href="https://amiynaturals.com/pages/privacy-policy" target="_blank" class="cc__link">privacy policy</a>.'
              },
              {
                title: "Strictly necessary cookies",
                description:
                  "These cookies are essential for the website to function properly and cannot be disabled.",
                linkedCategory: "necessary"
              },
              {
                title: "Performance and Analytics cookies",
                description:
                  "These cookies collect information about how visitors use a website, for instance which pages visitors go to most often, and if they get error messages from web pages. These cookies don't collect information that identifies a visitor. All information these cookies collect is aggregated and therefore anonymous. It is only used to improve how a website works.",
                linkedCategory: "analytics"
              }
            ]
          }
        }
      }
    }
  };
function mo() {
  return (
    nt.useEffect(() => {
      uo({
        ...po,
        onConsent: () => {
          if (Tt("analytics")) {
            const t = document.createElement("script");
            ((t.innerHTML =
              "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PSNCTZT');"),
              document.head.appendChild(t));
            const o = document.createElement("noscript");
            ((o.innerHTML =
              '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSNCTZT" height="0" width="0" style="display:none;visibility:hidden"></iframe>'),
              document.body.insertBefore(o, document.body.firstChild));
          }
        }
      });
    }, []),
    S.jsx(S.Fragment, {})
  );
}
function xo() {
  return [
    { rel: "preconnect", href: "https://cdn.sanity.io" },
    { rel: "stylesheet", href: zt },
    { rel: "stylesheet", href: Wt },
    {
      rel: "preload",
      href: "/fonts/HelveticaMonospacedRoman.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous"
    },
    {
      rel: "preload",
      href: "/fonts/HelveticaMonospacedRoman.woff",
      as: "font",
      type: "font/woff",
      crossOrigin: "anonymous"
    },
    {
      rel: "preload",
      href: "/fonts/HelveticaMonospacedItalic.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous"
    },
    {
      rel: "preload",
      href: "/fonts/HelveticaMonospacedItalic.woff",
      as: "font",
      type: "font/woff",
      crossOrigin: "anonymous"
    },
    {
      rel: "preload",
      href: "/fonts/HelveticaMonospacedBold.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous"
    },
    {
      rel: "preload",
      href: "/fonts/HelveticaMonospacedBold.woff",
      as: "font",
      type: "font/woff",
      crossOrigin: "anonymous"
    },
    {
      rel: "preload",
      href: "/fonts/HelveticaMonospacedBoldItalic.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous"
    },
    {
      rel: "preload",
      href: "/fonts/HelveticaMonospacedBoldItalic.woff",
      as: "font",
      type: "font/woff",
      crossOrigin: "anonymous"
    },
    {
      rel: "preload",
      href: "/fonts/NeueHaasUnicaW1G-Regular.ttf",
      as: "font",
      type: "font/ttf",
      crossOrigin: "anonymous"
    },
    {
      rel: "preload",
      href: "/fonts/NeueHaasUnicaW1G-Medium.ttf",
      as: "font",
      type: "font/ttf",
      crossOrigin: "anonymous"
    },
    {
      rel: "preload",
      href: "/fonts/NeueHaasUnicaW1G-Bold.ttf",
      as: "font",
      type: "font/ttf",
      crossOrigin: "anonymous"
    }
  ];
}
function ko({ children: t }) {
  const { theme: o } = Ee("root") ?? { theme: st };
  return S.jsxs("html", {
    lang: "en",
    className: Ft(o, "h-full"),
    children: [
      S.jsxs("head", {
        children: [
          S.jsx("meta", { charSet: "utf-8" }),
          S.jsx("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          }),
          S.jsx("link", {
            rel: "icon",
            type: "image/png",
            href: "/favicon-96x96.png",
            sizes: "96x96"
          }),
          S.jsx("link", {
            rel: "icon",
            type: "image/svg+xml",
            href: "/favicon.svg"
          }),
          S.jsx("link", { rel: "shortcut icon", href: "/favicon.ico" }),
          S.jsx("link", {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png"
          }),
          S.jsx(Ht, {}),
          S.jsx(Nt, {})
        ]
      }),
      S.jsxs("body", {
        className: "h-full bg-white font-sans text-charcoal",
        children: [t, S.jsx(It, {}), S.jsx(Ot, {}), S.jsx(mo, {})]
      })
    ]
  });
}
const Co = jt(function () {
    const { theme: o } = Ee("root") ?? { theme: st },
      { fontSize: n } = Ee("root") ?? { fontSize: At };
    return S.jsx(Rt, {
      value: { theme: o },
      children: S.jsx(Gt, { value: { fontSize: n }, children: S.jsx(Dt, {}) })
    });
  }),
  To = Bt(function ({ error: o }) {
    let n = "An unexpected error occurred.";
    return (
      Pt(o) &&
        (o.status,
        (n =
          o.status === 404
            ? "The requested page could not be found."
            : o.statusText || n)),
      nt.useEffect(
        () => (
          (document.body.style.backgroundColor = "rgba(var(--black))"),
          () => {
            document.body.style.backgroundColor = "rgba(var(--white))";
          }
        ),
        []
      ),
      S.jsxs("main", {
        className:
          "container flex size-full justify-between py-container-padding text-white",
        children: [
          S.jsxs("div", {
            className:
              "relative flex h-full flex-col justify-around md:justify-between",
            children: [
              S.jsx("div", {
                "aria-hidden": "true",
                className:
                  "grid select-none items-center gap-12 overflow-hidden text-center font-mono text-body-20 text-grey/40 lg:hidden",
                style: { gridTemplateColumns: "repeat(9, minmax(0, 1fr))" },
                children: Array.from({ length: 3 * 9 }).map((e, c) =>
                  S.jsx("span", { className: "min-h-24", children: "404" }, c)
                )
              }),
              S.jsxs("div", {
                className: "max-w-[27em] text-body-30 lg:min-w-[27em]",
                children: [
                  S.jsx(Zt, { className: "mb-40 w-[max(180px,11vw)]" }),
                  S.jsx("p", {
                    className: "font-mono",
                    children:
                      "We could not find the page you are looking for. Let's go back to the homepage."
                  })
                ]
              }),
              S.jsx("div", {
                children: S.jsx(Ut, {
                  asChild: !0,
                  after: S.jsx(Yt, { hasBorder: !0, name: "caret-right" }),
                  className:
                    "bg-light-grey font-mono text-body-20 uppercase text-black",
                  children: S.jsx(Et, {
                    to: "/",
                    viewTransition: !0,
                    children: "Enter"
                  })
                })
              }),
              S.jsx("div", {
                "aria-hidden": "true",
                className:
                  "grid select-none items-center gap-12 overflow-hidden text-center font-mono text-body-20 text-grey/40 lg:hidden",
                style: { gridTemplateColumns: "repeat(9, minmax(0, 1fr))" },
                children: Array.from({ length: 3 * 9 }).map((e, c) =>
                  S.jsx("span", { className: "min-h-24", children: "404" }, c)
                )
              })
            ]
          }),
          S.jsx("div", {
            "aria-hidden": "true",
            className:
              "hidden size-full select-none items-center gap-12 overflow-hidden text-center font-mono text-body-20 text-grey/40 lg:grid",
            style: {
              gridTemplateColumns: "repeat(9, minmax(0, 1fr))",
              gridTemplateRows: "repeat(12, minmax(0, 1fr))"
            },
            children: Array.from({ length: 12 * 9 }).map((e, c) =>
              S.jsx("span", { children: "404" }, c)
            )
          })
        ]
      })
    );
  });
export { To as ErrorBoundary, ko as Layout, Co as default, xo as links };

