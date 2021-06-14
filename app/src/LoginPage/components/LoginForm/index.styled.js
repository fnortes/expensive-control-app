import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const FormStyled = styled.form`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`

export const SubmitStyled = styled(Button)`
  margin: ${({ theme }) => theme.spacing(3, 0, 2)};
`
