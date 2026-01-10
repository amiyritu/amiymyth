import { s as w } from "./stegaClean-YpGXIuvF.js";
import { i as f, r as $, j as L } from "./chunk-7R3XDUXW-BHIEIWN9.js";
import { i as P } from "./image-url.umd-DV0ObBZQ.js";
var T = /^image-([\da-f]+)-(\d+x\d+)-(\w+)$/,
  q = (t) => {
    let e = T.exec(t),
      [, i, r, n] = e ?? [];
    if (!e || !i || !r || !n)
      throw new Error(`Could not parse image ID "${t}"`);
    let [o, l] = r.split("x").map((s) => Number.parseInt(s, 10));
    if (Number.isNaN(o) || Number.isNaN(l) || !o || !l)
      throw new Error(`Invalid dimensions "${r}"`);
    return {
      assetId: i,
      dimensions: { height: l, width: o, aspectRatio: o / l },
      format: n
    };
  },
  R = (t) => {
    let e = t.lastIndexOf("-");
    return t.slice(6, e) + "." + t.slice(e + 1);
  },
  z = ({ baseUrl: t, ...e }) => {
    let { metadata: i, ...r } = x({ ...e, options: { includeMetadata: !0 } });
    if (!i) throw new Error("Missing image output metadata");
    return {
      src: `${`${t}${R(e.id)}`}?${C(r)}`,
      width: i.outputDimensions.width,
      height: i.outputDimensions.height
    };
  },
  A = ({
    id: t,
    mode: e = "contain",
    width: i,
    height: r,
    hotspot: n,
    crop: o,
    baseUrl: l,
    ...s
  }) => {
    let { w: p, h: d } = x({
        id: t,
        mode: e,
        width: i,
        height: r,
        hotspot: n,
        crop: o
      }),
      m = `${l}${R(t)}`,
      c = _(p)
        .map((h) => {
          let a = Math.round(p * h),
            y = d && Math.round(d * h);
          if (h < 1 && a < 50) return null;
          let g = x({
            id: t,
            mode: e,
            width: a,
            height: y,
            hotspot: n,
            crop: o,
            ...s
          });
          return `${m}?${C(g)} ${g.w}w`;
        })
        .filter((h) => !!h);
    return Array.from(new Set(c));
  },
  W = ({ id: t, baseUrl: e }) => {
    let { assetId: i, dimensions: r, format: n } = q(t);
    return {
      src: `${e}${i}-${r.width}x${r.height}.${n}`,
      width: r.width,
      height: r.height
    };
  },
  _ = (t) =>
    t < 160
      ? [0.5, 1, 2]
      : t < 750
        ? [0.5, 1, 1.5, 2]
        : t < 1400
          ? [0.25, 0.5, 0.75, 1, 1.5, 2]
          : [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
  x = ({
    id: t,
    mode: e = "contain",
    width: i,
    height: r,
    hotspot: n,
    crop: o,
    queryParams: l,
    options: { includeMetadata: s = !1 } = {}
  }) => {
    let p = q(t).dimensions,
      { width: d, height: m, aspectRatio: c } = o ? D(p, o) : p;
    if (
      (i ||
        (r ? ((i = Math.round(r * c)), (r = void 0)) : (i = Math.round(d / 2))),
      e === "cover" && (!i || !r || i / r === c)
        ? (e = "contain")
        : e === "contain" &&
          r &&
          ((i = Math.min(i, Math.round(r * c))), (r = void 0)),
      i > d || (r && r > m))
    ) {
      let a = r ? i / r : c;
      a >= c
        ? ((i = d), (r = r && Math.round(i / a)))
        : ((r = m), (i = Math.round(r * a)));
    }
    let h = { w: i, q: 75, ...l };
    if ((h.fm || (h.auto = "format"), o && (h.rect = k(p, o)), e === "cover"))
      if (((h.fit = "crop"), r && (h.h = r), n)) {
        let a = o ? (n.x - o.left) / (1 - o.left - o.right) : n.x,
          y = o ? (n.y - o.top) / (1 - o.top - o.bottom) : n.y;
        ((h["fp-x"] = U(N(a, 0, 1), 3)), (h["fp-y"] = U(N(y, 0, 1), 3)));
      } else h.crop = "entropy";
    else h.fit = "max";
    if (s) {
      let a = r || Math.round(i / c);
      h.metadata = {
        sourceDimensions: p,
        outputDimensions: { width: i, height: a, aspectRatio: i / a }
      };
    }
    return h;
  },
  N = (t, e, i) => Math.max(e, Math.min(i, t)),
  U = (t, e) => Math.round(t * Math.pow(10, e)) / Math.pow(10, e),
  D = (t, e) => {
    if (e.left + e.right >= 1 || e.top + e.bottom >= 1)
      throw new Error(
        `Invalid crop: ${JSON.stringify(e)}; crop values must be less than 1`
      );
    let i = Math.round(t.width * (1 - e.left - e.right)),
      r = Math.round(t.height * (1 - e.top - e.bottom)),
      n = i / r;
    return { width: i, height: r, aspectRatio: n };
  },
  k = (t, e) => {
    let { width: i, height: r } = D(t, e);
    return [
      Math.round(e.left * t.width),
      Math.round(e.top * t.height),
      i,
      r
    ].join(",");
  },
  C = (t) =>
    new URLSearchParams(
      Object.entries(t)
        .sort(([e], [i]) => e.localeCompare(i))
        .map(([e, i]) => [e, String(i)])
    )
      .toString()
      .replace(/%2C/g, ","),
  F = ({ as: t, preview: e, style: i, alt: r, ...n }) => {
    let [o, l] = $.useState(!1),
      s = $.useRef(null),
      p = () => {
        l(!0);
      };
    $.useEffect(() => {
      var m;
      (m = s.current) != null && m.complete && p();
    });
    let d = t || "img";
    return f.createElement(
      f.Fragment,
      null,
      !o &&
        f.createElement(d, {
          alt: o ? "" : r,
          className: n.className,
          "data-lqip": !0,
          height: n.height,
          id: n.id,
          src: e,
          style: i,
          width: n.width
        }),
      f.createElement(d, {
        "data-loading": o ? null : !0,
        alt: o ? r : "",
        onLoad: p,
        ref: s,
        style: o ? i : { ...H, ...i },
        ...n
      })
    );
  },
  H = {
    height: "10px",
    width: "10px",
    position: "absolute",
    zIndex: -10,
    opacity: 0,
    pointerEvents: "none",
    userSelect: "none"
  },
  J = ({
    as: t,
    baseUrl: e,
    projectId: i,
    dataset: r,
    id: n,
    hotspot: o,
    crop: l,
    width: s,
    height: p,
    mode: d = "contain",
    preview: m,
    htmlWidth: c,
    htmlHeight: h,
    htmlId: a,
    queryParams: y,
    ...g
  }) => {
    var b, v;
    if (!n) throw new Error("Missing required `id` prop for <SanityImage>.");
    if (!e && (!i || !r))
      throw new Error(
        "Missing required `baseUrl` or `projectId` and `dataset` props for <SanityImage>."
      );
    e = e ?? `https://cdn.sanity.io/images/${i}/${r}/`;
    let I = n.endsWith("-svg"),
      E = m && !I ? F : (t ?? "img"),
      u = {
        alt: (b = g.alt) != null ? b : "",
        loading: (v = g.loading) != null ? v : "lazy",
        id: a,
        ...g
      };
    if (I) return f.createElement(E, { ...W({ id: n, baseUrl: e }), ...u });
    let S = {
        baseUrl: e,
        id: n,
        crop: l,
        hotspot: o,
        width: s,
        height: p,
        mode: d,
        queryParams: y
      },
      { src: B, ...j } = z(S);
    return (
      (u.srcSet = A(S).join(", ")),
      (u.src = B),
      (u.width = c ?? j.width),
      (u.height = h ?? j.height),
      m && ((u.as = t ?? "img"), (u.preview = m)),
      f.createElement(E, { ...u })
    );
  };
const M = "f3anwa5j",
  O = "production",
  Q = P({ projectId: M, dataset: O }).fit("max").auto("format");
function X({ id: t, alt: e, ...i }) {
  return L.jsx(J, { ...i, id: t, alt: e ?? "", projectId: M, dataset: O });
}
function Y({
  seoMetadata: t,
  titlePrefix: e,
  defaultTitle: i = "The Ordinary Blog"
}) {
  const r = (t == null ? void 0 : t.title) ?? i,
    n = e ? `${e} | ${r}` : r,
    o = t == null ? void 0 : t.description,
    l = t != null && t.noIndex ? "noindex,nofollow" : "index,follow",
    s =
      t != null && t.image
        ? Q.image(t.image).width(1200).height(630).url()
        : void 0;
  return [
    { title: w(n) },
    { name: "description", content: w(o) },
    { name: "robots", content: l },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: w(n) },
    { property: "twitter:description", content: w(o) },
    { property: "twitter:image", content: s },
    { property: "og:title", content: w(n) },
    { property: "og:description", content: w(o) },
    { property: "og:image", content: s },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" }
  ];
}
export { X as S, Y as g };

