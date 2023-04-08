import Link from 'next/link';

export function DropDown() {
    return (
        <div className={`bg-midnight text-silver absolute px-10 py-6 
        rounded-lg right-[12.222%] top-[20%] xxs:text-xs md:text-sm`}>
            <ul className="grid gap-y-3">
                <Link href="/">All</Link>
                <Link href="/">City</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Blog</Link>
            </ul>
        </div>
    );
}