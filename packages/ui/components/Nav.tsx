import { BtnRotator } from "./Button";
import { Logo } from "../modules/Logo";
import Link from 'next/link';
import { Switcher } from '../modules/Switcher';
import { Hamburger } from "../modules/Hamburger";

export function Nav() {
    return (
        <div className={`container flex justify-between align-baseline 
        w-9/12 py-3 shadow-lg shadow-oceanBlue justify-self-center rounded-lg px-2
        `}>
            <div className="flex gap-4">
                <Switcher />
                <Logo />
            </div>
            <div className="flex justify-end">
                <ul className="flex gap-4 text-sm mt-3 transition-color ease-in-out duration-500 xxs:hidden lg:flex">
                    <Link className="hover:text-silver" href="/">All</Link>
                    <Link className="hover:text-silver" href="/">City</Link>
                    <Link className="hover:text-silver" href="/">Contact</Link>
                    <Link className="hover:text-silver" href="/">Blog</Link>
                </ul>
                <div className="ml-10 xxs:hidden lg:block">
                    <Link className="transition-all hover:scale-110" href="/">SignIn</Link>
                    <BtnRotator href="#">SignUp</BtnRotator>
                </div>
                <Hamburger className="lg:hidden mt-2 ml-5" />
            </div>
        </div>
    );
}