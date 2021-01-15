import * as actionTypes from '../constants'

export const getAllOrdersSuccess = (data) => {
  return { type: actionTypes.GET_ALL_ORDERS_SUCCEEDED, data }
}

export const getAllOrdersError = () => {
  return { type: actionTypes.GET_ALL_ORDERS_ERROR }
}

export const fetchAllOrders = () => {
  return { type: actionTypes.FETCH_ALL_ORDERS }
}

export const getOrderByIdSuccess = (data) => {
  return { type: actionTypes.GET_ORDER_BY_ID_SUCCESS, data }
}

export const getOrderByIdError = () => {
  return { type: actionTypes.GET_ORDER_BY_ID_ERROR }
}

export const fetchOrderById = (orderId) => {
  return { type: actionTypes.FETCH_ORDER_BY_ID, orderId }
}

export const getFilteredOrdersSuccess = (data) => {
  return { type: actionTypes.GET_FILTERED_ORDERS_SUCCESS, data }
}

export const getFilteredOrdersError = () => {
  return { type: actionTypes.GET_FILTERED_ORDERS_ERROR }
}

export const fetchFilteredOrders = (orderName) => {
  return { type: actionTypes.FETCH_FILTERED_ORDERS, orderName }
}