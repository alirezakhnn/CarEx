"use strict";
exports.__esModule = true;
exports.TimeLine = void 0;
var react_vertical_timeline_component_1 = require("react-vertical-timeline-component");
// import 'react-vertical-timeline-component/style.min.css';
require("../css/React_vertical_timeline.css");
var Button_1 = require("../modules/Button");
// import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
var Icons_1 = require("./Icons");
var Add_1 = require("@mui/icons-material/Add");
var timelineElements = [
    {
        id: 1,
        title: 'Porsche',
        subtitle: '918 spyder',
        picture: '/images/TimeLinePics/Porsche.jpg',
        alt: 'porsche918',
        date: '2014-15',
        description: 'The Porsche 918 Spyder is a hybrid hypercar with impressive performance, cutting-edge technology, and limited production.',
        iconStyle: { background: 'black', color: '#fff', boxShadow: '0 0 20px #116AE3' },
        icon: React.createElement(Icons_1.Porsche, null)
    },
    {
        id: 2,
        title: 'BMW',
        subtitle: 'futuristic',
        picture: '/images/TimeLinePics/BMW.jpg',
        alt: 'bMWfutureCar',
        date: 'coming soon',
        description: 'BMW is a German luxury automobile manufacturer known for producing high-performance cars with elegant designs and advanced technology.',
        iconStyle: { background: 'black', color: '#fff', boxShadow: '0 0 20px #116AE3' },
        icon: React.createElement(Icons_1.BMW, null)
    },
    {
        id: 3,
        title: 'Benz',
        subtitle: 'Amg',
        picture: '/images/TimeLinePics/Benz.jpg',
        alt: 'BenzAMG',
        date: '2019 - 2020',
        description: 'Benz AMG is the high-performance division of Mercedes-Benz, specializing in creating powerful and exhilarating sports cars and luxury vehicles.',
        iconStyle: { background: 'black', color: '#fff', boxShadow: '0 0 20px #116AE3' },
        icon: React.createElement(Icons_1.Benz, null)
    },
    {
        id: 4,
        title: 'Audi',
        subtitle: 'R8',
        picture: '/images/TimeLinePics/Audi.jpg',
        alt: 'AudiR8',
        date: '2017 - 2018',
        description: 'The Audi R8 is a high-performance sports car known for its sleek design, powerful performance, and cutting-edge technology.',
        iconStyle: { background: 'black', color: '#fff', boxShadow: '0 0 20px #116AE3' },
        icon: React.createElement(Icons_1.Audi, null)
    },
];
exports.TimeLine = function () {
    return (React.createElement(react_vertical_timeline_component_1.VerticalTimeline, null,
        timelineElements.map(function (element) { return (React.createElement(react_vertical_timeline_component_1.VerticalTimelineElement, { key: element.id, className: "vertical-timeline-element vertical-timeline-element--work text-midnight dark:text-white", date: element.date, iconStyle: element.iconStyle, icon: element.icon },
            React.createElement("img", { src: element.picture, alt: element.alt, className: "opacity-[85%] ml-8 rounded-xl", width: 400, height: 400 }),
            React.createElement("h3", { className: "vertical-timeline-element-title font-bold font-monsterratBold" }, element.title),
            React.createElement("h4", { className: "vertical-timeline-element-subtitle font-monsterratItalic text-oceanBlue" }, element.subtitle),
            React.createElement("p", { className: "font-monsterratMedium" }, element.description),
            React.createElement(Button_1.BtnRotator, { href: "brand_cars/" + element.id, className: 'mt-6 ml-4' }, "More"))); }),
        React.createElement("div", { className: "flex justify-center" },
            React.createElement(Button_1.BtnRotator, { href: "/add-car", className: "" },
                React.createElement(Add_1["default"], null)))));
};
