'use client';
"use strict";
exports.__esModule = true;
exports.Switcher = void 0;
var react_1 = require("react");
require("../css/switcher.css");
// for the handling dark and light mode
var next_themes_1 = require("next-themes");
function Switcher() {
    var _a = next_themes_1.useTheme(), systemTheme = _a.systemTheme, theme = _a.theme, setTheme = _a.setTheme;
    var currentTheme = theme === 'system' ? systemTheme : theme;
    // handling the check state of switcher(when is true the button turns on)
    var _b = react_1.useState(true), checked = _b[0], setChecked = _b[1];
    // handles the changes of input checkbox
    var checkHandler = function (e) {
        setChecked(e.target.checked);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { type: "checkbox", id: "switcher", checked: checked, onChange: checkHandler }),
        React.createElement("label", { htmlFor: "switcher", className: "switch bg-gradient-to-b from-transparent \n            via-white to-silver \n            shadow-lg dark:shadow-midnight\n            ", 
            // conditions for corresponding the switchers styles with the current theme
            onClick: function () {
                if (currentTheme == 'dark' && checked) {
                    setTheme('light');
                }
                else if (currentTheme == 'light' && !checked) {
                    setTheme('dark');
                }
            } },
            React.createElement("div", { className: "powersign" }))));
}
exports.Switcher = Switcher;
