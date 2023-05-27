"use strict";
exports.__esModule = true;
exports.Nav = exports.navItem = void 0;
var Button_1 = require("../modules/Button");
var Logo_1 = require("../modules/Logo");
var link_1 = require("next/link");
var Switcher_1 = require("../modules/Switcher");
var Hamburger_1 = require("../modules/Hamburger");
var framer_motion_1 = require("framer-motion");
// these are the navbar list contexts
exports.navItem = [
    { id: 1, title: 'All', href: '/' },
    { id: 2, title: 'City', href: '/' },
    { id: 3, title: 'Contact', href: '/' },
    { id: 4, title: 'Blog', href: '/' },
];
function Nav() {
    // for the navbar styles on Desktop Mode
    var navListItemsLinkStyle = "\n        text-midnight dark:text-white hover:text-silver \n        hover:dark:text-aboveOcean transition-all z-10\n    ";
    return (React.createElement("div", { className: "flex justify-between align-baseline text-silver mt-4\n        xl:w-9/12 py-3 px-3 shadow-lg dark:shadow-oceanBlue\n        shadow-silver justify-self-center rounded-lg\n        relative shadow-md before:absolute\n        before:z-[-1] before:bg-gradient-to-r \n        before:from-silver before:to-midnight\n        after:absolute after:inset-1\n        after:dark:blur-3xl after:dark:bg-gradient-to-r \n        after:from-oceanBlue after:via-transparent after:to-transparent\n        transform font-monsterratBold z-10 md:w-9/12 lg:w-[60%]\n        xxs:w-[90%]\n        " },
        React.createElement(framer_motion_1.motion.div
        // i've just added left to write animation on switcher and logo container component
        , { 
            // i've just added left to write animation on switcher and logo container component
            initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5 }, className: "flex gap-4" },
            React.createElement(Switcher_1.Switcher, null),
            React.createElement(Logo_1.Logo, null)),
        React.createElement("div", { className: "flex justify-end" },
            React.createElement("ul", { className: "flex gap-4 xl:text-sm lg:text-xs mt-3 transition-color ease-in-out duration-500 xxs:hidden lg:flex" }, exports.navItem.map(function (_a) {
                var id = _a.id, href = _a.href, title = _a.title;
                return (React.createElement(link_1["default"], { className: navListItemsLinkStyle, href: href, key: id }, title));
            })),
            React.createElement(framer_motion_1.motion.div
            // this is motion rtl for button
            , { 
                // this is motion rtl for button
                initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5 }, className: "ml-10 xxs:hidden lg:block z-10" },
                React.createElement(link_1["default"], { className: navListItemsLinkStyle + " uppercase lg:text-xs ", href: "/" }, "SignIn"),
                React.createElement(Button_1.BtnRotator, { className: "lg:text-xs", href: "#" }, "SignUp")),
            React.createElement(Hamburger_1.Hamburger, null))));
}
exports.Nav = Nav;
