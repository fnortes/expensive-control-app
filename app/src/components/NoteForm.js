import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import Togglable from './Togglable'

const NoteForm = ({ addNote, onLogout }) => {
  const [newNote, setNewNote] = useState('')
  const togglableRef = useRef()

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: false
    }

    addNote(noteObject)
    setNewNote('')
    togglableRef.current.toggleVisibility()
  }

  return (
    <Togglable buttonLabel="New note" ref={togglableRef}>
      <h3>Create a new note</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Write your note content"
          name="newNote"
          value={newNote}
          onChange={handleChange}
        />
        <button type="submit">save</button>
      </form>
      <div>
        <button onClick={onLogout}>Logout</button>
      </div>
    </Togglable>
  )
}

NoteForm.propTypes = {
  addNote: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
}

export default NoteForm
