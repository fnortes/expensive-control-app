import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Togglable from './Togglable'

describe('<Togglable />', () => {
  const buttonLabel = 'show'
  let component

  beforeEach(() => {
    component = render(
      <Togglable buttonLabel={buttonLabel}>
        <div>testDivContent</div>
      </Togglable>
    )
  })

  test('Renders its children', () => {
    const div = component.getByText('testDivContent')
    expect(div).not.toBeNull()
  })

  test('Renders its children hidden', () => {
    const el = component.getByText('testDivContent')
    expect(el.parentNode).toHaveStyle('display: none')
  })

  test('After clicking its children must be shown', () => {
    const button = component.getByText(buttonLabel)
    fireEvent.click(button)

    const el = component.getByText('testDivContent')
    expect(el.parentNode).toHaveStyle('display: block')
  })

  test('Toggled content can be closed', () => {
    const button = component.getByText(buttonLabel)
    fireEvent.click(button)

    const el = component.getByText('testDivContent')
    expect(el.parentNode).toHaveStyle('display: block')

    const cancelButton = component.getByText('Cancel')
    fireEvent.click(cancelButton)

    expect(el.parentNode).toHaveStyle('display: none')
  })
})
