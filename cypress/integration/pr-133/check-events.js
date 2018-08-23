/// <reference types="Cypress" />
context('Traversal', () => {
  beforeEach(() => {
    cy.viewport('macbook-15')

// Pass options to the visit
    cy.visit(Cypress.env("base_url"), {
      timeout: 80000, // increase total time for the visit to resolve
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

  it('check events page features', () => {
          cy.get('.LayoutHeaderNavigation > :nth-child(5) > a').should('contain', "Events").as('events')
          cy.get('@events').click()
          cy.wait(2000)
          cy.get('.PaginatedEntriesNavigation__list > :nth-child(3) > .Button').click()    
          cy.get(':nth-child(2) > .EventTile > .EventTile__image > .EventTile__image-link > img').click()
          cy.get(':nth-child(2) > .Button').should('contain', 'Agenda')
      })

  })
