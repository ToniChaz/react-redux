// beer.js

export function fillInput (field, value) {
  browser.waitForEnabled(field)
  browser.setValue(field, value)
}

export function clickOnbutton (name) {
  browser.waitForEnabled(name)
  browser.click(name)
}
