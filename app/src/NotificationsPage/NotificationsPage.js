import React from 'react'
import CustomBreadcrumbs from 'commons/components/CustomBreadcrumbs/CustomBreadcrumbs'
import CustomLink from 'commons/components/CustomLink/CustomLink'
import { NotificationsIconStyled } from 'commons/components/CustomBreadcrumbs/customBreadcrumbs.styled'

export default function NotificationsPage() {
  const breadcrumbs = [
    {
      icon: <NotificationsIconStyled />,
      text: 'Notificaciones'
    }
  ]

  return (
    <div>
      <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
      Notifications page{' '}
      <CustomLink to="/error" color="secondary">
        Error Page
      </CustomLink>
    </div>
  )
}
