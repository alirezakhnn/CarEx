'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import '../css/switcher.css';
// for the handling dark and light mode
import { useTheme } from 'next-themes';

export function Switcher() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    // handling the check state of switcher(when is true the button turns on)
    const [checked, setChecked] = useState(true);
    useEffect(() => {
        setChecked(theme === 'dark' || theme === 'system')
    }, [theme]);
    // handles the changes of input checkbox
    const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    };

    return (
        <>
            <input type="checkbox" id="switcher"
                checked={checked} onChange={checkHandler}
            />
            <label htmlFor="switcher" className={`switch bg-gradient-to-b from-transparent 
            via-white to-silver 
            shadow-lg dark:shadow-midnight
            `}
                // conditions for corresponding the switchers styles with the current theme
                onClick={() => {
                    if (currentTheme == 'dark' && checked) {
                        setTheme('light');

                    } else if (currentTheme == 'light' && !checked) {
                        setTheme('dark');
                    }
                }}
            >

                <div className="powersign"></div>
            </label>
        </>
    );
}