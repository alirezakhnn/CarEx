"use strict";
exports.__esModule = true;
exports.SquareLoader = void 0;
require("../css/SquareLoader.css");
var react_1 = require("react");
exports.SquareLoader = function () {
    return (react_1["default"].createElement("div", { className: "loader mt-[20%] z-999" },
        react_1["default"].createElement("div", { className: "loader-square" }),
        react_1["default"].createElement("div", { className: "loader-square" }),
        react_1["default"].createElement("div", { className: "loader-square" }),
        react_1["default"].createElement("div", { className: "loader-square" }),
        react_1["default"].createElement("div", { className: "loader-square" }),
        react_1["default"].createElement("div", { className: "loader-square" }),
        react_1["default"].createElement("div", { className: "loader-square" })));
};
