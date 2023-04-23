"use strict";
exports.__esModule = true;
exports.RightArrow = exports.LeftArrow = exports.GitHub = exports.Instagram = exports.Telegram = void 0;
var Telegram_1 = require("@mui/icons-material/Telegram");
var GitHub_1 = require("@mui/icons-material/GitHub");
var Instagram_1 = require("@mui/icons-material/Instagram");
var ChevronLeft_1 = require("@mui/icons-material/ChevronLeft");
var ChevronRight_1 = require("@mui/icons-material/ChevronRight");
var link_1 = require("next/link");
var ContactsStyle = "\n    bg-silver rounded-full text-midnight w-[50px] h-[50px] \n    text-center p-1 mt-20 cursor-pointer\n";
var ArrowStyle = "\n    bg-oceanBlue rounded-full text-center cursor-pointer \n    text-white w-[50px] h-[50px] hover:bg-deepOcean\n";
function Telegram() {
    return (React.createElement(link_1["default"], { href: "/" },
        React.createElement(Telegram_1["default"], { className: ContactsStyle })));
}
exports.Telegram = Telegram;
function Instagram() {
    return (React.createElement(link_1["default"], { href: '/' },
        React.createElement(Instagram_1["default"], { className: ContactsStyle })));
}
exports.Instagram = Instagram;
function GitHub() {
    return (React.createElement(link_1["default"], { href: '/' },
        React.createElement(GitHub_1["default"], { className: ContactsStyle })));
}
exports.GitHub = GitHub;
function LeftArrow() {
    return (React.createElement(ChevronLeft_1["default"], { className: ArrowStyle }));
}
exports.LeftArrow = LeftArrow;
function RightArrow() {
    return (React.createElement(ChevronRight_1["default"], { className: ArrowStyle }));
}
exports.RightArrow = RightArrow;
