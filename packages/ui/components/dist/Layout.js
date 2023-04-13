"use strict";
exports.__esModule = true;
exports.Layout = void 0;
var Header_1 = require("./Header");
var Footer_1 = require("./Footer");
var Nav_1 = require("./Nav");
function Layout(_a) {
    var children = _a.children;
    // this is the wrapper component
    return (React.createElement("div", { className: "grid" },
        React.createElement(Nav_1.Nav, null),
        React.createElement(Header_1.Header, null),
        React.createElement("main", null, children),
        React.createElement(Footer_1.Footer, null)));
}
exports.Layout = Layout;
