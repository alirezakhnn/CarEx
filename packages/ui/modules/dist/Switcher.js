"use strict";
exports.__esModule = true;
exports.Switcher = void 0;
require("../css/switcher.css");
function Switcher() {
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { type: "checkbox", id: "switcher" }),
        React.createElement("label", { htmlFor: "switcher", className: "switch bg-gradient-to-b from-oceanBlue to-silver" },
            React.createElement("div", { className: "powersign" }))));
}
exports.Switcher = Switcher;
