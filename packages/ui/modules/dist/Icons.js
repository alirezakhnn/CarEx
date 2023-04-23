"use strict";
exports.__esModule = true;
exports.RightArrow = exports.LeftArrow = exports.GitHub = exports.Instagram = exports.Telegram = void 0;
var Telegram_1 = require("@mui/icons-material/Telegram");
var GitHub_1 = require("@mui/icons-material/GitHub");
var Instagram_1 = require("@mui/icons-material/Instagram");
var ChevronLeft_1 = require("@mui/icons-material/ChevronLeft");
var ChevronRight_1 = require("@mui/icons-material/ChevronRight");
var Button_1 = require("@mui/material/Button");
var ContactsStyle = "\n    bg-gradient-to-r from-white to-silver rounded-full dark:text-midnight \n    dark:hover:text-oceanBlue transition-all duration-500 dark:mix-blend-screen\n    text-darknight w-[40px] h-[60px] hover:text-oceanBlue\n    text-center p-3 cursor-pointer opacity-70 hover:scale-110\n";
var ArrowStyle = "\n    bg-gradient-to-l from-oceanBlue via-aboveOcean to-deepOcean rounded-full text-center cursor-pointer \n    text-white w-[50px] h-[50px] hover:bg-deepOcean\n";
var DimensionsArrow = "w-[30px] h-[30px]";
function Telegram() {
    return (React.createElement(Button_1["default"], { href: "#", className: ContactsStyle },
        React.createElement(Telegram_1["default"], { className: DimensionsArrow })));
}
exports.Telegram = Telegram;
function Instagram() {
    return (React.createElement(Button_1["default"], { href: "#", className: ContactsStyle },
        React.createElement(Instagram_1["default"], { className: DimensionsArrow })));
}
exports.Instagram = Instagram;
function GitHub() {
    return (React.createElement(Button_1["default"], { href: "#", className: ContactsStyle },
        React.createElement(GitHub_1["default"], { className: DimensionsArrow })));
}
exports.GitHub = GitHub;
function LeftArrow() {
    return (React.createElement(Button_1["default"], { variant: "contained", href: "#", className: ArrowStyle },
        React.createElement(ChevronLeft_1["default"], { className: DimensionsArrow })));
}
exports.LeftArrow = LeftArrow;
function RightArrow() {
    return (React.createElement(Button_1["default"], { variant: "contained", href: "#", className: ArrowStyle },
        React.createElement(ChevronRight_1["default"], { className: DimensionsArrow })));
}
exports.RightArrow = RightArrow;
