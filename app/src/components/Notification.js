import PropTypes from 'prop-types'
import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return <div className="error">{message}</div>
}

Notification.propTypes = {
  message: PropTypes.string
}

export default Notification
