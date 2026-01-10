const I =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  k = /_key\s*==\s*['"](.*)['"]/,
  g = /^\d*:\d*$/;
function $(r) {
  return typeof r == "number" || (typeof r == "string" && /^\[\d+\]$/.test(r));
}
function l(r) {
  return typeof r == "string"
    ? k.test(r.trim())
    : typeof r == "object" && "_key" in r;
}
function E(r) {
  if (typeof r == "string" && g.test(r)) return !0;
  if (!Array.isArray(r) || r.length !== 2) return !1;
  const [t, n] = r;
  return (
    (typeof t == "number" || t === "") && (typeof n == "number" || n === "")
  );
}
function U(r, t, n) {
  const e = typeof t == "string" ? b(t) : t;
  if (!Array.isArray(e)) throw new Error("Path must be an array or a string");
  let o = r;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    if ($(a)) {
      if (!Array.isArray(o)) return n;
      o = o[a];
    }
    if (l(a)) {
      if (!Array.isArray(o)) return n;
      o = o.find((s) => s._key === a._key);
    }
    if (
      (typeof a == "string" &&
        (o = typeof o == "object" && o !== null ? o[a] : void 0),
      typeof o > "u")
    )
      return n;
  }
  return o;
}
function j(r) {
  if (!Array.isArray(r)) throw new Error("Path is not an array");
  return r.reduce((t, n, e) => {
    const o = typeof n;
    if (o === "number") return `${t}[${n}]`;
    if (o === "string") return `${t}${e === 0 ? "" : "."}${n}`;
    if (l(n) && n._key) return `${t}[_key=="${n._key}"]`;
    if (Array.isArray(n)) {
      const [i, a] = n;
      return `${t}[${i}:${a}]`;
    }
    throw new Error(`Unsupported path segment \`${JSON.stringify(n)}\``);
  }, "");
}
function b(r) {
  if (typeof r != "string") throw new Error("Path is not a string");
  const t = r.match(I);
  if (!t) throw new Error("Invalid path string");
  return t.map(N);
}
function N(r) {
  return $(r) ? O(r) : l(r) ? T(r) : E(r) ? J(r) : r;
}
function O(r) {
  return Number(r.replace(/[^\d]/g, ""));
}
function T(r) {
  return { _key: r.match(k)[1] };
}
function J(r) {
  const [t, n] = r.split(":").map((e) => (e === "" ? e : Number(e)));
  return [t, n];
}
var B = Object.freeze({
  __proto__: null,
  fromString: b,
  get: U,
  isIndexSegment: $,
  isIndexTuple: E,
  isKeySegment: l,
  reKeySegment: k,
  toString: j
});
const w = "drafts.";
function R(r) {
  return r.startsWith(w) ? r.slice(w.length) : r;
}
const S = {
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "'": "\\'",
    "\\": "\\\\"
  },
  x = {
    "\\f": "\f",
    "\\n": `
`,
    "\\r": "\r",
    "\\t": "	",
    "\\'": "'",
    "\\\\": "\\"
  };
