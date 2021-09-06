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
    cleanUserMenuAnchorEl
  } = useGlobal()

  const isMenuOpen = Boolean(anchorEl)

  const handleMenuClose = () => {
    cleanUserMenuMobileAnchorEl()
    cleanUserMenuAnchorEl()
  }

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={id}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Mi cuenta</MenuItem>
      <MenuItem onClick={handleMenuClose}>Salir</MenuItem>
    </Menu>
  )
}
