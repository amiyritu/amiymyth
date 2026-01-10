import { w as ae } from "./with-props-drQTeSIz.js";
import {
  i as b,
  j as r,
  N as se,
  E as le,
  r as Z,
  w as ce,
  A as de
} from "./chunk-7R3XDUXW-BHIEIWN9.js";
import { b as ue } from "./index.browser-BaKoqjVW.js";
import { P as he, c as te } from "./index-DySbbZ_5.js";
import { u as ne } from "./font-size-context-BmeG6LFb.js";
import { c as V, I as k, B as fe } from "./index-DZJQCNLv.js";
import { S as J, g as me } from "./meta-CzSvdXGV.js";
import { P as we, L as K, A as ge } from "./app-footer-GtgmRUmX.js";
import {
  u as pe,
  b as X,
  M as He,
  i as Ve,
  g as be,
  f as ve,
  a as xe
} from "./utils-CVA2UsiT.js";
import "./preload-helper-D7HrI6pR.js";
import "./resolveEditInfo-Bqo3GpHw.js";
import "./stegaClean-YpGXIuvF.js";
import "./image-url.umd-DV0ObBZQ.js";
function je({ className: e, children: t, image: n, ...i }) {
  const [o, l] = b.useState(!1);
  return r.jsxs("span", {
    ...i,
    className: V("relative inline-block cursor-default", e),
    children: [
      r.jsxs("span", {
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        className: V([
          "inline-block border-b border-dashed font-mono",
          o && "bg-black text-white",
          "transition-colors duration-300 ease-out"
        ]),
        children: [
          r.jsx(k, {
            className: "mr-4 size-[1.5em] align-top",
            name: "discover"
          }),
          t
        ]
      }),
      o &&
        r.jsxs(r.Fragment, {
          children: [
            r.jsx("span", {
              className: V(
                "pointer-events-none fixed inset-0 z-10 bg-black/90",
                "md:hidden"
              )
            }),
            r.jsxs("span", {
              className: V(
                "pointer-events-none fixed left-1/2 top-1/2 z-20 mt-16 block w-4/5 -translate-x-1/2 -translate-y-1/2 border border-black bg-white md:w-320",
                "md:absolute md:top-full md:-translate-y-0"
              ),
              children: [
                r.jsx(J, { alt: n.alt, className: "w-full", id: n.asset._ref }),
                r.jsx(k, {
                  name: "close",
                  className: V([
                    "pointer-events-none absolute right-0 top-0 size-40 bg-charcoal text-white md:hidden"
                  ])
                })
              ]
            })
          ]
        })
    ]
  });
}
function ye({ content: e }) {
  const { fontSize: t } = ne();
  return e
    ? r.jsx(he, {
        value: e,
        components: {
          types: {
            image: ({ value: n }) =>
              n != null && n.asset
                ? r.jsx(J, { className: "my-24", id: n.asset._ref })
                : null
          },
          block: {
            normal: ({ children: n }) =>
              r.jsx("p", {
                className: V([
                  "[&:not(:last-child)]:mb-[1em]",
                  t == "large" ? "text-body-30" : "text-body-20"
                ]),
                children: n
              }),
            small: ({ children: n }) =>
              r.jsx("small", {
                className: V([
                  "block !leading-[1.4] [&:not(:last-child)]:mb-[1em]",
                  t == "large" ? "text-caption-20" : "text-legal-caption"
                ]),
                children: n
              }),
            h2: ({ children: n }) =>
              r.jsx("h2", {
                className:
                  "text-title-30 font-bold [&:not(:last-child)]:mb-[1em]",
                children: n
              }),
            h3: ({ children: n }) =>
              r.jsx("h3", {
                className:
                  "text-title-20 font-bold [&:not(:last-child)]:mb-[1em]",
                children: n
              }),
            line: () =>
              r.jsx("hr", { className: "mb-16 border border-t border-solid" })
          },
          list: {
            bullet: ({ children: n }) =>
              r.jsx("ul", {
                className: V([
                  "list-disc ps-[1em]",
                  "[&:not(:last-child)]:mb-[1em]",
                  t == "large" ? "text-body-30" : "text-body-20"
                ]),
                children: n
              }),
            number: ({ children: n }) =>
              r.jsx("ol", {
                className: V([
                  "list-decimal ps-[1em]",
                  "[&:not(:last-child)]:mb-[1em]",
                  t == "large" ? "text-body-30" : "text-body-20"
                ]),
                children: n
              })
          },
          marks: {
            strong: ({ children: n }) =>
              r.jsx("strong", { className: "font-bold", children: n }),
            em: ({ children: n }) =>
              r.jsx("em", { className: "italic", children: n }),
            sup: ({ children: n }) =>
              r.jsx("sup", { className: "opacity-50", children: n }),
            link: ({ children: n, value: i }) => {
              if (!i) return r.jsx("span", { children: n });
              const o = i.href,
                l = i.openInNewWindow ? "_blank" : void 0,
                d = i.openInNewWindow ? "noopener noreferrer" : void 0;
              return r.jsx(se, {
                className: "border-b hover:border-dashed hover:border-current",
                to: o,
                target: l,
                rel: d,
                viewTransition: !0,
                children: n
              });
            },
            highlight: (n) =>
              n.value.image
                ? r.jsx(je, { image: n.value.image, children: n.children })
                : r.jsx(r.Fragment, { children: n.children })
          }
        }
      })
    : null;
}
function ke({ className: e }) {
  const { fontSize: t } = ne(),
    n = le(),
    i = (l) => {
      n.submit(l.target.form, { method: "post" });
    },
    o = ["small", "large"];
  return r.jsxs(n.Form, {
    method: "post",
    action: "/api/toggle-font-size",
    className: V("flex items-center justify-between gap-8 font-mono", e),
    children: [
      r.jsx("span", { className: "text-body-20", children: "Size" }),
      r.jsx("div", {
        className: "flex gap-8 text-caption-30 uppercase text-grey",
        children: o.map((l) =>
          r.jsxs(
            "label",
            {
              className: V(
                "transition-colors hover:text-black",
                t === l ? "bg-light-grey text-black" : "cursor-pointer"
              ),
              children: [
                r.jsx("input", {
                  hidden: !0,
                  type: "radio",
                  name: "fontSize",
                  value: l,
                  onChange: i,
                  defaultChecked: t === l
                }),
                l
              ]
            },
            l
          )
        )
      })
    ]
  });
}
function R({ className: e }) {
  return r.jsx("hr", {
    className: V(["border-t border-dashed border-light-grey", e])
  });
}
const re = Z.forwardRef(({ className: e, ...t }, n) =>
  r.jsx("button", {
    className: V(
      "play/group flex size-36 items-center justify-center border",
      "transition-all",
      "active:bg-grey",
      e
    ),
    ref: n,
    ...t,
    children: r.jsx("svg", {
      className: "play/group-active:scale-75 w-12 transition-transform",
      viewBox: "0 0 12 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: r.jsx("path", {
        d: "M4 0H0V18H4V16H6V14H8V12H10V10H12V8H10V6H8V4H6V2H4V0Z",
        fill: "currentColor"
      })
    })
  })
);
re.displayName = "PlayButton";
var U = { exports: {} },
  q = { exports: {} },
  O = 1e3,
  E = O * 60,
  B = E * 60,
  I = B * 24,
  Me = I * 365.25,
  Ze = function (e, t) {
    t = t || {};
    var n = typeof e;
    if (n === "string" && e.length > 0) return Ne(e);
    if (n === "number" && isNaN(e) === !1) return t.long ? Se(e) : Ce(e);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(e)
    );
  };
