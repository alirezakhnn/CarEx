import { Footer } from './Footer';
import { Nav } from './Nav';
import { motion, Variants } from 'framer-motion';
import React from 'react';
import { useSession } from 'next-auth/react';

interface LayoutProps {
    children: React.ReactNode;
}

const layoutVariants: Variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
};

export function Layout({ children }: LayoutProps): React.ReactElement {
    const { status } = useSession();
    return (
        <motion.div
            variants={layoutVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
            className="grid"
        >
            {status === 'authenticated' && <Nav />}
            <main>{children}</main>
            {status === "authenticated" && <Footer />}
        </motion.div>
    );
}
