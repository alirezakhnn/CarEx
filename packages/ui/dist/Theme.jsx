import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
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
export function ThemeContainer({ children }) {
    return (<ThemeProvider theme={MyTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>);
}