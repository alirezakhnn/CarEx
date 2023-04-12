'use client';
import { ChangeEvent, useState } from 'react';
import '../css/switcher.css';
import { useTheme } from 'next-themes';

export function Switcher() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const [checked, setChecked] = useState(true);
    const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }
    return (
        <>
            <input type="checkbox" id="switcher"
                checked={checked} onChange={checkHandler}
            />
            <label htmlFor="switcher" className="switch bg-gradient-to-b from-transparent via-white to-silver shadow-lg dark:shadow-midnight"
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