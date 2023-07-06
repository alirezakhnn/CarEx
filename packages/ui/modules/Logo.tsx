import { Typography } from '@mui/material';

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps): React.ReactElement {
    return (
        <Typography
            variant="h1"
            color="silver.main"
            className={`xxs:text-md md:text-lg align-self-center cursor-pointer mt-2 z-10 text-midnight dark:text-silver font-monsterratItalic dark:text-white ${className}`}
        >
            Car<span className="text-oceanBlue">Ex</span>
        </Typography>
    );
}
