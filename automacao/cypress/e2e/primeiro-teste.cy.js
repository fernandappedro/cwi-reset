describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.olx.com.br/')
    cy.get('#searchtext-input')
  })
})