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
    fontSize: 10
  }
})

export {
  theme
}
