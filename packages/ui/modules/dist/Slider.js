"use strict";
exports.__esModule = true;
exports.Slider = void 0;
var swiper_1 = require("swiper");
var react_1 = require("swiper/react");
// import 'swiper/swiper-bundle.min.css';
require("../css/Slider.css");
var image_1 = require("next/image");
swiper_1["default"].use([
    swiper_1.Pagination, swiper_1.Autoplay,
    swiper_1.EffectCoverflow
]);
var images = [
    { src: '/images/colorSpotCar.jpg', alt: 'spotCar' },
    { src: '/images/edgeCar.jpg', alt: 'edgeCar' },
    { src: '/images/backCar.jpg', alt: 'backCar' },
];
function Slider() {
    return (React.createElement("div", { className: " container xl:min-w-[100rem] min-w-[100vw] hidden \n        dark:block absolute lg:top-[-35vh] xxs:top-0 \n        w-screen justify-center\n        bg-center bg-fixed justify-self-center z-0 xs:top-[-5%]" },
        React.createElement(react_1.Swiper, { slidesPerView: 1, pagination: { clickable: true }, scrollbar: { draggable: false }, effect: 'coverflow', centeredSlides: true, loop: true, spaceBetween: 500, autoplay: {
                delay: 4000,
                pauseOnMouseEnter: true,
                waitForTransition: true,
                reverseDirection: true,
                disableOnInteraction: true
            }, coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            } }, images.map(function (pic, index) { return (React.createElement(react_1.SwiperSlide, { key: index },
            React.createElement(image_1["default"], { src: pic.src, width: 1500, height: 500, alt: pic.alt, className: "opacity-[45%] w-full \n                                object-cover\n                                bg-center xxs:min-h-[73vh]\n                                md:min-h-[100%]" }))); }))));
}
exports.Slider = Slider;
