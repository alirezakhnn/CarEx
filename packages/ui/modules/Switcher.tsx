'use client';
import '../css/switcher.css';
import { useTheme } from 'next-themes';

export function Switcher() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
        <>
            <input type="checkbox" id="switcher" />
            <label htmlFor="switcher" className="switch bg-gradient-to-b from-oceanBlue to-silver"
                onClick={() => currentTheme == 'dark' ? setTheme('light') : setTheme('dark')}
            >
                <div className="powersign"></div>
            </label>
        </>
    );
}