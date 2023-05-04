"use strict";
exports.__esModule = true;
exports.SearchBarIcon = exports.Facebook = exports.Instagram = exports.Telegram = void 0;
var Telegram_1 = require("@mui/icons-material/Telegram");
var Search_1 = require("@mui/icons-material/Search");
var Instagram_1 = require("@mui/icons-material/Instagram");
var Facebook_1 = require("@mui/icons-material/Facebook");
var Button_1 = require("@mui/material/Button");
var react_1 = require("react");
var ContactsStyle = "\n    rounded-full dark:text-white\n    dark:hover:text-midnight dark:hover:bg-gradient-to-r from-silver to-white transition-all duration-300 \n    text-darknight w-[20px] h-[60px] hover:text-oceanBlue\n    text-center p-3 cursor-pointer opacity-70 hover:scale-110 z-1\n";
var DimensionContactIcons = "w-[30px] h-[30px]";
function Telegram() {
    return (React.createElement(Button_1["default"], { href: "#", className: ContactsStyle },
        React.createElement(Telegram_1["default"], { className: DimensionContactIcons })));
}
exports.Telegram = Telegram;
function Instagram() {
    return (React.createElement(Button_1["default"], { href: "#", className: ContactsStyle },
        React.createElement(Instagram_1["default"], { className: DimensionContactIcons })));
}
exports.Instagram = Instagram;
function Facebook() {
    return (React.createElement(Button_1["default"], { href: "#", className: ContactsStyle },
        React.createElement(Facebook_1["default"], { className: DimensionContactIcons })));
}
exports.Facebook = Facebook;
function SearchBarIcon() {
    var _a = react_1.useState(false), inputAppear = _a[0], setInputAppear = _a[1];
    return (React.createElement("div", { className: "flex" },
        React.createElement("input", { type: "text", placeholder: "search for Car", className: (inputAppear ? 'block' : 'hidden') + " \n                rounded-full py-4 px-3 \n                placeholder-white z-10 outline-none bg-gradient-to-r \n                from-oceanBlue via-deepOcean to-oceanBlue sticky \n                top-[23%] right-[20%] text-white animate-pulse w-[80px] h-[80px]\n                " }),
        React.createElement(Button_1["default"], { onClick: function () { return setInputAppear(function (prev) { return !prev; }); }, className: (inputAppear ? '' : null) + " h-[60px] w-[40px] \n                dark:text-silver text-midnight rounded-full\n                " },
            React.createElement(Search_1["default"], { className: "h-[55px] w-[55px] hover:text-oceanBlue \n                    transition-all duration-500 hover:scale-110" }))));
}
exports.SearchBarIcon = SearchBarIcon;
