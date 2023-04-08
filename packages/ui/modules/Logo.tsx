import { Typography } from '@mui/material';

export function Logo() {
    return (
        <Typography
            variant='h1'
            color="silver.main"
            className="text-lg align-self-center cursor-pointer mt-2"
            sx={{
                textShadow: '0 0 20px #116AE3'
            }}
        >
            Car<span className="text-oceanBlue">Ex</span>
        </Typography>
    );
}