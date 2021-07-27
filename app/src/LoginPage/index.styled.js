import styled from 'styled-components'
import { Avatar, Grid, Paper } from '@material-ui/core'

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
  padding: ${({ theme }) => theme.spacing(4, 4)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LogoStyled = styled.img`
  display: block;
  width: 50vw;
  max-width: 150px;
`

export const AvatarStyled = styled(Avatar)`
  margin: ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`

export const GridLinkStyled = styled(Grid)`
  text-align: center;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    text-align: left;
  }
`
