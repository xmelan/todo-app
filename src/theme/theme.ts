import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
    palette:{
        background:{
            default: '#FFFFFF'
        },
        primary: {
            main: '#306BFF'
        },
        secondary: {
            main: '#94A3B8'
        },
        error: {
            main: red.A400
        },
        warning: {
            main: '#FFB580'
        },
        success:{
            main: '#78C552'
        }
    }
})