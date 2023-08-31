import SwiperCore, {
    Pagination,
    Autoplay,
    EffectCoverflow
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import '../css/Slider.css';
import React from 'react';

SwiperCore.use([Pagination, Autoplay, EffectCoverflow]);

const backgroundSliderStyle = `
    w-full 
    object-cover
    bg-center xxs:min-h-[73vh]
    md:min-h-[100%]
`;

interface SliderProps {
    pictureContent: {
        dark: { downloadUrl: string; name: string }[];
        light: { downloadUrl: string; name: string }[];
    };
}

export function Slider(props: SliderProps): React.ReactElement {
    const { pictureContent } = props;
    const { dark, light } = pictureContent;

    const { resolvedTheme } = useTheme();

    return (
        <div className="container xxs:min-w-[150vw] md:min-w-[100vw] dark:block absolute lg:top-[-35vh] xxs:top-0 justify-center bg-center bg-fixed justify-self-center z-0 xs:top-[-5%]">
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
                {resolvedTheme === 'dark' &&
                    dark.map((pic, index) => {
                        const { downloadUrl, name } = pic;
                        return (
                            <SwiperSlide key={index} className="dark:block hidden">
                                <Image
                                    priority={true}
                                    src={downloadUrl}
                                    alt={name}
                                    width={1500}
                                    height={500}
                                    className={`${backgroundSliderStyle} opacity-[45%]`}
                                />
                            </SwiperSlide>
                        );
                    })}
                {resolvedTheme === 'light' &&
                    light.map((pic, index) => {
                        const { downloadUrl, name } = pic;
                        return (
                            <SwiperSlide key={index} className="dark:hidden block">
                                <Image
                                    priority={true}
                                    src={downloadUrl}
                                    alt={name}
                                    width={1500}
                                    height={500}
                                    className={`${backgroundSliderStyle} opacity-[35%]`}
                                />
                            </SwiperSlide>
                        );
                    })}
                {resolvedTheme === 'system' &&
                    dark.map((pic, index) => {
                        const { downloadUrl, name } = pic;
                        return (
                            <SwiperSlide key={index}>
                                <Image
                                    priority={true}
                                    src={downloadUrl}
                                    alt={name}
                                    width={1500}
                                    height={500}
                                    className={`${backgroundSliderStyle} opacity-[35%]`}
                                />
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </div>
    );
}
