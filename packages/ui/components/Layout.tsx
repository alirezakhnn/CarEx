import { Header } from './Header';
import { Footer } from './Footer';
import { Nav } from './Nav';

export function Layout({ children }: any) {
    // this is the wrapper component
    return (
        <div className="grid">
            <Nav />
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}