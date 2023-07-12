import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Layout, MuiThemeContainer } from 'ui';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            {/* the ThemeProvider is for dark mode */}
            <ThemeProvider attribute="class">
                {/* the MuiContainer is for the MUI styles */}
                <MuiThemeContainer>
                    {/* in layout component we've just wrapped the hole components 
                (header, footer, nav and main); it comes from packages/ui;
            */}
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </MuiThemeContainer>
            </ThemeProvider>
        </SessionProvider>
    )
}