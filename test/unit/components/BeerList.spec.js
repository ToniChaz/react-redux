// BeerList.spec.js
import React from 'react'
import renderer from 'react-test-renderer'

import BeerList from '../../../src/components/BeerList'

describe('BeerList component', () => {
  test('render BeerItem component without crashing', () => {
    const beerList = [
      {name:'Amstel',graduation:'5',id: 'beer_01'},
      {name:'Mahoo',graduation:'3',id: 'beer_02'},
      {name:'Corona',graduation:'4,5',id: 'beer_03'}
    ]
    const loading = false
    const onRemove = jest.fn()

    const tree = renderer.create(
      <BeerList beerList={beerList} onRemove={onRemove} loading={loading}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('render BeerItem component with loading true', () => {
    const beerList = [
      {name:'Amstel',graduation:'5',id: 'beer_01'},
      {name:'Mahoo',graduation:'3',id: 'beer_02'},
      {name:'Corona',graduation:'4,5',id: 'beer_03'}
    ]
    const loading = true
    const onRemove = jest.fn()

    const tree = renderer.create(
      <BeerList beerList={beerList} onRemove={onRemove} loading={loading}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

})
