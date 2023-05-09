"use strict";
exports.__esModule = true;
var swiper_1 = require("swiper");
var react_1 = require("swiper/react");
// import 'swiper/swiper-bundle.min.css';
require("../css/Slider.css");
var image_1 = require("next/image");
var next_themes_1 = require("next-themes");
swiper_1["default"].use([
    swiper_1.Pagination, swiper_1.Autoplay,
    swiper_1.EffectCoverflow
]);
var backgroundSliderStyle = "\n    w-full \n    object-cover\n    bg-center xxs:min-h-[73vh]\n    md:min-h-[100%]\n";
var darkImages = [
    { src: '/images/dark/colorSpotCar.jpg', alt: 'spotCar' },
    { src: '/images/dark/edgeCar.jpg', alt: 'edgeCar' },
    { src: '/images/dark/backCar.jpg', alt: 'backCar' },
];
var lightImages = [
    { src: '/images/light/metalWhiteCar.webp', alt: 'metalWhiteCar' },
    { src: '/images/light/halfmetalWhiteCar.jpg', alt: 'halfmetalWhiteCar' },
];
function Slider() {
    var theme = next_themes_1.useTheme().theme;
    return (React.createElement("div", { className: " container xl:min-w-[100rem] min-w-[100vw]\n        dark:block absolute lg:top-[-35vh] xxs:top-0 \n        w-screen justify-center\n        bg-center bg-fixed justify-self-center z-0 xs:top-[-5%]" },
        React.createElement(react_1.Swiper, { slidesPerView: 1, pagination: { clickable: true }, scrollbar: { draggable: false }, effect: 'coverflow', centeredSlides: true, loop: true, spaceBetween: 500, autoplay: {
                delay: 4000,
                pauseOnMouseEnter: true,
                waitForTransition: true,
                reverseDirection: true,
                disableOnInteraction: false
            }, coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            } }, theme == 'dark' ?
            darkImages.map(function (pic, index) {
                var src = pic.src, alt = pic.alt;
                return (React.createElement(react_1.SwiperSlide, { key: index, className: "dark:block hidden" },
                    React.createElement(image_1["default"], { src: src, alt: alt, width: 1500, height: 500, className: backgroundSliderStyle + " opacity-[45%]" })));
            }) :
            lightImages.map(function (pic, index) {
                var src = pic.src, alt = pic.alt;
                return (React.createElement(react_1.SwiperSlide, { key: index, className: "dark:hidden block" },
                    React.createElement(image_1["default"], { src: src, alt: alt, width: 1500, height: 500, className: backgroundSliderStyle + " opacity-[35%]" })));
            }))));
}
exports["default"] = Slider;
