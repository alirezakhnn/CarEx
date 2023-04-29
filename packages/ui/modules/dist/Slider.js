"use strict";
exports.__esModule = true;
exports.Slider = void 0;
var swiper_1 = require("swiper");
var react_1 = require("swiper/react");
require("swiper/swiper-bundle.min.css");
var image_1 = require("next/image");
swiper_1["default"].use([swiper_1.Navigation, swiper_1.Pagination, swiper_1.Autoplay]);
var images = [
    { src: '/images/colorSpotCar.jpg', alt: 'spotCar' },
    { src: '/images/edgeCar.jpg', alt: 'edgeCar' },
    { src: '/images/outCar.jpg', alt: 'outCar' },
    { src: '/images/backCar.jpg', alt: 'backCar' },
];
function Slider() {
    return (React.createElement("div", { className: "container hidden dark:block \n    absolute top-[-25%] w-full \n    bg-center bg-fixed justify-self-center z-0" },
        React.createElement(react_1.Swiper, { navigation: true, slidesPerView: 1, pagination: { clickable: true }, scrollbar: { draggable: false }, effect: 'cube', loop: true, autoplay: {
                delay: 4000,
                pauseOnMouseEnter: false,
                waitForTransition: true,
                reverseDirection: true,
                disableOnInteraction: true
            }, cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94
            } }, images.map(function (pic, index) { return (React.createElement(react_1.SwiperSlide, null,
            React.createElement(image_1["default"], { src: pic.src, key: index, width: 1500, height: 500, alt: pic.alt, className: "opacity-[45%] object-cover" }))); }))));
}
exports.Slider = Slider;
