import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: '#039be5'
    }
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    values: {
      xs: 0,
      sm: 481,
      md: 681,
      lg: 801,
      xl: 1025,
      xxl: 1261
    }
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 10,
    fontFamily: "'Domine', serif"
  }
})

theme.typography.h2 = {
  fontFamily: "'Josefin Sans', sans-serif",
  fontSize: '2.7rem',
  color: '#333333',
  fontWeight: 600,
  lineHeight: 1.2,
  wordWrap: 'break-word',
  textTransform: 'uppercase',
  [theme.breakpoints.up('sm')]: {
    fontSize: '4.2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '4.8rem',
  }
}

theme.typography.body1 = {
  fontFamily: "'Domine', serif",
  fontSize: '1.6rem',
  lineHeight: 1.88,
}

theme = createTheme(theme, {
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      }
    }
  }
})

export {
  theme
}
