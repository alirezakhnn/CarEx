"use strict";
exports.__esModule = true;
exports.RationBtn = void 0;
require("../css/RatioBtn.css");
function RationBtn() {
    return (React.createElement("div", { className: "radio-input mt-5" },
        React.createElement("label", { className: "label" },
            React.createElement("input", { type: "radio", name: "radio", checked: true }),
            React.createElement("span", { className: "check" })),
        React.createElement("label", { className: "label" },
            React.createElement("input", { type: "radio", name: "radio" }),
            React.createElement("span", { className: "check" })),
        React.createElement("label", { className: "label" },
            React.createElement("input", { type: "radio", name: "radio" }),
            React.createElement("span", { className: "check" }))));
}
exports.RationBtn = RationBtn;
