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
exports.getStaticProps = void 0;
var react_1 = require("react");
var ui_1 = require("ui");
var axios_1 = require("axios");
var material_1 = require("@mui/material");
var react_2 = require("next-auth/react");
var router_1 = require("next/router");
function getAuthorizationHeader() {
    return __awaiter(this, void 0, void 0, function () {
        var token;
        return __generator(this, function (_a) {
            token = process.env.GITHUB_TOKEN;
            return [2 /*return*/, { Authorization: "Bearer" + token }];
        });
    });
}
function getStaticProps() {
    return __awaiter(this, void 0, void 0, function () {
        var baseUrl, headers_1, directoriesResponse, directories, promises, _a, dir1Files, dir2Files, pictureContent, error_1;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    baseUrl = 'https://api.github.com/repos/alirezakhnn/CarExPics';
                    return [4 /*yield*/, getAuthorizationHeader()];
                case 1:
                    headers_1 = _b.sent();
                    return [4 /*yield*/, axios_1["default"].get(baseUrl + "/contents", { headers: headers_1 })];
                case 2:
                    directoriesResponse = _b.sent();
                    directories = directoriesResponse.data;
                    promises = directories.map(function (directory) { return __awaiter(_this, void 0, void 0, function () {
                        var dirResponse, files;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, axios_1["default"].get(directory.url, {
                                        headers: headers_1
                                    })];
                                case 1:
                                    dirResponse = _a.sent();
                                    files = dirResponse.data;
                                    return [2 /*return*/, files.map(function (file) { return ({
                                            name: file.name,
                                            downloadUrl: file.download_url
                                        }); })];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(promises)];
                case 3:
                    _a = _b.sent(), dir1Files = _a[0], dir2Files = _a[1];
                    pictureContent = {
                        dark: dir1Files,
                        light: dir2Files
                    };
                    return [2 /*return*/, {
                            props: {
                                pictureContent: pictureContent
                            }
                        }];
                case 4:
                    error_1 = _b.sent();
                    console.error('Error fetching data:', error_1);
                    return [2 /*return*/, {
                            props: {
                                pictureContent: null
                            }
                        }];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.getStaticProps = getStaticProps;
function Web(_a) {
    var pictureContent = _a.pictureContent;
    var _b = react_1.useState(true), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_1.useState(false), error = _c[0], setError = _c[1];
    var status = react_2.useSession().status;
    var router = router_1.useRouter();
    react_1.useEffect(function () {
        if (pictureContent) {
            if (pictureContent.dark.length > 0 && pictureContent.light.length > 0) {
                setIsLoading(false);
            }
        }
        else {
            setError(true);
            setIsLoading(false);
        }
    }, [pictureContent]);
    return (react_1["default"].createElement("div", null, isLoading ? (react_1["default"].createElement(ui_1.SquareLoader, null)) : (react_1["default"].createElement(react_1["default"].Fragment, null, error ? (react_1["default"].createElement(material_1.Typography, { variant: "h3", color: "primary.main", className: "text-center mt-[10%]  xxs:text-md leading-relaxed sm:text-lg lg:text-xl mx-20" }, "Bad Credential or Request Limit Reached!")) : (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(ui_1.Header, { pictureContent: pictureContent }),
        status === 'authenticated' ? react_1["default"].createElement(ui_1.Main, null) : null))))));
}
exports["default"] = Web;
