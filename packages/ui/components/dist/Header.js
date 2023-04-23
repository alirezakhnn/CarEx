"use strict";
exports.__esModule = true;
exports.Header = void 0;
var Logo_1 = require("../modules/Logo");
var image_1 = require("next/image");
var Button_1 = require("./Button");
var Icons_1 = require("../modules/Icons");
var material_1 = require("@mui/material");
function Header() {
    var imageSource = '/images/outCar.jpg';
    return (React.createElement("header", { className: "flex font-monsterrat justify-around" },
        React.createElement(image_1["default"], { src: imageSource, alt: "CarExHead", width: 500, height: 500, className: "absolute top-0 object-cover opacity-10 w-[78%]\n                    h-[85%] bg-center bg-fixed justify-self-center z-[-1]\n                    " }),
        React.createElement("div", { className: "grid mt-5" },
            React.createElement(Logo_1.Logo, { className: 'xl:text-2xl' }),
            React.createElement(material_1.Typography, { variant: "h3", className: "dark:text-white text-3xl max-w-[450px]" }, "Feel Modernity and Futuristic"),
            React.createElement(material_1.Typography, { className: "dark:text-white flex gap-1 text-md", variant: "h4" },
                "Car",
                React.createElement("strong", { className: "text-oceanBlue font-bold" }, "Exhibition")),
            React.createElement(Button_1.BtnRotator, { href: "#", className: "w-[150px] h-[80px] text-sm mt-10 justify-self-left text-[22px]\n                    " }, "Start")),
        React.createElement("div", { className: "grid place-items-center" },
            React.createElement(Icons_1.Telegram, null),
            React.createElement(Icons_1.Instagram, null),
            React.createElement(Icons_1.GitHub, null),
            React.createElement("div", { className: "flex gap-3 mt-10" },
                React.createElement(Icons_1.LeftArrow, null),
                React.createElement(Icons_1.RightArrow, null)))));
}
exports.Header = Header;
