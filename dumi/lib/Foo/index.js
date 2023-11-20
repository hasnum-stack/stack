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

// src/Foo/index.tsx
var Foo_exports = {};
__export(Foo_exports, {
  default: () => Foo_default
});
module.exports = __toCommonJS(Foo_exports);
var import_react = __toESM(require("react"));
var array1 = [5, 12, 8, 130, 44];
var index = 2;
console.log(
  `Using an index of ${index} the item returned is ${array1.at(index)}`
);
index = -2;
console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
var Foo = (props) => {
  const test = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos/1");
  };
  return /* @__PURE__ */ import_react.default.createElement("h4", null, props.title, " + 66");
};
var Foo_default = Foo;
