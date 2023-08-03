"use strict";
exports.__esModule = true;
exports.TimeLine = void 0;
var react_vertical_timeline_component_1 = require("react-vertical-timeline-component");
// import 'react-vertical-timeline-component/style.min.css';
require("../css/React_vertical_timeline.css");
var Button_1 = require("../modules/Button");
var Button_2 = require("@mui/material/Button");
// import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
var Icons_1 = require("./Icons");
var Add_1 = require("@mui/icons-material/Add");
var react_1 = require("next-auth/react");
var react_2 = require("react");
var react_3 = require("react");
var SquareLoader_1 = require("./SquareLoader");
var link_1 = require("next/link");
;
var CarIcon = function (_a) {
    var icon = _a.icon;
    switch (icon.toLowerCase()) {
        case "porsche":
            return react_3["default"].createElement(Icons_1.Porsche, null);
        case "bmw":
            return react_3["default"].createElement(Icons_1.BMW, null);
        case "benz":
            return react_3["default"].createElement(Icons_1.Benz, null);
        case "audi":
            return react_3["default"].createElement(Icons_1.Audi, null);
        default:
            return null;
    }
};
exports.TimeLine = function () {
    var status = react_1.useSession().status;
    var _a = react_2.useState([]), data = _a[0], setData = _a[1];
    var _b = react_2.useState(true), loading = _b[0], setLoading = _b[1];
    react_2.useEffect(function () {
        if (status === 'authenticated') {
            fetch('api/addcar')
                .then(function (res) { return res.json(); })
                .then(function (data) { return setData(data.data); });
            setLoading(false);
        }
        setLoading(false);
    }, [status]);
    var iconstyle = {
        background: 'black', color: '#fff', boxShadow: '0 0 20px #116AE3'
    };
    if (data)
        return (react_3["default"].createElement(react_3["default"].Fragment, null,
            status === "authenticated" ? (react_3["default"].createElement(react_vertical_timeline_component_1.VerticalTimeline, null,
                data.map(function (element) { return (react_3["default"].createElement(react_vertical_timeline_component_1.VerticalTimelineElement, { key: element._id, className: "vertical-timeline-element vertical-timeline-element--work text-midnight dark:text-white", date: element.date, iconStyle: iconstyle, icon: react_3["default"].createElement(CarIcon, { icon: element.title }) },
                    element.picture ? (react_3["default"].createElement("img", { src: element.picture, alt: element.alt, className: "opacity-[85%] ml-8 rounded-xl", width: 400, height: 400 })) : react_3["default"].createElement(SquareLoader_1.SquareLoader, null),
                    react_3["default"].createElement("h3", { className: "vertical-timeline-element-title font-bold font-monsterratBold capitalize" }, element.title),
                    react_3["default"].createElement("h4", { className: "vertical-timeline-element-subtitle font-monsterratItalic text-oceanBlue" }, element.subtitle),
                    react_3["default"].createElement("p", { className: "font-monsterratMedium" }, element.description),
                    react_3["default"].createElement(Button_1.BtnRotator, { href: "cars-info/" + element._id, className: 'mt-6 ml-4' }, "More"))); }),
                react_3["default"].createElement("div", { className: "flex justify-center" },
                    react_3["default"].createElement(link_1["default"], { href: "/add-car" },
                        react_3["default"].createElement(Button_2["default"], { className: "bg-gradient-to-r from-oceanBlue to-deepOcean rounded-full shadow-xl shadow-deepOcean p-5 hover:shadow-lg hover:shadow-deepOcean hover:scale-110 transition-all text-white", variant: "contained" },
                            react_3["default"].createElement(Add_1["default"], null)))))) : react_3["default"].createElement(SquareLoader_1.SquareLoader, null),
            loading ? react_3["default"].createElement(SquareLoader_1.SquareLoader, null) : null));
};
