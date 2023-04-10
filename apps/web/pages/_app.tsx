import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Layout, ThemeContainer } from 'ui';
import { ThemeProvider } from 'next-themes';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <ThemeContainer>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeContainer>
        </ThemeProvider>
    )
}