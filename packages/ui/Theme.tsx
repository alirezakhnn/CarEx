import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

declare module '@mui/material/styles/createPalette' {
    interface PaletteOptions {
        silver?: PaletteColorOptions;
    }
}

export const MyTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#116EA3',
            light: '#2b83fe',
            dark: '#0f5dcb',
        },
        common: {
            white: '#fff',
            black: '#333333',
        },
        silver: {
            main: '#C4C4C4'
        },
        success: {
            light: '#14FF65',
            main: '#17E672',
            dark: '#13C76B',
        },
        warning: {
            main: '#A81C1E',
            dark: '#99191B',
            light: '#BF127B',
        }
    }
});


export function ThemeContainer({ children }: any) {
    return (
        <ThemeProvider theme={MyTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}