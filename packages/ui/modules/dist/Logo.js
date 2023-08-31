"use strict";
exports.__esModule = true;
exports.Logo = void 0;
var material_1 = require("@mui/material");
var link_1 = require("next/link");
var react_1 = require("react");
function Logo(_a) {
    var className = _a.className;
    return (react_1["default"].createElement(link_1["default"], { className: "z-10", href: "/" },
        react_1["default"].createElement(material_1.Typography, { variant: "h1", color: "silver.main", className: "xxs:text-md md:text-lg align-self-center cursor-pointer mt-2 text-midnight dark:text-silver font-monsterratItalic dark:text-white " + className },
            "Car",
            react_1["default"].createElement("span", { className: "text-oceanBlue" }, "Ex"))));
}
exports.Logo = Logo;
