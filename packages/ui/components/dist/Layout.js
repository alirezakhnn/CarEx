"use strict";
exports.__esModule = true;
exports.Layout = void 0;
var Footer_1 = require("./Footer");
var Nav_1 = require("./Nav");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var react_2 = require("next-auth/react");
var layoutVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 }
};
function Layout(_a) {
    var children = _a.children;
    var status = react_2.useSession().status;
    return (react_1["default"].createElement(framer_motion_1.motion.div, { variants: layoutVariants, initial: "initial", animate: "animate", transition: { duration: 0.5 }, className: "grid" },
        react_1["default"].createElement(Nav_1.Nav, null),
        react_1["default"].createElement("main", null, children),
        status === "authenticated" ? react_1["default"].createElement(Footer_1.Footer, null) : null));
}
exports.Layout = Layout;
