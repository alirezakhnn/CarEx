"use strict";
exports.__esModule = true;
exports.Hamburger = void 0;
var react_1 = require("react");
var DropDown_1 = require("./DropDown");
function Hamburger() {
    var _a = react_1.useState(false), drop = _a[0], setDrop = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "lg:hidden mt-2 ml-5" },
            React.createElement("input", { type: "checkbox", id: "Hamburger", onClick: function () { return setDrop(function (prev) { return !prev; }); } }),
            React.createElement("label", { htmlFor: "Hamburger", className: "toggle" },
                React.createElement("div", { className: "bars", id: "bar1" }),
                React.createElement("div", { className: "bars", id: "bar2" }),
                React.createElement("div", { className: "bars", id: "bar3" })),
            React.createElement("div", { className: "" + (drop ? 'grid' : 'hidden') },
                React.createElement(DropDown_1.DropDown, null))),
        React.createElement("style", null, "\n                #Hamburger {\n                    display: none;\n                }\n\n                .toggle {\n                    position: relative;\n                    width: 40px;\n                    height: 40px;\n                    cursor: pointer;\n                    display: flex;\n                    flex-direction: column;\n                    align-items: center;\n                    justify-content: center;\n                    gap: 10px;\n                    transition-duration: .5s;\n                }\n\n                .bars {\n                    width: 100%;\n                    height: 4px;\n                    background-color: #116ae3;\n                    border-radius: 4px;\n                }\n\n                #bar2 {\n                    transition-duration: .8s;\n                    margin-right: 1rem;\n                    width:75%;\n                }\n\n                #bar1,#bar3 {\n                    width: 70%;\n                }\n\n                #Hamburger:checked + .toggle .bars {\n                    position: absolute;\n                    transition-duration: .5s;\n                }\n\n                #Hamburger:checked + .toggle #bar2 {\n                    transform: scaleX(0);\n                    transition-duration: .5s;\n                }\n\n                #Hamburger:checked + .toggle #bar1 {\n                    width: 100%;\n                    transform: rotate(45deg);\n                    transition-duration: .5s;\n                }\n\n                #Hamburger:checked + .toggle #bar3 {\n                    width: 100%;\n                    transform: rotate(-45deg);\n                    transition-duration: .5s;\n                }\n\n                #Hamburger:checked + .toggle {\n                    transition-duration: .5s;\n                    transform: rotate(180deg);\n                }\n                @media screen and (max-width: 768px) {\n                    .bars {\n                        height: 2.5px;\n                    }\n                    #bar1, #bar3 {\n                        width:50%;\n                    }\n                    #bar2 {\n                        width:55%;\n                    }\n                    #Hamburger:checked + .toggle #bar1 {\n                        width: 70%;\n                    }\n                    #Hamburger:checked + .toggle #bar3 {\n                        width: 70%;\n                    }\n                }\n            ")));
}
exports.Hamburger = Hamburger;
