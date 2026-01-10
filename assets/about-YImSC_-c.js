import { w as r } from "./with-props-drQTeSIz.js";
import { i as l, j as e } from "./chunk-7R3XDUXW-BHIEIWN9.js";
import { P as c, L as h, A as m } from "./app-footer-GtgmRUmX.js";
import { I as i, B as d } from "./index-DZJQCNLv.js";
import { g as u } from "./meta-CzSvdXGV.js";
import "./stegaClean-YpGXIuvF.js";
import "./image-url.umd-DV0ObBZQ.js";
function b({ data: t }) {
  var a, o, n;
  const s =
    (n =
      (o = (a = t.siteData) == null ? void 0 : a.data) == null
        ? void 0
        : o.site) == null
      ? void 0
      : n.seoMetadata;
  return u({ seoMetadata: s, titlePrefix: "About" });
}
const k = r(function () {
  return (
    l.useEffect(
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
        e.jsxs(c, {
          className:
            "flex items-start justify-between font-mono text-body-20 text-black",
          children: [
            e.jsx(h, {
              to: "/articles",
              className: "uppercase",
              before: e.jsx(i, {
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
                children: "[About]"
              })
            })
          ]
        }),
        e.jsxs("main", {
          className:
            "container my-40 flex flex-col text-black motion-reduce:animate-none lg:my-container-padding",
          children: [
            e.jsxs("h1", {
              className:
                "mb-container-padding animate-glitch-1-horizontal text-title-60 font-bold motion-reduce:animate-none",
              children: ["The Truth", e.jsx("br", {}), " Should Be Ordinary"]
            }),
            e.jsxs("div", {
              className:
                "max-w-[36.8em] animate-glitch-1-horizontal self-end font-mono text-body-30 motion-reduce:animate-none [&>p:not(:last-child)]:mb-[1em]",
              children: [
                e.jsxs("p", {
                  children: [
                    'The world of beauty is full of myths—from the belief that "natural" is always safer,',
                    e.jsx("strong", {
                      children:
                        " to the idea that aluminum in your deodorant is harmful"
                    }),
                    " or that the more expensive a product is, the better it works."
                  ]
                }),
                e.jsx("p", {
                  children:
                    "Take Growth Factors for example, an innovative technology which helps regenerate the look of aging skin. Firming, lifting and targeting visible wrinkles. But only for those who can afford to pay a premium."
                }),
                e.jsx("p", {
                  children: e.jsx("strong", {
                    children: "Until now, that is. "
                  })
                }),
                e.jsxs("p", {
                  children: [
                    "With our new GF 15% Solution, we're doing what we've always set out to do:",
                    e.jsx("strong", {
                      children: " democratising quality skincare"
                    }),
                    ". Making every ingredient—even the most innovative—Ordinary. We like to think it took two milestones to get here: making it, and making it $15.50."
                  ]
                }),
                e.jsx("p", {
                  children: "But as we launch it, we're going one step further."
                }),
                e.jsxs("p", {
                  children: [
                    "You see, we think it's time for ",
                    e.jsx("strong", { children: "a skincare 'miracle'" }),
                    ":"
                  ]
                }),
                e.jsxs("p", {
                  children: [
                    "Not something which smooths or plumps, but which clarifies the entire beauty industry. Which addresses misinformation, promotes transparency and helps make ",
                    e.jsx("strong", { children: "innovation for everyone" }),
                    "."
                  ]
                }),
                e.jsxs("p", {
                  children: [
                    "So as we share our new innovation, we're also ",
                    e.jsx("strong", { children: "dispelling mistruths" }),
                    "; showcasing and explaining scientific papers which tackle common skincare myths."
                  ]
                }),
                e.jsx("p", {
                  children:
                    "If you have a topic or article you'd love us to look at, let us know on our social channels."
                }),
                e.jsx("p", {
                  children: e.jsx("strong", {
                    children: "Together, we can make the truth Ordinary."
                  })
                }),
                e.jsx(d, {
                  asChild: !0,
                  after: e.jsx(i, {
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
        e.jsx(m, { isAbout: !0, className: "text-black" })
      ]
    })
  );
});
export { k as default, b as meta };

