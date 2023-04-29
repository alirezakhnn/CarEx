import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Image from 'next/image';

SwiperCore.use([Navigation, Pagination, Autoplay]);


const images = [
    { src: '/images/colorSpotCar.jpg', alt: 'spotCar' },
    { src: '/images/edgeCar.jpg', alt: 'edgeCar' },
    { src: '/images/outCar.jpg', alt: 'outCar' },
    { src: '/images/backCar.jpg', alt: 'backCar' },
];

export function Slider(): any {
    return (
        <div className="container hidden dark:block 
    absolute top-[-25%] w-full 
    bg-center bg-fixed justify-self-center z-0">
            <Swiper
                navigation
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: false }}
                effect={'cube'}
                loop
                autoplay={{
                    delay: 4000,
                    pauseOnMouseEnter: false,
                    waitForTransition: true,
                    reverseDirection: true,
                    disableOnInteraction: true,
                }}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
            >
                {
                    images.map((pic, index: number) => (
                        <SwiperSlide>
                            <Image
                                src={pic.src} key={index}
                                width={1500}
                                height={500}
                                alt={pic.alt}
                                className="opacity-[45%] object-cover"
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}