import {
  r as t,
  e as R,
  f as x,
  F as h,
  R as w,
  g,
  h as M,
  k as v,
  m as p,
  s as S,
  l as D,
  n as y,
  o as _,
  p as P,
  q as E,
  t as b,
  v as F,
  j as m
} from "./chunk-7R3XDUXW-BHIEIWN9.js";
import { r as C, h as I } from "./client-BzcNqr-D.js";
/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function z(a) {
  return t.createElement(g, { flushSync: C.flushSync, ...a });
}
var e = null,
  c = null;
function H() {
  !e &&
    window.__reactRouterContext &&
    window.__reactRouterManifest &&
    window.__reactRouterRouteModules &&
    (e = {
      context: window.__reactRouterContext,
      manifest: window.__reactRouterManifest,
      routeModules: window.__reactRouterRouteModules,
      stateDecodingPromise: void 0,
      router: void 0,
      routerInitialized: !1
    });
}
function L() {
  var i;
  if ((H(), !e))
    throw new Error(
      "You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`"
    );
  let a = e;
  if (!e.stateDecodingPromise) {
    let s = e.context.stream;
    (R(s, "No stream found for single fetch decoding"),
      (e.context.stream = void 0),
      (e.stateDecodingPromise = M(s, window)
        .then((n) => {
          ((e.context.state = n.value), (a.stateDecodingPromise.value = !0));
        })
        .catch((n) => {
          a.stateDecodingPromise.error = n;
        })));
  }
  if (e.stateDecodingPromise.error) throw e.stateDecodingPromise.error;
  if (!e.stateDecodingPromise.value) throw e.stateDecodingPromise;
  let l = v(
      e.manifest.routes,
      e.routeModules,
      e.context.state,
      e.context.isSpaMode
    ),
    o;
  if (!e.context.isSpaMode) {
    o = { ...e.context.state, loaderData: { ...e.context.state.loaderData } };
    let s = p(
      l,
      window.location,
      (i = window.__reactRouterContext) == null ? void 0 : i.basename
    );
    if (s)
      for (let n of s) {
        let d = n.route.id,
          f = e.routeModules[d],
          u = e.manifest.routes[d];
        f &&
        u &&
        S(u, f, e.context.isSpaMode) &&
        (f.HydrateFallback || !u.hasLoader)
          ? delete o.loaderData[d]
          : u && !u.hasLoader && (o.loaderData[d] = null);
      }
    o && o.errors && (o.errors = D(o.errors));
  }
  let r = y({
    routes: l,
    history: _(),
    basename: e.context.basename,
    hydrationData: o,
    mapRouteProperties: P,
    dataStrategy: E(e.manifest, e.routeModules, () => r),
    patchRoutesOnNavigation: b(
      e.manifest,
      e.routeModules,
      e.context.isSpaMode,
      e.context.basename
    )
  });
  return (
    (e.router = r),
    r.state.initialized && ((e.routerInitialized = !0), r.initialize()),
    (r.createRoutesForHMR = F),
    (window.__reactRouterDataRouter = r),
    r
  );
}
function O() {
  c || (c = L());
  let [a, l] = t.useState(void 0),
    [o, r] = t.useState(c.state.location);
  return (
    t.useLayoutEffect(() => {
      e &&
        e.router &&
        !e.routerInitialized &&
        ((e.routerInitialized = !0), e.router.initialize());
    }, []),
    t.useLayoutEffect(() => {
      if (e && e.router)
        return e.router.subscribe((i) => {
          i.location !== o && r(i.location);
        });
    }, [o]),
    R(e, "ssrInfo unavailable for HydratedRouter"),
    x(c, e.manifest, e.routeModules, e.context.isSpaMode),
    t.createElement(
      t.Fragment,
      null,
      t.createElement(
        h.Provider,
        {
          value: {
            manifest: e.manifest,
            routeModules: e.routeModules,
            future: e.context.future,
            criticalCss: a,
            isSpaMode: e.context.isSpaMode
          }
        },
        t.createElement(w, { location: o }, t.createElement(z, { router: c }))
      ),
      t.createElement(t.Fragment, null)
    )
  );
}
t.startTransition(() => {
  I(document, m.jsx(t.StrictMode, { children: m.jsx(O, {}) }));
});

