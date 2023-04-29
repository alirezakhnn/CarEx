"use strict";
exports.__esModule = true;
exports.Hamburger = void 0;
var react_1 = require("react");
var DropDown_1 = require("./DropDown");
require("../css/hamburger.css");
function Hamburger() {
    // this state is for when the hamburger is checked it changes the style of hamburger
    var _a = react_1.useState(false), drop = _a[0], setDrop = _a[1];
    return (React.createElement("div", { className: "lg:hidden mt-2 ml-5 z-10" },
        React.createElement("input", { type: "checkbox", id: "Hamburger", onClick: function () { return setDrop(function (prev) { return !prev; }); } }),
        React.createElement("label", { htmlFor: "Hamburger", className: "toggle" },
            React.createElement("div", { className: "bars", id: "bar1" }),
            React.createElement("div", { className: "bars", id: "bar2" }),
            React.createElement("div", { className: "bars", id: "bar3" })),
        React.createElement("div", { className: "" + (drop ? 'grid' : 'hidden') },
            React.createElement(DropDown_1.DropDown, null))));
}
exports.Hamburger = Hamburger;
