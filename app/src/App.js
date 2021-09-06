import React from 'react'
import { useRoute } from 'wouter'
import { ThemeProvider } from 'styled-components'
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { customTheme } from 'styles'
import Header from 'commons/components/Header'
import { MainWrapper } from 'app.styled'
import Routes from 'routes'

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
