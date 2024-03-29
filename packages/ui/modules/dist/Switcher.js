"use strict";
exports.__esModule = true;
exports.Switcher = void 0;
var react_1 = require("react");
var next_themes_1 = require("next-themes");
require("../css/switcher.css");
var react_2 = require("react");
function Switcher(props) {
    var _a = next_themes_1.useTheme(), systemTheme = _a.systemTheme, theme = _a.theme, setTheme = _a.setTheme;
    var currentTheme = theme === 'system' ? systemTheme : theme;
    var _b = react_1.useState(true), checked = _b[0], setChecked = _b[1];
    react_1.useEffect(function () {
        setChecked(theme === 'dark' || theme === 'system');
    }, [theme]);
    var checkHandler = function (e) {
        setChecked(e.target.checked);
    };
    return (react_2["default"].createElement(react_2["default"].Fragment, null,
        react_2["default"].createElement("input", { type: "checkbox", id: "switcher", checked: checked, onChange: checkHandler }),
        react_2["default"].createElement("label", { htmlFor: "switcher", className: "switch bg-gradient-to-b from-transparent \n            via-white to-silver \n            shadow-lg dark:shadow-midnight\n            ", onClick: function () {
                if (currentTheme === 'dark' && checked) {
                    setTheme('light');
                }
                else if (currentTheme === 'light' && !checked) {
                    setTheme('dark');
                }
            } },
            react_2["default"].createElement("div", { className: "powersign" }))));
}
exports.Switcher = Switcher;
