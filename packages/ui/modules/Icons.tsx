import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';

const ContactsStyle = `
    bg-gradient-to-r from-white to-silver rounded-full dark:text-midnight 
    dark:hover:text-oceanBlue transition-all duration-500 dark:mix-blend-screen
    text-darknight w-[40px] h-[60px] hover:text-oceanBlue
    text-center p-3 cursor-pointer opacity-70 hover:scale-110
`;

const ArrowStyle = `
    bg-gradient-to-l from-oceanBlue via-aboveOcean to-oceanBlue rounded-full text-center cursor-pointer 
    text-white w-[50px] h-[50px] hover:bg-deepOcean
`;

const DimensionsArrow = `w-[30px] h-[30px]`;

export function Telegram() {
    return (
        <Button
            href="#"
            className={ContactsStyle}
        >
            <TelegramIcon
                className={DimensionsArrow}
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
                className={DimensionsArrow}
            />
        </Button>
    );
}

export function GitHub() {
    return (
        <Button
            href="#"
            className={ContactsStyle}
        >
            <GitHubIcon
                className={DimensionsArrow}
            />
        </Button>
    );
}


export function LeftArrow() {
    return (
        <Button
            variant="contained"
            href="#"
            className={ArrowStyle}
        >
            <ChevronLeftIcon className={DimensionsArrow} />
        </Button>
    );
}

export function RightArrow() {
    return (
        <Button
            variant="contained"
            href="#"
            className={ArrowStyle}
        >
            <ChevronRightIcon className={DimensionsArrow} />
        </Button>
    );
}