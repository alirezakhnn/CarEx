import Link from 'next/link';
import { navItems } from '../components/Nav';
import React from 'react';
/* this component works when the screen is on tablet size or less
and hamburger menu is checked */
export function DropDown() {
    return (
        <div
            className={`shadow-lg shadow-silver dark:bg-darknight 
            bg-white
            dark:text-silver text-midnight dark:shadow-lg 
            lg:text-2xl
            dark:shadow-deepOcean absolute px-10 py-32 rounded-lg 
            xxs:text-lg 
            w-[100vw] h-[100vh] md:landscape:h-[130vh] 
            sm:landscape:h-[150vh]
            transition-all
            duration-500 font-monsterratMedium z-50`}>
            <ul className="grid gap-y-3">
                {
                    navItems.map(({ id, href, title }) => (
                        <Link
                            className="hover:text-oceanBlue
                            transition-all
                            duration-200 ease-in
                            "
                            href={href} key={id}>{title}</Link>
                    ))
                }
            </ul>
        </div>
    );
}