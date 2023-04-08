"use strict";
exports.__esModule = true;
exports.Logo = void 0;
var material_1 = require("@mui/material");
function Logo() {
    return (React.createElement(material_1.Typography, { variant: 'h1', color: "silver.main", className: "xxs:text-md md:text-lg align-self-center cursor-pointer mt-2" },
        "Car",
        React.createElement("span", { className: "text-oceanBlue" }, "Ex")));
}
exports.Logo = Logo;
