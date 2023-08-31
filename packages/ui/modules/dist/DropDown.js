"use strict";
exports.__esModule = true;
exports.DropDown = void 0;
var link_1 = require("next/link");
var Nav_1 = require("../components/Nav");
var react_1 = require("react");
/* this component works when the screen is on tablet size or less
and hamburger menu is checked */
function DropDown() {
    return (react_1["default"].createElement("div", { className: "shadow-lg shadow-silver dark:bg-darknight \n            bg-white\n            dark:text-silver text-midnight dark:shadow-lg \n            lg:text-2xl\n            dark:shadow-deepOcean absolute px-10 py-32 rounded-lg \n            xxs:text-lg \n            w-[100vw] h-[100vh] md:landscape:h-[130vh] \n            sm:landscape:h-[150vh]\n            transition-all\n            duration-500 font-monsterratMedium z-50" },
        react_1["default"].createElement("ul", { className: "grid gap-y-3" }, Nav_1.navItems.map(function (_a) {
            var id = _a.id, href = _a.href, title = _a.title;
            return (react_1["default"].createElement(link_1["default"], { className: "hover:text-oceanBlue\n                            transition-all\n                            duration-200 ease-in\n                            ", href: href, key: id }, title));
        }))));
}
exports.DropDown = DropDown;
