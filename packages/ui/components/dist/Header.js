"use strict";
exports.__esModule = true;
exports.Header = void 0;
var Button_1 = require("./Button");
var Icons_1 = require("../modules/Icons");
var material_1 = require("@mui/material");
var Slider_1 = require("../modules/Slider");
function Header() {
    return (React.createElement("header", { className: "flex justify-center align-center" },
        React.createElement("div", { className: "grid grid-cols-1 font-monsterratBold px-[13%]" },
            React.createElement(Slider_1.Slider, null),
            React.createElement("div", { className: "grid mt-[15%] gap-y-5" },
                React.createElement(material_1.Typography, { variant: "h3", className: "dark:text-white text-4xl max-w-[680px] font-monsterratBold font-bolder mt-14" },
                    React.createElement("span", { className: "bg-clip-text dark:mix-blend-screen text-oceanBlue" }, "Feel"),
                    " Modernity and",
                    React.createElement("span", { className: "bg-clip-text dark:mix-blend-screen text-oceanBlue" }, " Futuristic")),
                React.createElement(material_1.Typography, { className: "dark:text-white flex gap-1 text-md font-monsterratBold", variant: "h4" },
                    "Car",
                    React.createElement("strong", { className: "text-oceanBlue dark:mix-blend-screen font-bold" }, "Exhibition")),
                React.createElement(Button_1.BtnRotator, { href: "#", className: "w-[150px] h-[80px] text-sm mt-10 justify-self-left text-md\n                    " }, "Start"))),
        React.createElement("div", { className: "grid justify-end mt-[9%] py-10" },
            React.createElement(Icons_1.Telegram, null),
            React.createElement(Icons_1.Instagram, null),
            React.createElement(Icons_1.Facebook, null))));
}
exports.Header = Header;
