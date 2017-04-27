import { fork } from 'redux-saga/effects'
import * as beerSagas from './beer'

export default function * root () {
  yield [
    fork(beerSagas.watchFetchBeer),
    fork(beerSagas.watchAddBeer),
    fork(beerSagas.watchRemoveBeer)
  ]
}
