import { createTheme } from '@mui/material/styles';


// A dark theme
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: 'rgb(18, 18, 18)',
            paper: 'rgb(18, 18, 18)',
        },
        primary: {
            main: 'rgb(253,0,80)',
        },
        secondary: {
            main: 'rgb(18, 18, 18)',
        },
        text: {
            primary: 'rgb(255, 255, 255)',
            secondary: 'rgb(123, 132, 140)',
        },
        success: {
            main: 'rgb(0, 176, 85)',
        },
        info: {
            main: 'rgb(0, 149, 211)',
        },
        warning: {
            main: 'rgb(243, 149, 48)',
        },
        error: {
            main: 'rgb(255, 40, 52)',
        },
        divider: 'rgb(197, 197, 197)',
    },
    typography: {
        h1: {
            fontWeight: 700,
            fontSize: 35,
            letterSpacing: '-0.24px',
        },
        h2: {
            fontWeight: 700,
            fontSize: 29,
            letterSpacing: '-0.24px',
        },
        h3: {
            fontWeight: 700,
            fontSize: 24,
            letterSpacing: '-0.06px',
        },
        h4: {
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: '-0.06px',
        },
        h5: {
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: '-0.05px',
        },
        h6: {
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: '-0.05px',
        },
        subtitle1: {
            fontSize: 16,
            letterSpacing: '-0.05px',
        },
        subtitle2: {
            fontSize: 14,
            letterSpacing: '-0.05px',
        },
        body1: {
            fontSize: 16,
            letterSpacing: '-0.05px',
        },
        body2: {
            fontSize: 14,
            letterSpacing: '-0.04px',
        },
        button: {
            fontSize: 14,
        },
        caption: {
            fontSize: 12,
            letterSpacing: '0.4px',
        },
        overline: {
            fontSize: 12,
            letterSpacing: '0.4px',
        },
    },
    shape: {
        borderRadius: 8,
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});




const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: 'rgb(253, 246, 227)',
            paper: 'rgb(253, 246, 227)',
        },
        primary: {
            main: 'rgb(253,0,80)',
        },
        secondary: {
            main: 'rgb(255, 255, 255)',
        },
        text: {
            primary: 'rgb(60, 60, 60)',
            secondary: 'rgb(123, 132, 140)',
        },
        success: {
            main: 'rgb(0, 176, 85)',
        },
        info: {
            main: 'rgb(0, 149, 211)',
        },
        warning: {
            main: 'rgb(243, 149, 48)',
        },
        error: {
            main: 'rgb(255, 40, 52)',
        },
        divider: 'rgb(197, 197, 197)',
    },
    typography: {
        h1: {
            fontWeight: 700,
            fontSize: 35,
            letterSpacing: '-0.24px',
        },
        h2: {
            fontWeight: 700,
            fontSize: 29,
            letterSpacing: '-0.24px',
        },
        h3: {
            fontWeight: 700,
            fontSize: 24,
            letterSpacing: '-0.06px',
        },
        h4: {
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: '-0.06px',
        },
        h5: {
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: '-0.05px',
        },
        h6: {
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: '-0.05px',
        },
        subtitle1: {
            fontSize: 16,
            letterSpacing: '-0.05px',
        },
        subtitle2: {
            fontSize: 14,
            letterSpacing: '-0.05px',
        },
        body1: {
            fontSize: 16,
            letterSpacing: '-0.05px',
        },
        body2: {
            fontSize: 14,
            letterSpacing: '-0.04px',
        },
        button: {
            fontSize: 14,
        },
        caption: {
            fontSize: 12,
            letterSpacing: '0.4px',
        },
        overline: {
            fontSize: 12,
            letterSpacing: '0.4px',
        },
    },
    shape: {
        borderRadius: 8,
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});



export default theme;