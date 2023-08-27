"use strict";
exports.__esModule = true;
exports.Nav = exports.navItems = void 0;
var Button_1 = require("../modules/Button");
var Logo_1 = require("../modules/Logo");
var link_1 = require("next/link");
var Switcher_1 = require("../modules/Switcher");
var Hamburger_1 = require("../modules/Hamburger");
var framer_motion_1 = require("framer-motion");
var react_1 = require("next-auth/react");
var react_2 = require("react");
exports.navItems = [
    { id: 1, title: 'Add', href: '/add-car' },
    { id: 2, title: 'City', href: '/' },
    { id: 3, title: 'Contact', href: '/' },
    { id: 4, title: 'Blog', href: '/' },
];
var navListItemsLinkStyle = "\n  text-midnight dark:text-white hover:text-silver \n  hover:dark:text-aboveOcean transition-all z-10\n";
var switcherVariants = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 }
};
var buttonVariants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 }
};
function Nav() {
    var status = react_1.useSession().status;
    var logOutHandler = function () {
        react_1.signOut();
    };
    return (react_2["default"].createElement("div", { className: "flex justify-between align-baseline text-silver mt-4 xl:w-9/12 py-3 px-3 shadow-lg dark:shadow-oceanBlue shadow-silver justify-self-center rounded-lg relative shadow-md before:absolute before:z-[-1] before:bg-gradient-to-r before:from-silver before:to-midnight after:absolute after:inset-1 after:dark:blur-3xl after:dark:bg-gradient-to-r after:from-oceanBlue after:via-transparent after:to-transparent transform font-monsterratBold z-10 md:w-9/12 lg:w-[60%] xxs:w-[90%]" },
        react_2["default"].createElement(framer_motion_1.motion.div, { variants: switcherVariants, initial: "initial", animate: "animate", transition: { duration: 0.5 }, className: "flex gap-4" },
            react_2["default"].createElement(Switcher_1.Switcher, null),
            react_2["default"].createElement(Logo_1.Logo, null)),
        react_2["default"].createElement("div", { className: "flex justify-end" },
            react_2["default"].createElement("ul", { className: "flex gap-4 xl:text-sm lg:text-xs mt-3 transition-color ease-in-out duration-500 xxs:hidden lg:flex" }, exports.navItems.map(function (_a) {
                var id = _a.id, href = _a.href, title = _a.title;
                return (react_2["default"].createElement(link_1["default"], { href: href, key: id, className: navListItemsLinkStyle }, title));
            })),
            react_2["default"].createElement(framer_motion_1.motion.div, { variants: buttonVariants, initial: "initial", animate: "animate", transition: { duration: 0.5 }, className: "ml-10 xxs:hidden lg:block z-10" }, status !== 'authenticated' ? (react_2["default"].createElement(react_2["default"].Fragment, null,
                react_2["default"].createElement(link_1["default"], { href: "/signin", className: navListItemsLinkStyle + " uppercase lg:text-xs" }, "SignIn"),
                react_2["default"].createElement(Button_1.BtnRotator, { className: "lg:text-xs", href: "/signup" }, "SignUp"))) : (react_2["default"].createElement(Button_1.BtnRotator, { onClick: logOutHandler, className: "lg:text-xs", href: "/signin" }, "Logout"))),
            react_2["default"].createElement(Hamburger_1.Hamburger, null))));
}
exports.Nav = Nav;
