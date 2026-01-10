import { r as E } from "./chunk-7R3XDUXW-BHIEIWN9.js";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @lightSyntaxTransform
 * @noflow
 * @nolint
 * @preventMunge
 * @preserve-invariant-messages
 */ var p = E;
function f(e) {
  var o = Object.create(null);
  return (
    e &&
      Object.keys(e).forEach(function (t) {
        if (t !== "default") {
          var r = Object.getOwnPropertyDescriptor(e, t);
          Object.defineProperty(
            o,
            t,
            r.get
              ? r
              : {
                  enumerable: !0,
                  get: function () {
                    return e[t];
                  }
                }
          );
        }
      }),
    (o.default = e),
    Object.freeze(o)
  );
}
var _ = f(p),
  c,
  n;
((c = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) !==
  null &&
  c !== void 0) ||
  _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
const a = Symbol.for("react.memo_cache_sentinel"),
  O =
    typeof ((n = _.__COMPILER_RUNTIME) === null || n === void 0
      ? void 0
      : n.c) == "function"
      ? _.__COMPILER_RUNTIME.c
      : function (o) {
          return _.useMemo(() => {
            const t = new Array(o);
            for (let r = 0; r < o; r++) t[r] = a;
            return ((t[a] = !0), t);
          }, []);
        };
var u;
(function (e) {
  ((e[(e.PushGuardContext = 0)] = "PushGuardContext"),
    (e[(e.PopGuardContext = 1)] = "PopGuardContext"),
    (e[(e.PushExpectHook = 2)] = "PushExpectHook"),
    (e[(e.PopExpectHook = 3)] = "PopExpectHook"));
})(u || (u = {}));
var R = O;
export { R as c };

