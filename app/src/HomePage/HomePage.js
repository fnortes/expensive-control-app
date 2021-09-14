import React from 'react'
import CustomLink from 'commons/components/CustomLink/CustomLink'

export default function HomePage() {
  return (
    <div>
      Home page{' '}
      <CustomLink to="/error" color="secondary">
        Error Page
      </CustomLink>
    </div>
  )
}
