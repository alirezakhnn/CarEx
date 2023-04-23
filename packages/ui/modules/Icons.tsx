import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';

const ContactsStyle = `
    rounded-full dark:text-white text-darknight w-[60px] h-[60px] hover:text-oceanBlue
    text-center p-3 mt-20 cursor-pointer opacity-70
`;

const ArrowStyle = `
    bg-oceanBlue rounded-full text-center cursor-pointer 
    text-white w-[50px] h-[50px] hover:bg-deepOcean
`;

const DimensionsArrow = `w-[50px] h-[50px]`;

export function Telegram() {
    return (
        <Button
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