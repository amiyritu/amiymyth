import { r as v, j as m, w as ve, x as ne } from "./chunk-7R3XDUXW-BHIEIWN9.js";
function ue(e) {
  var r,
    t,
    o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (r = 0; r < s; r++)
        e[r] && (t = ue(e[r])) && (o && (o += " "), (o += t));
    } else for (t in e) e[t] && (o && (o += " "), (o += t));
  return o;
}
function K() {
  for (var e, r, t = 0, o = "", s = arguments.length; t < s; t++)
    (e = arguments[t]) && (r = ue(e)) && (o && (o += " "), (o += r));
  return o;
}
const se = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  xe = (e) => {
    const r = function () {
      for (var s = arguments.length, n = new Array(s), i = 0; i < s; i++)
        n[i] = arguments[i];
      var l, c;
      return typeof (e == null || (l = e.hooks) === null || l === void 0
        ? void 0
        : l["cx:done"]) < "u"
        ? e == null
          ? void 0
          : e.hooks["cx:done"](K(n))
        : typeof (e == null || (c = e.hooks) === null || c === void 0
              ? void 0
              : c.onComplete) < "u"
          ? e == null
            ? void 0
            : e.hooks.onComplete(K(n))
          : K(n);
    };
    return {
      compose: function () {
        for (var s = arguments.length, n = new Array(s), i = 0; i < s; i++)
          n[i] = arguments[i];
        return (l) => {
          const c = Object.fromEntries(
            Object.entries(l || {}).filter((d) => {
              let [h] = d;
              return !["class", "className"].includes(h);
            })
          );
          return r(
            n.map((d) => d(c)),
            l == null ? void 0 : l.class,
            l == null ? void 0 : l.className
          );
        };
      },
      cva: (s) => (n) => {
        var i;
        if ((s == null ? void 0 : s.variants) == null)
          return r(
            s == null ? void 0 : s.base,
            n == null ? void 0 : n.class,
            n == null ? void 0 : n.className
          );
        const { variants: l, defaultVariants: c } = s,
          d = Object.keys(l).map((g) => {
            const w = n == null ? void 0 : n[g],
              x = c == null ? void 0 : c[g],
              p = se(w) || se(x);
            return l[g][p];
          }),
          h = {
            ...c,
            ...(n &&
              Object.entries(n).reduce((g, w) => {
                let [x, p] = w;
                return typeof p > "u" ? g : { ...g, [x]: p };
              }, {}))
          },
          k =
            s == null || (i = s.compoundVariants) === null || i === void 0
              ? void 0
              : i.reduce((g, w) => {
                  let { class: x, className: p, ...b } = w;
                  return Object.entries(b).every((y) => {
                    let [C, j] = y;
                    const z = h[C];
                    return Array.isArray(j) ? j.includes(z) : z === j;
                  })
                    ? [...g, x, p]
                    : g;
                }, []);
        return r(
          s == null ? void 0 : s.base,
          d,
          k,
          n == null ? void 0 : n.class,
          n == null ? void 0 : n.className
        );
      },
      cx: r
    };
  },
  J = "-",
  we = (e) => {
    const r = ke(e),
      { conflictingClassGroups: t, conflictingClassGroupModifiers: o } = e;
    return {
      getClassGroupId: (i) => {
        const l = i.split(J);
        return (l[0] === "" && l.length !== 1 && l.shift(), pe(l, r) || Ce(i));
      },
      getConflictingClassGroupIds: (i, l) => {
        const c = t[i] || [];
        return l && o[i] ? [...c, ...o[i]] : c;
      }
    };
  },
  pe = (e, r) => {
    var i;
    if (e.length === 0) return r.classGroupId;
    const t = e[0],
      o = r.nextPart.get(t),
      s = o ? pe(e.slice(1), o) : void 0;
    if (s) return s;
    if (r.validators.length === 0) return;
    const n = e.join(J);
    return (i = r.validators.find(({ validator: l }) => l(n))) == null
      ? void 0
      : i.classGroupId;
  },
  le = /^\[(.+)\]$/,
  Ce = (e) => {
    if (le.test(e)) {
      const r = le.exec(e)[1],
        t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
      if (t) return "arbitrary.." + t;
    }
  },
  ke = (e) => {
    const { theme: r, prefix: t } = e,
      o = { nextPart: new Map(), validators: [] };
    return (
      je(Object.entries(e.classGroups), t).forEach(([n, i]) => {
        H(i, o, n, r);
      }),
      o
    );
  },
  H = (e, r, t, o) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const n = s === "" ? r : ie(r, s);
        n.classGroupId = t;
        return;
      }
      if (typeof s == "function") {
        if (ze(s)) {
          H(s(o), r, t, o);
          return;
        }
        r.validators.push({ validator: s, classGroupId: t });
        return;
      }
      Object.entries(s).forEach(([n, i]) => {
        H(i, ie(r, n), t, o);
      });
    });
  },
  ie = (e, r) => {
    let t = e;
    return (
      r.split(J).forEach((o) => {
        (t.nextPart.has(o) ||
          t.nextPart.set(o, { nextPart: new Map(), validators: [] }),
          (t = t.nextPart.get(o)));
      }),
      t
    );
  },
  ze = (e) => e.isThemeGetter,
  je = (e, r) =>
    r
      ? e.map(([t, o]) => {
          const s = o.map((n) =>
            typeof n == "string"
              ? r + n
              : typeof n == "object"
                ? Object.fromEntries(
                    Object.entries(n).map(([i, l]) => [r + i, l])
                  )
                : n
          );
          return [t, s];
        })
      : e,
  Se = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let r = 0,
      t = new Map(),
      o = new Map();
    const s = (n, i) => {
      (t.set(n, i), r++, r > e && ((r = 0), (o = t), (t = new Map())));
    };
    return {
      get(n) {
        let i = t.get(n);
        if (i !== void 0) return i;
        if ((i = o.get(n)) !== void 0) return (s(n, i), i);
      },
      set(n, i) {
        t.has(n) ? t.set(n, i) : s(n, i);
      }
    };
  },
  fe = "!",
  Ae = (e) => {
    const { separator: r, experimentalParseClassName: t } = e,
      o = r.length === 1,
      s = r[0],
      n = r.length,
      i = (l) => {
        const c = [];
        let d = 0,
          h = 0,
          k;
        for (let b = 0; b < l.length; b++) {
          let y = l[b];
          if (d === 0) {
            if (y === s && (o || l.slice(b, b + n) === r)) {
              (c.push(l.slice(h, b)), (h = b + n));
              continue;
            }
            if (y === "/") {
              k = b;
              continue;
            }
          }
          y === "[" ? d++ : y === "]" && d--;
        }
        const g = c.length === 0 ? l : l.substring(h),
          w = g.startsWith(fe),
          x = w ? g.substring(1) : g,
          p = k && k > h ? k - h : void 0;
        return {
          modifiers: c,
          hasImportantModifier: w,
          baseClassName: x,
          maybePostfixModifierPosition: p
        };
      };
    return t ? (l) => t({ className: l, parseClassName: i }) : i;
  },
  Ne = (e) => {
    if (e.length <= 1) return e;
    const r = [];
    let t = [];
    return (
      e.forEach((o) => {
        o[0] === "[" ? (r.push(...t.sort(), o), (t = [])) : t.push(o);
      }),
      r.push(...t.sort()),
      r
    );
  },
  Pe = (e) => ({ cache: Se(e.cacheSize), parseClassName: Ae(e), ...we(e) }),
  Re = /\s+/,
  Ee = (e, r) => {
    const {
        parseClassName: t,
        getClassGroupId: o,
        getConflictingClassGroupIds: s
      } = r,
      n = [],
      i = e.trim().split(Re);
    let l = "";
    for (let c = i.length - 1; c >= 0; c -= 1) {
      const d = i[c],
        {
          modifiers: h,
          hasImportantModifier: k,
          baseClassName: g,
          maybePostfixModifierPosition: w
        } = t(d);
      let x = !!w,
        p = o(x ? g.substring(0, w) : g);
      if (!p) {
        if (!x) {
          l = d + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((p = o(g)), !p)) {
          l = d + (l.length > 0 ? " " + l : l);
          continue;
        }
        x = !1;
      }
      const b = Ne(h).join(":"),
        y = k ? b + fe : b,
        C = y + p;
      if (n.includes(C)) continue;
      n.push(C);
      const j = s(p, x);
      for (let z = 0; z < j.length; ++z) {
        const T = j[z];
        n.push(y + T);
      }
      l = d + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function Me() {
  let e = 0,
    r,
    t,
    o = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = be(r)) && (o && (o += " "), (o += t));
  return o;
}
const be = (e) => {
  if (typeof e == "string") return e;
  let r,
    t = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (r = be(e[o])) && (t && (t += " "), (t += r));
  return t;
};
function ae(e, ...r) {
  let t,
    o,
    s,
    n = i;
  function i(c) {
    const d = r.reduce((h, k) => k(h), e());
    return ((t = Pe(d)), (o = t.cache.get), (s = t.cache.set), (n = l), l(c));
  }
  function l(c) {
    const d = o(c);
    if (d) return d;
    const h = Ee(c, t);
    return (s(c, h), h);
  }
  return function () {
    return n(Me.apply(null, arguments));
  };
}
const u = (e) => {
    const r = (t) => t[e] || [];
    return ((r.isThemeGetter = !0), r);
  },
  ge = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Ge = /^\d+\/\d+$/,
  Ie = new Set(["px", "full", "screen"]),
  Ve = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Te =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  We = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Oe = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Le =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  A = (e) => R(e) || Ie.has(e) || Ge.test(e),
  N = (e) => E(e, "length", Ze),
  R = (e) => !!e && !Number.isNaN(Number(e)),
  q = (e) => E(e, "number", R),
  G = (e) => !!e && Number.isInteger(Number(e)),
  $e = (e) => e.endsWith("%") && R(e.slice(0, -1)),
  a = (e) => ge.test(e),
  P = (e) => Ve.test(e),
  Be = new Set(["length", "size", "percentage"]),
  Fe = (e) => E(e, Be, me),
  Ue = (e) => E(e, "position", me),
  Ke = new Set(["image", "url"]),
  qe = (e) => E(e, Ke, Je),
  He = (e) => E(e, "", _e),
  I = () => !0,
  E = (e, r, t) => {
    const o = ge.exec(e);
    return o
      ? o[1]
        ? typeof r == "string"
          ? o[1] === r
          : r.has(o[1])
        : t(o[2])
      : !1;
  },
  Ze = (e) => Te.test(e) && !We.test(e),
  me = () => !1,
  _e = (e) => Oe.test(e),
  Je = (e) => Le.test(e),
  ce = () => {
    const e = u("colors"),
      r = u("spacing"),
      t = u("blur"),
      o = u("brightness"),
      s = u("borderColor"),
      n = u("borderRadius"),
      i = u("borderSpacing"),
      l = u("borderWidth"),
      c = u("contrast"),
      d = u("grayscale"),
      h = u("hueRotate"),
      k = u("invert"),
      g = u("gap"),
      w = u("gradientColorStops"),
      x = u("gradientColorStopPositions"),
      p = u("inset"),
      b = u("margin"),
      y = u("opacity"),
      C = u("padding"),
      j = u("saturate"),
      z = u("scale"),
      T = u("sepia"),
      Q = u("skew"),
      Y = u("space"),
      D = u("translate"),
      $ = () => ["auto", "contain", "none"],
      B = () => ["auto", "hidden", "clip", "visible", "scroll"],
      F = () => ["auto", a, r],
      f = () => [a, r],
      ee = () => ["", A, N],
      W = () => ["auto", R, a],
      re = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top"
      ],
      O = () => ["solid", "dashed", "dotted", "double", "none"],
      te = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity"
      ],
      U = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch"
      ],
      M = () => ["", "0", a],
      oe = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column"
      ],
      S = () => [R, a];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [I],
        spacing: [A, N],
        blur: ["none", "", P, a],
        brightness: S(),
        borderColor: [e],
        borderRadius: ["none", "", "full", P, a],
        borderSpacing: f(),
        borderWidth: ee(),
        contrast: S(),
        grayscale: M(),
        hueRotate: S(),
        invert: M(),
        gap: f(),
        gradientColorStops: [e],
        gradientColorStopPositions: [$e, N],
        inset: F(),
        margin: F(),
        opacity: S(),
        padding: f(),
        saturate: S(),
        scale: S(),
        sepia: M(),
        skew: S(),
        space: f(),
        translate: f()
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", a] }],
        container: ["container"],
        columns: [{ columns: [P] }],
        "break-after": [{ "break-after": oe() }],
        "break-before": [{ "break-before": oe() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden"
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] }
        ],
        "object-position": [{ object: [...re(), a] }],
        overflow: [{ overflow: B() }],
        "overflow-x": [{ "overflow-x": B() }],
        "overflow-y": [{ "overflow-y": B() }],
        overscroll: [{ overscroll: $() }],
        "overscroll-x": [{ "overscroll-x": $() }],
        "overscroll-y": [{ "overscroll-y": $() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [p] }],
        "inset-x": [{ "inset-x": [p] }],
        "inset-y": [{ "inset-y": [p] }],
        start: [{ start: [p] }],
        end: [{ end: [p] }],
        top: [{ top: [p] }],
        right: [{ right: [p] }],
        bottom: [{ bottom: [p] }],
        left: [{ left: [p] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", G, a] }],
        basis: [{ basis: F() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] }
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", a] }],
        grow: [{ grow: M() }],
        shrink: [{ shrink: M() }],
        order: [{ order: ["first", "last", "none", G, a] }],
        "grid-cols": [{ "grid-cols": [I] }],
        "col-start-end": [{ col: ["auto", { span: ["full", G, a] }, a] }],
        "col-start": [{ "col-start": W() }],
        "col-end": [{ "col-end": W() }],
        "grid-rows": [{ "grid-rows": [I] }],
        "row-start-end": [{ row: ["auto", { span: [G, a] }, a] }],
        "row-start": [{ "row-start": W() }],
        "row-end": [{ "row-end": W() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", a] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", a] }],
        gap: [{ gap: [g] }],
        "gap-x": [{ "gap-x": [g] }],
        "gap-y": [{ "gap-y": [g] }],
        "justify-content": [{ justify: ["normal", ...U()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] }
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] }
        ],
        "align-content": [{ content: ["normal", ...U(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] }
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] }
        ],
        "place-content": [{ "place-content": [...U(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] }
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] }
        ],
        p: [{ p: [C] }],
        px: [{ px: [C] }],
        py: [{ py: [C] }],
        ps: [{ ps: [C] }],
        pe: [{ pe: [C] }],
        pt: [{ pt: [C] }],
        pr: [{ pr: [C] }],
        pb: [{ pb: [C] }],
        pl: [{ pl: [C] }],
        m: [{ m: [b] }],
        mx: [{ mx: [b] }],
        my: [{ my: [b] }],
        ms: [{ ms: [b] }],
        me: [{ me: [b] }],
        mt: [{ mt: [b] }],
        mr: [{ mr: [b] }],
        mb: [{ mb: [b] }],
        ml: [{ ml: [b] }],
        "space-x": [{ "space-x": [Y] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [Y] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", a, r] }],
        "min-w": [{ "min-w": [a, r, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              a,
              r,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [P] },
              P
            ]
          }
        ],
        h: [{ h: [a, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [a, r, "min", "max", "fit", "svh", "lvh", "dvh"] }
        ],
        "max-h": [
          { "max-h": [a, r, "min", "max", "fit", "svh", "lvh", "dvh"] }
        ],
        size: [{ size: [a, r, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", P, N] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              q
            ]
          }
        ],
        "font-family": [{ font: [I] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              a
            ]
          }
        ],
        "line-clamp": [{ "line-clamp": ["none", R, q] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              A,
              a
            ]
          }
        ],
        "list-image": [{ "list-image": ["none", a] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", a] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [y] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] }
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [y] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline"
        ],
        "text-decoration-style": [{ decoration: [...O(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", A, N] }
        ],
        "underline-offset": [{ "underline-offset": ["auto", A, a] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case"
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: f() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              a
            ]
          }
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces"
            ]
          }
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", a] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [y] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...re(), Ue] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Fe] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              qe
            ]
          }
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [x] }],
        "gradient-via-pos": [{ via: [x] }],
        "gradient-to-pos": [{ to: [x] }],
        "gradient-from": [{ from: [w] }],
        "gradient-via": [{ via: [w] }],
        "gradient-to": [{ to: [w] }],
        rounded: [{ rounded: [n] }],
        "rounded-s": [{ "rounded-s": [n] }],
        "rounded-e": [{ "rounded-e": [n] }],
        "rounded-t": [{ "rounded-t": [n] }],
        "rounded-r": [{ "rounded-r": [n] }],
        "rounded-b": [{ "rounded-b": [n] }],
        "rounded-l": [{ "rounded-l": [n] }],
        "rounded-ss": [{ "rounded-ss": [n] }],
        "rounded-se": [{ "rounded-se": [n] }],
        "rounded-ee": [{ "rounded-ee": [n] }],
        "rounded-es": [{ "rounded-es": [n] }],
        "rounded-tl": [{ "rounded-tl": [n] }],
        "rounded-tr": [{ "rounded-tr": [n] }],
        "rounded-br": [{ "rounded-br": [n] }],
        "rounded-bl": [{ "rounded-bl": [n] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [y] }],
        "border-style": [{ border: [...O(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [y] }],
        "divide-style": [{ divide: O() }],
        "border-color": [{ border: [s] }],
        "border-color-x": [{ "border-x": [s] }],
        "border-color-y": [{ "border-y": [s] }],
        "border-color-s": [{ "border-s": [s] }],
        "border-color-e": [{ "border-e": [s] }],
        "border-color-t": [{ "border-t": [s] }],
        "border-color-r": [{ "border-r": [s] }],
        "border-color-b": [{ "border-b": [s] }],
        "border-color-l": [{ "border-l": [s] }],
        "divide-color": [{ divide: [s] }],
        "outline-style": [{ outline: ["", ...O()] }],
        "outline-offset": [{ "outline-offset": [A, a] }],
        "outline-w": [{ outline: [A, N] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: ee() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [y] }],
        "ring-offset-w": [{ "ring-offset": [A, N] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", P, He] }],
        "shadow-color": [{ shadow: [I] }],
        opacity: [{ opacity: [y] }],
        "mix-blend": [
          { "mix-blend": [...te(), "plus-lighter", "plus-darker"] }
        ],
        "bg-blend": [{ "bg-blend": te() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [t] }],
        brightness: [{ brightness: [o] }],
        contrast: [{ contrast: [c] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", P, a] }],
        grayscale: [{ grayscale: [d] }],
        "hue-rotate": [{ "hue-rotate": [h] }],
        invert: [{ invert: [k] }],
        saturate: [{ saturate: [j] }],
        sepia: [{ sepia: [T] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [t] }],
        "backdrop-brightness": [{ "backdrop-brightness": [o] }],
        "backdrop-contrast": [{ "backdrop-contrast": [c] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [d] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [h] }],
        "backdrop-invert": [{ "backdrop-invert": [k] }],
        "backdrop-opacity": [{ "backdrop-opacity": [y] }],
        "backdrop-saturate": [{ "backdrop-saturate": [j] }],
        "backdrop-sepia": [{ "backdrop-sepia": [T] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              a
            ]
          }
        ],
        duration: [{ duration: S() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", a] }],
        delay: [{ delay: S() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", a] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [z] }],
        "scale-x": [{ "scale-x": [z] }],
        "scale-y": [{ "scale-y": [z] }],
        rotate: [{ rotate: [G, a] }],
        "translate-x": [{ "translate-x": [D] }],
        "translate-y": [{ "translate-y": [D] }],
        "skew-x": [{ "skew-x": [Q] }],
        "skew-y": [{ "skew-y": [Q] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              a
            ]
          }
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              a
            ]
          }
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": f() }],
        "scroll-mx": [{ "scroll-mx": f() }],
        "scroll-my": [{ "scroll-my": f() }],
        "scroll-ms": [{ "scroll-ms": f() }],
        "scroll-me": [{ "scroll-me": f() }],
        "scroll-mt": [{ "scroll-mt": f() }],
        "scroll-mr": [{ "scroll-mr": f() }],
        "scroll-mb": [{ "scroll-mb": f() }],
        "scroll-ml": [{ "scroll-ml": f() }],
        "scroll-p": [{ "scroll-p": f() }],
        "scroll-px": [{ "scroll-px": f() }],
        "scroll-py": [{ "scroll-py": f() }],
        "scroll-ps": [{ "scroll-ps": f() }],
        "scroll-pe": [{ "scroll-pe": f() }],
        "scroll-pt": [{ "scroll-pt": f() }],
        "scroll-pr": [{ "scroll-pr": f() }],
        "scroll-pb": [{ "scroll-pb": f() }],
        "scroll-pl": [{ "scroll-pl": f() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", a] }
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [A, N, q] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left"
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction"
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l"
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l"
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml"
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl"
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] }
    };
  },
  Xe = (
    e,
    {
      cacheSize: r,
      prefix: t,
      separator: o,
      experimentalParseClassName: s,
      extend: n = {},
      override: i = {}
    }
  ) => {
    (V(e, "cacheSize", r),
      V(e, "prefix", t),
      V(e, "separator", o),
      V(e, "experimentalParseClassName", s));
    for (const l in i) Qe(e[l], i[l]);
    for (const l in n) Ye(e[l], n[l]);
    return e;
  },
  V = (e, r, t) => {
    t !== void 0 && (e[r] = t);
  },
  Qe = (e, r) => {
    if (r) for (const t in r) V(e, t, r[t]);
  },
  Ye = (e, r) => {
    if (r)
      for (const t in r) {
        const o = r[t];
        o !== void 0 && (e[t] = (e[t] || []).concat(o));
      }
  },
  De = (e, ...r) =>
    typeof e == "function" ? ae(ce, e, ...r) : ae(() => Xe(ce(), e), ...r),
  er = De({
    extend: {
      classGroups: {
        z: [{ z: ["behind"] }],
        "font-size": [
          {
            text: [
              (e) =>
                ["title", "subtitle", "body", "caption"].some((r) =>
                  e.startsWith(r)
                )
            ]
          }
        ]
      }
    }
  }),
  { cva: rr, cx: Z, compose: br } = xe({ hooks: { onComplete: er } });
function tr(e, r) {
  typeof e == "function" ? e(r) : e != null && (e.current = r);
}
function or(...e) {
  return (r) => e.forEach((t) => tr(t, r));
}
var he = v.forwardRef((e, r) => {
  const { children: t, ...o } = e,
    s = v.Children.toArray(t),
    n = s.find(sr);
  if (n) {
    const i = n.props.children,
      l = s.map((c) =>
        c === n
          ? v.Children.count(i) > 1
            ? v.Children.only(null)
            : v.isValidElement(i)
              ? i.props.children
              : null
          : c
      );
    return m.jsx(_, {
      ...o,
      ref: r,
      children: v.isValidElement(i) ? v.cloneElement(i, void 0, l) : null
    });
  }
  return m.jsx(_, { ...o, ref: r, children: t });
});
he.displayName = "Slot";
var _ = v.forwardRef((e, r) => {
  const { children: t, ...o } = e;
  if (v.isValidElement(t)) {
    const s = ir(t);
    return v.cloneElement(t, { ...lr(o, t.props), ref: r ? or(r, s) : s });
  }
  return v.Children.count(t) > 1 ? v.Children.only(null) : null;
});
_.displayName = "SlotClone";
var nr = ({ children: e }) => m.jsx(m.Fragment, { children: e });
function sr(e) {
  return v.isValidElement(e) && e.type === nr;
}
function lr(e, r) {
  const t = { ...r };
  for (const o in r) {
    const s = e[o],
      n = r[o];
    /^on[A-Z]/.test(o)
      ? s && n
        ? (t[o] = (...l) => {
            (n(...l), s(...l));
          })
        : s && (t[o] = s)
      : o === "style"
        ? (t[o] = { ...s, ...n })
        : o === "className" && (t[o] = [s, n].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function ir(e) {
  var o, s;
  let r =
      (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : o.get,
    t = r && "isReactWarning" in r && r.isReactWarning;
  return t
    ? e.ref
    : ((r =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (t = r && "isReactWarning" in r && r.isReactWarning),
      t ? e.props.ref : e.props.ref || e.ref);
}
var L =
  (ne && ne.__assign) ||
  function () {
    return (
      (L =
        Object.assign ||
        function (e) {
          for (var r, t = 1, o = arguments.length; t < o; t++) {
            r = arguments[t];
            for (var s in r)
              Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
          }
          return e;
        }),
      L.apply(this, arguments)
    );
  };
function ar(e, r, t) {
  if (r === "className") e.className = [e.className, t].join(" ").trim();
  else if (r === "style") e.style = L(L({}, e.style), t);
  else if (typeof t == "function") {
    var o = e[r];
    e[r] = o
      ? function () {
          for (var s = [], n = 0; n < arguments.length; n++)
            s[n] = arguments[n];
          (o.apply(void 0, s), t.apply(void 0, s));
        }
      : t;
  } else {
    if (t === void 0 || (typeof t != "object" && t === e[r])) return;
    if (!(r in e)) e[r] = t;
    else
      throw new Error(
        "Didn’t know how to merge prop '".concat(r, "'. ") +
          "Only 'className', 'style', and event handlers are supported"
      );
  }
}
var cr = function () {
  for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
  return r.length === 1
    ? r[0]
    : r.reduce(function (o, s) {
        for (var n in s) ar(o, n, s[n]);
        return o;
      }, {});
};
const dr = ve(cr);
function de(e, r) {
  return typeof e.children == "function" ? e.children(r) : e.children;
}
const ye = he,
  X = v.forwardRef((e, r) => {
    const { asChild: t, child: o, children: s, ...n } = e;
    return v.isValidElement(o)
      ? v.cloneElement(
          o,
          dr(o.props, n, { ref: r }),
          o.type === ye || o.props.asChild
            ? m.jsx(X, { asChild: t, child: o.props.children, children: s })
            : de(e, o.props.children)
        )
      : t
        ? null
        : de(e, o);
  });
X.displayName = "Slottable";
const ur = rr({
    base: [
      "relative inline-flex shrink-0 items-center justify-between gap-8 leading-none overflow-hidden",
      "p-16",
      "cursor-pointer disabled:cursor-default",
      "transition-colors duration-300 ease-out motion-reduce:transition-none",
      "[&>svg]:relative [&>span]:relative"
    ],
    variants: { variant: { default: "bg-black text-white hover:text-black" } },
    defaultVariants: { variant: "default" }
  }),
  pr = v.forwardRef(
    (
      {
        variant: e,
        className: r,
        before: t,
        after: o,
        children: s,
        asChild: n,
        ...i
      },
      l
    ) => {
      const c = n ? ye : "button";
      return m.jsx(c, {
        ref: l,
        className: Z([ur({ variant: e, className: r }), "group/button"]),
        ...i,
        children: m.jsx(X, {
          asChild: n,
          child: s,
          children: (d) =>
            m.jsxs(m.Fragment, {
              children: [
                m.jsxs("div", {
                  className: Z([
                    "translate-z-0 absolute left-0 z-0 flex size-full flex-col",
                    "[&>span]:size-full [&>span]:origin-top-right [&>span]:-translate-x-full [&>span]:scale-[1.1] [&>span]:bg-grey [&>span]:transition-transform [&>span]:duration-700 [&>span]:ease-out",
                    "[&>span]:group-hover/button:translate-x-0"
                  ]),
                  children: [
                    m.jsx("span", { className: "delay-0" }),
                    m.jsx("span", { className: "delay-100" }),
                    m.jsx("span", { className: "delay-200" })
                  ]
                }),
                t && m.jsx(m.Fragment, { children: t }),
                d && m.jsx("span", { children: d }),
                o && m.jsx(m.Fragment, { children: o })
              ]
            })
        })
      });
    }
  );
pr.displayName = "Button";
function gr({ name: e, className: r, hasBorder: t, ...o }) {
  return m.jsx("svg", {
    ...o,
    className: Z(
      "inline-block size-[1em] shrink-0 text-current",
      "transition-colors duration-300 ease-out motion-reduce:transition-none",
      t && "border border-solid",
      r
    ),
    "aria-label": e,
    children: m.jsx("use", { href: `/assets/spritemap.1a0be9ff.svg#icon-${e}` })
  });
}
export { pr as B, gr as I, rr as a, Z as c };

