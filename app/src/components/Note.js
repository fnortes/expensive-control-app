import PropTypes from 'prop-types'
import React from 'react'

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important'

  return (
    <li className="note">
      <div>{note.content}</div>
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

Note.propTypes = {
  note: PropTypes.object.isRequired,
  toggleImportance: PropTypes.func
}

export default Note
