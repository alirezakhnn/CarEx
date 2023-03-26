import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Layout } from 'ui';
import { ThemeContainer } from 'ui';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeContainer>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeContainer>
    );
}