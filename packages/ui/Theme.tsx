import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';


export const MyTheme = createTheme({
    palette: {
        primary: {
            dark: '#5a0e07',
            main: '#970e05',
            light: '#f11',
        },
        secondary: blue,
    }
});


export function ThemeContainer({ children }: any) {
    return (
        <ThemeProvider theme={MyTheme}>
            {children}
        </ThemeProvider>
    );
}