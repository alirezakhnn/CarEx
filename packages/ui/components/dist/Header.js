"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Header = void 0;
var framer_motion_1 = require("framer-motion");
var Button_1 = require("../modules/Button");
var Slider_1 = require("../modules/Slider");
var Icons_1 = require("../modules/Icons");
var react_1 = require("next-auth/react");
exports.Header = function (_a) {
    var pictureContent = _a.pictureContent;
    var animateHeader = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };
    var animateHeaderText = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7 }
    };
    var animateHeaderSubtitle = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 }
    };
    var animateSocialIcons = {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 }
    };
    var status = react_1.useSession().status;
    return (React.createElement("header", { className: "xs:block sm:flex justify-center xxs:mr-16 md:mr-0 align-center" },
        React.createElement("div", { className: "grid grid-cols-1 font-monsterratBold xl:px-[13%]" },
            React.createElement(Slider_1.Slider, { pictureContent: pictureContent }),
            React.createElement(framer_motion_1.motion.div, __assign({ className: "grid sm:mt-[-3%] xs:mt-[-8%] md:mt-[4%] sm:gap-y-0 md:gap-y-5 select-none xxs:mt-[-7%] xxs:ml-10 ml-0" }, animateHeader),
                React.createElement(framer_motion_1.motion.h3, __assign({}, animateHeaderText, { className: "dark:text-white xl:landscape:text-4xl md:text-3xl xxs:text-2xl xl:max-w-[680px] lg:max-w-[550px] md:max-w-[550px] sm:max-w-[400px] xs:max-w-[300px] sm:justify-self-left font-monsterratBold font-bolder mt-14" }),
                    React.createElement(framer_motion_1.motion.span, __assign({ className: "bg-clip-text dark:mix-blend-screen text-oceanBlue" }, animateHeaderSubtitle), "Feel"),
                    " ",
                    "Modernity and",
                    React.createElement("span", { className: "bg-clip-text dark:mix-blend-screen text-oceanBlue" }, " Futuristic")),
                React.createElement(framer_motion_1.motion.h4, __assign({}, animateHeaderSubtitle, { className: "dark:text-white flex gap-1 xs:text-sm md:text-md xxs:text-sm xxs:mt-2 xs:mt-0 font-monsterratBold" }),
                    "Car",
                    React.createElement("strong", { className: "text-oceanBlue dark:mix-blend-screen font-bold" }, "Exhibition")),
                React.createElement(Button_1.BtnRotator, { href: "/add-car", className: "lg:w-[150px] lg:h-[80px] xs:h-[60px] xs:w-[120px] xxs:mt-8 xxs:text-[14px] xs:text-sm" }, status === "authenticated" ? "Add" : "Start"))),
        React.createElement(framer_motion_1.motion.div, __assign({}, animateSocialIcons, { className: "xxs:hidden md:grid justify-end xs:mt-[-5%] sm:mt-[9%] md:py-16" }),
            React.createElement(Icons_1.Telegram, null),
            React.createElement(Icons_1.Instagram, null),
            React.createElement(Icons_1.Facebook, null))));
};
