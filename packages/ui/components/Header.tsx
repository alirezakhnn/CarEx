import { Logo } from "../modules/Logo";
import Image from 'next/image';
import { BtnRotator } from "./Button";
import { GitHub, Instagram, Telegram, LeftArrow, RightArrow } from "../modules/Icons";
import { Typography } from '@mui/material'
import { RationBtn } from "../modules/RatioBtn";

export function Header() {
    const imageSource = '/images/outCar.jpg';
    return (
        <header className="flex font-monsterratBold justify-around px-14">
            <Image src={imageSource} alt="CarExHead" width={500} height={500}
                className={` hidden dark:block absolute top-0 object-cover opacity-[45%] w-full
                    h-[80%] bg-center bg-fixed justify-self-center z-[-1]
                    `}
            />
            <div className="grid mt-5 ml-4">
                <Typography
                    variant="h3"
                    className="dark:text-white text-4xl max-w-[680px] font-monsterratBold font-bolder mt-14">
                    <span className="bg-clip-text dark:mix-blend-overlay dark:text-white text-oceanBlue">
                        Feel
                    </span> Modernity and
                    <span className="bg-clip-text dark:mix-blend-screen text-oceanBlue"> Futuristic</span>
                </Typography>
                <Typography
                    className="dark:text-white flex gap-1 text-md font-monsterratBold"
                    variant="h4"
                >
                    Car
                    <strong className="text-oceanBlue dark:mix-blend-screen font-bold">Exhibition</strong>
                </Typography>
                <BtnRotator
                    href="#"
                    className={`w-[150px] h-[80px] text-sm mt-5 justify-self-left text-mlg
                    `}
                >Start
                </BtnRotator>
            </div>
            <div className="grid place-items-center mt-20 gap-y-4">
                <Telegram />
                <Instagram />
                <GitHub />
                <div className="flex gap-3 mt-10">
                    <LeftArrow />
                    <RightArrow />
                </div>
                <div>
                    <RationBtn />
                </div>
            </div>
        </header>
    );
}