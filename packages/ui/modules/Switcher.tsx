import { ChangeEvent, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import '../css/switcher.css';

interface SwitcherProps { }

export function Switcher(props: SwitcherProps): React.ReactElement {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const [checked, setChecked] = useState<boolean>(true);

    useEffect(() => {
        setChecked(theme === 'dark' || theme === 'system');
    }, [theme]);

    const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    };

    return (
        <>
            <input
                type="checkbox"
                id="switcher"
                checked={checked}
                onChange={checkHandler}
            />
            <label
                htmlFor="switcher"
                className={`switch bg-gradient-to-b from-transparent 
            via-white to-silver 
            shadow-lg dark:shadow-midnight
            `}
                onClick={() => {
                    if (currentTheme === 'dark' && checked) {
                        setTheme('light');
                    } else if (currentTheme === 'light' && !checked) {
                        setTheme('dark');
                    }
                }}
            >
                <div className="powersign"></div>
            </label>
        </>
    );
}
