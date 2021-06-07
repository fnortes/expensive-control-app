import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Note from './Note'

test('Renders content with an important note', () => {
  const note = {
    content: 'This is a test note',
    important: true
  }

  const component = render(<Note note={note} />)

  const noteContent = component.getByText(note.content)
  const buttonImportant = component.getByText('make not important')

  expect(noteContent).not.toBeNull()
  expect(buttonImportant).not.toBeNull()
})

test('Renders content with an not important note', () => {
  const note = {
    content: 'This is a test note',
    important: false
  }

  const component = render(<Note note={note} />)

  const noteContent = component.getByText(note.content)
  const buttonImportant = component.getByText('make important')

  expect(noteContent).not.toBeNull()
  expect(buttonImportant).not.toBeNull()
})

test('Clicking the button calls event handler once', () => {
  const note = {
    content: 'This is a test note',
    important: true
  }

  const mockHandler = jest.fn()

  const component = render(<Note note={note} toggleImportance={mockHandler} />)
  const button = component.getByText('make not important')

  fireEvent.click(button)

  expect(mockHandler).toHaveBeenCalledTimes(1)
})
