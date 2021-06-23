"use strict";
var Testdjiflsdjfl;
(function (Testdjiflsdjfl) {
    Testdjiflsdjfl.hasnum = 'hasnum';
    var Adjfkl;
    (function (Adjfkl) {
        Adjfkl.hasnum = 123;
    })(Adjfkl = Testdjiflsdjfl.Adjfkl || (Testdjiflsdjfl.Adjfkl = {}));
})(Testdjiflsdjfl || (Testdjiflsdjfl = {}));
var Index;
(function (Index) {
    var welcome = 'hello ts';
    console.log(welcome);
    console.log(123123213);
    var Content = /** @class */ (function () {
        function Content() {
            var div = document.createElement('div');
            div.innerText = "\u4E00\u4E2A content\u554A\u554A";
            document.body.appendChild(div);
        }
        return Content;
    }());
    Index.Start = function () {
        console.log(Testdjiflsdjfl);
        new Content();
    };
})(Index || (Index = {}));
var Hasnum;
(function (Hasnum_1) {
    var Hasnum = /** @class */ (function () {
        function Hasnum(content) {
            this.content = content;
            this.some = 'some text ...';
        }
        Hasnum.prototype.create = function () {
            var div = document.createElement('span');
            div.innerText = "" + this.some + this.content;
            document.body.appendChild(div);
        };
        return Hasnum;
    }());
    Hasnum_1.Create = function (someText) {
        new Hasnum(someText).create();
    };
})(Hasnum || (Hasnum = {}));
