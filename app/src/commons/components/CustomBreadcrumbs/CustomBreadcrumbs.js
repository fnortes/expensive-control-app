import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import {
  CustomLinkStyled,
  TypographyStyled,
  HomeIconStyled
} from './customBreadcrumbs.styled'

export default function CustomBreadcrumbs({ breadcrumbs }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <CustomLinkStyled to="/" color="inherit">
        <HomeIconStyled />
        Home
      </CustomLinkStyled>
      {breadcrumbs.map((breadcrumb) =>
        breadcrumb.to ? (
          <CustomLinkStyled
            key={breadcrumb.text}
            color="inherit"
            to={breadcrumb.to}
          >
            {breadcrumb.icon}
            {breadcrumb.text}
          </CustomLinkStyled>
        ) : (
          <TypographyStyled key={breadcrumb.text} color="textPrimary">
            {breadcrumb.icon}
            {breadcrumb.text}
          </TypographyStyled>
        )
      )}
    </Breadcrumbs>
  )
}
