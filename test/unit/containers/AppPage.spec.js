import {mapStateToProps, mapDispatchToProps} from '../../../src/containers/AppPage'
import { initialState } from '../../../src/reducers/modal'
import modalActions from '../../../src/actions/modal'

describe('Containers', () => {
  test('should map modal state to props', () => {
    const state = {
      modal: initialState()
    }

    expect(mapStateToProps(state)).toMatchSnapshot()
  })

  test('should map modal actions to props', () => {
    const actionsPropNames = Object.keys(modalActions)

    expect(mapDispatchToProps(actionsPropNames)).toMatchSnapshot()
  })
})
