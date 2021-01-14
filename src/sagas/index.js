
import { put, call, all, takeEvery } from 'redux-saga/effects'
import { getAllOrdersSuccess, getAllOrdersError, getOrderByIdSuccess, getOrderByIdError } from '../actions'

const API_URL = 'http://127.0.0.1:8080'

// move to separate API file
async function fetchOrdersAsync() {
  const response = await fetch(`${API_URL}/api/order`)
  const json = await response.json()
  return json
}

async function fetchOrderByIdAsync(orderId) {
  const response = await fetch(`${API_URL}/api/order/${orderId}`)
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

function* fetchOrderById({ orderId }) {
  try {
    const orderDetails = yield call(fetchOrderByIdAsync, orderId)
    yield put(getOrderByIdSuccess(orderDetails))
  } catch (error) {
    yield put(getOrderByIdError())
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery('FETCH_ALL_ORDERS', fetchOrders),
    takeEvery('FETCH_ORDER_BY_ID', fetchOrderById),
  ])
}
