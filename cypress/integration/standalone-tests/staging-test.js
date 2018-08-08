/// <reference types="Cypress" />
context('Traversal', () => {
  beforeEach(() => {
    cy.viewport('macbook-15')
// Pass options to the visit
    cy.visit( Cypress.env("staging_url"), {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
      onLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
    })

  })

  it('check about page on staging', () => {
    cy.get('.LayoutHeaderNavigation > :nth-child(4) > a').should('contain', 'About')

    })
  })
