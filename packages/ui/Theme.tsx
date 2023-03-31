import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';


declare module '@mui/material/styles/createPalette' {
    interface PaletteOptions {
        customColor?: PaletteColorOptions;
    }
}

export const MyTheme = createTheme({
    palette: {
        primary: {
            dark: '#5a0e07',
            main: '#970e05',
            light: '#f11',
        },
        secondary: blue,
        customColor: {
            dark: "#13ce66",
            main: "#13ce66",
            light: "#13ce66",
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