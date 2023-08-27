"use strict";
exports.__esModule = true;
exports.Hamburger = void 0;
var react_1 = require("react");
var DropDown_1 = require("./DropDown");
require("../css/hamburger.css");
var react_2 = require("react");
function Hamburger() {
    // this state is for when the hamburger is checked it changes the style of hamburger
    var _a = react_1.useState(false), drop = _a[0], setDrop = _a[1];
    return (react_2["default"].createElement("div", { className: "lg:hidden mt-2 ml-5 z-50" },
        react_2["default"].createElement("input", { type: "checkbox", id: "Hamburger", onClick: function () { return setDrop(function (prev) { return !prev; }); } }),
        react_2["default"].createElement("label", { htmlFor: "Hamburger", className: "toggle" },
            react_2["default"].createElement("div", { className: "bars", id: "bar1" }),
            react_2["default"].createElement("div", { className: "bars", id: "bar2" }),
            react_2["default"].createElement("div", { className: "bars", id: "bar3" })),
        react_2["default"].createElement("div", { className: "\n            transition-all duration-700 absolute top-[-100%] text-center\n            " + (drop ? 'grid right-[100%] dark:opacity-[90%] z-50 xxs:right-[95vw] md:right-[87.5vw]'
                : "absolute opacity-[10%] right-[400vw]") },
            react_2["default"].createElement(DropDown_1.DropDown, null))));
}
exports.Hamburger = Hamburger;
