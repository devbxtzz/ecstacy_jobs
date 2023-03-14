import { createTheme } from '@mui/material/styles';
import { teal, cyan } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: teal[500]
        },
        secondary: {
            main: cyan[800],
            midNightBlue: "#012"
        }
    }
});