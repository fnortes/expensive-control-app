import React from 'react'
import CustomAppBar from './components/CustomAppBar'
import DesktopMenu from './components/DesktopMenu'
import DrawerMenu from './components/DrawerMenu'
import UserMenu from './components/UserMenu'
import { HeaderGrowStyled } from './index.styled'

export default function Header() {
  return (
    <HeaderGrowStyled>
      <CustomAppBar />
      <DesktopMenu />
      <UserMenu />
      <DrawerMenu />
    </HeaderGrowStyled>
  )
}
