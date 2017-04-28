import {mapStateToProps, mapDispatchToProps} from '../../../src/containers/BeerPage'
import { initialState } from '../../../src/reducers/modal'
import modalActions from '../../../src/actions/modal'
import beerActions from '../../../src/actions/beer'

describe('Containers', () => {
  test('should map modal state to props', () => {
    const state = {
      modal: initialState()
    }

    expect(mapStateToProps(state)).toMatchSnapshot()
  })

  test('should map modal actions to props', () => {
    //const beerActionPropNames = Object.keys(beerActions)
    const actionsPropNames = Object.keys(modalActions)

    expect(mapDispatchToProps(actionsPropNames)).toMatchSnapshot()
  })
})
