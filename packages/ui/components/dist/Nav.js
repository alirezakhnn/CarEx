"use strict";
exports.__esModule = true;
exports.Nav = void 0;
var Button_1 = require("./Button");
var Logo_1 = require("../modules/Logo");
var link_1 = require("next/link");
var Switcher_1 = require("../modules/Switcher");
var Hamburger_1 = require("../modules/Hamburger");
function Nav() {
    return (React.createElement("div", { className: "flex justify-between align-baseline text-silver\n        w-9/12 py-3 shadow-lg shadow-oceanBlue justify-self-center rounded-lg px-2\n        " },
        React.createElement("div", { className: "flex gap-4" },
            React.createElement(Switcher_1.Switcher, null),
            React.createElement(Logo_1.Logo, null)),
        React.createElement("div", { className: "flex justify-end" },
            React.createElement("ul", { className: "flex gap-4 text-sm mt-3 transition-color ease-in-out duration-500 xxs:hidden lg:flex" },
                React.createElement(link_1["default"], { className: "hover:text-silver", href: "/" }, "All"),
                React.createElement(link_1["default"], { className: "hover:text-silver", href: "/" }, "City"),
                React.createElement(link_1["default"], { className: "hover:text-silver", href: "/" }, "Contact"),
                React.createElement(link_1["default"], { className: "hover:text-silver", href: "/" }, "Blog")),
            React.createElement("div", { className: "ml-10 xxs:hidden lg:block" },
                React.createElement(link_1["default"], { className: "transition-all hover:scale-110", href: "/" }, "SignIn"),
                React.createElement(Button_1.BtnRotator, { href: "#" }, "SignUp")),
            React.createElement(Hamburger_1.Hamburger, null))));
}
exports.Nav = Nav;
