import React from 'react'
import {
  Box,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Copyright from 'commons/components/Copyright'
import {
  AvatarStyled,
  FormStyled,
  ImageStyled,
  PaperStyled,
  RootStyled,
  SubmitStyled
} from './index.styled'

/**
 * Seguir por aqui, añadiendo el logo en tranaparente al proyecto y metiendo en esta pantalla, de fonde o como mejor pueda quedar.
 * Después, añadir los logos reales en todos los tamaños y favicon que ya tiene el proyecto.
 */
export default function LoginPage() {
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
        <AvatarStyled>
          <LockOutlinedIcon />
        </AvatarStyled>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <FormStyled noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
          />
          <SubmitStyled
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Entrar
          </SubmitStyled>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                ¿Olvidaste tu contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                ¿No tienes cuenta? Regístrate
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </FormStyled>
      </Grid>
    </RootStyled>
  )
}
