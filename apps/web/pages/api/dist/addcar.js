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
var connectDB_1 = require("../../utils/connectDB");
var User_1 = require("../../models/User");
var react_1 = require("next-auth/react");
function handler(req, res) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var err_1, session, user, data, session, user, data, err_2;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!(req.method === "POST")) return [3 /*break*/, 7];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, connectDB_1["default"]()];
                case 2:
                    _d.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _d.sent();
                    console.log(err_1);
                    return [2 /*return*/, res
                            .status(500)
                            .json({ status: "failed", message: "Error in connecting to DB" })];
                case 4: return [4 /*yield*/, react_1.getSession({ req: req })];
                case 5:
                    session = _d.sent();
                    if (!session) {
                        return [2 /*return*/, res.status(422).json({
                                status: "failed",
                                message: "You are not Logged in"
                            })];
                    }
                    return [4 /*yield*/, User_1["default"].findOne({ email: (_a = session.user) === null || _a === void 0 ? void 0 : _a.email })];
                case 6:
                    user = _d.sent();
                    if (!user) {
                        return [2 /*return*/, res
                                .status(404)
                                .json({ status: "failed", message: "User doesn't exsit!" })];
                    }
                    data = req.body.data;
                    if (!data) {
                        return [2 /*return*/, res
                                .status(422)
                                .json({ status: "failed", message: "Invaild data!" })];
                    }
                    (_b = user.carsTimeline) === null || _b === void 0 ? void 0 : _b.push(data);
                    user.save();
                    res.status(201).json({ status: "success", message: "Car Added" });
                    return [3 /*break*/, 13];
                case 7:
                    if (!(req.method === "GET")) return [3 /*break*/, 13];
                    _d.label = 8;
                case 8:
                    _d.trys.push([8, 12, , 13]);
                    return [4 /*yield*/, connectDB_1["default"]()];
                case 9:
                    _d.sent();
                    return [4 /*yield*/, react_1.getSession({ req: req })];
                case 10:
                    session = _d.sent();
                    if (!session) {
                        return [2 /*return*/, res.status(422).json({
                                status: "failed",
                                message: "You are not Logged in"
                            })];
                    }
                    return [4 /*yield*/, User_1["default"].findOne({ email: (_c = session.user) === null || _c === void 0 ? void 0 : _c.email })];
                case 11:
                    user = _d.sent();
                    if (!user) {
                        return [2 /*return*/, res
                                .status(404)
                                .json({ status: "failed", message: "User doesn't exist!" })];
                    }
                    data = user.carsTimeline;
                    res.status(200).json({ status: "success", data: data });
                    return [3 /*break*/, 13];
                case 12:
                    err_2 = _d.sent();
                    console.log(err_2);
                    return [2 /*return*/, res
                            .status(500)
                            .json({ status: "failed", message: "Error in connecting to DB" })];
                case 13: return [2 /*return*/];
            }
        });
    });
}
exports["default"] = handler;
