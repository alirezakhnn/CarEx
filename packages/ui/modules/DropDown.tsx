import Link from 'next/link';
import { navItem } from '../components/Nav';
/* this component works when the screen is on tablet size or less
and hamburger menu is checked */
export function DropDown() {
    return (
        /* style below iterate the animation execution course. 
        0.5 means it executes the half of the full animation */
        <div
            className={`shadow-lg shadow-silver dark:bg-darknight 
            bg-white
            dark:text-silver text-midnight dark:shadow-lg 
            lg:text-2xl
            dark:shadow-deepOcean absolute px-10 py-32 rounded-lg 
            xxs:text-lg 
            w-[100vw] h-[100vh]
            transition-all
            duration-500 font-monsterratMedium z-20`}>
            <ul className="grid gap-y-3">
                {
                    navItem.map(({ id, href, title }) => (
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