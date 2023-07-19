"use strict";
exports.__esModule = true;
exports.CarsDetailsPage = void 0;
var react_1 = require("react");
var image_1 = require("next/image");
var Button_1 = require("../modules/Button");
var link_1 = require("next/link");
var SquareLoader_1 = require("../modules/SquareLoader");
function CarsDetailsPage(_a) {
    var data = _a.data;
    console.log(data);
    if (data) {
        return (react_1["default"].createElement("div", { className: "grid justify-center my-4 mx-10" }, data === null || data === void 0 ? void 0 :
            data.map(function (car) { return (react_1["default"].createElement("div", { className: "grid justify-center gap-y-3", key: car._id },
                react_1["default"].createElement("h3", { className: "text-xl text-center dark:text-white text-midnight capitalize font-monsterratBold" }, car.title),
                react_1["default"].createElement(image_1["default"], { className: "dark:text-white text-midnight", src: car.pictureDataUrl, width: 600, height: 360, alt: car.alt }),
                react_1["default"].createElement("div", { className: "flex justify-around" },
                    react_1["default"].createElement("h5", { className: "dark:text-white text-midnight" },
                        "Model: \u00A0",
                        react_1["default"].createElement("span", { className: "capitalize text-aboveOcean font-bold" }, car.subtitle)),
                    react_1["default"].createElement("p", { className: "dark:text-white text-midnight" },
                        "Made: \u00A0",
                        react_1["default"].createElement("span", { className: "font-monsterratItalic text-oceanBlue" }, car.date))),
                react_1["default"].createElement("p", { className: "font-bold dark:text-white text-midnight my-5 max-w-[600px]" },
                    "Description: \u00A0",
                    react_1["default"].createElement("span", { className: "font-monsterratItalic text-aboveOcean" }, car.description)))); }),
            react_1["default"].createElement(link_1["default"], { className: "justify-self-center", href: '/' },
                react_1["default"].createElement(Button_1.BtnShadow, null, "Back To Home"))));
    }
    else
        return react_1["default"].createElement(SquareLoader_1.SquareLoader, null);
}
exports.CarsDetailsPage = CarsDetailsPage;
