"use strict";
// The require scope
var __webpack_require__ = {};
/************************************************************************/ // webpack/runtime/compat_get_default_export
(()=>{
    // getDefaultExport function for compatibility with non-ESM modules
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module['default'];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
// webpack/runtime/define_property_getters
(()=>{
    __webpack_require__.d = function(exports1, definition) {
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
// webpack/runtime/has_own_property
(()=>{
    __webpack_require__.o = function(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    };
})();
// webpack/runtime/make_namespace_object
(()=>{
    // define __esModule on exports
    __webpack_require__.r = function(exports1) {
        if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
/************************************************************************/ var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
    Button: ()=>/* binding */ Button
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
require("./button.css");
const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props })=>{
    const mode = primary ? 'demo-button--primary' : 'demo-button--secondary';
    return /*#__PURE__*/ external_react_default().createElement("button", {
        type: "button",
        className: [
            'demo-button',
            `demo-button--${size}`,
            mode
        ].join(' '),
        style: {
            backgroundColor
        },
        ...props
    }, label);
};
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__)__webpack_export_target__[i] = __webpack_exports__[i];
if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, '__esModule', {
    value: true
});
