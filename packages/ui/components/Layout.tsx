import { Footer } from './Footer';
import { Nav } from './Nav';
import { motion, Variants } from 'framer-motion';
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const layoutVariants: Variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
};

export function Layout({ children }: LayoutProps): React.ReactElement {
    return (
        <motion.div
            variants={layoutVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
            className="grid"
        >
            <Nav />
            <main>{children}</main>
            <Footer />
        </motion.div>
    );
}
