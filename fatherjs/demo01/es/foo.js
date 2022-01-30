import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import React from 'react';
var a = 123;

function Test() {
  return /*#__PURE__*/React.createElement("div", null, "123");
}

var Test1 = /*#__PURE__*/function (_React$Component) {
  _inherits(Test1, _React$Component);

  var _super = _createSuper(Test1);

  function Test1() {
    _classCallCheck(this, Test1);

    return _super.apply(this, arguments);
  }

  _createClass(Test1, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Test, null);
    }
  }]);

  return Test1;
}(React.Component);

console.log(a);
export { Test, Test1 };