import styled from 'styled-components'
import { Avatar, Button, Grid, Paper } from '@material-ui/core'

export const RootStyled = styled(Grid)`
  height: 100vh;
`

export const ImageStyled = styled(Grid)`
  background-image: url(https://source.unsplash.com/random);
  background-repeat: no-repeat;
  background-color: ${({ theme }) =>
    theme.palette.type === 'light'
      ? theme.palette.grey[50]
      : theme.palette.grey[900]};
  background-size: cover;
  background-position: center;
`

export const PaperStyled = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(8, 4)};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AvatarStyled = styled(Avatar)`
  margin: ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`

export const FormStyled = styled.form`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`

export const SubmitStyled = styled(Button)`
  margin: ${({ theme }) => theme.spacing(3, 0, 2)};
`
