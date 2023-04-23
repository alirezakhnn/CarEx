"use strict";
exports.__esModule = true;
exports.Nav = exports.navItem = void 0;
var Button_1 = require("./Button");
var Logo_1 = require("../modules/Logo");
var link_1 = require("next/link");
var Switcher_1 = require("../modules/Switcher");
var Hamburger_1 = require("../modules/Hamburger");
exports.navItem = [
    { id: 1, title: 'All', href: '/' },
    { id: 2, title: 'City', href: '/' },
    { id: 3, title: 'Contact', href: '/' },
    { id: 4, title: 'Blog', href: '/' },
];
function Nav() {
    // for the navbar styles on Desktop Mode
    var navListItemsLinkStyle = "\n        text-midnight dark:text-white hover:text-silver \n        hover:dark:text-aboveOcean transition-all\n    ";
    return (React.createElement("div", { className: "flex justify-between align-baseline text-silver mt-4\n        w-9/12 py-3 px-3 shadow-lg dark:shadow-oceanBlue\n        shadow-silver justify-self-center rounded-lg\n        relative shadow-md before:absolute\n        before:z-[-1] before:bg-gradient-to-r \n        before:from-silver before:to-midnight\n        after:absolute after:inset-1\n        after:dark:blur-3xl after:dark:bg-gradient-to-r \n        after:from-oceanBlue after:via-transparent after:to-transparent\n        transform font-monsterratBold\n        " },
        React.createElement("div", { className: "flex gap-4" },
            React.createElement(Switcher_1.Switcher, null),
            React.createElement(Logo_1.Logo, null)),
        React.createElement("div", { className: "flex justify-end z-10" },
            React.createElement("ul", { className: "flex gap-4 text-sm mt-3 transition-color ease-in-out duration-500 xxs:hidden lg:flex" }, exports.navItem.map(function (_a) {
                var id = _a.id, href = _a.href, title = _a.title;
                return (React.createElement(link_1["default"], { className: navListItemsLinkStyle, href: href, key: id }, title));
            })),
            React.createElement("div", { className: "ml-10 xxs:hidden lg:block" },
                React.createElement(link_1["default"], { className: navListItemsLinkStyle + " uppercase", href: "/" }, "SignIn"),
                React.createElement(Button_1.BtnRotator, { href: "#" }, "SignUp")),
            React.createElement(Hamburger_1.Hamburger, null))));
}
exports.Nav = Nav;
