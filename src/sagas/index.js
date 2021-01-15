
import { put, call, all, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions'
import * as actionTypes from '../constants'

const API_URL = 'http://127.0.0.1:8080'

// move to separate API file
async function fetchOrdersAsync() {
  const response = await fetch(`${API_URL}/api/order`)
  const json = await response.json()
  return json
}

async function fetchOrderByIdAsync (orderId) {
  const response = await fetch(`${API_URL}/api/order/${orderId}`)
  const json = await response.json()
  return json
}

async function fetchFilteredOrdersAsync (ordername) {
  const response = await fetch(`${API_URL}/api/order?filter=${String(ordername)}`)
  const json = await response.json()
  return json
}

function* fetchOrders() {
  try {
    const orders = yield call(fetchOrdersAsync)
    yield put(actions.getAllOrdersSuccess(orders))
  } catch (error) {
    yield put(actions.getAllOrdersError())
  }
}

function* fetchOrderById({ orderId }) {
  try {
    const orderDetails = yield call(fetchOrderByIdAsync, orderId)
    yield put(actions.getOrderByIdSuccess(orderDetails))
  } catch (error) {
    yield put(actions.getOrderByIdError())
  }
}

function* fetchFilteredOrders({ orderName }) {
  try {
    const filteredOrders = yield call(fetchFilteredOrdersAsync, orderName)
    yield put(actions.getFilteredOrdersSuccess(filteredOrders))
  } catch (error) {
    yield put(actions.getFilteredOrdersError())
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.FETCH_ALL_ORDERS, fetchOrders),
    takeEvery(actionTypes.FETCH_ORDER_BY_ID, fetchOrderById),
    takeEvery(actionTypes.FETCH_FILTERED_ORDERS, fetchFilteredOrders),
  ])
}
