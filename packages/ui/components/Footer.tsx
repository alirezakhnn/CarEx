import { Logo } from "../modules/Logo";
import Link from 'next/link';
import { CurvedBorder } from "../modules/Icons";
import { useTheme } from "next-themes";
import React from "react";

export function Footer() {
    const { theme } = useTheme();
    const footerLinks = [
        { href: '/', content: "All" },
        { href: '/add-car', content: "Add Car" },
        { href: '/', content: "Blog" },
        { href: '/add-car', content: "Add Car" },
        { href: '/', content: "Contact" },
        { href: '/', content: "All" },
        { href: '/add-car', content: "Add Car" },
        { href: '/', content: "Blog" },
        { href: '/', content: "Contact" },
        { href: '/add-car', content: "Add Car" },
        { href: '/', content: "Contact" },
        { href: '/', content: "All" },
    ]

    return (
        <div>
            <CurvedBorder fill={theme === 'dark' || theme !== 'light' ? "#000" : "#fff"} />
            <footer className="grid py-8 text-white bg-deepOcean gap-y-6 px-24 mt-5">
                <Logo className="text-white" />
                <ul className="grid place-items-center ml-[5%] font-monsterratMedium grid-cols-4 gap-y-5 list-none dark:text-white mt-20">
                    {
                        footerLinks.map((item, index): any => (
                            <Link className="font-monsterratItalic hover:text-silver transition-all" key={index} href={item.href}>{item.content}</Link>
                        ))
                    }
                </ul>
            </footer>
            <CurvedBorder fill="#03234f" />
        </div>
    );
}