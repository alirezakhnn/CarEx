import Link from 'next/link';

/* this component works when the screen is on tablet size or less
and hamburger menu is checked */
export function DropDown() {
    return (
        /* style below iterate the animation execution course. 
        0.5 means it executes the half of the full animation */
        <div style={{ animationIterationCount: '0.5' }}

            className={`shadow-lg shadow-silver dark:bg-midnight 
        dark:text-silver text-midnight dark:shadow-lg dark:shadow-deepOcean 
        absolute px-10 py-6 rounded-lg right-[2%]
        top-[120%] xxs:text-xs md:text-sm animate-bounce font-monsterrat`}>
            <ul className="grid gap-y-3">
                <Link href="/">All</Link>
                <Link href="/">City</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Blog</Link>
            </ul>
        </div>
    );
}