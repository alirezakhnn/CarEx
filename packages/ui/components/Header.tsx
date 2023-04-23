import { Logo } from "../modules/Logo";
import Image from 'next/image';
import { BtnRotator } from "./Button";
import { GitHub, Instagram, Telegram, LeftArrow, RightArrow } from "../modules/Icons";
import { Typography } from '@mui/material'

export function Header() {
    const imageSource = '/images/outCar.jpg';
    return (
        <header className="flex font-monsterrat justify-around">
            <Image src={imageSource} alt="CarExHead" width={500} height={500}
                className={` hidden dark:block absolute top-0 object-cover opacity-[12%] w-full
                    h-[80%] bg-center bg-fixed justify-self-center z-[-1]
                    `}
            />
            <div className="grid mt-5">
                <Logo className='xl:text-2xl' />
                <Typography
                    variant="h3"
                    className="dark:text-white text-3xl max-w-[450px]">
                    <span className="text-oceanBlue">Feel</span> Modernity and
                    <span className="bg-gradient-to-r from-oceanBlue to-silver bg-clip-text text-transparent text-oceanBlue">Futuristic</span>
                </Typography>
                <Typography
                    className="dark:text-white flex gap-1 text-md"
                    variant="h4"
                >
                    Car
                    <strong className="text-oceanBlue font-bold">Exhibition</strong>
                </Typography>
                <BtnRotator
                    href="#"
                    className={`w-[150px] h-[80px] text-sm mt-5 justify-self-left text-[22px]
                    `}
                >Start
                </BtnRotator>
            </div>
            <div className="grid place-items-center">
                <Telegram />
                <Instagram />
                <GitHub />
                <div className="flex gap-3 mt-10">
                    <LeftArrow />
                    <RightArrow />
                </div>
            </div>
        </header>
    );
}