function Ne(e) {
  if (((e = String(e)), !(e.length > 100))) {
    var t =
      /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        e
      );
    if (t) {
      var n = parseFloat(t[1]),
        i = (t[2] || "ms").toLowerCase();
      switch (i) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * Me;
        case "days":
        case "day":
        case "d":
          return n * I;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * B;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * E;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * O;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return;
      }
    }
  }
}
function Ce(e) {
  return e >= I
    ? Math.round(e / I) + "d"
    : e >= B
      ? Math.round(e / B) + "h"
      : e >= E
        ? Math.round(e / E) + "m"
        : e >= O
          ? Math.round(e / O) + "s"
          : e + "ms";
}
function Se(e) {
  return (
    D(e, I, "day") ||
    D(e, B, "hour") ||
    D(e, E, "minute") ||
    D(e, O, "second") ||
    e + " ms"
  );
}
function D(e, t, n) {
  if (!(e < t))
    return e < t * 1.5
      ? Math.floor(e / t) + " " + n
      : Math.ceil(e / t) + " " + n + "s";
}
(function (e, t) {
  ((t = e.exports = o.debug = o.default = o),
    (t.coerce = h),
    (t.disable = d),
    (t.enable = l),
    (t.enabled = u),
    (t.humanize = Ze),
    (t.names = []),
    (t.skips = []),
    (t.formatters = {}));
  var n;
  function i(a) {
    var s = 0,
      c;
    for (c in a) ((s = (s << 5) - s + a.charCodeAt(c)), (s |= 0));
    return t.colors[Math.abs(s) % t.colors.length];
  }
  function o(a) {
    function s() {
      if (s.enabled) {
        var c = s,
          f = +new Date(),
          H = f - (n || f);
        ((c.diff = H), (c.prev = n), (c.curr = f), (n = f));
        for (var m = new Array(arguments.length), v = 0; v < m.length; v++)
          m[v] = arguments[v];
        ((m[0] = t.coerce(m[0])), typeof m[0] != "string" && m.unshift("%O"));
        var j = 0;
        ((m[0] = m[0].replace(/%([a-zA-Z%])/g, function (y, S) {
          if (y === "%%") return y;
          j++;
          var M = t.formatters[S];
          if (typeof M == "function") {
            var _ = m[j];
            ((y = M.call(c, _)), m.splice(j, 1), j--);
          }
          return y;
        })),
          t.formatArgs.call(c, m));
        var W = s.log || t.log || console.log.bind(console);
        W.apply(c, m);
      }
    }
    return (
      (s.namespace = a),
      (s.enabled = t.enabled(a)),
      (s.useColors = t.useColors()),
      (s.color = i(a)),
      typeof t.init == "function" && t.init(s),
      s
    );
  }
  function l(a) {
    (t.save(a), (t.names = []), (t.skips = []));
    for (
      var s = (typeof a == "string" ? a : "").split(/[\s,]+/),
        c = s.length,
        f = 0;
      f < c;
      f++
    )
      s[f] &&
        ((a = s[f].replace(/\*/g, ".*?")),
        a[0] === "-"
          ? t.skips.push(new RegExp("^" + a.substr(1) + "$"))
          : t.names.push(new RegExp("^" + a + "$")));
  }
  function d() {
    t.enable("");
  }
  function u(a) {
    var s, c;
    for (s = 0, c = t.skips.length; s < c; s++)
      if (t.skips[s].test(a)) return !1;
    for (s = 0, c = t.names.length; s < c; s++)
      if (t.names[s].test(a)) return !0;
    return !1;
  }
  function h(a) {
    return a instanceof Error ? a.stack || a.message : a;
  }
})(q, q.exports);
var _e = q.exports;
(function (e, t) {
  var n = {};
  ((t = e.exports = _e),
    (t.log = l),
    (t.formatArgs = o),
    (t.save = d),
    (t.load = u),
    (t.useColors = i),
    (t.storage =
      typeof chrome < "u" && typeof chrome.storage < "u"
        ? chrome.storage.local
        : h()),
    (t.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ]));
  function i() {
    return typeof window < "u" &&
      window.process &&
      window.process.type === "renderer"
      ? !0
      : (typeof document < "u" &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
          (typeof window < "u" &&
            window.console &&
            (window.console.firebug ||
              (window.console.exception && window.console.table))) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
            parseInt(RegExp.$1, 10) >= 31) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  t.formatters.j = function (a) {
    try {
      return JSON.stringify(a);
    } catch (s) {
      return "[UnexpectedJSONParseError]: " + s.message;
    }
  };
  function o(a) {
    var s = this.useColors;
    if (
      ((a[0] =
        (s ? "%c" : "") +
        this.namespace +
        (s ? " %c" : " ") +
        a[0] +
        (s ? "%c " : " ") +
        "+" +
        t.humanize(this.diff)),
      !!s)
    ) {
      var c = "color: " + this.color;
      a.splice(1, 0, c, "color: inherit");
      var f = 0,
        H = 0;
      (a[0].replace(/%[a-zA-Z%]/g, function (m) {
        m !== "%%" && (f++, m === "%c" && (H = f));
      }),
        a.splice(H, 0, c));
    }
  }
  function l() {
    return (
      typeof console == "object" &&
      console.log &&
      Function.prototype.apply.call(console.log, console, arguments)
    );
  }
  function d(a) {
    try {
      a == null ? t.storage.removeItem("debug") : (t.storage.debug = a);
    } catch {}
  }
  function u() {
    var a;
    try {
      a = t.storage.debug;
    } catch {}
    return (!a && typeof process < "u" && "env" in process && (a = n.DEBUG), a);
  }
  t.enable(u());
  function h() {
    try {
      return window.localStorage;
    } catch {}
  }
})(U, U.exports);
var Pe = U.exports,
  Y = Pe("jsonp"),
  Le = Ee,
  Ae = 0;
