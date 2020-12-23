"use strict";
var Index;
(function (Index) {
    var welcome = 'hello ts';
    console.log(welcome);
    console.log(123123213);
    var Content = /** @class */ (function () {
        function Content() {
            var div = document.createElement('div');
            div.innerText = "\u4E00\u4E2A content";
            document.body.appendChild(div);
        }
        return Content;
    }());
    Index.Start = function () {
        new Content();
    };
})(Index || (Index = {}));
