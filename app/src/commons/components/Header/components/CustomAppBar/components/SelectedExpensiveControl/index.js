import React, { useEffect } from 'react'
import { List, ListItem, ListItemText, Menu, MenuItem } from '@material-ui/core'
import useGlobal from 'commons/hooks/useGlobal'
import { SelectedExpensiveControlWrapper } from './index.styled'
import { PERMISSIONS } from 'commons/constants/global'

export default function SelectedExpensiveControl() {
  const {
    state: {
      header: {
        selectedExpensiveControl: { index: selectedIndex, anchorEl }
      },
      expensivesControl
    },
    setSelectedExpensiveControlAnchorEl,
    cleanSelectedExpensiveControlAnchorEl,
    setSelectedExpensiveControl,
    getAllExpensiveControlsByUser
  } = useGlobal()

  useEffect(() => {
    getAllExpensiveControlsByUser()
  }, [])

  const options = expensivesControl.map(
    (item) => `${item.name} - ${PERMISSIONS[item.permission.name]}`
  )

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
            // disabled={index === 0}
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
