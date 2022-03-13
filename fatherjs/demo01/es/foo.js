var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

import React from 'react';
var a = 123;

function Test() {
  return /*#__PURE__*/React.createElement("div", null, "123");
}

var Test1 =
/** @class */
function (_super) {
  __extends(Test1, _super);

  function Test1() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Test1.prototype.render = function () {
    return /*#__PURE__*/React.createElement(Test, null);
  };

  return Test1;
}(React.Component);

console.log(a);
var tet = 123;
export { Test, Test1, tet };