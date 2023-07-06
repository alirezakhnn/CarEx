"use strict";
exports.__esModule = true;
exports.Layout = void 0;
var Footer_1 = require("./Footer");
var Nav_1 = require("./Nav");
var framer_motion_1 = require("framer-motion");
var layoutVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 }
};
function Layout(_a) {
    var children = _a.children;
    return (React.createElement(framer_motion_1.motion.div, { variants: layoutVariants, initial: "initial", animate: "animate", transition: { duration: 0.5 }, className: "grid" },
        React.createElement(Nav_1.Nav, null),
        React.createElement("main", null, children),
        React.createElement(Footer_1.Footer, null)));
}
exports.Layout = Layout;
