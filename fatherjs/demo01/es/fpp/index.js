import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import React from 'react';
import { Component } from 'react';
import { useState, useEffect } from 'react';
import './index.less';

var FppClassTest = /*#__PURE__*/function (_Component) {
  _inherits(FppClassTest, _Component);

  var _super = _createSuper(FppClassTest);

  function FppClassTest() {
    _classCallCheck(this, FppClassTest);

    return _super.apply(this, arguments);
  }

  _createClass(FppClassTest, [{
    key: "render",
    value: function render() {
      console.log(this);
      return /*#__PURE__*/React.createElement("div", null, "FppClassTest");
    }
  }]);

  return FppClassTest;
}(Component);

function FppFuncTest() {
  var _this = this;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      x = _useState2[0],
      setX = _useState2[1];

  var _useState3 = useState({
    a: 1,
    b: 2,
    c: 3
  }),
      _useState4 = _slicedToArray(_useState3, 1),
      z = _useState4[0];

  var a = z.a,
      b = z.b,
      c = z.c;

  var d = _objectSpread({
    e: 666
  }, z);

  var y = x !== null && x !== void 0 ? x : '00';
  var e = d === null || d === void 0 ? void 0 : d.e;
  useEffect(function () {
    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var a;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return new Promise(function (resolve) {
                console.log(12312);
                resolve('666');
              });

            case 2:
              a = _context.sent;
              console.log(a);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  useEffect(function () {
    new Promise(function (resolve) {
      resolve('去then');
    }).then(function (res) {
      console.log(res);
    });
  }, []);
  useEffect(function () {
    var mapTest = [1, 2, 3].map(function (item) {
      return item * 2;
    });
    console.log('🚀 ~ useEffect ~ mapTest', mapTest);
  }, []);
  useEffect(function () {
    var map = new Map();
    map.set('map1', 1);
    map.set('map2', 2);
    map.get('map2');
    console.log('🚀 ~ useEffect ~ map', map);

    function testFunc(a) {
      Array.from([1, 2, 3]);

      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      console.log('🚀 ~ testFunc ~ rest', rest);
    }

    testFunc(1, 2, 2, 3);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      console.log(_this);
      setX(function (x) {
        return x + 1;
      });
    }
  }, "\u70B9\u51FB\u8BBE\u7F6Ex"), /*#__PURE__*/React.createElement("div", null, "\u5F53\u524Dx\u7684\u503C\u4E3A: ", x), /*#__PURE__*/React.createElement("div", null, "\u5F53\u524Dy\u7684\u503C\u4E3A: ", y), /*#__PURE__*/React.createElement("div", null, "\u5F53\u524Da\u7684\u503C\u4E3A: ", a), /*#__PURE__*/React.createElement("div", null, "\u5F53\u524Db\u7684\u503C\u4E3A: ", b), /*#__PURE__*/React.createElement("div", null, "\u5F53\u524Dc\u7684\u503C\u4E3A: ", c), /*#__PURE__*/React.createElement("div", null, "\u5F53\u524Dd\u7684\u503C\u4E3A: ", JSON.stringify(d)), /*#__PURE__*/React.createElement("div", null, "\u5F53\u524De\u7684\u503C\u4E3A: ", e));
}

export { FppClassTest, FppFuncTest };