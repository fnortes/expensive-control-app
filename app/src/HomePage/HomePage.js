import React from 'react'
import { Link as LinkRouter } from 'wouter'
import { Link } from '@material-ui/core'

export default function HomePage() {
  return (
    <div>
      Home page{' '}
      <LinkRouter to="/error">
        <Link color="secondary">Error Page</Link>
      </LinkRouter>
    </div>
  )
}
