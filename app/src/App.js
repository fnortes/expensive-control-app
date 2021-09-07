import React from 'react'
import { useRoute } from 'wouter'
import { ThemeProvider } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles'
import { MainWrapper } from 'app.styled'
import Header from 'commons/components/Header/Header'
import Routes from 'routes'
import { customTheme } from 'styles'

export default function App() {
  console.log('Renderiza la APP')
  const [match] = useRoute('/login')

  return (
    <MuiThemeProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          {!match && <Header />}
          {!match ? (
            <MainWrapper>
              <Routes />
            </MainWrapper>
          ) : (
            <Routes />
          )}
        </StylesProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}
