"use strict";
exports.__esModule = true;
exports.Logo = void 0;
var material_1 = require("@mui/material");
var link_1 = require("next/link");
function Logo(_a) {
    var className = _a.className;
    return (React.createElement(link_1["default"], { className: "z-10", href: "/" },
        React.createElement(material_1.Typography, { variant: "h1", color: "silver.main", className: "xxs:text-md md:text-lg align-self-center cursor-pointer mt-2 z-10 text-midnight dark:text-silver font-monsterratItalic dark:text-white " + className },
            "Car",
            React.createElement("span", { className: "text-oceanBlue" }, "Ex"))));
}
exports.Logo = Logo;
