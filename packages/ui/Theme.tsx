import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

export const MyTheme = createTheme({
    palette: {
        primary: {
            main: '#FF0000',
            light: '#FF7878',
            dark: '#910000'
        },
        secondary: blue,
        common: {
            black: '#2A81FF'
        }
    }
});

export function ThemeContainer({ children }: any) {
    return (
        <ThemeProvider theme={MyTheme}>
            {children}
        </ThemeProvider>
    );
}

