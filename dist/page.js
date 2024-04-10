"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/app/page.tsx
var page_exports = {};
__export(page_exports, {
  default: () => Home
});
module.exports = __toCommonJS(page_exports);
var import_image = __toESM(require("next/image"));
function Home() {
  return /* @__PURE__ */ React.createElement("main", { className: "flex min-h-screen flex-col items-center justify-between p-24" }, /* @__PURE__ */ React.createElement("div", { className: "z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex" }, /* @__PURE__ */ React.createElement("p", { className: "fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30" }, "Get started by editing\xA0", /* @__PURE__ */ React.createElement("code", { className: "font-mono font-bold" }, "src/app/page.tsx")), /* @__PURE__ */ React.createElement("div", { className: "fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none" }, /* @__PURE__ */ React.createElement(
    "a",
    {
      className: "pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0",
      href: "https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    "By",
    " ",
    /* @__PURE__ */ React.createElement(
      import_image.default,
      {
        src: "/vercel.svg",
        alt: "Vercel Logo",
        className: "dark:invert",
        width: 100,
        height: 24,
        priority: true
      }
    )
  ))), /* @__PURE__ */ React.createElement("div", { className: "relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]" }, /* @__PURE__ */ React.createElement(
    import_image.default,
    {
      className: "relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert",
      src: "/next.svg",
      alt: "Next.js Logo",
      width: 180,
      height: 37,
      priority: true
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left" }, /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
      className: "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    /* @__PURE__ */ React.createElement("h2", { className: `mb-3 text-2xl font-semibold` }, "Docs", " ", /* @__PURE__ */ React.createElement("span", { className: "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" }, "->")),
    /* @__PURE__ */ React.createElement("p", { className: `m-0 max-w-[30ch] text-sm opacity-50` }, "Find in-depth information about Next.js features and API.")
  ), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
      className: "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    /* @__PURE__ */ React.createElement("h2", { className: `mb-3 text-2xl font-semibold` }, "Learn", " ", /* @__PURE__ */ React.createElement("span", { className: "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" }, "->")),
    /* @__PURE__ */ React.createElement("p", { className: `m-0 max-w-[30ch] text-sm opacity-50` }, "Learn about Next.js in an interactive course with\xA0quizzes!")
  ), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
      className: "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    /* @__PURE__ */ React.createElement("h2", { className: `mb-3 text-2xl font-semibold` }, "Templates", " ", /* @__PURE__ */ React.createElement("span", { className: "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" }, "->")),
    /* @__PURE__ */ React.createElement("p", { className: `m-0 max-w-[30ch] text-sm opacity-50` }, "Explore starter templates for Next.js.")
  ), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
      className: "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    /* @__PURE__ */ React.createElement("h2", { className: `mb-3 text-2xl font-semibold` }, "Deploy", " ", /* @__PURE__ */ React.createElement("span", { className: "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" }, "->")),
    /* @__PURE__ */ React.createElement("p", { className: `m-0 max-w-[30ch] text-sm opacity-50 text-balance` }, "Instantly deploy your Next.js site to a shareable URL with Vercel.")
  )));
}
//# sourceMappingURL=page.js.map