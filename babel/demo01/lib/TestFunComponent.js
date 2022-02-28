"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("core-js/modules/es.reflect.get.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.reflect.to-string-tag.js");

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
Reflect.get(myObject, 'foo12'); // 1

Reflect.get(myObject, 'bar2'); // 2

Reflect.get(myObject, 'baz'); // 3

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