import React from 'react'
import { Menu, MenuItem } from '@material-ui/core'
import useGlobal from 'commons/hooks/useGlobal'

export default function UserMenu() {
  const {
    state: {
      header: {
        userMenu: {
          main: { anchorEl, id }
        }
      }
    },
    cleanUserMenuMobileAnchorEl,
    cleanUserMenuAnchorEl,
    logout
  } = useGlobal()

  const isMenuOpen = Boolean(anchorEl)

  const handleMenuOnClose = () => {
    cleanUserMenuMobileAnchorEl()
    cleanUserMenuAnchorEl()
  }

  const handleExitOnClick = () => {
    logout()
    handleMenuOnClose()
  }

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={id}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuOnClose}
    >
      <MenuItem onClick={handleMenuOnClose}>Mi cuenta</MenuItem>
      <MenuItem onClick={handleExitOnClick}>Salir</MenuItem>
    </Menu>
  )
}
