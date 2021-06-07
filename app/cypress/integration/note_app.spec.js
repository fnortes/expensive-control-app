const user = {
  username: 'user1',
  name: 'Name user 1',
  password: 'password1'
}

const noteContent = 'a note created by cypress'

describe('Note App', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')

    cy.request('POST', 'http://localhost:3001/api/users', user)

    cy.visit('http://localhost:3000')
  })

  it('Frontpage can be opened', () => {
    cy.contains('Notes')
  })

  it('LoginForm can be opened', () => {
    cy.contains('Show login').click()
  })

  it('A user can login', () => {
    cy.contains('Show login').click()
    cy.get('[name="Username"]').first().type('user1')
    cy.get('[name="Password"]').last().type('password1')
    cy.contains('Login').click()
    cy.contains('New note')
  })

  it('Login fails with wrong password', () => {
    cy.contains('Show login').click()
    cy.get('[name="Username"]').first().type('user1')
    cy.get('[name="Password"]').last().type('incorrect')
    cy.contains('Login').click()

    cy.get('.error')
      .should('contain', 'Wrong credentials')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
  })

  describe('When logged in', () => {
    beforeEach(() => {
      cy.login({
        username: user.username,
        password: user.password
      })
    })

    it('A new note can be created', () => {
      cy.contains('New note').click()
      cy.get('input[name="newNote"]').type(noteContent)
      cy.contains('save').click()
      cy.contains(noteContent)
    })

    describe('And a note exists', () => {
      beforeEach(() => {
        cy.createNote({
          content: noteContent,
          important: false
        })
      })

      it('It can be made important', () => {
        cy.contains(noteContent).parent().as('theNote')

        cy.get('@theNote').contains('make important').click()

        cy.get('@theNote').contains('make not important')
      })
    })
  })
})
