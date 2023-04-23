import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'next/link';

const ContactsStyle = `
    bg-silver rounded-full text-midnight w-[50px] h-[50px] 
    text-center p-1 mt-20 cursor-pointer
`;

const ArrowStyle = `
    bg-oceanBlue rounded-full text-center cursor-pointer 
    text-white w-[50px] h-[50px] hover:bg-deepOcean
`;

export function Telegram() {
    return (
        <Link href="/">
            <TelegramIcon
                className={ContactsStyle}
            />
        </Link>
    );
}

export function Instagram() {
    return (
        <Link href='/'>
            <InstagramIcon
                className={ContactsStyle}
            />
        </Link>
    );
}

export function GitHub() {
    return (
        <Link href='/'>
            <GitHubIcon
                className={ContactsStyle}
            />
        </Link>
    );
}


export function LeftArrow() {
    return (
        <ChevronLeftIcon
            className={ArrowStyle}
        />
    );
}

export function RightArrow() {
    return (
        <ChevronRightIcon
            className={ArrowStyle}
        />
    );
}