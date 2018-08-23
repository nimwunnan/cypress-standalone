/// <reference types="Cypress" />
context('Traversal', () => {
  beforeEach(() => {
    cy.viewport('macbook-15')

// Pass options to the visit
    cy.visit(Cypress.env("base_url"), {
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

  it('check that issue fixture exists', () => {

    cy.fixture('issues').should((issue) => {
      expect(issue).to.exist
      const allIssues = [issue]
      cy.log(issue['energy']['slug'])


      allIssues.forEach((arr, key) => {

        // wtf is wrong with me that I can't figure out how to get the key from the object
          const slug = arr['energy']['slug']
          cy.get('.LayoutHeaderNavigation > :nth-child(1) > a').should('contain', slug).as('slug')
          cy.get('@slug').click()
          cy.get('.ProgramSidebarSubtopics h3.ProgramSidebar__heading').should('contain', slug)
          if (arr['energy']['staging'] == "complete"){
            cy.get('.PaginatedEntriesNavigation__list > :nth-child(3) > .Button').click()
            cy.get('.ArticleCard').should('have.length.above', 1)
          }
      })

    })
  })


  })