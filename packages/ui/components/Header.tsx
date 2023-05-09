import { BtnRotator } from "../modules/Button";
import { Facebook, Instagram, Telegram } from "../modules/Icons";
import { Typography } from '@mui/material';
import dynamic from 'next/dynamic';
// import { Slider } from '../modules/Slider';
const Slider = dynamic(() => import('../modules/Slider'), { ssr: false });

export function Header() {
    return (
        <header className="xs:block sm:flex justify-center md:ml-16 xl:ml-0 align-center">
            <div className="grid grid-cols-1 font-monsterratBold xl:px-[13%]">
                <Slider />
                <div className="grid sm:mt-[-3%] xs:mt-[-8%] md:mt-[4%]
                sm:gap-y-0 md:gap-y-5
                select-none xxs:mt-[-7%] xxs:ml-10 ml-0 ">
                    <Typography style={{ animationIterationCount: '1.4' }}
                        variant="h3"
                        className="animate-pulse dark:text-white 
                        xl:landscape:text-4xl md:text-3xl
                        sm:text-2xl xs:text-xl
                        xl:max-w-[680px] lg:max-w-[550px] md:max-w-[550px] 
                        sm:max-w-[400px] xs:max-w-[300px]
                        sm:justify-self-left
                        font-monsterratBold font-bolder mt-14
                        ">
                        <span className="bg-clip-text dark:mix-blend-screen 
                        text-oceanBlue">
                            Feel
                        </span> Modernity and
                        <span className="bg-clip-text dark:mix-blend-screen 
                        text-oceanBlue"> Futuristic</span>
                    </Typography>
                    <Typography
                        className="dark:text-white flex gap-1 xs:text-sm
                        md:text-md xxs:text-sm xxs:mt-2 xs:mt-0 font-monsterratBold"
                        variant="h4"
                    >
                        Car
                        <strong className="text-oceanBlue dark:mix-blend-screen 
                        font-bold
                        ">Exhibition
                        </strong>
                    </Typography>
                    <BtnRotator
                        href="#"
                        className="lg:w-[150px] lg:h-[80px] xs:h-[60px] 
                        xs:w-[120px] xxs:mt-8 xxs:text-[14px] xs:text-sm
                        ">Start
                    </BtnRotator>
                </div>
            </div>
            <div className="xxs:hidden md:grid justify-end 
            xs:mt-[-5%] sm:mt-[9%] md:py-16
            ">
                <Telegram />
                <Instagram />
                <Facebook />
            </div>
        </header>
    );
}