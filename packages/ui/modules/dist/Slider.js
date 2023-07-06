"use strict";
exports.__esModule = true;
exports.Slider = void 0;
var swiper_1 = require("swiper");
var react_1 = require("swiper/react");
var image_1 = require("next/image");
var next_themes_1 = require("next-themes");
require("../css/Slider.css");
swiper_1["default"].use([swiper_1.Pagination, swiper_1.Autoplay, swiper_1.EffectCoverflow]);
var backgroundSliderStyle = "\n    w-full \n    object-cover\n    bg-center xxs:min-h-[73vh]\n    md:min-h-[100%]\n";
function Slider(props) {
    var pictureContent = props.pictureContent;
    var dark = pictureContent.dark, light = pictureContent.light;
    var resolvedTheme = next_themes_1.useTheme().resolvedTheme;
    return (React.createElement("div", { className: "container ml-16 min-w-[100vw] dark:block absolute lg:top-[-35vh] xxs:top-0 w-screen justify-center bg-center bg-fixed justify-self-center z-0 xs:top-[-5%]" },
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
            } },
            resolvedTheme === 'dark' &&
                dark.map(function (pic, index) {
                    var downloadUrl = pic.downloadUrl, name = pic.name;
                    return (React.createElement(react_1.SwiperSlide, { key: index, className: "dark:block hidden" },
                        React.createElement(image_1["default"], { priority: true, src: downloadUrl, alt: name, width: 1500, height: 500, className: backgroundSliderStyle + " opacity-[45%]" })));
                }),
            resolvedTheme === 'light' &&
                light.map(function (pic, index) {
                    var downloadUrl = pic.downloadUrl, name = pic.name;
                    return (React.createElement(react_1.SwiperSlide, { key: index, className: "dark:hidden block" },
                        React.createElement(image_1["default"], { priority: true, src: downloadUrl, alt: name, width: 1500, height: 500, className: backgroundSliderStyle + " opacity-[35%]" })));
                }),
            resolvedTheme === 'system' &&
                dark.map(function (pic, index) {
                    var downloadUrl = pic.downloadUrl, name = pic.name;
                    return (React.createElement(react_1.SwiperSlide, { key: index },
                        React.createElement(image_1["default"], { priority: true, src: downloadUrl, alt: name, width: 1500, height: 500, className: backgroundSliderStyle + " opacity-[35%]" })));
                }))));
}
exports.Slider = Slider;
