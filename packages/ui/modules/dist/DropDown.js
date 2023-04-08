"use strict";
exports.__esModule = true;
exports.DropDown = void 0;
var link_1 = require("next/link");
function DropDown() {
    return (React.createElement("div", { className: "bg-midnight text-silver absolute px-10 py-6 \n        rounded-lg right-[12.222%] top-[20%] xxs:text-xs md:text-sm" },
        React.createElement("ul", { className: "grid gap-y-3" },
            React.createElement(link_1["default"], { href: "/" }, "All"),
            React.createElement(link_1["default"], { href: "/" }, "City"),
            React.createElement(link_1["default"], { href: "/" }, "Contact"),
            React.createElement(link_1["default"], { href: "/" }, "Blog"))));
}
exports.DropDown = DropDown;
