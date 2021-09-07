import React, { useState } from 'react'
import { Box, Button, CssBaseline, Grid, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Copyright from 'commons/components/Copyright/Copyright'
import logo from 'logo.png'
import LoginForm from './components/LoginForm/LoginForm'
import {
  AvatarStyled,
  GridLinkStyled,
  ImageStyled,
  LogoStyled,
  PaperStyled,
  RootStyled
} from './loginPage.styled'

export default function LoginPage() {
  const [register, setRegister] = useState(false)

  return (
    <RootStyled container component="main">
      <CssBaseline />
      <ImageStyled item xs={false} sm={4} md={7} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={PaperStyled}
        elevation={6}
        square
      >
        <LogoStyled src={logo} />
        <AvatarStyled>
          <LockOutlinedIcon />
        </AvatarStyled>
        <Typography component="h1" variant="h5">
          {register ? 'Regístrate' : 'Iniciar sesión'}
        </Typography>
        <LoginForm register={register} />
        <Grid container>
          <GridLinkStyled item xs={12} sm={6}>
            <Button color="primary" onClick={() => {}}>
              ¿Olvidaste tu contraseña?
            </Button>
          </GridLinkStyled>
          <GridLinkStyled item xs={12} sm={6}>
            {!register ? (
              <Button color="primary" onClick={() => setRegister(true)}>
                ¿No tienes cuenta? Regístrate
              </Button>
            ) : (
              <Button color="primary" onClick={() => setRegister(false)}>
                Ya tengo cuenta, iniciar sesión
              </Button>
            )}
          </GridLinkStyled>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Grid>
    </RootStyled>
  )
}
