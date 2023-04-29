import { BtnRotator } from "./Button";
import { Logo } from "../modules/Logo";
import Link from 'next/link';
import { Switcher } from '../modules/Switcher';
import { Hamburger } from "../modules/Hamburger";

export const navItem = [
    { id: 1, title: 'All', href: '/' },
    { id: 2, title: 'City', href: '/' },
    { id: 3, title: 'Contact', href: '/' },
    { id: 4, title: 'Blog', href: '/' },
];

export function Nav() {
    // for the navbar styles on Desktop Mode
    const navListItemsLinkStyle = `
        text-midnight dark:text-white hover:text-silver 
        hover:dark:text-aboveOcean transition-all z-10
    `;

    return (
        <div className="flex justify-between align-baseline text-silver mt-4
        w-9/12 py-3 px-3 shadow-lg dark:shadow-oceanBlue
        shadow-silver justify-self-center rounded-lg
        relative shadow-md before:absolute
        before:z-[-1] before:bg-gradient-to-r 
        before:from-silver before:to-midnight
        after:absolute after:inset-1
        after:dark:blur-3xl after:dark:bg-gradient-to-r 
        after:from-oceanBlue after:via-transparent after:to-transparent
        transform font-monsterratBold z-10
        ">
            <div className="flex gap-4">
                <Switcher />
                <Logo />
            </div>
            <div className="flex justify-end">
                <ul className="flex gap-4 text-sm mt-3 transition-color ease-in-out duration-500 xxs:hidden lg:flex">
                    {
                        navItem.map(({ id, href, title }) => (
                            <Link className={navListItemsLinkStyle} href={href} key={id}>{title}</Link>
                        ))
                    }
                </ul>
                <div className="ml-10 xxs:hidden lg:block z-10">
                    <Link className={`${navListItemsLinkStyle} uppercase`} href="/">SignIn</Link>
                    <BtnRotator href="#">SignUp</BtnRotator>
                </div>
                <Hamburger />
            </div>
        </div>
    );
}