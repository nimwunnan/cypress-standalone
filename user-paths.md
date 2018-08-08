## Issues
home 
click issue in nav
  content is present 
  sidebar properly sized
  sub-issue can be clicked
  content is present
variants:
  Food
    has experts in sidebar
    has posts
## Donate
home
click donate button in menu
click donation amount
  amount hasclass .active
click other
  other hasvalue "$"
fill form 
  Blackbaud test cc: 4111-1111-1111-1111 / any / any / any
  confirm window:alert text
## Events
home > events
upcoming events present
  title
  date
  location
  image
  description
dialogues present
  titles contain: "rising tides", "ecomodernism debated"
click dialogues
  content present
  sidebar content present
    titles contain: "rising tides", "ecomodernism debated"
  sidebar 
  click speakers
    spearkers hasclass .active
    content present *including images*
  click agenda
    agenda hasclass .active
    content present
## Journal
stub only

## Fellowships
home > fellowships
content present
  Sidebar,  properly sized
    testimonials
    Jobs
    Upcoming Events
  Fellowships 
    title
    description
  Generation Fellowships
    title contains "generation"
    description
    learn more > /generation-fellowship
      content present
      apply > [jotform](https://form.jotform.com/63055364386157)
      sidebar present
        director, past fellows
          image
          title
          position
  Research Fellowship
    stub only

## Modules

### newsletter signup field
  opens to [mailchimp page](https://us12.list-manage.com/subscribe?u=3b42de6ffcb6673f3d2451000&id=49b872540e&MERGE0=)
  email is persisted


### search field
click icon
field is visible
click cancel
field is not visible
click icon
field is visible
enter search term
search page loads
search term is present on page

variants: known 0 results search
      known search with results
      