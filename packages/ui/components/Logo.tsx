import { Typography } from '@mui/material';

export function Logo() {
    return (
        <Typography
            variant='h1'
            color="silver.main"
            className="text-[30px]"
        >
            Car<span className="text-oceanBlue">Ex</span>
        </Typography>
    );
}