export const getAllOrdersSuccess = (data) => {
  return { type: 'REQUESTED_ORDERS_SUCCEEDED', data }
}

export const getAllOrdersError = () => {
  return { type: 'REQUESTED_ORDERS_FAILED' }
}

export const fetchAllOrders = () => {
  return { type: 'FETCH_ALL_ORDERS' }
}

export const getOrderByIdSuccess = (data) => {
  return { type: 'GET_ORDER_BY_ID_SUCCESS', data }
}

export const getOrderByIdError = () => {
  return { type: 'GET_ORDER_BY_ID_FAILED' }
}

export const fetchOrderById = (orderId) => {
  return { type: 'FETCH_ORDER_BY_ID', orderId }
}
