import { w as i } from "./with-props-drQTeSIz.js";
import { i as c, j as e } from "./chunk-7R3XDUXW-BHIEIWN9.js";
import { P as l, L as m, A as d } from "./app-footer-GtgmRUmX.js";
import { I as o, B as h } from "./index-DZJQCNLv.js";
import { g as x } from "./meta-CzSvdXGV.js";
import "./stegaClean-YpGXIuvF.js";
import "./image-url.umd-DV0ObBZQ.js";
function w({ data: t }) {
  var s, a, r;
  const n =
    (r =
      (a = (s = t.siteData) == null ? void 0 : s.data) == null
        ? void 0
        : a.site) == null
      ? void 0
      : r.seoMetadata;
  return x({ seoMetadata: n, titlePrefix: "Manifesto" });
}
const N = i(function () {
  return (
    c.useEffect(
      () => (
        document.body.classList.add("is-about"),
        () => {
          document.body.classList.remove("is-about");
        }
      ),
      []
    ),
    e.jsxs(e.Fragment, {
      children: [
        e.jsxs(l, {
          className:
            "flex items-start justify-between font-mono text-body-20 text-black",
          children: [
            e.jsx(m, {
              to: "/articles",
              className: "uppercase",
              before: e.jsx(o, {
                hasBorder: !0,
                name: "caret-left",
                className: "size-[1.5em] group-hover:bg-white"
              }),
              children: "Back"
            }),
            e.jsx("div", {
              className: "text-right",
              children: e.jsx("p", {
                className: "text-caption-30 uppercase text-charcoal",
                children: "[Manifesto]"
              })
            })
          ]
        }),
        e.jsxs("main", {
          className:
            "container my-40 flex flex-col text-black lg:my-container-padding",
          children: [
            e.jsx("h1", {
              className:
                "motion-reduce:none mb-container-padding animate-glitch-1-horizontal text-title-60 font-bold",
              children: "Manifesto"
            }),
            e.jsxs("div", {
              className:
                "animate-glitch-1-horizontal font-mono text-body-30 motion-reduce:animate-none [&>p:not(:last-child)]:mb-[1em]",
              children: [
                e.jsxs("p", {
                  children: [
                    "Picture a skincare miracle:",
                    e.jsx("br", {}),
                    "Not something which smooths or plumps,",
                    e.jsx("br", {}),
                    "But which clarifies the beauty industry."
                  ]
                }),
                e.jsxs("p", {
                  children: [
                    "Which targets misinformation",
                    e.jsx("br", {}),
                    "Promotes transparency",
                    e.jsx("br", {}),
                    "And makes innovation more",
                    e.jsx("br", {}),
                    "accessible for everyone."
                  ]
                }),
                e.jsxs("p", {
                  children: [
                    "A solution designed",
                    e.jsx("br", {}),
                    "Not to correct acne or redness.",
                    e.jsx("br", {}),
                    "But myths.",
                    e.jsx("br", {}),
                    "And in so doing,",
                    e.jsx("br", {}),
                    "shows us all",
                    e.jsx("br", {}),
                    "A more honest way is possible."
                  ]
                }),
                e.jsxs("p", {
                  children: [
                    "After all, knowledge is power.",
                    e.jsx("br", {}),
                    "And when you know things",
                    e.jsx("br", {}),
                    "You can change them."
                  ]
                }),
                e.jsxs("p", {
                  children: [
                    "Because the truth is",
                    e.jsx("br", {}),
                    e.jsx("strong", {
                      children: "the Truth should be Ordinary."
                    })
                  ]
                }),
                e.jsx(h, {
                  asChild: !0,
                  after: e.jsx(o, {
                    className: "size-[1.5em]",
                    hasBorder: !0,
                    name: "arrow-external"
                  }),
                  className:
                    "mt-24 bg-black font-mono text-body-20 text-light-grey",
                  children: e.jsx("a", {
                    href: "https://amiynaturals.com/pages/offers",
                    target: "_blank",
                    children: "bday sales"
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(d, { isAbout: !0, className: "text-black" })
      ]
    })
  );
});
export { N as default, w as meta };

