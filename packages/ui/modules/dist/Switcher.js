'use client';
"use strict";
exports.__esModule = true;
exports.Switcher = void 0;
require("../css/switcher.css");
var next_themes_1 = require("next-themes");
function Switcher() {
    var _a = next_themes_1.useTheme(), systemTheme = _a.systemTheme, theme = _a.theme, setTheme = _a.setTheme;
    var currentTheme = theme === 'system' ? systemTheme : theme;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { type: "checkbox", id: "switcher" }),
        React.createElement("label", { htmlFor: "switcher", className: "switch bg-gradient-to-b from-oceanBlue to-silver", onClick: function () { return currentTheme == 'dark' ? setTheme('light') : setTheme('dark'); } },
            React.createElement("div", { className: "powersign" }))));
}
exports.Switcher = Switcher;
