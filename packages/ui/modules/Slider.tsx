import SwiperCore,
{
    Navigation,
    Pagination,
    Autoplay,
    EffectCoverflow
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import '../css/Slider.css';
import Image from 'next/image';

SwiperCore.use([
    Pagination, Autoplay,
    EffectCoverflow
]);


const images = [
    { src: '/images/colorSpotCar.jpg', alt: 'spotCar' },
    { src: '/images/edgeCar.jpg', alt: 'edgeCar' },
    { src: '/images/backCar.jpg', alt: 'backCar' },
];

export function Slider(): any {
    return (
        <div className=" container xl:min-w-[100rem] min-w-[100vw] hidden 
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
                    disableOnInteraction: true,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
            >
                {
                    images.map((pic, index: number) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={pic.src}
                                width={1500}
                                height={500}
                                alt={pic.alt}
                                className="opacity-[45%] w-full 
                                object-cover
                                bg-center xxs:min-h-[73vh]
                                md:min-h-[100%]"
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}