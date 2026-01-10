import { j as e, r as p, N as h } from "./chunk-7R3XDUXW-BHIEIWN9.js";
import { c as s, a as x, I as i } from "./index-DZJQCNLv.js";
function b({ className: r, children: a, ...t }) {
  return e.jsx("header", {
    ...t,
    className: s("container mb-24 pt-container-padding lg:mb-40", r),
    children: a
  });
}
const f = x({
    base: [
      "group inline-flex shrink-0 items-center justify-center gap-16",
      "cursor-pointer disabled:cursor-default",
      "transition-colors duration-300 ease-out motion-reduce:transition-none"
    ],
    variants: {
      hasUnderline: {
        true: [
          "relative",
          "overflow-hidden pb-3",
          "after:absolute after:content-[''] after:w-full after:h-[1px] after:border-b after:border-dashed after:left-0 after:bottom-0",
          "after:transition-opacity after:duration-200 after:opacity-0 hover:after:opacity-100"
        ]
      }
    }
  }),
  n = p.forwardRef(
    (
      {
        to: r,
        hasUnderline: a,
        className: t,
        before: o,
        after: c,
        children: l,
        ...d
      },
      m
    ) =>
      e.jsxs(h, {
        viewTransition: !0,
        to: r,
        ref: m,
        className: s([f({ hasUnderline: a, className: t })]),
        ...d,
        children: [
          o && e.jsx(e.Fragment, { children: o }),
          l,
          c && e.jsx(e.Fragment, { children: c })
        ]
      })
  );
n.displayName = "Link";
function j({ className: r, isAbout: a, ...t }) {
  return e.jsx("footer", {
    ...t,
    className: s("container", r),
    children: e.jsxs("div", {
      className: s([
        "flex flex-col gap-24 py-88 font-mono lg:py-container-padding",
        "md:flex-row md:items-start md:justify-between"
      ]),
      children: [
        e.jsxs("div", {
          className: "text-legal-caption",
          children: [
            e.jsxs("nav", {
              className:
                "mb-24 flex flex-col items-center gap-5 uppercase md:mb-40 md:items-start",
              children: [
                e.jsx(n, {
                  hasUnderline: !0,
                  className: "gap-4",
                  before: e.jsx(i, {
                    className: "size-[1.1em]",
                    name: "caret-right"
                  }),
                  to: "https://amiynaturals.com/pages/terms-conditions",
                  target: "_blank",
                  children: "Terms & Conditions"
                }),
                e.jsx(n, {
                  hasUnderline: !0,
                  className: "gap-4",
                  before: e.jsx(i, {
                    className: "size-[1.1em]",
                    name: "caret-right"
                  }),
                  to: "https://amiynaturals.com/pages/privacy-policy",
                  target: "_blank",
                  children: "Privacy Policy"
                })
              ]
            })
          ]
        }),
        e.jsx("div", {
          className: "-order-1 text-center md:order-1",
          children: e.jsx(n, {
            className: "mb-16 text-body-20 uppercase",
            to: "https://amiynaturals.com/pages/offers",
            target: "_blank",
            after: e.jsx(i, {
              hasBorder: !0,
              name: "arrow-external",
              className: s([
                "size-[1.5em]",
                a ? "group-hover:bg-white" : "group-hover:bg-light-grey"
              ])
            }),
            children: "bday sales"
          })
        })
      ]
    })
  });
}
export { j as A, n as L, b as P };

