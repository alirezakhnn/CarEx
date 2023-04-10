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
require("../styles/globals.css");
var ui_1 = require("ui");
var next_themes_1 = require("next-themes");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(next_themes_1.ThemeProvider, { attribute: "class" },
        React.createElement(ui_1.ThemeContainer, null,
            React.createElement(ui_1.Layout, null,
                React.createElement(Component, __assign({}, pageProps))))));
}
exports["default"] = MyApp;