function M(r) {
  return `$${r.map((t) => (typeof t == "string" ? `['${t.replace(/[\f\n\r\t'\\]/g, (n) => S[n])}']` : typeof t == "number" ? `[${t}]` : t._key !== "" ? `[?(@._key=='${t._key.replace(/['\\]/g, (n) => S[n])}')]` : `[${t._index}]`)).join("")}`;
}
function C(r) {
  const t = [],
    n = /\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;
  let e;
  for (; (e = n.exec(r)) !== null; ) {
    if (e[1] !== void 0) {
      const o = e[1].replace(/\\(\\|f|n|r|t|')/g, (i) => x[i]);
      t.push(o);
      continue;
    }
    if (e[2] !== void 0) {
      t.push(parseInt(e[2], 10));
      continue;
    }
    if (e[3] !== void 0) {
      const o = e[3].replace(/\\(\\')/g, (i) => x[i]);
      t.push({ _key: o, _index: -1 });
      continue;
    }
  }
  return t;
}
function D(r) {
  return r.map((t) => {
    if (typeof t == "string" || typeof t == "number") return t;
    if (t._key !== "") return { _key: t._key };
    if (t._index !== -1) return t._index;
    throw new Error(`invalid segment:${JSON.stringify(t)}`);
  });
}
function L(r) {
  return (typeof r == "string" ? b(r) : r).map((t) => {
    if (typeof t == "string" || typeof t == "number") return t;
    if (Array.isArray(t))
      throw new Error(
        `IndexTuple segments aren't supported:${JSON.stringify(t)}`
      );
    if (K(t)) return t;
    if (t._key) return { _key: t._key, _index: -1 };
    throw new Error(`invalid segment:${JSON.stringify(t)}`);
  });
}
function K(r) {
  return typeof r == "object" && "_key" in r && "_index" in r;
}
function W(r) {
  return r.map((t) => {
    if (typeof t == "string" || typeof t == "number") return t;
    if (t._index !== -1) return t._index;
    throw new Error(`invalid segment:${JSON.stringify(t)}`);
  });
}
function q(r, t) {
  if (!(t != null && t.mappings)) return;
  const n = M(W(r));
  if (t.mappings[n] !== void 0)
    return { mapping: t.mappings[n], matchedPath: n, pathSuffix: "" };
  const e = Object.entries(t.mappings)
    .filter(([s]) => n.startsWith(s))
    .sort(([s], [u]) => u.length - s.length);
  if (e.length == 0) return;
  const [o, i] = e[0],
    a = n.substring(o.length);
  return { mapping: i, matchedPath: o, pathSuffix: a };
}
function m(r) {
  return r !== null && Array.isArray(r);
}
function A(r) {
  return typeof r == "object" && r !== null;
}
function y(r, t, n = []) {
  if (m(r))
    return r.map((e, o) => {
      if (A(e)) {
        const i = e._key;
        if (typeof i == "string")
          return y(e, t, n.concat({ _key: i, _index: o }));
      }
      return y(e, t, n.concat(o));
    });
  if (A(r)) {
    if (r._type === "block" || r._type === "span") {
      const e = { ...r };
      return (
        r._type === "block"
          ? (e.children = y(r.children, t, n.concat("children")))
          : r._type === "span" && (e.text = y(r.text, t, n.concat("text"))),
        e
      );
    }
    return Object.fromEntries(
      Object.entries(r).map(([e, o]) => [e, y(o, t, n.concat(e))])
    );
  }
  return t(r, n);
}
function X(r) {
  const {
    baseUrl: t,
    workspace: n = "default",
    tool: e = "default",
    id: o,
    type: i,
    path: a,
    projectId: s,
    dataset: u
  } = r;
  if (!t) throw new Error("baseUrl is required");
  if (!a) throw new Error("path is required");
  if (!o) throw new Error("id is required");
  if (t !== "/" && t.endsWith("/"))
    throw new Error("baseUrl must not end with a slash");
  const c = n === "default" ? void 0 : n,
    p = e === "default" ? void 0 : e,
    d = R(o),
    h = Array.isArray(a) ? j(D(a)) : a,
    f = new URLSearchParams({ baseUrl: t, id: d, type: i, path: h });
  (c && f.set("workspace", c),
    p && f.set("tool", p),
    s && f.set("projectId", s),
    u && f.set("dataset", u),
    o.startsWith(w) && f.set("isDraft", ""));
  const _ = [t === "/" ? "" : t];
  c && _.push(c);
  const P = [
    "mode=presentation",
    `id=${d}`,
    `type=${i}`,
    `path=${encodeURIComponent(h)}`
  ];
  return (
    p && P.push(`tool=${p}`),
    _.push("intent", "edit", `${P.join(";")}?${f}`),
    _.join("/")
  );
}
function G(r) {
  const { resultSourceMap: t, resultPath: n } = r,
    { mapping: e, pathSuffix: o } = q(n, t) || {};
  if (!e || e.source.type === "literal" || e.source.type === "unknown") return;
  const i = t.documents[e.source.document],
    a = t.paths[e.source.path];
  if (i && a) {
    const {
      baseUrl: s,
      workspace: u,
      tool: c
    } = z(typeof r.studioUrl == "function" ? r.studioUrl(i) : r.studioUrl);
    if (!s) return;
    const { _id: p, _type: d, _projectId: h, _dataset: f } = i;
    return {
      baseUrl: s,
      workspace: u,
      tool: c,
      id: p,
      type: d,
      path: C(a + o),
      projectId: h,
      dataset: f
    };
  }
}
function z(r) {
  let t = typeof r == "string" ? r : r.baseUrl;
  return (
    t !== "/" && (t = t.replace(/\/$/, "")),
    typeof r == "string" ? { baseUrl: t } : { ...r, baseUrl: t }
  );
}
export {
  w as D,
  U as a,
  L as b,
  G as c,
  X as d,
  R as g,
  D as j,
  C as p,
  q as r,
  B as s,
  j as t,
  y as w
};

