"use strict";
exports.__esModule = true;
exports.RightArrow = exports.LeftArrow = exports.GitHub = exports.Instagram = exports.Telegram = void 0;
var Telegram_1 = require("@mui/icons-material/Telegram");
var GitHub_1 = require("@mui/icons-material/GitHub");
var Instagram_1 = require("@mui/icons-material/Instagram");
var ChevronLeft_1 = require("@mui/icons-material/ChevronLeft");
var ChevronRight_1 = require("@mui/icons-material/ChevronRight");
var Button_1 = require("@mui/material/Button");
var ContactsStyle = "\n    rounded-full dark:text-white text-darknight w-[60px] h-[60px] hover:text-oceanBlue\n    text-center p-3 mt-20 cursor-pointer opacity-70\n";
var ArrowStyle = "\n    bg-oceanBlue rounded-full text-center cursor-pointer \n    text-white w-[50px] h-[50px] hover:bg-deepOcean\n";
var DimensionsArrow = "w-[50px] h-[50px]";
function Telegram() {
    return (React.createElement(Button_1["default"], { className: ContactsStyle },
        React.createElement(Telegram_1["default"], { className: DimensionsArrow })));
}
exports.Telegram = Telegram;
function Instagram() {
    return (React.createElement(Button_1["default"], { className: ContactsStyle },
        React.createElement(Instagram_1["default"], { className: DimensionsArrow })));
}
exports.Instagram = Instagram;
function GitHub() {
    return (React.createElement(Button_1["default"], { className: ContactsStyle },
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
