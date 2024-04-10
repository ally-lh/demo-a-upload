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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  FileUpload: () => FileUpload_default
});
module.exports = __toCommonJS(src_exports);

// src/_components/FileUpload.tsx
var import_react2 = __toESM(require("react"));

// ../node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react = require("react");

// ../node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// ../node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// ../node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react.forwardRef)(
    ({
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      ...rest
    }, ref) => {
      return (0, import_react.createElement)(
        "svg",
        {
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: ["lucide", `lucide-${toKebabCase(iconName)}`, className].join(" "),
          ...rest
        },
        [
          ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// ../node_modules/lucide-react/dist/esm/icons/inbox.js
var Inbox = createLucideIcon("Inbox", [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
]);

// src/_components/FileUpload.tsx
var FileUpload = ({
  width = "full",
  transparent = false
}) => {
  const [progress, setProgress] = (0, import_react2.useState)(0);
  const [files, setFiles] = (0, import_react2.useState)([]);
  const fileInputRef = (0, import_react2.useRef)(null);
  const handleFiles = (newFiles) => {
    const fileList = Array.from(newFiles);
    setFiles((prevFiles) => [...prevFiles, ...fileList]);
    fileList.forEach((file) => {
      const reader = new FileReader();
      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentLoaded = Math.round(event.loaded / event.total * 100);
          setProgress(percentLoaded);
        }
      };
      reader.onloadstart = () => setProgress(0);
      reader.onloadend = () => setTimeout(() => setProgress(0), 500);
      reader.onerror = () => {
        alert("Failed to read file");
        setProgress(0);
      };
      reader.readAsDataURL(file);
    });
  };
  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };
  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };
  const widthClass = width === "full" ? "w-full" : "w-1/2";
  const bgClass = transparent ? "bg-transparent" : "bg-white";
  return /* @__PURE__ */ import_react2.default.createElement("div", { className: `p-4 ${widthClass}` }, /* @__PURE__ */ import_react2.default.createElement(
    "div",
    {
      className: `p-6 border-2 border-dashed flex flex-col items-center justify-center ${progress > 0 ? "bg-gray-100 border-blue-500" : bgClass} ${widthClass} relative`,
      onDragOver: (e) => e.preventDefault(),
      onDrop: (e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          handleFiles(e.dataTransfer.files);
        }
      }
    },
    /* @__PURE__ */ import_react2.default.createElement(Inbox, { className: "w-12 h-12 text-primary m-3" }),
    /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-center text-gray-500" }, "Drag and Drop files here or click to select"),
    /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        onClick: () => {
          var _a;
          return (_a = fileInputRef.current) == null ? void 0 : _a.click();
        },
        className: "bg-primary text-white font-bold px-10 rounded my-3 py-2"
      },
      "Select Files"
    ),
    /* @__PURE__ */ import_react2.default.createElement(
      "input",
      {
        ref: fileInputRef,
        type: "file",
        className: "sr-only",
        onChange: handleChange,
        multiple: true,
        accept: ".xlsx,.xls,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      }
    ),
    /* @__PURE__ */ import_react2.default.createElement("div", { className: "w-full" }, progress > 0 && /* @__PURE__ */ import_react2.default.createElement("div", { className: "absolute w-full px-4 bottom-0 left-0" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-gray-200 rounded-full h-1.5" }, /* @__PURE__ */ import_react2.default.createElement(
      "div",
      {
        className: "bg-blue-600 h-1.5 rounded-full",
        style: { width: `${progress}%` }
      }
    ))), files.length > 0 && /* @__PURE__ */ import_react2.default.createElement("ul", { className: "list-disc flex w-full justify-center items-center" }, files.map((file, index) => /* @__PURE__ */ import_react2.default.createElement(
      "li",
      {
        key: index,
        className: "flex items-center w-1/6 shadow-sm p-2 border rounded-lg border-slate-300 mx-1"
      },
      /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-sm text-gray-600 truncate", style: {} }, file.name),
      /* @__PURE__ */ import_react2.default.createElement(
        "button",
        {
          onClick: () => handleRemoveFile(index),
          className: "text-red-500 hover:text-red-700"
        },
        "X"
      )
    ))))
  ));
};
var FileUpload_default = FileUpload;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileUpload
});
/*! Bundled license information:

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.367.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils.js:
  (**
   * @license lucide-react v0.367.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.367.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/inbox.js:
  (**
   * @license lucide-react v0.367.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.367.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=index.js.map