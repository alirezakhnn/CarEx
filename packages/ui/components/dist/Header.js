"use strict";
exports.__esModule = true;
exports.Header = void 0;
var Button_1 = require("./Button");
var Icons_1 = require("../modules/Icons");
var material_1 = require("@mui/material");
var Slider_1 = require("../modules/Slider");
function Header() {
    return (React.createElement("header", { className: "xs:block sm:flex justify-center md:ml-16 align-center" },
        React.createElement("div", { className: "grid grid-cols-1 font-monsterratBold xl:px-[13%]" },
            React.createElement(Slider_1.Slider, null),
            React.createElement("div", { className: "grid sm:mt-[-3%] xs:mt-[-8%] md:mt-[4%] sm:gap-y-0 md:gap-y-5\n                select-none xxs:mt-[-7%] xxs:ml-10 ml-0" },
                React.createElement(material_1.Typography, { variant: "h3", className: "dark:text-white xl:text-4xl \n                        md:text-3xl sm:text-2xl xs:text-xl\n                        xl:max-w-[680px] lg:max-w-[550px] md:max-w-[550px] \n                        sm:max-w-[400px] xs:max-w-[300px]\n                        sm:justify-self-left\n                        font-monsterratBold font-bolder mt-14" },
                    React.createElement("span", { className: "bg-clip-text dark:mix-blend-screen \n                        text-oceanBlue" }, "Feel"),
                    " Modernity and",
                    React.createElement("span", { className: "bg-clip-text dark:mix-blend-screen \n                        text-oceanBlue" }, " Futuristic")),
                React.createElement(material_1.Typography, { className: "dark:text-white flex gap-1 xs:text-sm\n                        md:text-md xxs:text-sm xxs:mt-2 xs:mt-0 font-monsterratBold", variant: "h4" },
                    "Car",
                    React.createElement("strong", { className: "text-oceanBlue dark:mix-blend-screen \n                        font-bold\n                        " }, "Exhibition")),
                React.createElement(Button_1.BtnRotator, { href: "#", className: "lg:w-[150px] lg:h-[80px] \n                        xs:h-[60px] xs:w-[120px] \n                        xxs:mt-8\n                        xs:text-sm\n                        " }, "Start"))),
        React.createElement("div", { className: "xxs:hidden md:grid justify-end \n            xs:mt-[-5%] sm:mt-[9%] md:py-16\n            " },
            React.createElement(Icons_1.Telegram, null),
            React.createElement(Icons_1.Instagram, null),
            React.createElement(Icons_1.Facebook, null))));
}
exports.Header = Header;
