import { createMuiTheme } from '@material-ui/core/styles'

export const customTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: 'rgb(22, 59, 75)',
      main: 'rgb(26, 55, 67)',
      dark: 'rgb(29, 52, 61)'
    },
    secondary: {
      light: 'rgb(197, 78, 45)',
      main: 'rgb(165, 70, 43)',
      dark: 'rgb(129, 65, 45)'
    },
    shape: {
      circle: '50%'
    }
  }
})
