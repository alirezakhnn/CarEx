import SwiperCore,
{
    Pagination,
    Autoplay,
    EffectCoverflow
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import Image from 'next/image';

// this is my custom swiper style
import '../css/Slider.css';

// to check the dark mode and light mode and set the proper pics
import { useTheme } from 'next-themes';

// to make delay in loading swiper pics
import { Suspense } from 'react';

// the props which i've used in my header (swiperjs)
SwiperCore.use([
    Pagination, Autoplay,
    EffectCoverflow
]);

// this is the similar styles of Image component in SwiperSlider comp
const backgroundSliderStyle = `
    w-full 
    object-cover
    bg-center xxs:min-h-[73vh]
    md:min-h-[100%]
`;

// the images to render in dark mode
const darkImages = [
    { src: '/images/dark/colorSpotCar.jpg', alt: 'spotCar' },
    { src: '/images/dark/edgeCar.jpg', alt: 'edgeCar' },
    { src: '/images/dark/backCar.jpg', alt: 'backCar' },
    { src: '/images/dark/modernDarkCarMoonlightBlue.jpg', alt: 'modernDarkCarMoonlightBlue' },
];

// the images to render in light mode 
const lightImages = [
    { src: '/images/light/silverSuperSportCar.jpg', alt: 'silverSuperSportCar' },
    { src: '/images/light/metalWhiteCar.jpg', alt: 'metalWhiteCar' },
    { src: '/images/light/halfmetalWhiteCar.jpg', alt: 'halfmetalWhiteCar' },
    { src: '/images/light/bugattiLikeModernWhiteCar.jpg', alt: 'bugattiLikeModernWhiteCar' },
];

export default function Slider(): any {
    const { theme } = useTheme();
    return (
        <div className=" container xl:min-w-[100rem] ml-16 min-w-[100vw]
        dark:block absolute lg:top-[-35vh] xxs:top-0 
        w-screen justify-center
        bg-center bg-fixed justify-self-center z-0 xs:top-[-5%]">
            <Swiper
                // shows one picture in every slide
                slidesPerView={1}
                // ignore to click by user
                pagination={{ clickable: true }}
                // ignore to drag the picture by user
                scrollbar={{ draggable: false }}
                // this is the swiperjs's animation in effect props
                effect={'coverflow'}
                centeredSlides={true}
                loop
                // to make space between pics
                spaceBetween={500}
                autoplay={{
                    // 4000ms
                    delay: 4000,
                    // when the mouse enter on slider it pauses sliding
                    pauseOnMouseEnter: true,
                    // it waits for animation
                    waitForTransition: true,
                    // slides from left to right
                    reverseDirection: true,
                    // when the user is interacting around slider it stop scrolling (if true)
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
            >
                {/* the fallback props shows the component of loading 
                untill it downloaded*/}
                <Suspense fallback={<h1>Loading...</h1>}>
                    {theme == 'dark' ?
                        darkImages.map((pic, index: number) => {
                            const { src, alt } = pic;
                            return (
                                <SwiperSlide key={index} className="dark:block hidden">
                                    <Image
                                        src={src}
                                        alt={alt}
                                        width={1500}
                                        height={500}
                                        className={`${backgroundSliderStyle} opacity-[45%]`}
                                    />
                                </SwiperSlide>
                            );
                        }) :
                        lightImages.map((pic, index: number) => {
                            const { src, alt } = pic;
                            return (
                                <SwiperSlide key={index} className="dark:hidden block">
                                    <Image
                                        src={src}
                                        alt={alt}
                                        width={1500}
                                        height={500}
                                        className={`${backgroundSliderStyle} opacity-[35%]`}
                                    />
                                </SwiperSlide>
                            );
                        })
                    }
                    {
                        theme == 'system' ? darkImages.map((pic, index: number) => {
                            const { src, alt } = pic;
                            return (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={src}
                                        alt={alt}
                                        width={1500}
                                        height={500}
                                        className={`${backgroundSliderStyle} opacity-[35%]`}
                                    />
                                </SwiperSlide>
                            )
                        })
                            : null
                    }
                </Suspense>
            </Swiper>
        </div >
    );
}