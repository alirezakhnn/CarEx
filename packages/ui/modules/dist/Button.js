"use strict";
exports.__esModule = true;
exports.BtnRotator = void 0;
var Button_1 = require("@mui/material/Button");
var react_1 = require("react");
exports.BtnRotator = function (_a) {
    var children = _a.children, href = _a.href, className = _a.className;
    var _b = react_1.useState(false), rotate = _b[0], setRotate = _b[1];
    return (React.createElement(Button_1["default"], { sx: {
            clipPath: 'polygon(20% 0, 80% 0, 100% 50%, 80% 100%, 20% 100%, 0% 50%)'
        }, onMouseEnter: function () { return setRotate(function (prev) { return !prev; }); }, onMouseLeave: function () { return setRotate(function (prev) { return !prev; }); }, className: "\n        w-[100px] h-[53px] " + (rotate ? 'scale-110 rotate-[-234deg]' : 'rotate-[54deg]') + "\n        bg-gradient-to-l from-oceanBlue via-aboveOcean to-oceanBlue rounded-full transition-all duration-500 ease-in-out shadow-xl \n        hover:bg-gradient-to-r from-oceanBlue to-aboveOcean z-1 font-monsterratBold " + className + "\n      ", color: 'primary', variant: "contained", href: href },
        React.createElement("span", { className: "\n          " + (rotate ? 'rotate-[235deg]' : 'rotate-[-55deg]') + " \n          transition-transform duration-500 ease-in-out\n          py-10 px-20\n        " }, children)));
};