function Oe() {}
function Ee(e, t, n) {
  (typeof t == "function" && ((n = t), (t = {})), t || (t = {}));
  var i = t.prefix || "__jp",
    o = t.name || i + Ae++,
    l = t.param || "callback",
    d = t.timeout != null ? t.timeout : 6e4,
    u = encodeURIComponent,
    h = document.getElementsByTagName("script")[0] || document.head,
    a,
    s;
  d &&
    (s = setTimeout(function () {
      (c(), n && n(new Error("Timeout")));
    }, d));
  function c() {
    (a.parentNode && a.parentNode.removeChild(a),
      (window[o] = Oe),
      s && clearTimeout(s));
  }
  function f() {
    window[o] && c();
  }
  return (
    (window[o] = function (H) {
      (Y("jsonp got", H), c(), n && n(null, H));
    }),
    (e += (~e.indexOf("?") ? "&" : "?") + l + "=" + u(o)),
    (e = e.replace("?&", "?")),
    Y('jsonp req "%s"', e),
    (a = document.createElement("script")),
    (a.src = e),
    h.parentNode.insertBefore(a, h),
    f
  );
}
const N = ce(Le);
var Be = Object.defineProperty,
  Ie = Object.defineProperties,
  We = Object.getOwnPropertyDescriptors,
  F = Object.getOwnPropertySymbols,
  ie = Object.prototype.hasOwnProperty,
  oe = Object.prototype.propertyIsEnumerable,
  ee = (e, t, n) =>
    t in e
      ? Be(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  x = (e, t) => {
    for (var n in t || (t = {})) ie.call(t, n) && ee(e, n, t[n]);
    if (F) for (var n of F(t)) oe.call(t, n) && ee(e, n, t[n]);
    return e;
  },
  Q = (e, t) => Ie(e, We(t)),
  G = (e, t) => {
    var n = {};
    for (var i in e) ie.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
    if (e != null && F)
      for (var i of F(e)) t.indexOf(i) < 0 && oe.call(e, i) && (n[i] = e[i]);
    return n;
  };
function w(e) {
  const t = Object.entries(e)
    .filter(([, n]) => n != null)
    .map(
      ([n, i]) => `${encodeURIComponent(n)}=${encodeURIComponent(String(i))}`
    );
  return t.length > 0 ? `?${t.join("&")}` : "";
}
const ze = (e) =>
    !!e &&
    (typeof e == "object" || typeof e == "function") &&
    typeof e.then == "function",
  Te = (e, t) => ({
    left:
      window.outerWidth / 2 +
      (window.screenX || window.screenLeft || 0) -
      e / 2,
    top:
      window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  }),
  $e = (e, t) => ({
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  });
function Re(e, t, n) {
  var i = t,
    { height: o, width: l } = i,
    d = G(i, ["height", "width"]);
  const u = x(
      {
        height: o,
        width: l,
        location: "no",
        toolbar: "no",
        status: "no",
        directories: "no",
        menubar: "no",
        scrollbars: "yes",
        resizable: "no",
        centerscreen: "yes",
        chrome: "yes"
      },
      d
    ),
    h = window.open(
      e,
      "",
      Object.keys(u)
        .map((a) => `${a}=${u[a]}`)
        .join(", ")
    );
  if (n) {
    const a = window.setInterval(() => {
      try {
        (h === null || h.closed) && (window.clearInterval(a), n(h));
      } catch (s) {
        console.error(s);
      }
    }, 1e3);
  }
  return h;
}
function De(e) {
  var t = e,
    {
      beforeOnClick: n,
      children: i,
      className: o,
      disabled: l,
      disabledStyle: d = { opacity: 0.6 },
      forwardedRef: u,
      htmlTitle: h,
      networkLink: a,
      networkName: s,
      onClick: c,
      onShareWindowClose: f,
      openShareDialogOnClick: H = !0,
      opts: m,
      resetButtonStyle: v = !0,
      style: j,
      url: W,
      windowHeight: y = 400,
      windowPosition: S = "windowCenter",
      windowWidth: M = 550
    } = t,
    _ = G(t, [
      "beforeOnClick",
      "children",
      "className",
      "disabled",
      "disabledStyle",
      "forwardedRef",
      "htmlTitle",
      "networkLink",
      "networkName",
      "onClick",
      "onShareWindowClose",
      "openShareDialogOnClick",
      "opts",
      "resetButtonStyle",
      "style",
      "url",
      "windowHeight",
      "windowPosition",
      "windowWidth"
    ]);
  const P = async (L) => {
      const A = a(W, m);
      if (!l) {
        if ((L.preventDefault(), n)) {
          const $ = n();
          ze($) && (await $);
        }
        if (H) {
          const $ = x(
            { height: y, width: M },
            S === "windowCenter" ? Te(M, y) : $e(M, y)
          );
          Re(A, $, f);
        }
        c && c(L, A);
      }
    },
    z = te(
      "react-share__ShareButton",
      { "react-share__ShareButton--disabled": !!l, disabled: !!l },
      o
    ),
    T = x(
      x(
        v
          ? {
              backgroundColor: "transparent",
              border: "none",
              padding: 0,
              font: "inherit",
              color: "inherit",
              cursor: "pointer"
            }
          : {},
        j
      ),
      l && d
    );
  return r.jsx(
    "button",
    Q(x({}, _), {
      className: z,
      onClick: P,
      ref: u,
      style: T,
      title: h,
      children: i
    })
  );
}
function p(e, t, n, i) {
  function o(l, d) {
    const u = n(l),
      h = x({}, l);
    return (
      Object.keys(u).forEach((s) => {
        delete h[s];
      }),
      r.jsx(
        De,
        Q(x(x({}, i), h), {
          forwardedRef: d,
          networkName: e,
          networkLink: t,
          opts: n(l)
        })
      )
    );
  }
  return ((o.displayName = `ShareButton-${e}`), Z.forwardRef(o));
}
function Fe(e, { subject: t, body: n, separator: i }) {
  return "mailto:" + w({ subject: t, body: n ? n + i + e : e });
}
p(
  "email",
  Fe,
  (e) => ({ subject: e.subject, body: e.body, separator: e.separator || " " }),
  {
    openShareDialogOnClick: !1,
    onClick: (e, t) => {
      window.location.href = t;
    }
  }
);
function Ke(e, { appId: t, redirectUri: n, to: i }) {
  return (
    "https://www.facebook.com/dialog/send" +
    w({ link: e, redirect_uri: n || e, app_id: t, to: i })
  );
}
p(
  "facebookmessenger",
  Ke,
  (e) => ({ appId: e.appId, redirectUri: e.redirectUri, to: e.to }),
  { windowWidth: 1e3, windowHeight: 820 }
);
class Ue extends Error {
  constructor(t) {
    (super(t), (this.name = "AssertionError"));
  }
}
function g(e, t) {
  if (!e) throw new Ue(t);
}
function qe(e, { hashtag: t }) {
  return (
    g(e, "facebook.url"),
    "https://www.facebook.com/sharer/sharer.php" + w({ u: e, hashtag: t })
  );
}
const Je = p("facebook", qe, (e) => ({ hashtag: e.hashtag }), {
    windowWidth: 550,
    windowHeight: 400
  }),
  Qe = Je;
function Ge() {
  const e = Z.useRef(!1);
  return (
    Z.useEffect(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    Z.useCallback(() => e.current, [])
  );
}
function Xe(e) {
  var t = e,
    { children: n = (f) => f, className: i, getCount: o, url: l } = t,
    d = G(t, ["children", "className", "getCount", "url"]);
  const u = Ge(),
    [h, a] = Z.useState(void 0),
    [s, c] = Z.useState(!1);
  return (
    Z.useEffect(() => {
      (c(!0),
        o(l, (f) => {
          u() && (a(f), c(!1));
        }));
    }, [l]),
    r.jsx(
      "span",
      Q(x({ className: te("react-share__ShareCount", i) }, d), {
        children: !s && h !== void 0 && n(h)
      })
    )
  );
}
function C(e) {
  const t = (n) => r.jsx(Xe, x({ getCount: e }, n));
  return ((t.displayName = `ShareCount(${e.name})`), t);
}
function Ye(e, t) {
  const n = `https://graph.facebook.com/?id=${e}&fields=og_object{engagement}`;
  N(n, (i, o) => {
    t(
      !i && o && o.og_object && o.og_object.engagement
        ? o.og_object.engagement.count
        : void 0
    );
  });
}
C(Ye);
function et(e, { title: t }) {
  return (
    g(e, "hatena.url"),
    `http://b.hatena.ne.jp/add?mode=confirm&url=${e}&title=${t}`
  );
}
p("hatena", et, (e) => ({ title: e.title }), {
  windowWidth: 660,
  windowHeight: 460,
  windowPosition: "windowCenter"
});
function tt(e, t) {
  N("https://bookmark.hatenaapis.com/count/entry" + w({ url: e }), (i, o) => {
    t(o ?? void 0);
  });
}
C(tt);
function nt(e, { title: t, description: n }) {
  return (
    g(e, "instapaper.url"),
    "http://www.instapaper.com/hello2" + w({ url: e, title: t, description: n })
  );
}
p("instapaper", nt, (e) => ({ title: e.title, description: e.description }), {
  windowWidth: 500,
  windowHeight: 500,
  windowPosition: "windowCenter"
});
function rt(e, { title: t }) {
  return (
    g(e, "line.url"),
    "https://social-plugins.line.me/lineit/share" + w({ url: e, text: t })
  );
}
p("line", rt, (e) => ({ title: e.title }), {
  windowWidth: 500,
  windowHeight: 500
});
function it(e, { title: t, summary: n, source: i }) {
  return (
    g(e, "linkedin.url"),
    "https://linkedin.com/shareArticle" +
      w({ url: e, mini: "true", title: t, summary: n, source: i })
  );
}
p(
  "linkedin",
  it,
  ({ title: e, summary: t, source: n }) => ({
    title: e,
    summary: t,
    source: n
  }),
  { windowWidth: 750, windowHeight: 600 }
);
function ot(e, { title: t, description: n }) {
  return (
    g(e, "livejournal.url"),
    "https://www.livejournal.com/update.bml" + w({ subject: t, event: n })
  );
}
p("livejournal", ot, (e) => ({ title: e.title, description: e.description }), {
  windowWidth: 660,
  windowHeight: 460
});
function at(e, { title: t, description: n, imageUrl: i }) {
  return (
    g(e, "mailru.url"),
    "https://connect.mail.ru/share" +
      w({ url: e, title: t, description: n, image_url: i })
  );
}
p(
  "mailru",
  at,
  (e) => ({ title: e.title, description: e.description, imageUrl: e.imageUrl }),
  { windowWidth: 660, windowHeight: 460 }
);
function st(e, { title: t, description: n, image: i }) {
  return (
    g(e, "ok.url"),
    "https://connect.ok.ru/offer" +
      w({ url: e, title: t, description: n, imageUrl: i })
  );
}
p(
  "ok",
  st,
  (e) => ({ title: e.title, description: e.description, image: e.image }),
  { windowWidth: 588, windowHeight: 480, windowPosition: "screenCenter" }
);
function lt(e, t) {
  window.OK ||
    (window.OK = {
      Share: {
        count: function (l, d) {
          var u, h;
          (h = (u = window.OK.callbacks)[l]) == null || h.call(u, d);
        }
      },
      callbacks: []
    });
  const n = "https://connect.ok.ru/dk",
    i = window.OK.callbacks.length;
  return (
    (window.ODKL = {
      updateCount(o, l) {
        var d, u;
        const h = o === "" ? 0 : parseInt(o.replace("react-share-", ""), 10);
        (u = (d = window.OK.callbacks)[h]) == null ||
          u.call(d, l === "" ? void 0 : parseInt(l, 10));
      }
    }),
    window.OK.callbacks.push(t),
    N(n + w({ "st.cmd": "extLike", uid: `react-share-${i}`, ref: e }))
  );
}
C(lt);
function ct(e, { media: t, description: n, pinId: i }) {
  return i
    ? `https://pinterest.com/pin/${i}/repin/x/`
    : (g(e, "pinterest.url"),
      g(t, "pinterest.media"),
      "https://pinterest.com/pin/create/button/" +
        w({ url: e, media: t, description: n }));
}
p(
  "pinterest",
  ct,
  (e) => ({ media: e.media, description: e.description, pinId: e.pinId }),
  { windowWidth: 1e3, windowHeight: 730 }
);
function dt(e, t) {
  N("https://api.pinterest.com/v1/urls/count.json" + w({ url: e }), (i, o) => {
    t(o ? o.count : void 0);
  });
}
C(dt);
function ut(e, { title: t }) {
  return (
    g(e, "pocket.url"),
    "https://getpocket.com/save" + w({ url: e, title: t })
  );
}
p("pocket", ut, (e) => ({ title: e.title }), {
  windowWidth: 500,
  windowHeight: 500
});
function ht(e, { title: t }) {
  return (
    g(e, "reddit.url"),
    "https://www.reddit.com/web/submit" + w({ url: e, title: t })
  );
}
p("reddit", ht, (e) => ({ title: e.title }), {
  windowWidth: 660,
  windowHeight: 460,
  windowPosition: "windowCenter"
});
function ft(e, { title: t }) {
  return (g(e, "gab.url"), "https://gab.com/compose" + w({ url: e, text: t }));
}
p("gab", ft, (e) => ({ title: e.title }), {
  windowWidth: 660,
  windowHeight: 640,
  windowPosition: "windowCenter"
});
function mt(e, t) {
  const n = `https://www.reddit.com/api/info.json?limit=1&url=${e}`;
  N(n, { param: "jsonp" }, (i, o) => {
    t(
      !i &&
        o &&
        o.data &&
        o.data.children.length > 0 &&
        o.data.children[0].data.score
        ? o.data.children[0].data.score
        : void 0
    );
  });
}
C(mt);
function wt(e, { title: t }) {
  return (
    g(e, "telegram.url"),
    "https://telegram.me/share/url" + w({ url: e, text: t })
  );
}
p("telegram", wt, (e) => ({ title: e.title }), {
  windowWidth: 550,
  windowHeight: 400
});
function gt(e, { title: t, caption: n, tags: i, posttype: o }) {
  return (
    g(e, "tumblr.url"),
    "https://www.tumblr.com/widgets/share/tool" +
      w({ canonicalUrl: e, title: t, caption: n, tags: i, posttype: o })
  );
}
p(
  "tumblr",
  gt,
  (e) => ({
    title: e.title,
    tags: (e.tags || []).join(","),
    caption: e.caption,
    posttype: e.posttype || "link"
  }),
  { windowWidth: 660, windowHeight: 460 }
);
function pt(e, t) {
  return N("https://api.tumblr.com/v2/share/stats" + w({ url: e }), (i, o) => {
    t(!i && o && o.response ? o.response.note_count : void 0);
  });
}
C(pt);
function Ht(e, { title: t, via: n, hashtags: i = [], related: o = [] }) {
  return (
    g(e, "twitter.url"),
    g(Array.isArray(i), "twitter.hashtags is not an array"),
    g(Array.isArray(o), "twitter.related is not an array"),
    "https://twitter.com/intent/tweet" +
      w({
        url: e,
        text: t,
        via: n,
        hashtags: i.length > 0 ? i.join(",") : void 0,
        related: o.length > 0 ? o.join(",") : void 0
      })
  );
}
const Vt = p(
    "twitter",
    Ht,
    (e) => ({
      hashtags: e.hashtags,
      title: e.title,
      via: e.via,
      related: e.related
    }),
    { windowWidth: 550, windowHeight: 400 }
  ),
  bt = Vt;
function vt(e, { title: t, separator: n }) {
  return (
    g(e, "viber.url"),
    "viber://forward" + w({ text: t ? t + n + e : e })
  );
}
p("viber", vt, (e) => ({ title: e.title, separator: e.separator || " " }), {
  windowWidth: 660,
  windowHeight: 460
});
function xt(e, { title: t, image: n, noParse: i, noVkLinks: o }) {
  return (
    g(e, "vk.url"),
    "https://vk.com/share.php" +
      w({
        url: e,
        title: t,
        image: n,
        noparse: i ? 1 : 0,
        no_vk_links: o ? 1 : 0
      })
  );
}
p(
  "vk",
  xt,
  (e) => ({
    title: e.title,
    image: e.image,
    noParse: e.noParse,
    noVkLinks: e.noVkLinks
  }),
  { windowWidth: 660, windowHeight: 460 }
);
function jt(e, t) {
  (window.VK || (window.VK = {}),
    (window.VK.Share = {
      count: (o, l) => {
        var d, u;
        return (u = (d = window.VK.callbacks) == null ? void 0 : d[o]) == null
          ? void 0
          : u.call(d, l);
      }
    }),
    (window.VK.callbacks = []));
  const n = "https://vk.com/share.php",
    i = window.VK.callbacks.length;
  return (
    window.VK.callbacks.push(t),
    N(n + w({ act: "count", index: i, url: e }))
  );
}
C(jt);
function yt(e, { title: t, image: n }) {
  return (
    g(e, "weibo.url"),
    "http://service.weibo.com/share/share.php" + w({ url: e, title: t, pic: n })
  );
}
p("weibo", yt, (e) => ({ title: e.title, image: e.image }), {
  windowWidth: 660,
  windowHeight: 550,
  windowPosition: "screenCenter"
});
function kt() {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}
function Mt(e, { title: t, separator: n }) {
  return (
    g(e, "whatsapp.url"),
    "https://" +
      (kt() ? "api" : "web") +
      ".whatsapp.com/send" +
      w({ text: t ? t + n + e : e })
  );
}
p("whatsapp", Mt, (e) => ({ title: e.title, separator: e.separator || " " }), {
  windowWidth: 550,
  windowHeight: 400
});
function Zt(e, { quote: t, hashtag: n }) {
  return (
    g(e, "workplace.url"),
    "https://work.facebook.com/sharer.php" + w({ u: e, quote: t, hashtag: n })
  );
}
p("workplace", Zt, (e) => ({ quote: e.quote, hashtag: e.hashtag }), {
  windowWidth: 550,
  windowHeight: 400
});
function Nt({ className: e, ...t }) {
  const n = de(),
    [i, o] = b.useState(""),
    [l, d] = b.useState(!1),
    [u, h] = b.useState(!1);
  b.useEffect(() => {
    (o(window.location.href), navigator.share && h(!0));
  }, [n]);
  const a = () => {
      navigator.clipboard.writeText(i).then(() => {
        d(!0);
        const c = setTimeout(() => d(!1), 2e3);
        return () => clearTimeout(c);
      });
    },
    s = async () => {
      if (navigator.share) {
        const c = { title: document.title, url: i };
        try {
          await navigator.share(c);
        } catch (f) {
          console.log(`Error: ${f}`);
        }
      }
    };
  return r.jsxs("div", {
    ...t,
    className: V(
      "fixed bottom-0 right-0 z-20 w-full",
      "lg:right-0 lg:w-auto xl:right-container-padding",
      e
    ),
    children: [
      u &&
        r.jsx(fe, {
          onClick: s,
          after: r.jsx(k, { hasBorder: !0, name: "share" }),
          className: V([
            "w-full justify-center bg-light-grey font-mono text-body-20 uppercase text-black",
            "lg:hidden"
          ]),
          children: "Share"
        }),
      r.jsxs("div", {
        className: V(["relative hidden bg-light-grey px-16 py-8", "lg:block"]),
        children: [
          r.jsx("p", {
            className:
              "mb-8 text-center font-mono text-body-20 font-bold uppercase",
            children: "Share"
          }),
          r.jsxs("div", {
            className: "flex justify-center gap-8",
            children: [
              r.jsx(Qe, {
                url: i,
                children: r.jsx(k, {
                  hasBorder: !0,
                  className:
                    "size-40 border-black transition-colors hover:bg-black hover:text-white",
                  name: "fb"
                })
              }),
              r.jsx(bt, {
                url: i,
                children: r.jsx(k, {
                  hasBorder: !0,
                  className:
                    "size-40 border-black transition-colors hover:bg-black hover:text-white",
                  name: "twitter"
                })
              }),
              r.jsx("button", {
                onClick: a,
                children: r.jsx(k, {
                  hasBorder: !0,
                  className:
                    "size-40 border-black transition-colors hover:bg-black hover:text-white",
                  name: "link"
                })
              }),
              r.jsxs("p", {
                className: V([
                  "pointer-events-none absolute bottom-full right-0 mb-10 flex items-center gap-8 p-8",
                  "whitespace-nowrap bg-black font-mono text-caption-30 text-white",
                  "transition-opacity",
                  !l && "opacity-0"
                ]),
                children: [
                  r.jsx(k, {
                    hasBorder: !0,
                    name: "checkmark",
                    className: "size-20 group-hover:bg-light-grey"
                  }),
                  "Copied to clipboard"
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}
const Ct = ({ fileUrl: e }) => {
  const t = b.useRef(null),
    [n, i] = b.useState(!1),
    [o, l] = b.useState(0),
    [d, u] = b.useState(0),
    [h, a] = b.useState(0),
    s = () => {
      t.current && (n ? t.current.pause() : t.current.play(), i(!n));
    },
    c = () => {
      var m;
      const H = (m = t.current) == null ? void 0 : m.duration;
      H && l(H);
    };
  (b.useEffect(() => {
    const H = () => {
      if (t.current) {
        const v = t.current.currentTime;
        (a(v), o && u((v / o) * 100));
      }
    };
    H();
    const m = setInterval(H, 1e3);
    return () => clearInterval(m);
  }, [o]),
    b.useEffect(() => {
      t.current && c();
    }, []),
    b.useEffect(() => {
      (i(!1), u(0), a(0));
    }, [e]));
  const f = pe(He.up("xl"));
  return r.jsxs("div", {
    className: "flex items-center gap-8",
    children: [
      r.jsx("audio", {
        ref: t,
        onLoadedMetadata: c,
        src: e,
        preload: "metadata"
      }),
      r.jsx("button", {
        className: "flex size-36 items-center justify-center",
        onClick: s,
        children: n
          ? r.jsxs("svg", {
              className: "h-16",
              viewBox: "0 0 12 16",
              fill: "none",
              children: [
                r.jsx("rect", {
                  width: "4",
                  height: "16",
                  fill: "currentColor"
                }),
                r.jsx("rect", {
                  x: "8",
                  width: "4",
                  height: "16",
                  fill: "currentColor"
                })
              ]
            })
          : r.jsx("svg", {
              className: "h-16",
              viewBox: "0 0 12 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: r.jsx("path", {
                d: "M4 0H0V18H4V16H6V14H8V12H10V10H12V8H10V6H8V4H6V2H4V0Z",
                fill: "currentColor"
              })
            })
      }),
      r.jsx("div", {
        children: r.jsxs("svg", {
          className: "w-full",
          viewBox: f ? "0 0 122 18" : "0 0 244 18",
          fill: "none",
          children: [
            r.jsx("g", {
              children: r.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M126.877 18H128.877V0H126.877V18ZM21.8246 18H19.8246V2H21.8246V18ZM13.8947 18H11.8947V4H13.8947V18ZM5.96491 18H3.96491V7H5.96491V18ZM2 18H0V12H2V18ZM7.92982 18H9.92982V8H7.92982V18ZM15.8596 18H17.8596V10H15.8596V18ZM23.7895 18H25.7895V6H23.7895V18ZM29.7544 18H27.7544V4H29.7544V18ZM31.7193 18H33.7193V12H31.7193V18ZM37.6842 18H35.6842V4H37.6842V18ZM39.6491 18H41.6491V2H39.6491V18ZM45.614 18H43.614V9H45.614V18ZM47.5789 18H49.5789V14H47.5789V18ZM53.5439 18H51.5439V7H53.5439V18ZM55.5088 18H57.5088V11H55.5088V18ZM61.4737 18H59.4737V4H61.4737V18ZM63.4386 18H65.4386V6H63.4386V18ZM69.4035 18H67.4035V2H69.4035V18ZM71.3684 18H73.3684V6H71.3684V18ZM77.3333 18H75.3333V14H77.3333V18ZM79.2982 18H81.2982V7H79.2982V18ZM85.2632 18H83.2632V4H85.2632V18ZM87.2281 18H89.2281V11H87.2281V18ZM93.193 18H91.193V7H93.193V18ZM95.1579 18H97.1579V6H95.1579V18ZM101.123 18H99.1228V12H101.123V18ZM103.088 18H105.088V14H103.088V18ZM109.053 18H107.053V6H109.053V18ZM111.018 18H113.018V7H111.018V18ZM116.982 18H114.982V4H116.982V18ZM118.947 18H120.947V14H118.947V18ZM124.912 18H122.912V12H124.912V18ZM132.842 18H130.842V2H132.842V18ZM134.807 18H136.807V12H134.807V18ZM140.772 18H138.772V7H140.772V18ZM142.737 18H144.737V8H142.737V18ZM148.702 18H146.702V4H148.702V18ZM150.667 18H152.667V10H150.667V18ZM156.632 18H154.632V2H156.632V18ZM158.596 18H160.596V6H158.596V18ZM164.561 18H162.561V4H164.561V18ZM166.526 18H168.526V12H166.526V18ZM172.491 18H170.491V4H172.491V18ZM174.456 18H176.456V2H174.456V18ZM180.421 18H178.421V9H180.421V18ZM182.386 18H184.386V14H182.386V18ZM188.351 18H186.351V7H188.351V18ZM190.316 18H192.316V11H190.316V18ZM196.281 18H194.281V4H196.281V18ZM198.245 18H200.245V6H198.245V18ZM204.21 18H202.21V2H204.21V18ZM206.175 18H208.175V6H206.175V18ZM212.14 18H210.14V14H212.14V18ZM214.105 18H216.105V7H214.105V18ZM220.07 18H218.07V4H220.07V18ZM222.035 18H224.035V11H222.035V18ZM228 18H226V7H228V18Z",
                className: "fill-black",
                opacity: "0.2"
              })
            }),
            r.jsx("g", {
              clipPath: "url(#clip0_3008_2736)",
              children: r.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M126.877 18H128.877V0H126.877V18ZM21.8246 18H19.8246V2H21.8246V18ZM13.8947 18H11.8947V4H13.8947V18ZM5.96491 18H3.96491V7H5.96491V18ZM2 18H0V12H2V18ZM7.92982 18H9.92982V8H7.92982V18ZM15.8596 18H17.8596V10H15.8596V18ZM23.7895 18H25.7895V6H23.7895V18ZM29.7544 18H27.7544V4H29.7544V18ZM31.7193 18H33.7193V12H31.7193V18ZM37.6842 18H35.6842V4H37.6842V18ZM39.6491 18H41.6491V2H39.6491V18ZM45.614 18H43.614V9H45.614V18ZM47.5789 18H49.5789V14H47.5789V18ZM53.5439 18H51.5439V7H53.5439V18ZM55.5088 18H57.5088V11H55.5088V18ZM61.4737 18H59.4737V4H61.4737V18ZM63.4386 18H65.4386V6H63.4386V18ZM69.4035 18H67.4035V2H69.4035V18ZM71.3684 18H73.3684V6H71.3684V18ZM77.3333 18H75.3333V14H77.3333V18ZM79.2982 18H81.2982V7H79.2982V18ZM85.2632 18H83.2632V4H85.2632V18ZM87.2281 18H89.2281V11H87.2281V18ZM93.193 18H91.193V7H93.193V18ZM95.1579 18H97.1579V6H95.1579V18ZM101.123 18H99.1228V12H101.123V18ZM103.088 18H105.088V14H103.088V18ZM109.053 18H107.053V6H109.053V18ZM111.018 18H113.018V7H111.018V18ZM116.982 18H114.982V4H116.982V18ZM118.947 18H120.947V14H118.947V18ZM124.912 18H122.912V12H124.912V18ZM132.842 18H130.842V2H132.842V18ZM134.807 18H136.807V12H134.807V18ZM140.772 18H138.772V7H140.772V18ZM142.737 18H144.737V8H142.737V18ZM148.702 18H146.702V4H148.702V18ZM150.667 18H152.667V10H150.667V18ZM156.632 18H154.632V2H156.632V18ZM158.596 18H160.596V6H158.596V18ZM164.561 18H162.561V4H164.561V18ZM166.526 18H168.526V12H166.526V18ZM172.491 18H170.491V4H172.491V18ZM174.456 18H176.456V2H174.456V18ZM180.421 18H178.421V9H180.421V18ZM182.386 18H184.386V14H182.386V18ZM188.351 18H186.351V7H188.351V18ZM190.316 18H192.316V11H190.316V18ZM196.281 18H194.281V4H196.281V18ZM198.245 18H200.245V6H198.245V18ZM204.21 18H202.21V2H204.21V18ZM206.175 18H208.175V6H206.175V18ZM212.14 18H210.14V14H212.14V18ZM214.105 18H216.105V7H214.105V18ZM220.07 18H218.07V4H220.07V18ZM222.035 18H224.035V11H222.035V18ZM228 18H226V7H228V18Z",
                className: "fill-black"
              })
            }),
            r.jsx("defs", {
              children: r.jsx("clipPath", {
                id: "clip0_3008_2736",
                children: r.jsx("rect", {
                  style: { width: `${d}%` },
                  width: f ? 122 : 244,
                  height: "18",
                  fill: "white"
                })
              })
            })
          ]
        })
      }),
      r.jsx("span", {
        children: n
          ? r.jsx(r.Fragment, { children: h ? X(h) : "0:00" })
          : r.jsx(r.Fragment, { children: o ? X(o) : "0:00" })
      })
    ]
  });
};
function Rt({ data: e }) {
  var i, o;
  const t =
      (o = (i = e == null ? void 0 : e.initial) == null ? void 0 : i.data) ==
      null
        ? void 0
        : o.article,
    n = {
      title:
        (t == null ? void 0 : t.seoTitle) ?? (t == null ? void 0 : t.title),
      description: t == null ? void 0 : t.seoDescription,
      image: t == null ? void 0 : t.seoImage,
      noIndex: t == null ? void 0 : t.noIndex
    };
  return me({ seoMetadata: n });
}
const Dt = ae(function ({ loaderData: t }) {
  var z, T, L;
  const { initial: n, allArticles: i, query: o, params: l } = t,
    { data: d } = ue(o, l, { initial: n }),
    {
      _id: u,
      number: h,
      publishAt: a,
      title: s,
      content: c,
      featuredImage: f,
      videoUrl: H,
      audioSrc: m,
      readingTime: v,
      viewCount: j
    } = (d == null ? void 0 : d.article) || {},
    y = i.data.articles.filter((A) => A.publishAt && Ve(A.publishAt)),
    { previousArticle: S, nextArticle: M } = u
      ? be(y, u)
      : { previousArticle: null, nextArticle: null },
    [_, P] = b.useState(!1);
  return (
    b.useEffect(() => {
      P(!1);
    }, [u]),
    r.jsxs(r.Fragment, {
      children: [
        r.jsxs(we, {
          className: "flex items-start justify-between font-mono",
          children: [
            r.jsx(K, {
              className: "text-body-20 uppercase",
              to: "/articles",
              before: r.jsx(k, {
                hasBorder: !0,
                name: "caret-left",
                className: "size-[1.5em] group-hover:bg-light-grey"
              }),
              children: "Back"
            }),
            r.jsxs("div", {
              className: "text-right",
              children: [
                h &&
                  r.jsx("p", {
                    className: "mb-24 text-caption-30",
                    children: ve(h)
                  }),
                a &&
                  r.jsx("p", {
                    className: "text-caption-20 text-black/50",
                    children: xe(a)
                  })
              ]
            })
          ]
        }),
        r.jsx("article", {
          className:
            "container relative z-10 animate-glitch-1-horizontal motion-reduce:animate-none",
          children: r.jsxs("div", {
            className: "vt-name-[main-content]",
            children: [
              r.jsx("h1", {
                className: "mb-24 text-title-60 font-bold lg:mb-40",
                children: s
              }),
              j !== void 0 &&
                j >= 0 &&
                r.jsxs("p", {
                  className:
                    "mb-24 hidden text-right font-mono text-caption-20 uppercase text-black/50 lg:mb-40",
                  children: ["[", j + 1, " times read]"]
                }),
              r.jsx(R, { className: "mb-24 lg:mb-40" }),
              r.jsx(Nt, {}),
              r.jsxs("div", {
                className: "mx-auto lg:w-[58.75vw]",
                children: [
                  f &&
                    r.jsxs("div", {
                      className: "group relative mb-24 lg:mb-40",
                      children: [
                        H &&
                          r.jsxs(r.Fragment, {
                            children: [
                              _ &&
                                r.jsx("iframe", {
                                  src: H,
                                  className:
                                    "absolute inset-0 z-10 size-full animate-glitch-1-horizontal motion-reduce:animate-none",
                                  title: s,
                                  allow:
                                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                  referrerPolicy:
                                    "strict-origin-when-cross-origin",
                                  allowFullScreen: !0,
                                  tabIndex: 0,
                                  "aria-hidden": "false",
                                  role: "application",
                                  "aria-label": s
                                }),
                              r.jsx(re, {
                                onClick: () => P(!0),
                                className: V([
                                  "absolute bottom-16 right-16",
                                  "border-black bg-black text-white",
                                  "group-hover:bg-white group-hover:text-black"
                                ])
                              })
                            ]
                          }),
                        r.jsx(J, {
                          onClick: () => P(!0),
                          className: V(["w-full", H && "cursor-pointer"]),
                          id: (z = f.asset) == null ? void 0 : z._ref
                        })
                      ]
                    }),
                  r.jsxs("div", {
                    className: "xl:flex xl:gap-40",
                    children: [
                      r.jsx("div", {
                        className:
                          "max-w-512 font-mono text-caption-20 xl:min-w-[14vw]",
                        children: r.jsxs("div", {
                          className: "py-8",
                          children: [
                            r.jsx(R, { className: "mb-16" }),
                            v &&
                              r.jsxs("p", {
                                className: "mb-16",
                                children: [
                                  "[",
                                  r.jsx("span", { children: v }),
                                  " MIN READ]"
                                ]
                              }),
                            (m == null ? void 0 : m.url) &&
                              r.jsx(Ct, { fileUrl: m.url }),
                            r.jsx(R, { className: "mb-16 mt-16" }),
                            r.jsx(ke, {}),
                            r.jsx(R, { className: "my-16" })
                          ]
                        })
                      }),
                      r.jsxs("div", {
                        className: "font-mono",
                        children: [
                          r.jsx(ye, { content: c }),
                          r.jsxs("div", {
                            className:
                              "flex justify-between py-40 text-caption-20 uppercase",
                            children: [
                              S &&
                                r.jsx(K, {
                                  to: `/articles/${(T = S.slug) == null ? void 0 : T.current}`,
                                  before: r.jsx(k, {
                                    hasBorder: !0,
                                    name: "caret-left",
                                    className:
                                      "size-[1.5em] group-hover:bg-light-grey"
                                  }),
                                  children: "Previous"
                                }),
                              M &&
                                r.jsx(K, {
                                  to: `/articles/${(L = M.slug) == null ? void 0 : L.current}`,
                                  after: r.jsx(k, {
                                    hasBorder: !0,
                                    name: "caret-right",
                                    className:
                                      "size-[1.5em] group-hover:bg-light-grey"
                                  }),
                                  children: "Next"
                                })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        }),
        r.jsx(ge, {})
      ]
    })
  );
});
export { Dt as default, Rt as meta };

