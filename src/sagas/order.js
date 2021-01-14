import { all, fork } from 'redux-saga/effects'
import orders from './orders'

export default function* root() {
  yield all([
    fork(orders)
  ])
}
