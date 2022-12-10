describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('loading...').should('not.exist')
    cy.get('thead th').contains('description').click()
    cy.get('thead th .sort-dir').should('be.visible')

    cy.contains('Features').parent().get('.expand-table').click()
    cy.contains('description').should('not.be.visible')
  })
})
