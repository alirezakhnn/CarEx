import Link from 'next/link';

export function DropDown() {
    return (
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