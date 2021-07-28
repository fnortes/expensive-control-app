import styled from 'styled-components'
import { AppBar, IconButton, Typography } from '@material-ui/core'
import { drawerWidth } from '../DrawerMenu/index.styled'

export const AppBarStyled = styled(AppBar)`
  ${({ theme }) => `
    z-index: ${theme.zIndex.drawer + 1};
    transition: ${theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })};
  `}

  ${({ open, theme }) =>
    open
      ? `
      margin-left: ${drawerWidth}px;
      width: calc(100% - ${drawerWidth}px);
      transition: ${theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })};
      `
      : ''}
`

export const HeaderMenuButton = styled(IconButton)`
  margin-right: ${({ theme }) => theme.spacing(2)}px;
  ${({ open }) => (open ? 'display: none;' : '')}
`

export const HeaderTitle = styled(Typography)`
  display: none;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: block;
  }
`

export const SectionDesktop = styled.div`
  display: none;
  ${({ theme }) => theme.breakpoints.up('md')} {
    display: flex;
  }
`

export const SectionMobile = styled.div`
  display: flex;
  ${({ theme }) => theme.breakpoints.up('md')} {
    display: none;
  }
`
