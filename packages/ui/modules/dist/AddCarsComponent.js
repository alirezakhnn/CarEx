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
exports.AddCarsComponent = void 0;
var react_1 = require("react");
var router_1 = require("next/router");
var react_2 = require("next-auth/react");
var react_3 = require("react");
var Button_1 = require("@mui/material/Button");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
function AddCarsComponent() {
    var _this = this;
    var status = react_2.useSession().status;
    var router = router_1.useRouter();
    react_1.useEffect(function () {
        if (status === 'unauthenticated')
            router.replace('/signin');
    }, [status, router]);
    var _a = react_1.useState({
        title: "",
        subtitle: "",
        picture: "",
        alt: "",
        date: "",
        description: "",
        icon: ""
    }), cars = _a[0], setCars = _a[1];
    var submitHandler = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/api/addcar", {
                        method: "POST",
                        body: JSON.stringify({ data: cars }),
                        headers: { "Content-Type": "application/json" }
                    })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    if (data.status === 'success') {
                        react_toastify_1.toast.success('Car Added');
                        router.push('/');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var changeHandler = function (e) {
        var _a;
        var _b = e.target, name = _b.name, value = _b.value;
        setCars(__assign(__assign({}, cars), (_a = {}, _a[name] = value, _a)));
    };
    var inputsClass = "\n    dark:bg-gradient-to-r dark:from-white dark:via-white dark:to-silver bg-midnight\n    rounded-full py-1 dark:text-midnight text-white\n    font-monsterratMedium px-4 transition-all outline-none border-none\n    ";
    var labelsClass = "\n    dark:text-white text-midnight font-monsterratBold\n    ";
    var divsClass = "\n    grid gap-y-1\n    ";
    return (react_3["default"].createElement("form", { className: "grid place-items-center gap-y-2 mt-1 dark:shadow-lg dark:shadow-oceanBlue shadow-xl shadow-silver max-w-[600px] px-24 py-2 rounded-lg", encType: "multipart/form-data" },
        react_3["default"].createElement("h3", { className: "text-xl dark:text-white text-midnight text- font-monsterratBold mb-4" }, "Add Car"),
        react_3["default"].createElement("div", { className: divsClass },
            react_3["default"].createElement("label", { className: labelsClass, htmlFor: "title" }, "Brand Name"),
            react_3["default"].createElement("input", { className: "capitalize " + inputsClass, type: "text", name: "title", id: "title", value: cars.title, onChange: changeHandler, required: true })),
        react_3["default"].createElement("div", { className: divsClass },
            react_3["default"].createElement("label", { className: labelsClass, htmlFor: "subtitle" }, "Car Model"),
            react_3["default"].createElement("input", { className: "capitalize " + inputsClass, type: "text", name: "subtitle", id: "subtitle", value: cars.subtitle, onChange: changeHandler, required: true })),
        react_3["default"].createElement("div", { className: divsClass },
            react_3["default"].createElement("label", { className: labelsClass, htmlFor: "description" }, "Description"),
            react_3["default"].createElement("input", { className: "capitalize " + inputsClass, type: "text", name: "description", id: "description", value: cars.description, onChange: changeHandler, required: true })),
        react_3["default"].createElement("div", { className: divsClass },
            react_3["default"].createElement("label", { className: labelsClass, htmlFor: "date" }, "Made Date"),
            react_3["default"].createElement("input", { className: "capitalize " + inputsClass, type: "text", name: "date", id: "date", value: cars.date, onChange: changeHandler, required: true })),
        react_3["default"].createElement("div", { className: divsClass },
            react_3["default"].createElement("label", { className: labelsClass, htmlFor: "alt" }, "Alternative Tag"),
            react_3["default"].createElement("input", { className: "capitalize " + inputsClass, type: "text", name: "alt", id: "alt", value: cars.alt, onChange: changeHandler, required: true })),
        react_3["default"].createElement("div", { className: divsClass },
            react_3["default"].createElement("label", { className: labelsClass, htmlFor: "picture" }, "Car Picture"),
            react_3["default"].createElement("input", { className: inputsClass, type: "file", name: "picture", id: "picture", accept: "image/jpg, image/png, image/jpeg", onChange: changeHandler })),
        react_3["default"].createElement("div", { className: divsClass },
            react_3["default"].createElement("label", { className: labelsClass, htmlFor: "icon" }, "Brand Logo"),
            react_3["default"].createElement("input", { className: inputsClass, type: "file", name: "icon", id: "icon", accept: "image/svg+xml", onChange: changeHandler })),
        react_3["default"].createElement(Button_1["default"], { className: "my-3 px-4 py-2 rounded-lg text-white hover:text-midnight dark:hover:text-white bg-oceanBlue font-monsterratBold hover:shadow-md hover:shadow-oceanBlue hover:scale-110 transition-all", onClick: submitHandler }, "Submit"),
        react_3["default"].createElement(react_toastify_1.ToastContainer, null)));
}
exports.AddCarsComponent = AddCarsComponent;
