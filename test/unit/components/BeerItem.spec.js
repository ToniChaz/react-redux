// BeerItem.spec.js
import React from 'react'
import renderer from 'react-test-renderer'

import BeerItem from '../../../src/components/BeerItem'

describe('BeerItem component', () => {
  test('render BeerItem component without crashing', () => {
    const beer = {
      name: 'Amstel',
      graduation: '5',
      id: 'beer_01'
    }
    const loading = false
    const onRemove = jest.fn()

    const tree = renderer.create(
      <BeerItem beer={beer} onRemove={onRemove} loading={loading}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('render BeerItem component with loading true', () => {
    const beer = {
      name: 'Amstel',
      graduation: '5',
      id: 'beer_01'
    }
    const loading = true
    const onRemove = jest.fn()

    const tree = renderer.create(
      <BeerItem beer={beer} onRemove={onRemove} loading={loading}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

})
