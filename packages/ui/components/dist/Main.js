"use strict";
exports.__esModule = true;
exports.Main = void 0;
var react_1 = require("next-auth/react");
var SquareLoader_1 = require("../modules/SquareLoader");
var TimeLine_1 = require("../modules/TimeLine");
var react_2 = require("react");
function Main() {
    var status = react_1.useSession().status;
    return (react_2["default"].createElement("div", { className: "z-10 mt-[45vh]" }, status === 'authenticated' ? react_2["default"].createElement(TimeLine_1.TimeLine, null) : react_2["default"].createElement(SquareLoader_1.SquareLoader, null)));
}
exports.Main = Main;
