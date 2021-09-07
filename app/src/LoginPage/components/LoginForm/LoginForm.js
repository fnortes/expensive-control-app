import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import useGlobal from 'commons/hooks/useGlobal'
import { FormStyled, SubmitStyled } from './loginForm.styled'

const loginValidationConfig = {
  email: yup
    .string()
    .email('Introduce un correo electrónico válido')
    .required('El correo electrónico es obligatorio'),
  password: yup
    .string()
    .min(8, 'La contraseña debe tener mínimo 8 caracteres de longitud')
    .required('La contraseña es obligatoria')
}

const registerExtraValidationConfig = {
  passwordRetry: yup
    .string()
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
    .required('Es obligatorio confirmar tu contraseña'),
  name: yup
    .string()
    .min(2, 'El nombre debe tener mínimo 2 caracteres de longitud')
    .required('El nombre es obligatorio')
}

export default function LoginForm({ register = false }) {
  const {
    state: { error },
    login,
    createUser
  } = useGlobal()

  const validationSchema = yup.object(
    register
      ? { ...loginValidationConfig, ...registerExtraValidationConfig }
      : loginValidationConfig
  )

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordRetry: '',
      name: ''
    },
    validationSchema: validationSchema,
    onSubmit: register ? createUser : login
  })

  return (
    <FormStyled noValidate onSubmit={formik.handleSubmit}>
      <TextField
        id="email"
        name="email"
        label="Correo Electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        autoComplete="email"
        autoFocus
      />
      <TextField
        type="password"
        id="password"
        name="password"
        label="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        autoComplete="current-password"
      />
      {register && (
        <>
          <TextField
            type="password"
            id="passwordRetry"
            name="passwordRetry"
            label="Repite Contraseña"
            value={formik.values.passwordRetry}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.passwordRetry &&
              Boolean(formik.errors.passwordRetry)
            }
            helperText={
              formik.touched.passwordRetry && formik.errors.passwordRetry
            }
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="retry-password"
          />
          <TextField
            id="name"
            name="name"
            label="Nombre"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="name"
          />
        </>
      )}
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Recordarme"
      />
      {error !== '' && <Alert severity="error">{error}</Alert>}
      <SubmitStyled type="submit" fullWidth variant="contained" color="primary">
        Entrar
      </SubmitStyled>
    </FormStyled>
  )
}
