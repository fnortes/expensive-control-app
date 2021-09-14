import React from 'react'
import { useLocation } from 'wouter'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import MoreIcon from '@material-ui/icons/MoreVert'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { HeaderGrowStyled } from 'commons/components/Header/header.styled'
import useGlobal from 'commons/hooks/useGlobal'
import SelectedExpensiveControl from './components/SelectedExpensiveControl/SelectedExpensiveControl'
import {
  AppBarStyled,
  HeaderMenuButton,
  HeaderTitle,
  SectionDesktop,
  SectionMobile
} from './customAppBar.styled'

export default function CustomAppBar() {
  const [, setLocation] = useLocation()

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

  const handleNotificationsOnClick = () => {
    setLocation('/notifications')
    toggleMenu(false)
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
          <IconButton
            aria-label="Ver 17 nuevas notificaciones"
            color="inherit"
            onClick={handleNotificationsOnClick}
          >
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
