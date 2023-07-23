import { Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps): React.ReactElement {
    return (
        <Link className="z-10" href="/">
            <Typography
                variant="h1"
                color="silver.main"
                className={`xxs:text-md md:text-lg align-self-center cursor-pointer mt-2 z-10 text-midnight dark:text-silver font-monsterratItalic dark:text-white ${className}`}
            >
                Car<span className="text-oceanBlue">Ex</span>
            </Typography>
        </Link>
    );
}
