// Beer.spec.js
import React from 'react'
import renderer from 'react-test-renderer'

import Beer from '../../../src/components/Beer'

describe('Beer component', () => {
  test('render Beer component without crashing', () => {
    const beerList = []
    const loading = false
    const error = null
    const fetchBeer = jest.fn()

    const tree = renderer.create(
      <Beer beerList={beerList} loading={loading} error={error} fetchBeer={fetchBeer}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('render Beer component with beers', () => {
    const beerList = [
      {name:'Amstel',graduation:'5',id: 'beer_01'},
      {name:'Mahoo',graduation:'3',id: 'beer_02'},
      {name:'Corona',graduation:'4,5',id: 'beer_03'}
    ]
    const loading = false
    const error = null
    const fetchBeer = jest.fn()

    const tree = renderer.create(
      <Beer beerList={beerList} loading={loading} error={error} fetchBeer={fetchBeer}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('render Beer component with loading true', () => {
    const beerList = []
    const loading = true
    const error = null
    const fetchBeer = jest.fn()

    const tree = renderer.create(
      <Beer beerList={beerList} loading={loading} error={error} fetchBeer={fetchBeer}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('render Beer component with error', () => {
    const beerList = []
    const loading = false
    const error = {
      status: 401,
      statusText: 'Unauthorized'
    }
    const fetchBeer = jest.fn()

    const tree = renderer.create(
      <Beer beerList={beerList} loading={loading} error={error} fetchBeer={fetchBeer}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

})
