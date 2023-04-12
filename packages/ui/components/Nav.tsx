import { BtnRotator } from "./Button";
import { Logo } from "../modules/Logo";
import Link from 'next/link';
import { Switcher } from '../modules/Switcher';
import { Hamburger } from "../modules/Hamburger";

export function Nav() {
    const navListItemsLink = `
        text-midnight dark:text-white hover:text-silver hover:dark:text-aboveOcean transition-all
    `
    return (
        <div className={`flex justify-between align-baseline text-silver
        w-9/12 py-3 px-3 shadow-lg dark:shadow-oceanBlue
        shadow-silver justify-self-center rounded-lg
        relative shadow-md before:absolute
        before:z-[-1] before:bg-gradient-to-r 
        before:from-silver before:to-midnight
        after:absolute after:inset-1
        after:dark:blur-3xl after:dark:bg-gradient-to-r 
        after:from-oceanBlue after:via-transparent after:to-transparent
        transform -skew-x-1 font-monsterrat
        `}>
            <div className="flex gap-4">
                <Switcher />
                <Logo />
            </div>
            <div className="flex justify-end z-10">
                <ul className="flex gap-4 text-sm mt-3 transition-color ease-in-out duration-500 xxs:hidden lg:flex"

                >
                    <Link className={navListItemsLink} href="/">All</Link>
                    <Link className={navListItemsLink} href="/">City</Link>
                    <Link className={navListItemsLink} href="/">Contact</Link>
                    <Link className={navListItemsLink} href="/">Blog</Link>
                </ul>
                <div className="ml-10 xxs:hidden lg:block">
                    <Link className={navListItemsLink} href="/">SignIn</Link>
                    <BtnRotator href="#">SignUp</BtnRotator>
                </div>
                <Hamburger />
            </div>
        </div>
    );
}