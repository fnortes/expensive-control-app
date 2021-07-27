import styled from 'styled-components'
import {
  AppBar,
  Drawer,
  IconButton,
  InputBase,
  Typography
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

export const drawerWidth = 240

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

export const HeaderGrowStyled = styled.div`
  display: flex;
  flex-grow: 1;
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

export const SearchWrapper = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: ${({ theme }) => theme.palette.custom.white.light};
  &:hover {
    background-color: ${({ theme }) => theme.palette.custom.white.main};
  }
  margin-right: ${({ theme }) => theme.spacing(2)}px;
  margin-left: 0;
  width: 100%;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-left: ${({ theme }) => theme.spacing(3)}px;
    width: auto;
  }
`

export const SearchIconStyled = styled(SearchIcon)`
  padding: ${({ theme }) => theme.spacing(0, 2)};
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchInputBase = styled(InputBase)`
  color: inherit;
  & input {
    padding: ${({ theme }) => theme.spacing(1, 1, 1, 0)};
    // vertical padding + font size from searchIcon
    padding-left: calc(1em + ${({ theme }) => theme.spacing(4)}px);
    transition: ${({ theme }) => theme.transitions.create('width')};
    width: 100%;
    ${({ theme }) => theme.breakpoints.up('md')} {
      width: 20ch;
    }
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
    width: ${theme.spacing(7) + 1}px;
    ${theme.breakpoints.up('sm')} {
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
