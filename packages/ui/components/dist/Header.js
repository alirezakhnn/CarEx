"use strict";
exports.__esModule = true;
exports.Header = void 0;
var Button_1 = require("../modules/Button");
var Icons_1 = require("../modules/Icons");
var material_1 = require("@mui/material");
var dynamic_1 = require("next/dynamic");
// import { Slider } from '../modules/Slider';
var Slider = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require('../modules/Slider'); }); }, { ssr: false });
function Header() {
    return (React.createElement("header", { className: "xs:block sm:flex justify-center md:ml-16 xl:ml-0 align-center" },
        React.createElement("div", { className: "grid grid-cols-1 font-monsterratBold xl:px-[13%]" },
            React.createElement(Slider, null),
            React.createElement("div", { className: "grid sm:mt-[-3%] xs:mt-[-8%] md:mt-[4%]\n                md:landscape:mt-[-3%]\n                sm:gap-y-0 md:gap-y-5 md:landscape:gap-y-0\n                select-none xxs:mt-[-7%] xxs:ml-10 ml-0 " },
                React.createElement(material_1.Typography, { style: { animationIterationCount: '1.4' }, variant: "h3", className: "animate-pulse dark:text-white \n                        xl:landscape:text-4xl md:text-3xl md:landscape:text-xl\n                        sm:text-2xl xs:text-xl\n                        xl:max-w-[680px] lg:max-w-[550px] md:max-w-[550px] \n                        sm:max-w-[400px] xs:max-w-[300px]\n                        sm:justify-self-left\n                        font-monsterratBold font-bolder mt-14\n                        " },
                    React.createElement("span", { className: "bg-clip-text dark:mix-blend-screen \n                        text-oceanBlue" }, "Feel"),
                    " Modernity and",
                    React.createElement("span", { className: "bg-clip-text dark:mix-blend-screen \n                        text-oceanBlue" }, " Futuristic")),
                React.createElement(material_1.Typography, { className: "dark:text-white flex gap-1 xs:text-sm\n                        md:text-md xxs:text-sm xxs:mt-2 xs:mt-0 font-monsterratBold", variant: "h4" },
                    "Car",
                    React.createElement("strong", { className: "text-oceanBlue dark:mix-blend-screen \n                        font-bold\n                        " }, "Exhibition")),
                React.createElement(Button_1.BtnRotator, { href: "#", className: "lg:w-[150px] lg:h-[80px] xs:h-[60px] \n                        xs:w-[120px] xxs:mt-8 xxs:text-[14px] xs:text-sm\n                        md:landscape:w-[100px] md:landscape:h-[50px]\n                        " }, "Start"))),
        React.createElement("div", { className: "xxs:hidden md:grid justify-end \n            xs:mt-[-5%] sm:mt-[9%] md:py-16 md:landscape:mt-[2%]\n            " },
            React.createElement(Icons_1.Telegram, null),
            React.createElement(Icons_1.Instagram, null),
            React.createElement(Icons_1.Facebook, null))));
}
exports.Header = Header;
