"use strict";
exports.__esModule = true;
exports.Footer = void 0;
var Logo_1 = require("../modules/Logo");
var link_1 = require("next/link");
var Icons_1 = require("../modules/Icons");
var next_themes_1 = require("next-themes");
var react_1 = require("react");
function Footer() {
    var theme = next_themes_1.useTheme().theme;
    var footerLinks = [
        { href: '/', content: "All" },
        { href: '/add-car', content: "Add Car" },
        { href: '/', content: "Blog" },
        { href: '/add-car', content: "Add Car" },
        { href: '/', content: "Contact" },
        { href: '/', content: "All" },
        { href: '/add-car', content: "Add Car" },
        { href: '/', content: "Blog" },
        { href: '/', content: "Contact" },
        { href: '/add-car', content: "Add Car" },
        { href: '/', content: "Contact" },
        { href: '/', content: "All" },
    ];
    var _a = react_1.useState(false), fillColor = _a[0], setFillColor = _a[1];
    react_1.useEffect(function () {
        if (theme === 'dark' || theme === 'system' || theme === 'undefined' || theme !== 'light') {
            setFillColor(true);
        }
        else if (theme === 'light') {
            setFillColor(false);
        }
    }, [theme]);
    return (react_1["default"].createElement("div", { className: "mt-[20%] z-0" },
        react_1["default"].createElement(Icons_1.CurvedBorder, { fill: fillColor ? '#000' : '#fff' }),
        react_1["default"].createElement("footer", { className: "grid py-8 text-white bg-deepOcean gap-y-6 px-24 mt-5 xxs:min-w-[100vw] md:min-w-screen" },
            react_1["default"].createElement(Logo_1.Logo, { className: "dark:text-white text-silver" }),
            react_1["default"].createElement("ul", { className: "grid place-items-center ml-[5%] font-monsterratMedium xxs:grid-cols-2 md:grid-cols-4 gap-y-5 list-none dark:text-white mt-20" }, footerLinks.map(function (item, index) { return (react_1["default"].createElement(link_1["default"], { className: "font-monsterratItalic hover:text-silver transition-all", key: index, href: item.href }, item.content)); }))),
        react_1["default"].createElement(Icons_1.CurvedBorder, { fill: "#03234f", className: "xxs:mt-[-2%]" })));
}
exports.Footer = Footer;
