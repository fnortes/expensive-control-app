import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import GrainIcon from '@material-ui/icons/Grain'
import NotificationsIcon from '@material-ui/icons/Notifications'
import CustomLink from '../CustomLink/CustomLink'

const breadcrumbItemStyle = `
  display: flex;
`

const iconStyle = `
  margin-right: ${({ theme }) => theme.spacing(0.5)}px;
  width: 20px;
  height: 20px;
`

export const CustomLinkStyled = styled(CustomLink)`
  ${breadcrumbItemStyle}
`

export const TypographyStyled = styled(Typography)`
  ${breadcrumbItemStyle}
`

export const HomeIconStyled = styled(HomeIcon)`
  ${iconStyle}
`

export const WhatshotIconStyled = styled(WhatshotIcon)`
  ${iconStyle}
`

export const GrainIconStyled = styled(GrainIcon)`
  ${iconStyle}
`

export const NotificationsIconStyled = styled(NotificationsIcon)`
  ${iconStyle}
`
