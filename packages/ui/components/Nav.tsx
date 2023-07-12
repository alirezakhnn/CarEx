import { BtnRotator } from '../modules/Button';
import { Logo } from '../modules/Logo';
import Link from 'next/link';
import { Switcher } from '../modules/Switcher';
import { Hamburger } from '../modules/Hamburger';
import { motion, Variants } from 'framer-motion';

interface NavItem {
    id: number;
    title: string;
    href: string;
}

export const navItems: NavItem[] = [
    { id: 1, title: 'All', href: '/' },
    { id: 2, title: 'City', href: '/' },
    { id: 3, title: 'Contact', href: '/' },
    { id: 4, title: 'Blog', href: '/' },
];

const navListItemsLinkStyle = `
  text-midnight dark:text-white hover:text-silver 
  hover:dark:text-aboveOcean transition-all z-10
`;

const switcherVariants: Variants = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
};

const buttonVariants: Variants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
};

export function Nav(): React.ReactElement {
    return (
        <div className="flex justify-between align-baseline text-silver mt-4 xl:w-9/12 py-3 px-3 shadow-lg dark:shadow-oceanBlue shadow-silver justify-self-center rounded-lg relative shadow-md before:absolute before:z-[-1] before:bg-gradient-to-r before:from-silver before:to-midnight after:absolute after:inset-1 after:dark:blur-3xl after:dark:bg-gradient-to-r after:from-oceanBlue after:via-transparent after:to-transparent transform font-monsterratBold z-10 md:w-9/12 lg:w-[60%] xxs:w-[90%]">
            <motion.div
                variants={switcherVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5 }}
                className="flex gap-4"
            >
                <Switcher />
                <Logo />
            </motion.div>
            <div className="flex justify-end">
                <ul className="flex gap-4 xl:text-sm lg:text-xs mt-3 transition-color ease-in-out duration-500 xxs:hidden lg:flex">
                    {navItems.map(({ id, href, title }) => (
                        <Link href={href} key={id} className={navListItemsLinkStyle}>
                            {title}
                        </Link>
                    ))}
                </ul>
                <motion.div
                    variants={buttonVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.5 }}
                    className="ml-10 xxs:hidden lg:block z-10"
                >
                    <Link href="/signin" className={`${navListItemsLinkStyle} uppercase lg:text-xs`}>
                        SignIn
                    </Link>
                    <BtnRotator className="lg:text-xs" href="/signup">
                        SignUp
                    </BtnRotator>
                </motion.div>

                <Hamburger />
            </div>
        </div>
    );
}
