import { combineReducers } from 'redux'
import beers from './beer'
import modal from './modal'

const rootReducer = combineReducers({
  beers,
  modal
})

export default rootReducer
