"use strict";
exports.__esModule = true;
exports.Header = void 0;
var Button_1 = require("../modules/Button");
var Icons_1 = require("../modules/Icons");
var dynamic_1 = require("next/dynamic");
var framer_motion_1 = require("framer-motion");
// we import Slider by next-dynamic to render the Slider component in browser
var Slider = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require('../modules/Slider'); }); }, { ssr: false });
function Header() {
    return (React.createElement("header", { className: "xs:block sm:flex justify-center xxs:mr-16 md:mr-0 align-center" },
        React.createElement("div", { className: "grid grid-cols-1 font-monsterratBold xl:px-[13%]" },
            React.createElement(Slider, null),
            React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "grid sm:mt-[-3%] xs:mt-[-8%] md:mt-[4%]\n                    sm:gap-y-0 md:gap-y-5\n                    select-none xxs:mt-[-7%] xxs:ml-10 ml-0 " },
                React.createElement(framer_motion_1.motion.h3, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7 }, className: "dark:text-white \n                        xl:landscape:text-4xl md:text-3xl\n                        xxs:text-2xl\n                        xl:max-w-[680px] lg:max-w-[550px] md:max-w-[550px] \n                        sm:max-w-[400px] xs:max-w-[300px]\n                        sm:justify-self-left\n                        font-monsterratBold font-bolder mt-14\n                        " },
                    React.createElement(framer_motion_1.motion.span, { className: "bg-clip-text dark:mix-blend-screen\n                        text-oceanBlue" }, "Feel"),
                    " Modernity and",
                    React.createElement("span", { className: "bg-clip-text dark:mix-blend-screen \n                        text-oceanBlue" }, " Futuristic")),
                React.createElement(framer_motion_1.motion.h4, { className: "dark:text-white flex gap-1 xs:text-sm\n                        md:text-md xxs:text-sm xxs:mt-2 xs:mt-0 font-monsterratBold", initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5 } },
                    "Car",
                    React.createElement("strong", { className: "text-oceanBlue dark:mix-blend-screen \n                        font-bold\n                        " }, "Exhibition")),
                React.createElement(Button_1.BtnRotator, { href: "#", className: "lg:w-[150px] lg:h-[80px] xs:h-[60px] \n                        xs:w-[120px] xxs:mt-8 xxs:text-[14px] xs:text-sm\n                        " }, "Start"))),
        React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5 }, className: "xxs:hidden md:grid justify-end \n                xs:mt-[-5%] sm:mt-[9%] md:py-16\n            " },
            React.createElement(Icons_1.Telegram, null),
            React.createElement(Icons_1.Instagram, null),
            React.createElement(Icons_1.Facebook, null))));
}
exports.Header = Header;
