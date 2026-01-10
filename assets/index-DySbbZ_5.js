import { r as S, j as f, w as z } from "./chunk-7R3XDUXW-BHIEIWN9.js";
function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? T(Object(n), !0).forEach(function (r) {
          R(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : T(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function R(e, t, n) {
  return (
    (t = V(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
function V(e) {
  var t = G(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function G(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function w(e) {
  return (
    e._type === "span" &&
    "text" in e &&
    typeof e.text == "string" &&
    (typeof e.marks > "u" ||
      (Array.isArray(e.marks) && e.marks.every((t) => typeof t == "string")))
  );
}
function P(e) {
  return (
    typeof e._type == "string" &&
    e._type[0] !== "@" &&
    (!("markDefs" in e) ||
      !e.markDefs ||
      (Array.isArray(e.markDefs) &&
        e.markDefs.every((t) => typeof t._key == "string"))) &&
    "children" in e &&
    Array.isArray(e.children) &&
    e.children.every((t) => typeof t == "object" && "_type" in t)
  );
}
function A(e) {
  return (
    P(e) &&
    "listItem" in e &&
    typeof e.listItem == "string" &&
    (typeof e.level > "u" || typeof e.level == "number")
  );
}
function N(e) {
  return e._type === "@list";
}
function K(e) {
  return e._type === "@span";
}
function U(e) {
  return e._type === "@text";
}
const D = ["strong", "em", "code", "underline", "strike-through"];
function J(e, t, n) {
  if (!w(e) || !e.marks) return [];
  if (!e.marks.length) return [];
  const r = e.marks.slice(),
    l = {};
  return (
    r.forEach((i) => {
      l[i] = 1;
      for (let s = t + 1; s < n.length; s++) {
        const a = n[s];
        if (a && w(a) && Array.isArray(a.marks) && a.marks.indexOf(i) !== -1)
          l[i]++;
        else break;
      }
    }),
    r.sort((i, s) => Q(l, i, s))
  );
}
function Q(e, t, n) {
  const r = e[t],
    l = e[n];
  if (r !== l) return l - r;
  const i = D.indexOf(t),
    s = D.indexOf(n);
  return i !== s ? i - s : t.localeCompare(n);
}
function X(e) {
  var t;
  const { children: n, markDefs: r = [] } = e;
  if (!n || !n.length) return [];
  const l = n.map(J),
    i = { _type: "@span", children: [], markType: "<unknown>" };
  let s = [i];
  for (let a = 0; a < n.length; a++) {
    const h = n[a];
    if (!h) continue;
    const j = l[a] || [];
    let x = 1;
    if (s.length > 1)
      for (x; x < s.length; x++) {
        const c = ((t = s[x]) == null ? void 0 : t.markKey) || "",
          u = j.indexOf(c);
        if (u === -1) break;
        j.splice(u, 1);
      }
    s = s.slice(0, x);
    let o = s[s.length - 1];
    if (o) {
      for (const c of j) {
        const u = r.find((p) => p._key === c),
          m = u ? u._type : c,
          y = {
            _type: "@span",
            _key: h._key,
            children: [],
            markDef: u,
            markType: m,
            markKey: c
          };
        (o.children.push(y), s.push(y), (o = y));
      }
      if (w(h)) {
        const c = h.text.split(`
`);
        for (let u = c.length; u-- > 1; )
          c.splice(
            u,
            0,
            `
`
          );
        o.children = o.children.concat(
          c.map((u) => ({ _type: "@text", text: u }))
        );
      } else o.children = o.children.concat(h);
    }
  }
  return i.children;
}
function Y(e, t) {
  const n = [];
  let r;
  for (let l = 0; l < e.length; l++) {
    const i = e[l];
    if (i) {
      if (!A(i)) {
        (n.push(i), (r = void 0));
        continue;
      }
      if (!r) {
        ((r = O(i, l, t)), n.push(r));
        continue;
      }
      if (Z(i, r)) {
        r.children.push(i);
        continue;
      }
      if ((i.level || 1) > r.level) {
        const s = O(i, l, t);
        if (t === "html") {
          const a = r.children[r.children.length - 1],
            h = L(L({}, a), {}, { children: [...a.children, s] });
          r.children[r.children.length - 1] = h;
        } else r.children.push(s);
        r = s;
        continue;
      }
      if ((i.level || 1) < r.level) {
        const s = n[n.length - 1],
          a = s && _(s, i);
        if (a) {
          ((r = a), r.children.push(i));
          continue;
        }
        ((r = O(i, l, t)), n.push(r));
        continue;
      }
      if (i.listItem !== r.listItem) {
        const s = n[n.length - 1],
          a = s && _(s, { level: i.level || 1 });
        if (a && a.listItem === i.listItem) {
          ((r = a), r.children.push(i));
          continue;
        } else {
          ((r = O(i, l, t)), n.push(r));
          continue;
        }
      }
      (console.warn("Unknown state encountered for block", i), n.push(i));
    }
  }
  return n;
}
function Z(e, t) {
  return (e.level || 1) === t.level && e.listItem === t.listItem;
}
function O(e, t, n) {
  return {
    _type: "@list",
    _key: `${e._key || `${t}`}-parent`,
    mode: n,
    level: e.level || 1,
    listItem: e.listItem,
    children: [e]
  };
}
function _(e, t) {
  const n = t.level || 1,
    r = t.listItem || "normal",
    l = typeof t.listItem == "string";
  if (N(e) && (e.level || 1) === n && l && (e.listItem || "normal") === r)
    return e;
  if (!("children" in e)) return;
  const i = e.children[e.children.length - 1];
  return i && !w(i) ? _(i, t) : void 0;
}
function W(e) {
  let t = "";
  return (
    e.children.forEach((n) => {
      U(n) ? (t += n.text) : K(n) && (t += W(n));
    }),
    t
  );
}
const ee = /^\s/,
  te = /\s$/;
function $e(e) {
  const t = Array.isArray(e) ? e : [e];
  let n = "";
  return (
    t.forEach((r, l) => {
      if (!P(r)) return;
      let i = !1;
      (r.children.forEach((s) => {
        w(s)
          ? ((n += i && n && !te.test(n) && !ee.test(s.text) ? " " : ""),
            (n += s.text),
            (i = !1))
          : (i = !0);
      }),
        l !== t.length - 1 &&
          (n += `

`));
    }),
    n
  );
}
const ne = "html",
  re = ["block", "list", "listItem", "marks", "types"],
  ie = ["listItem"],
  se = ["_key"];
function $(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $(Object(n), !0).forEach(function (r) {
          le(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : $(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function le(e, t, n) {
  return (
    (t = oe(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
function oe(e) {
  var t = ce(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ce(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function I(e, t) {
  if (e == null) return {};
  var n,
    r,
    l = ue(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      ((n = i[r]),
        t.indexOf(n) >= 0 ||
          ({}.propertyIsEnumerable.call(e, n) && (l[n] = e[n])));
  }
  return l;
}
function ue(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
const ae = {
    number: ({ children: e }) => f.jsx("ol", { children: e }),
    bullet: ({ children: e }) => f.jsx("ul", { children: e })
  },
  fe = ({ children: e }) => f.jsx("li", { children: e }),
  ye = ({ children: e, value: t }) =>
    f.jsx("a", { href: t == null ? void 0 : t.href, children: e }),
  pe = { textDecoration: "underline" },
  me = {
    em: ({ children: e }) => f.jsx("em", { children: e }),
    strong: ({ children: e }) => f.jsx("strong", { children: e }),
    code: ({ children: e }) => f.jsx("code", { children: e }),
    underline: ({ children: e }) => f.jsx("span", { style: pe, children: e }),
    "strike-through": ({ children: e }) => f.jsx("del", { children: e }),
    link: ye
  },
  v = (e, t) =>
    `[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
  C = (e) => v(`block type "${e}"`, "types"),
  ke = (e) => v(`mark type "${e}"`, "marks"),
  he = (e) => v(`block style "${e}"`, "block"),
  de = (e) => v(`list style "${e}"`, "list"),
  be = (e) => v(`list item style "${e}"`, "listItem");
function xe(e) {
  console.warn(e);
}
const B = { display: "none" },
  je = ({ value: e, isInline: t }) => {
    const n = C(e._type);
    return t
      ? f.jsx("span", { style: B, children: n })
      : f.jsx("div", { style: B, children: n });
  },
  ge = ({ markType: e, children: t }) =>
    f.jsx("span", { className: `unknown__pt__mark__${e}`, children: t }),
  we = ({ children: e }) => f.jsx("p", { children: e }),
  ve = ({ children: e }) => f.jsx("ul", { children: e }),
  Oe = ({ children: e }) => f.jsx("li", { children: e }),
  _e = () => f.jsx("br", {}),
  Ie = {
    normal: ({ children: e }) => f.jsx("p", { children: e }),
    blockquote: ({ children: e }) => f.jsx("blockquote", { children: e }),
    h1: ({ children: e }) => f.jsx("h1", { children: e }),
    h2: ({ children: e }) => f.jsx("h2", { children: e }),
    h3: ({ children: e }) => f.jsx("h3", { children: e }),
    h4: ({ children: e }) => f.jsx("h4", { children: e }),
    h5: ({ children: e }) => f.jsx("h5", { children: e }),
    h6: ({ children: e }) => f.jsx("h6", { children: e })
  },
  E = {
    types: {},
    block: Ie,
    marks: me,
    list: ae,
    listItem: fe,
    hardBreak: _e,
    unknownType: je,
    unknownMark: ge,
    unknownList: ve,
    unknownListItem: Oe,
    unknownBlockStyle: we
  };
function Pe(e, t) {
  const n = I(t, re);
  return b(
    b({}, e),
    {},
    {
      block: g(e, t, "block"),
      list: g(e, t, "list"),
      listItem: g(e, t, "listItem"),
      marks: g(e, t, "marks"),
      types: g(e, t, "types")
    },
    n
  );
}
function g(e, t, n) {
  const r = t[n],
    l = e[n];
  return typeof r == "function" || (r && typeof l == "function")
    ? r
    : r
      ? b(b({}, l), r)
      : l;
}
function Be({
  value: e,
  components: t,
  listNestingMode: n,
  onMissingComponent: r = xe
}) {
  const l = r || Te,
    i = Array.isArray(e) ? e : [e],
    s = Y(i, n || ne),
    a = S.useMemo(() => (t ? Pe(E, t) : E), [t]),
    h = S.useMemo(() => Se(a, l), [a, l]),
    j = s.map((x, o) => h({ node: x, index: o, isInline: !1, renderNode: h }));
  return f.jsx(f.Fragment, { children: j });
}
const Se = (e, t) => {
  function n(o) {
    const { node: c, index: u, isInline: m } = o,
      y = c._key || `node-${u}`;
    return N(c)
      ? i(c, u, y)
      : A(c)
        ? l(c, u, y)
        : K(c)
          ? s(c, u, y)
          : r(c)
            ? x(c, u, y, m)
            : P(c)
              ? a(c, u, y, m)
              : U(c)
                ? h(c, y)
                : j(c, u, y, m);
  }
  function r(o) {
    return o._type in e.types;
  }
  function l(o, c, u) {
    const m = M({ node: o, index: c, isInline: !1, renderNode: n }),
      y = e.listItem,
      p = (typeof y == "function" ? y : y[o.listItem]) || e.unknownListItem;
    if (p === e.unknownListItem) {
      const d = o.listItem || "bullet";
      t(be(d), { type: d, nodeType: "listItemStyle" });
    }
    let k = m.children;
    if (o.style && o.style !== "normal") {
      const d = I(o, ie);
      k = n({ node: d, index: c, isInline: !1, renderNode: n });
    }
    return f.jsx(
      p,
      { value: o, index: c, isInline: !1, renderNode: n, children: k },
      u
    );
  }
  function i(o, c, u) {
    const m = o.children.map((k, d) =>
        n({
          node: k._key ? k : b(b({}, k), {}, { _key: `li-${c}-${d}` }),
          index: d,
          isInline: !1,
          renderNode: n
        })
      ),
      y = e.list,
      p = (typeof y == "function" ? y : y[o.listItem]) || e.unknownList;
    if (p === e.unknownList) {
      const k = o.listItem || "bullet";
      t(de(k), { nodeType: "listStyle", type: k });
    }
    return f.jsx(
      p,
      { value: o, index: c, isInline: !1, renderNode: n, children: m },
      u
    );
  }
  function s(o, c, u) {
    const { markDef: m, markType: y, markKey: p } = o,
      k = e.marks[y] || e.unknownMark,
      d = o.children.map((H, q) =>
        n({ node: H, index: q, isInline: !0, renderNode: n })
      );
    return (
      k === e.unknownMark && t(ke(y), { nodeType: "mark", type: y }),
      f.jsx(
        k,
        {
          text: W(o),
          value: m,
          markType: y,
          markKey: p,
          renderNode: n,
          children: d
        },
        u
      )
    );
  }
  function a(o, c, u, m) {
    const y = M({ node: o, index: c, isInline: m, renderNode: n }),
      p = I(y, se),
      k = p.node.style || "normal",
      d =
        (typeof e.block == "function" ? e.block : e.block[k]) ||
        e.unknownBlockStyle;
    return (
      d === e.unknownBlockStyle &&
        t(he(k), { nodeType: "blockStyle", type: k }),
      f.jsx(d, b(b({}, p), {}, { value: p.node, renderNode: n }), u)
    );
  }
  function h(o, c) {
    if (
      o.text ===
      `
`
    ) {
      const u = e.hardBreak;
      return u
        ? f.jsx(u, {}, c)
        : `
`;
    }
    return o.text;
  }
  function j(o, c, u, m) {
    const y = { value: o, isInline: m, index: c, renderNode: n };
    t(C(o._type), { nodeType: "block", type: o._type });
    const p = e.unknownType;
    return f.jsx(p, b({}, y), u);
  }
  function x(o, c, u, m) {
    const y = { value: o, isInline: m, index: c, renderNode: n },
      p = e.types[o._type];
    return p ? f.jsx(p, b({}, y), u) : null;
  }
  return n;
};
function M(e) {
  const { node: t, index: n, isInline: r, renderNode: l } = e,
    i = X(t).map((s, a) =>
      l({ node: s, isInline: !0, index: a, renderNode: l })
    );
  return {
    _key: t._key || `block-${n}`,
    children: i,
    index: n,
    isInline: r,
    node: t
  };
}
function Te() {}
var F = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var i = "", s = 0; s < arguments.length; s++) {
        var a = arguments[s];
        a && (i = l(i, r(a)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == "string" || typeof i == "number") return i;
      if (typeof i != "object") return "";
      if (Array.isArray(i)) return n.apply(null, i);
      if (
        i.toString !== Object.prototype.toString &&
        !i.toString.toString().includes("[native code]")
      )
        return i.toString();
      var s = "";
      for (var a in i) t.call(i, a) && i[a] && (s = l(s, a));
      return s;
    }
    function l(i, s) {
      return s ? (i ? i + " " + s : i + s) : i;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(F);
var Le = F.exports;
const Ee = z(Le);
export { Be as P, Ee as c, $e as t };

