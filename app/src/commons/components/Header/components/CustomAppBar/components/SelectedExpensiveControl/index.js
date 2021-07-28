import React from 'react'
import { List, ListItem, ListItemText, Menu, MenuItem } from '@material-ui/core'
import useGlobal from 'commons/hooks/useGlobal'
import { SelectedExpensiveControlWrapper } from './index.styled'

export default function SelectedExpensiveControl() {
  const {
    state: {
      header: {
        selectedExpensiveControl: { index: selectedIndex, anchorEl }
      }
    },
    setSelectedExpensiveControlAnchorEl,
    cleanSelectedExpensiveControlAnchorEl,
    setSelectedExpensiveControl
  } = useGlobal()

  const options = [
    'Show some love to Material-UI',
    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content'
  ]

  const handleMenuItemClick = (event, index) => {
    setSelectedExpensiveControl(index)
  }

  return (
    <SelectedExpensiveControlWrapper>
      <List
        component="nav"
        aria-label="Control de gastos activo"
        disablePadding
        dense
      >
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="Control de gastos activo"
          onClick={setSelectedExpensiveControlAnchorEl}
        >
          <ListItemText
            primary="Control de gastos activo"
            secondary={options[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={cleanSelectedExpensiveControlAnchorEl}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </SelectedExpensiveControlWrapper>
  )
}
