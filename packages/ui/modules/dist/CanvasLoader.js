"use strict";
exports.__esModule = true;
var drei_1 = require("@react-three/drei");
var CanvasLoader = function () {
    var progress = drei_1.useProgress().progress;
    return (React.createElement(drei_1.Html, { as: 'div', center: true, style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        } },
        React.createElement("span", { className: 'canvas-loader' }),
        React.createElement("p", { style: {
                fontSize: 14,
                color: "#F1F1F1",
                fontWeight: 800,
                marginTop: 40
            } },
            progress.toFixed(2),
            "%")));
};
exports["default"] = CanvasLoader;
