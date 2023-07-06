"use strict";
exports.__esModule = true;
exports.Slider = void 0;
var swiper_1 = require("swiper");
var react_1 = require("swiper/react");
// import 'swiper/swiper-bundle.min.css';
var image_1 = require("next/image");
// this is my custom swiper style
require("../css/Slider.css");
// to check the dark mode and light mode and set the proper pics
var next_themes_1 = require("next-themes");
// the props which i've used in my header (swiperjs)
swiper_1["default"].use([
    swiper_1.Pagination, swiper_1.Autoplay,
    swiper_1.EffectCoverflow
]);
// this is the similar styles of Image component in SwiperSlider comp
var backgroundSliderStyle = "\n    w-full \n    object-cover\n    bg-center xxs:min-h-[73vh]\n    md:min-h-[100%]\n";
function Slider(props) {
    var pictureContent = props.pictureContent;
    var dark = pictureContent.dark, light = pictureContent.light;
    var theme = next_themes_1.useTheme().theme;
    return (React.createElement("div", { className: " container ml-16 min-w-[100vw]\n        dark:block absolute lg:top-[-35vh] xxs:top-0 \n        w-screen justify-center\n        bg-center bg-fixed justify-self-center z-0 xs:top-[-5%]" },
        React.createElement(react_1.Swiper
        // shows one picture in every slide
        , { 
            // shows one picture in every slide
            slidesPerView: 1, 
            // ignore to click by user
            pagination: { clickable: true }, 
            // ignore to drag the picture by user
            scrollbar: { draggable: false }, 
            // this is the swiperjs's animation in effect props
            effect: 'coverflow', centeredSlides: true, loop: true, 
            // to make space between pics
            spaceBetween: 500, autoplay: {
                // 4000ms
                delay: 4000,
                // when the mouse enter on slider it pauses sliding
                pauseOnMouseEnter: true,
                // it waits for animation
                waitForTransition: true,
                // slides from left to right
                reverseDirection: true,
                // when the user is interacting around slider it stop scrolling (if true)
                disableOnInteraction: false
            }, coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            } },
            theme === 'dark' ?
                dark.map(function (pic, index) {
                    var downloadUrl = pic.downloadUrl, name = pic.name;
                    // const { src, alt } = pic;
                    return (React.createElement(react_1.SwiperSlide, { key: index, className: "dark:block hidden" },
                        React.createElement(image_1["default"], { src: downloadUrl, alt: name, width: 1500, height: 500, className: backgroundSliderStyle + " opacity-[45%]" })));
                }) : null,
            theme === 'light' ?
                light.map(function (pic, index) {
                    var downloadUrl = pic.downloadUrl, name = pic.name;
                    // const { src, alt } = pic;
                    return (React.createElement(react_1.SwiperSlide, { key: index, className: "dark:hidden block" },
                        React.createElement(image_1["default"], { src: downloadUrl, alt: name, width: 1500, height: 500, className: backgroundSliderStyle + " opacity-[35%]" })));
                }) : null,
            theme === 'system' ? dark.map(function (pic, index) {
                var downloadUrl = pic.downloadUrl, name = pic.name;
                // const { src, alt } = pic;
                return (React.createElement(react_1.SwiperSlide, { key: index },
                    React.createElement(image_1["default"], { src: downloadUrl, alt: name, width: 1500, height: 500, className: backgroundSliderStyle + " opacity-[35%]" })));
            })
                : null)));
}
exports.Slider = Slider;
