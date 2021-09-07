import React from 'react'
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import useGlobal from 'commons/hooks/useGlobal'
import { DrawerStyled, DrawerToolbar } from './drawerMenu.styled'

export default function DrawerMenu() {
  const theme = useTheme()
  const {
    state: {
      header: {
        menu: { isOpen }
      }
    },
    toggleMenu
  } = useGlobal()

  const handleDrawerClose = () => {
    toggleMenu(false)
  }

  return (
    <DrawerStyled variant="permanent" open={isOpen}>
      <DrawerToolbar>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerToolbar>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text}>Inbox</ListItemText>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text}>Send email</ListItemText>
          </ListItem>
        ))}
      </List>
    </DrawerStyled>
  )
}
