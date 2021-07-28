import { createMuiTheme } from '@material-ui/core/styles'

const globalTheme = createMuiTheme({
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
    custom: {
      white: {
        light: 'rgba(255, 255, 255, 0.15)',
        main: 'rgba(255, 255, 255, 0.25)',
        dark: 'rgba(255, 255, 255), 1'
      }
    },
    shape: {
      circle: '50%'
    }
  }
})

export const customTheme = createMuiTheme(
  {
    overrides: {
      MuiListItemText: {
        secondary: {
          color: globalTheme.palette.custom.white.main
        }
      }
    }
  },
  globalTheme
)
