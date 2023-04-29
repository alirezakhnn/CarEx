import { BtnRotator } from "./Button";
import { Facebook, Instagram, Telegram } from "../modules/Icons";
import { Typography } from '@mui/material';
import { Slider } from '../modules/Slider';

export function Header() {
    return (
        <header className="flex justify-center align-center">
            <div className="grid grid-cols-1 font-monsterratBold px-[13%]">
                <Slider />
                <div className="grid mt-[15%] gap-y-5">
                    <Typography
                        variant="h3"
                        className="dark:text-white text-4xl max-w-[680px] font-monsterratBold font-bolder mt-14">
                        <span className="bg-clip-text dark:mix-blend-screen text-oceanBlue">
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
                        className={`w-[150px] h-[80px] text-sm mt-10 justify-self-left text-md
                    `}
                    >Start
                    </BtnRotator>
                </div>
            </div>
            <div className="grid justify-end mt-[9%] py-10">
                <Telegram />
                <Instagram />
                <Facebook />
            </div>
        </header>
    );
}