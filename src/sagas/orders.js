
import { put, call, all, takeEvery } from 'redux-saga/effects'
import { getAllOrdersSuccess, getAllOrdersError } from '../actions'

const API_URL = 'http://127.0.0.1:8080'

// move to separate API
export async function fetchOrdersAsync() {
  const response = await fetch(`${API_URL}/api/order`)
  const json = await response.json()
  return json
}

function* fetchOrders() {
  try {
    const orders = yield call(fetchOrdersAsync)
    yield put(getAllOrdersSuccess(orders))
  } catch (error) {
    yield put(getAllOrdersError())
  }
}


export default function* rootSaga() {
  yield all(
    [
      takeEvery('FETCHED_ORDERS', fetchOrders)
    ]
  )
}
