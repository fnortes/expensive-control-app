import React from 'react'
import { Link as RouterLink } from 'wouter'
import Link from '@material-ui/core/Link'

export default function CustomLink(props) {
  return <Link {...props} component={RouterLink} />
}
