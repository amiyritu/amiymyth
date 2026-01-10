const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/VisualEditingComponent2-xxCXPOtI.js",
      "assets/index-CPpVw6KV.js",
      "assets/chunk-7R3XDUXW-BHIEIWN9.js",
      "assets/preload-helper-D7HrI6pR.js",
      "assets/exit-preview-B5yXfDvg.js",
      "assets/sanity-live-mode-BLb3WFbP.js",
      "assets/index.browser-BaKoqjVW.js",
      "assets/resolveEditInfo-Bqo3GpHw.js",
      "assets/index.browser-C4jpNZ5n.js",
      "assets/stegaClean-YpGXIuvF.js",
      "assets/filter-CoGxb22B.js"
    ])
) => i.map((i) => d[i]);
import { _ as o } from "./preload-helper-D7HrI6pR.js";
import { w as s } from "./with-props-drQTeSIz.js";
import { r as i, j as e, O as a } from "./chunk-7R3XDUXW-BHIEIWN9.js";
import { c } from "./index-CPpVw6KV.js";
const u = i.lazy(() =>
    o(
      () => import("./VisualEditingComponent2-xxCXPOtI.js"),
      __vite__mapDeps([0, 1, 2, 3])
    )
  ),
  l = () => () => {};
function x(t) {
  const n = c(2);
  if (!i.useSyncExternalStore(l, d, _)) return null;
  let r;
  return (
    n[0] !== t
      ? ((r = e.jsx(i.Suspense, {
          fallback: null,
          children: e.jsx(u, { ...t })
        })),
        (n[0] = t),
        (n[1] = r))
      : (r = n[1]),
    r
  );
}
function _() {
  return !1;
}
function d() {
  return !0;
}
const m = i.lazy(async () =>
    o(
      async () => {
        const { ExitPreview: t } = await import("./exit-preview-B5yXfDvg.js");
        return { ExitPreview: t };
      },
      __vite__mapDeps([4, 2])
    ).then(({ ExitPreview: t }) => ({ default: t }))
  ),
  p = i.lazy(async () =>
    o(
      async () => {
        const { SanityLiveMode: t } =
          await import("./sanity-live-mode-BLb3WFbP.js");
        return { SanityLiveMode: t };
      },
      __vite__mapDeps([5, 6, 3, 2, 7, 8, 9, 10])
    ).then(({ SanityLiveMode: t }) => ({ default: t }))
  ),
  j = s(function ({ loaderData: n }) {
    const { sanity: r } = n;
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx("div", { className: "flex flex-col", children: e.jsx(a, {}) }),
        r.preview &&
          e.jsxs(i.Suspense, {
            children: [e.jsx(p, {}), e.jsx(m, {}), e.jsx(x, {})]
          })
      ]
    });
  });
export { j as default };

