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
var react_1 = require("react");
var router_1 = require("next/router");
var link_1 = require("next/link");
var ui_1 = require("ui");
var material_1 = require("@mui/material");
var Google_1 = require("@mui/icons-material/Google");
var Switcher_1 = require("ui/modules/Switcher");
var react_toastify_1 = require("react-toastify");
function SignUp() {
    var _this = this;
    var router = router_1.useRouter();
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(""), password = _b[0], setPassword = _b[1];
    var signupHandler = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(email, password);
                    return [4 /*yield*/, fetch('/api/auth/signup', {
                            method: "POST",
                            body: JSON.stringify({ email: email, password: password }),
                            headers: { "Content-Type": "application/json" }
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (data.status === 'success') {
                        react_toastify_1.toast.success('sign up successfully done');
                        router.push('/signin');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var labelsClass = "\n    font-monsterratItalic dark:text-white text-midnight\n    ";
    var inputsClass = "\n    rounded-lg outline-none px-4 py-1\n    focus:shadow-lg focus:shadow-midnight bg-gradient-to-r from-white to-silver\n    font-monsterratMedium focus:shadow-outline focus:scale-110\n    transition-all m-2\n    ";
    return (React.createElement("div", { className: "flex justify-center gap-2 mt-20" },
        React.createElement("div", { className: "grid justify-center" },
            React.createElement("div", { className: "grid place-items-center rounded-l-lg border-2 border-oceanBlue max-w-[600px] px-16 py-12" },
                React.createElement("div", { className: "grid grid-cols-2 place-items-center mr-10 mb-4" },
                    React.createElement(Switcher_1.Switcher, null),
                    React.createElement(material_1.Typography, { variant: "h4", className: "dark:text-white text-midnight font-monsterratItalic font-bold text-md" }, "Sign Up")),
                React.createElement("div", { className: "grid gap-y-2" },
                    React.createElement("label", { className: labelsClass, htmlFor: "email" }, "Email"),
                    React.createElement("input", { id: "email", type: "text", value: email, onChange: function (e) { return setEmail(e.target.value); }, className: inputsClass, required: true })),
                React.createElement("div", { className: "grid gap-y-2" },
                    React.createElement("label", { className: labelsClass, htmlFor: "password" }, "password"),
                    React.createElement("input", { id: "password", type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); }, className: inputsClass, required: true })),
                React.createElement(ui_1.BtnShadow, { onClick: signupHandler, className: "shadow-lg shadow-deepOcean hover:shadow-md hover:shadow-deepOcean dark:text-white text-midnight" }, "SignUp"),
                React.createElement(ui_1.BtnShadow, { className: "shadow-md shadow-oceanBlue hover:shadow-none dark:text-white text-midnight flex gap-2 hover:bg-aboveOcean hover:text-white hover:scale-110" },
                    React.createElement(Google_1["default"], null),
                    "SignIn with Google"),
                React.createElement("p", { className: "dark:text-white text-midnight font-monsterratItalic" },
                    " do you have account?",
                    React.createElement(link_1["default"], { className: "text-oceanBlue", href: "/signin" }, " \u00A0Login")))),
        React.createElement("img", { src: "/images/dark/modernDarkCarMoonlightBlue.jpg", alt: "edgeCar_signin", className: "max-w-[600px] max-h-[550px] rounded-r-lg shadow-md shadow-oceanBlue opacity-[40%] xs:hidden xl:block" }),
        React.createElement(react_toastify_1.ToastContainer, null)));
}
exports["default"] = SignUp;
