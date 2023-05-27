import { Footer } from './Footer';
import { Nav } from './Nav';
import { motion } from 'framer-motion';

export function Layout({ children }: any) {
    // this is the wrapper component
    return (
        // i've just added animation to the whole lay out
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid"
        >
            <Nav />
            <main>{children}</main>
            <Footer />
        </motion.div>
    );
}