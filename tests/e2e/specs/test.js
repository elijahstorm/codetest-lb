describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('table', 'description').click()
    cy.contains('svg')
  })
})
