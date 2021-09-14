import React from 'react'
import { Badge, IconButton, Menu, MenuItem } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import useGlobal from 'commons/hooks/useGlobal'
import { useLocation } from 'wouter'

export default function DesktopMenu() {
  const [, setLocation] = useLocation()

  const {
    state: {
      header: {
        userMenu: {
          mobile: { anchorEl, id }
        }
      }
    },
    cleanUserMenuMobileAnchorEl,
    cleanUserMenuAnchorEl,
    setUserMenuAnchorEl,
    toggleMenu
  } = useGlobal()

  const isMobileMenuOpen = Boolean(anchorEl)

  const handleNotificationsOnClick = () => {
    setLocation('/notifications')
    cleanUserMenuMobileAnchorEl()
    cleanUserMenuAnchorEl()
    toggleMenu(false)
  }

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={id}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={cleanUserMenuMobileAnchorEl}
    >
      <MenuItem>
        <IconButton aria-label="Ver 4 nuevos emails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Emails</p>
      </MenuItem>
      <MenuItem onClick={handleNotificationsOnClick}>
        <IconButton aria-label="Ver 11 nuevas notificaciones" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notificaciones</p>
      </MenuItem>
      <MenuItem onClick={setUserMenuAnchorEl}>
        <IconButton
          aria-label="Cuenta del usuario actual"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
    </Menu>
  )
}
