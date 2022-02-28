"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.map.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.reflect.get.js");

require("core-js/modules/es.reflect.to-string-tag.js");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _react = _interopRequireDefault(require("react"));

var _TestFunComponent = _interopRequireDefault(require("TestFunComponent"));

var _;

var test = function test() {
  return /*#__PURE__*/_react.default.createElement("div", null, "123");
}; // class TestClassComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <div>123434123</div>;
//   }
// }


var PublicPoint = /*#__PURE__*/function () {
  function PublicPoint() {
    (0, _classCallCheck2.default)(this, PublicPoint);
  }

  (0, _createClass2.default)(PublicPoint, [{
    key: "toString",
    value: function toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  }]);
  return PublicPoint;
}();

var Point = /*#__PURE__*/function (_PublicPoint) {
  (0, _inherits2.default)(Point, _PublicPoint);

  var _super = (0, _createSuper2.default)(Point);

  function Point(x, y) {
    var _this;

    (0, _classCallCheck2.default)(this, Point);
    _this = _super.call(this);
    _this.x = x;
    _this.y = y;
    return _this;
  }

  return (0, _createClass2.default)(Point);
}(PublicPoint); // class Test2 {
//   constructor() {
//     super();
//   }
// }


(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return new Promise(function (resolve) {
            resolve(1234567891011123);
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();
var map = new Map();
(0, _TestFunComponent.default)();
var a = (_ = 1) !== null && _ !== void 0 ? _ : 0;
new Promise();
[1, 2, 3].includes('012');
var b = new Symbol('a1bbbbb');
var myObject = {
  foo: 1,
  bar: 2,

  get baz() {
    return this.foo + this.bar;
  }

};
Reflect.get(myObject, 'foo1'); // 1

Reflect.get(myObject, 'bar'); // 2

Reflect.get(myObject, 'baz'); // 3