import { Typography } from '@mui/material';

export function Logo({ className }: any) {
    return (
        <Typography
            variant='h1'
            color="silver.main"
            className={`xxs:text-md md:text-lg align-self-center cursor-pointer 
            mt-2 z-10 text-midnight dark:text-silver font-monsterrat dark:text-white ${className}
            `}
        >
            Car<span className="text-oceanBlue">Ex</span>
        </Typography>
    );
}