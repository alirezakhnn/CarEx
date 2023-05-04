import TelegramIcon from '@mui/icons-material/Telegram';
import SearchIcon from '@mui/icons-material/Search';
import InstagramIcon from '@mui/icons-material/Instagram';
import FaceBookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import { useState } from 'react';

const ContactsStyle = `
    rounded-full dark:text-white
    dark:hover:text-midnight dark:hover:bg-gradient-to-r from-silver to-white transition-all duration-300 
    text-darknight w-[20px] h-[60px] hover:text-oceanBlue
    text-center p-3 cursor-pointer opacity-70 hover:scale-110 z-1
`;

const DimensionContactIcons = `w-[30px] h-[30px]`;

export function Telegram() {
    return (
        <Button
            href="#"
            className={ContactsStyle}
        >
            <TelegramIcon
                className={DimensionContactIcons}
            />
        </Button>
    );
}

export function Instagram() {
    return (
        <Button
            href="#"
            className={ContactsStyle}
        >
            <InstagramIcon
                className={DimensionContactIcons}
            />
        </Button>
    );
}
export function Facebook() {
    return (
        <Button
            href="#"
            className={ContactsStyle}
        >
            <FaceBookIcon
                className={DimensionContactIcons}
            />
        </Button>
    );
}

export function SearchBarIcon() {
    const [inputAppear, setInputAppear] = useState(false);

    return (
        <div className="flex">
            <input type="text" placeholder="search for Car"
                className={`${inputAppear ? 'block' : 'hidden'} 
                rounded-full py-4 px-3 
                placeholder-white z-10 outline-none bg-gradient-to-r 
                from-oceanBlue via-deepOcean to-oceanBlue sticky 
                top-[23%] right-[20%] text-white animate-pulse w-[80px] h-[80px]
                `}
            />
            <Button
                onClick={() => setInputAppear(prev => !prev)}
                className={`${inputAppear ? '' : null} h-[60px] w-[40px] 
                dark:text-silver text-midnight rounded-full
                `}
            >
                <SearchIcon
                    className="h-[55px] w-[55px] hover:text-oceanBlue 
                    transition-all duration-500 hover:scale-110"
                />
            </Button>
        </div>
    );
}