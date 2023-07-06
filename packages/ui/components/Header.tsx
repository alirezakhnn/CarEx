import { BtnRotator } from "../modules/Button";
import { Facebook, Instagram, Telegram } from "../modules/Icons";
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// we import Slider by next-dynamic to render the Slider component in browser
// const Slider = dynamic(() => import('../modules/Slider'), { ssr: false });
import { Slider } from "../modules/Slider";
interface SliderProps {
    pictureContent: any
}

type Slider = SliderProps;

export function Header({ pictureContent }: any) {
    return (
        <header className="xs:block sm:flex justify-center xxs:mr-16 md:mr-0 align-center">
            <div className="grid grid-cols-1 font-monsterratBold xl:px-[13%]">
                <Slider pictureContent={pictureContent} />
                {/* 
                the motion from framer-motion is to make animation of elements
                and for delaying "initial, animate and transition is 
                the motion's props"
                 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid sm:mt-[-3%] xs:mt-[-8%] md:mt-[4%]
                    sm:gap-y-0 md:gap-y-5
                    select-none xxs:mt-[-7%] xxs:ml-10 ml-0 ">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="dark:text-white 
                        xl:landscape:text-4xl md:text-3xl
                        xxs:text-2xl
                        xl:max-w-[680px] lg:max-w-[550px] md:max-w-[550px] 
                        sm:max-w-[400px] xs:max-w-[300px]
                        sm:justify-self-left
                        font-monsterratBold font-bolder mt-14
                        ">
                        <motion.span
                            className="bg-clip-text dark:mix-blend-screen
                        text-oceanBlue">
                            Feel
                        </motion.span> Modernity and
                        <span className="bg-clip-text dark:mix-blend-screen 
                        text-oceanBlue"> Futuristic</span>
                    </motion.h3>
                    <motion.h4
                        className="dark:text-white flex gap-1 xs:text-sm
                        md:text-md xxs:text-sm xxs:mt-2 xs:mt-0 font-monsterratBold"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Car
                        <strong className="text-oceanBlue dark:mix-blend-screen 
                        font-bold
                        ">Exhibition
                        </strong>
                    </motion.h4>
                    <BtnRotator
                        href="#"
                        className="lg:w-[150px] lg:h-[80px] xs:h-[60px] 
                        xs:w-[120px] xxs:mt-8 xxs:text-[14px] xs:text-sm
                        ">Start
                    </BtnRotator>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="xxs:hidden md:grid justify-end 
                xs:mt-[-5%] sm:mt-[9%] md:py-16
            ">
                <Telegram />
                <Instagram />
                <Facebook />
            </motion.div>

        </header>
    );
}