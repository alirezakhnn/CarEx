import { Header } from './Header';
import { Footer } from './Footer';
import { Nav } from './Nav';

export function Layout({ children }: any) {
    return (
        <div>
            <Header />
            <Nav />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
;