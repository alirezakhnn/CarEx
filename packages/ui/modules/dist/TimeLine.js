"use strict";
exports.__esModule = true;
exports.TimeLine = void 0;
var react_vertical_timeline_component_1 = require("react-vertical-timeline-component");
// import 'react-vertical-timeline-component/style.min.css';
require("../css/React_vertical_timeline.css");
var Button_1 = require("../modules/Button");
var Add_1 = require("@mui/icons-material/Add");
var react_1 = require("next-auth/react");
var react_2 = require("react");
;
exports.TimeLine = function () {
    var status = react_1.useSession().status;
    var _a = react_2.useState([]), data = _a[0], setData = _a[1];
    react_2.useEffect(function () {
        if (status === 'authenticated')
            fetch('api/addcar')
                .then(function (res) { return res.json(); })
                .then(function (data) { return setData(data.data); });
    }, [status]);
    var iconstyle = "\n    background: 'black', color: '#fff', boxShadow: '0 0 20px #116AE3\n    ";
    if (data)
        return (React.createElement(React.Fragment, null, status === "authenticated" ? (React.createElement(react_vertical_timeline_component_1.VerticalTimeline, null,
            data.map(function (element) { return (React.createElement(react_vertical_timeline_component_1.VerticalTimelineElement, { key: element._id, className: "vertical-timeline-element vertical-timeline-element--work text-midnight dark:text-white", date: element.date, 
                // iconStyle={iconstyle}
                icon: element.icon },
                React.createElement("img", { src: element.picture, alt: element.alt, className: "opacity-[85%] ml-8 rounded-xl", width: 400, height: 400 }),
                React.createElement("h3", { className: "vertical-timeline-element-title font-bold font-monsterratBold" }, element.title),
                React.createElement("h4", { className: "vertical-timeline-element-subtitle font-monsterratItalic text-oceanBlue" }, element.subtitle),
                React.createElement("p", { className: "font-monsterratMedium" }, element.description),
                React.createElement(Button_1.BtnRotator, { href: '#', className: 'mt-6 ml-4' }, "More"))); }),
            React.createElement("div", { className: "flex justify-center" },
                React.createElement(Button_1.BtnRotator, { href: "/add-car", className: "" },
                    React.createElement(Add_1["default"], null))))) : (React.createElement("p", { className: "dark:text-white text-midnight text-xl font-monsterratBold" }, "Loading..."))));
};
