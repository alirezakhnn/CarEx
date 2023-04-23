"use strict";
exports.__esModule = true;
exports.Header = void 0;
var Logo_1 = require("../modules/Logo");
var image_1 = require("next/image");
function Header(_a) {
    var src = _a.src;
    return (React.createElement("header", { className: "grid grid-cols-3 font-monsterrat" },
        React.createElement(image_1["default"], { src: src, alt: "CarExHead", width: 500, height: 500, className: "absolute object-cover opacity-40 w-full h-[90%]" }),
        React.createElement("div", { className: "ml-5 mt-5" },
            React.createElement(Logo_1.Logo, { className: 'xl:text-2xl' }),
            React.createElement("h3", { className: "dark:text-white text-3xl" }, "Feel Modernity and Futuristic"),
            React.createElement("h4", { className: "dark:text-white flex gap-1 text-md" },
                "Car",
                React.createElement("strong", { className: "text-oceanBlue font-bold" }, "Exhibition"))),
        React.createElement("div", null),
        React.createElement("div", null)));
}
exports.Header = Header;
