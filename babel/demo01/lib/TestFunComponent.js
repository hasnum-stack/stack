"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createSuper"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _get = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/get"));

var _react = _interopRequireDefault(require("react"));

function TestFunComponent() {
  return 'TestFunComponent1';
}

var myObject = {
  foo: 1,
  bar: 2,

  get baz() {
    return this.foo + this.bar;
  }

};
(0, _get.default)(myObject, 'foo1'); // 1

(0, _get.default)(myObject, 'bar2'); // 2

(0, _get.default)(myObject, 'baz'); // 3

var a = 'a';
var c = (0, _defineProperty2.default)({}, a, 'ac');

var Tets = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Tets, _React$Component);

  var _super = (0, _createSuper2.default)(Tets);

  function Tets() {
    (0, _classCallCheck2.default)(this, Tets);
    return _super.apply(this, arguments);
  }

  return (0, _createClass2.default)(Tets);
}(_react.default.Component);

var _default = TestFunComponent;
exports.default = _default;