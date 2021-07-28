import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import SelectedExpensiveControl from './components/SelectedExpensiveControl'
import useGlobal from 'commons/hooks/useGlobal'
import { HeaderGrowStyled } from 'commons/components/Header/index.styled'
import {
  AppBarStyled,
  HeaderMenuButton,
  HeaderTitle,
  SectionDesktop,
  SectionMobile
} from './index.styled'

export default function CustomAppBar() {
  const {
    state: {
      header: {
        menu: { isOpen },
        userMenu: {
          main: { id },
          mobile: { id: mobileId }
        }
      }
    },
    toggleMenu,
    setUserMenuAnchorEl,
    setUserMenuMobileAnchorEl
  } = useGlobal()

  const handleDrawerOpen = () => {
    toggleMenu(true)
  }

  return (
    <AppBarStyled open={isOpen} position="static">
      <Toolbar>
        <HeaderMenuButton
          edge="start"
          color="inherit"
          aria-label="Abrir menú"
          onClick={handleDrawerOpen}
          open={isOpen}
        >
          <MenuIcon />
        </HeaderMenuButton>
        <HeaderTitle variant="h6" noWrap>
          My Family Expenses
        </HeaderTitle>
        <SelectedExpensiveControl />
        <HeaderGrowStyled />
        <SectionDesktop>
          <IconButton aria-label="Ver 4 nuevos emails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="Ver 17 nuevas notificaciones" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="Cuenta del usuario actual"
            aria-controls={id}
            aria-haspopup="true"
            onClick={setUserMenuAnchorEl}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </SectionDesktop>
        <SectionMobile>
          <IconButton
            aria-label="Ver más"
            aria-controls={mobileId}
            aria-haspopup="true"
            onClick={setUserMenuMobileAnchorEl}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </SectionMobile>
      </Toolbar>
    </AppBarStyled>
  )
}
