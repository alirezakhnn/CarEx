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
// import { useSession } from "next-auth/react";
var router_1 = require("next/router");
var link_1 = require("next/link");
function SignUp() {
    var _this = this;
    var router = router_1.useRouter();
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(""), password = _b[0], setPassword = _b[1];
    var labelsClass = "\n    font-monsterratBold dark:text-white text-midnight\n    ";
    var inputsClass = "\n    rounded-lg outline-none border-none px-4 py-1\n    bg-gradient-to-r dark:from-silver dark:to-white\n    from-midnight to-silver dark:text-midnight text-white\n    font-monsterratMedium\n    ";
    var signupHandler = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('/api/auth/signup', {
                        method: "POST",
                        body: JSON.stringify({ email: email, password: password }),
                        headers: { "Content-Type": "application/json;" }
                    })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    if (data.status === 'success')
                        router.push('/signin');
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "grid justify-center" },
        React.createElement("div", { className: "grid place-items-center gap-y-4 rounded-lg shadow-lg dark:shadow-oceanBlue shadow-silver max-w-[600px] mt-6 px-16 py-6" },
            React.createElement("div", { className: "grid gap-y-2" },
                React.createElement("label", { className: labelsClass, htmlFor: "email" }, "Email"),
                React.createElement("input", { id: "email", type: "text", value: email, onChange: function (e) { return setEmail(e.target.value); }, className: inputsClass })),
            React.createElement("div", { className: "grid gap-y-2" },
                React.createElement("label", { className: labelsClass, htmlFor: "password" }, "password"),
                React.createElement("input", { id: "password", type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); }, className: inputsClass })),
            React.createElement("button", { className: "bg-oceanBlue hover:bg-aboveOcean text-white font-monsterratBold px-4 py-2 rounded-lg mt-5", onClick: signupHandler }, "SignUp"),
            React.createElement("p", { className: "dark:text-white text-midnight font-monsterratMedium" },
                " Do you have Account?",
                React.createElement(link_1["default"], { className: "text-oceanBlue", href: "/signin" }, " Sign In")))));
}
exports["default"] = SignUp;
