import { Link, Typography } from '@material-ui/core'
import { APP_NAME, URL_WEBSITE } from 'commons/constants'

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={URL_WEBSITE}>
        {APP_NAME}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
