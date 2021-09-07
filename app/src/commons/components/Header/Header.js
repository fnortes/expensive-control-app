import React from 'react'
import CustomAppBar from './components/CustomAppBar/CustomAppBar'
import DesktopMenu from './components/DesktopMenu/DesktopMenu'
import DrawerMenu from './components/DrawerMenu/DrawerMenu'
import UserMenu from './components/UserMenu/UserMenu'
import { HeaderGrowStyled } from './header.styled'

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
