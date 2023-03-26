import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';
import { PaletteColorOptions } from '@mui/material/styles/createPalette'



export function ThemeContainer({ children }: any) {
    return (
        <ThemeProvider theme={MyTheme}>
            {children}
        </ThemeProvider>
    );
}