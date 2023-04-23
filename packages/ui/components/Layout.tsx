import { Footer } from './Footer';
import { Nav } from './Nav';

export function Layout({ children }: any) {
    // this is the wrapper component
    return (
        <div className="grid">
            <Nav />
            <main>{children}</main>
            <Footer />
        </div>
    );
}