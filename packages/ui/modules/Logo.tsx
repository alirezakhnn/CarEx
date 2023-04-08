import { Typography } from '@mui/material';

export function Logo() {
    return (
        <Typography
            variant='h1'
            color="silver.main"
            className="xxs:text-md md:text-lg align-self-center cursor-pointer mt-2"
        >
            Car<span className="text-oceanBlue">Ex</span>
        </Typography>
    );
}