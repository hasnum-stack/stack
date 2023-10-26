import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import React from 'react';
var array1 = [5, 12, 8, 130, 44];
var index = 2;
console.log("Using an index of ".concat(index, " the item returned is ").concat(array1.at(index)));
// Expected output: "Using an index of 2 the item returned is 8"

index = -2;
console.log("Using an index of ".concat(index, " item returned is ").concat(array1.at(index)));
// Expected output: "Using an index of -2 item returned is 130"
var Test = /*#__PURE__*/_createClass(function Test() {
  _classCallCheck(this, Test);
  console.log('test');
  var a = [12];
  var b = [].concat(a);
  var Arr = Array.from(a);
  var promise = new Promise(function (resolve, reject) {
    resolve(1);
  });
  console.log(b, Arr);
  var arr1 = [0, 1, 2, [3, 4]];
  Promise.resolve().finally();
  var numbers = [1, 2, 3, 4, 5];
  if (numbers.includes(3)) {
    console.log('Number 3 is in the array.');
  }
});
var Foo = function Foo(props) {
  var test = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://jsonplaceholder.typicode.com/todos/1');
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function test() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("h4", null, props.title, " + 66");
};
export default Foo;