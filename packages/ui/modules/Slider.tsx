import SwiperCore,
{
    Pagination,
    Autoplay,
    EffectCoverflow
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import '../css/Slider.css';
import Image from 'next/image';
import { useTheme } from 'next-themes';

SwiperCore.use([
    Pagination, Autoplay,
    EffectCoverflow
]);

const backgroundSliderStyle = `
    w-full 
    object-cover
    bg-center xxs:min-h-[73vh]
    md:min-h-[100%]
`;

const darkImages = [
    { src: '/images/dark/colorSpotCar.jpg', alt: 'spotCar' },
    { src: '/images/dark/edgeCar.jpg', alt: 'edgeCar' },
    { src: '/images/dark/backCar.jpg', alt: 'backCar' },
];

const lightImages = [
    { src: '/images/light/metalWhiteCar.webp', alt: 'metalWhiteCar' },
    { src: '/images/light/halfmetalWhiteCar.jpg', alt: 'halfmetalWhiteCar' },
    { src: '/images/light/silverSuperSportCar.webp', alt: 'silverSuperSportCar' },
];

export default function Slider(): any {
    const { theme } = useTheme();
    return (
        <div className=" container xl:min-w-[100rem] min-w-[100vw]
        dark:block absolute lg:top-[-35vh] xxs:top-0 
        w-screen justify-center
        bg-center bg-fixed justify-self-center z-0 xs:top-[-5%]">
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: false }}
                effect={'coverflow'}
                centeredSlides={true}
                loop
                spaceBetween={500}
                autoplay={{
                    delay: 4000,
                    pauseOnMouseEnter: true,
                    waitForTransition: true,
                    reverseDirection: true,
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
            </Swiper>
        </div >
    );
}