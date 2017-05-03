// beers.js
import { expect } from 'chai'
import { fillInput, clickOnbutton } from '../pages/beer'


export default function () {
  this.When(/^user is on the Beers screen$/, () => {
    this.world.server.fakeFetchBeerResponse()
    this.world.server.fakeAddBeerResponse()
    browser.url('/beers')
  })

  this.Then(/^the first beer text is "([^"]*)"$/, (beer) => {
    let beers = browser.getText('p')

    expect(beers[0]).to.equal(beer)
  })

  this.When(/^the user add a new name "([^"]*)" and graduation "([^"]*)"$/, (beer, graduation) => {
    fillInput('[name=beerName]', beer)
    fillInput('[name=beerGraduation]', graduation)
  })


  this.When(/^the user send the form$/, () => {
    clickOnbutton('[type=submit]')
  })

  this.Then(/^the first beer of the list is "([^"]*)"$/, (beer) => {
    let beers = browser.getText('p')

    expect(beers[0]).to.equal(beer)
  })
}
