"use strict";
exports.__esModule = true;
exports.DropDown = void 0;
var link_1 = require("next/link");
/* this component works when the screen is on tablet size or less
and hamburger menu is checked */
function DropDown() {
    return (
    /* style below iterate the animation execution course.
    0.5 means it executes the half of the full animation */
    React.createElement("div", { style: { animationIterationCount: '0.5' }, className: "shadow-lg shadow-silver dark:bg-midnight \n        dark:text-silver text-midnight dark:shadow-lg dark:shadow-deepOcean \n        absolute px-10 py-6 rounded-lg right-[2%]\n        top-[120%] xxs:text-xs md:text-sm animate-bounce font-monsterrat" },
        React.createElement("ul", { className: "grid gap-y-3" },
            React.createElement(link_1["default"], { href: "/" }, "All"),
            React.createElement(link_1["default"], { href: "/" }, "City"),
            React.createElement(link_1["default"], { href: "/" }, "Contact"),
            React.createElement(link_1["default"], { href: "/" }, "Blog"))));
}
exports.DropDown = DropDown;
