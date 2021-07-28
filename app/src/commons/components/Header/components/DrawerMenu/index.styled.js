import styled from 'styled-components'
import { Drawer } from '@material-ui/core'

export const drawerWidth = 240

const getOpenDynamicStyle = ({ open, theme }) =>
  open
    ? `
    width: ${drawerWidth}px;
    transition: ${theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })};
  `
    : `
    transition: ${theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })};
    overflow-x: hidden;
    width: 0px;
    ${theme.breakpoints.up('sm')} {
      width: ${theme.spacing(7) + 1}px;
    }
    ${theme.breakpoints.up('md')} {
      width: ${theme.spacing(9) + 1}px;
    }
  `

export const DrawerStyled = styled(Drawer)`
  width: ${drawerWidth}px;
  flex-shrink: 0;
  white-space: nowrap;
  ${getOpenDynamicStyle}
  & div.MuiPaper-root {
    ${getOpenDynamicStyle}
  }
`

export const DrawerToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing(0, 1)};
  ${({ theme }) => theme.mixins.toolbar}
`
