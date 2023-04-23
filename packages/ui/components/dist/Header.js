"use strict";
exports.__esModule = true;
exports.Header = void 0;
var image_1 = require("next/image");
var Button_1 = require("./Button");
var Icons_1 = require("../modules/Icons");
var material_1 = require("@mui/material");
var RatioBtn_1 = require("../modules/RatioBtn");
function Header() {
    var imageSource = '/images/outCar.jpg';
    return (React.createElement("header", { className: "flex font-monsterratBold justify-around px-14" },
        React.createElement(image_1["default"], { src: imageSource, alt: "CarExHead", width: 500, height: 500, className: " hidden dark:block absolute top-0 object-cover opacity-[45%] w-full\n                    h-[80%] bg-center bg-fixed justify-self-center z-[-1]\n                    " }),
        React.createElement("div", { className: "grid mt-5 ml-4" },
            React.createElement(material_1.Typography, { variant: "h3", className: "dark:text-white text-4xl max-w-[680px] font-monsterratBold font-bolder mt-14" },
                React.createElement("span", { className: "bg-clip-text dark:mix-blend-overlay dark:text-white text-oceanBlue" }, "Feel"),
                " Modernity and",
                React.createElement("span", { className: "bg-clip-text dark:mix-blend-screen text-oceanBlue" }, " Futuristic")),
            React.createElement(material_1.Typography, { className: "dark:text-white flex gap-1 text-md font-monsterratBold", variant: "h4" },
                "Car",
                React.createElement("strong", { className: "text-oceanBlue dark:mix-blend-screen font-bold" }, "Exhibition")),
            React.createElement(Button_1.BtnRotator, { href: "#", className: "w-[150px] h-[80px] text-sm mt-5 justify-self-left text-mlg\n                    " }, "Start")),
        React.createElement("div", { className: "grid place-items-center mt-20 gap-y-4" },
            React.createElement(Icons_1.Telegram, null),
            React.createElement(Icons_1.Instagram, null),
            React.createElement(Icons_1.GitHub, null),
            React.createElement("div", { className: "flex gap-3 mt-10" },
                React.createElement(Icons_1.LeftArrow, null),
                React.createElement(Icons_1.RightArrow, null)),
            React.createElement("div", null,
                React.createElement(RatioBtn_1.RationBtn, null)))));
}
exports.Header = Header;
