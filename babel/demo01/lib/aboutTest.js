"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.at.js");

var a = 'foobar'.includes('foo');
var b = 'foobar'.includes('foo');
Array.from([1, 2, 3, 5]);

var _iterator = (0, _createForOfIteratorHelper2.default)(object),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var iterator = _step.value;
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

new Promise(function (resolve) {
  resolve(12);
}).then(function (res) {
  console.log(res);
});

var TestCalss = /*#__PURE__*/function (_Object) {
  (0, _inherits2.default)(TestCalss, _Object);

  var _super = (0, _createSuper2.default)(TestCalss);

  function TestCalss() {
    var _this;

    (0, _classCallCheck2.default)(this, TestCalss);
    _this = _super.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "a", 12);
    return _this;
  }

  return (0, _createClass2.default)(TestCalss);
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Object));

console.log('🚀 ~ a1223443', a);
console.log('🚀 ~ b12', b);
[1, 2, 3].at(1);