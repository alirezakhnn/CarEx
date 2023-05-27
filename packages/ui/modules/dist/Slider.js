"use strict";
exports.__esModule = true;
var swiper_1 = require("swiper");
var react_1 = require("swiper/react");
// import 'swiper/swiper-bundle.min.css';
var image_1 = require("next/image");
// this is my custom swiper style
require("../css/Slider.css");
// to check the dark mode and light mode and set the proper pics
var next_themes_1 = require("next-themes");
// to make delay in loading swiper pics
var react_2 = require("react");
// the props which i've used in my header (swiperjs)
swiper_1["default"].use([
    swiper_1.Pagination, swiper_1.Autoplay,
    swiper_1.EffectCoverflow
]);
// this is the similar styles of Image component in SwiperSlider comp
var backgroundSliderStyle = "\n    w-full \n    object-cover\n    bg-center xxs:min-h-[73vh]\n    md:min-h-[100%]\n";
// the images to render in dark mode
var darkImages = [
    { src: '/images/dark/colorSpotCar.jpg', alt: 'spotCar' },
    { src: '/images/dark/edgeCar.jpg', alt: 'edgeCar' },
    { src: '/images/dark/backCar.jpg', alt: 'backCar' },
    { src: '/images/dark/modernDarkCarMoonlightBlue.jpg', alt: 'modernDarkCarMoonlightBlue' },
];
// the images to render in light mode 
var lightImages = [
    { src: '/images/light/silverSuperSportCar.jpg', alt: 'silverSuperSportCar' },
    { src: '/images/light/metalWhiteCar.jpg', alt: 'metalWhiteCar' },
    { src: '/images/light/halfmetalWhiteCar.jpg', alt: 'halfmetalWhiteCar' },
    { src: '/images/light/bugattiLikeModernWhiteCar.jpg', alt: 'bugattiLikeModernWhiteCar' },
];
function Slider() {
    var theme = next_themes_1.useTheme().theme;
    return (React.createElement("div", { className: " container xl:min-w-[100rem] ml-16 min-w-[100vw]\n        dark:block absolute lg:top-[-35vh] xxs:top-0 \n        w-screen justify-center\n        bg-center bg-fixed justify-self-center z-0 xs:top-[-5%]" },
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
            React.createElement(react_2.Suspense, { fallback: React.createElement("h1", null, "Loading...") },
                theme == 'dark' ?
                    darkImages.map(function (pic, index) {
                        var src = pic.src, alt = pic.alt;
                        return (React.createElement(react_1.SwiperSlide, { key: index, className: "dark:block hidden" },
                            React.createElement(image_1["default"], { src: src, alt: alt, width: 1500, height: 500, className: backgroundSliderStyle + " opacity-[45%]" })));
                    }) :
                    lightImages.map(function (pic, index) {
                        var src = pic.src, alt = pic.alt;
                        return (React.createElement(react_1.SwiperSlide, { key: index, className: "dark:hidden block" },
                            React.createElement(image_1["default"], { src: src, alt: alt, width: 1500, height: 500, className: backgroundSliderStyle + " opacity-[35%]" })));
                    }),
                theme == 'system' ? darkImages.map(function (pic, index) {
                    var src = pic.src, alt = pic.alt;
                    return (React.createElement(react_1.SwiperSlide, { key: index },
                        React.createElement(image_1["default"], { src: src, alt: alt, width: 1500, height: 500, className: backgroundSliderStyle + " opacity-[35%]" })));
                })
                    : null))));
}
exports["default"] = Slider;
