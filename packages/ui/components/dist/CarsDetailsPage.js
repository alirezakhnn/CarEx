"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.CarsDetailsPage = void 0;
var react_1 = require("react");
var image_1 = require("next/image");
var Button_1 = require("../modules/Button");
var SquareLoader_1 = require("../modules/SquareLoader");
var router_1 = require("next/router");
var react_toastify_1 = require("react-toastify");
require("../css/toastify.css");
function CarsDetailsPage(_a) {
    var _this = this;
    var data = _a.data;
    var router = router_1.useRouter();
    var deleteHandler = function () { return __awaiter(_this, void 0, void 0, function () {
        var carId, res, newRes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    carId = data[0]._id;
                    return [4 /*yield*/, fetch("/api/delete/" + carId, {
                            method: 'DELETE'
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    newRes = _a.sent();
                    if (newRes || newRes.status === 'success') {
                        react_toastify_1.toast.success('car deleted!');
                        router.replace('/');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    if (data) {
        return (react_1["default"].createElement("div", { className: "grid justify-center my-4 mx-10" }, data === null || data === void 0 ? void 0 :
            data.map(function (car) { return (react_1["default"].createElement("div", { className: "grid justify-center gap-y-3", key: car._id },
                react_1["default"].createElement("h3", { className: "text-xl text-center dark:text-white text-midnight capitalize font-monsterratBold" }, car.title),
                react_1["default"].createElement(image_1["default"], { className: "dark:text-white text-midnight", src: car.picture, width: 600, height: 360, alt: car.alt }),
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
            react_1["default"].createElement("div", { className: "grid grid-cols-2 gap-x-6" },
                react_1["default"].createElement(Button_1.BtnShadow, { className: "bg-oceanBlue hover:shadow-md hover:shadow-oceanBlue dark:hover:text-white hover:text-midnight text-white", href: '/' }, "Back To Home"),
                react_1["default"].createElement(Button_1.BtnShadow, { className: "text-midnight hover:text-white dark:text-white dark:shadow-sm dark:hover:shadow-none dark:shadow-silver", color: "warning", variant: "contained", onClick: deleteHandler }, "Delete")),
            react_1["default"].createElement(react_toastify_1.ToastContainer, null)));
    }
    else
        return react_1["default"].createElement(SquareLoader_1.SquareLoader, null);
}
exports.CarsDetailsPage = CarsDetailsPage;
