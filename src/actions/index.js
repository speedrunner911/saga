export const getAllOrdersSuccess = (data) => {
  return { type: 'GET_ALL_ORDERS_SUCCEEDED', data }
}

export const getAllOrdersError = () => {
  return { type: 'GET_ALL_ORDERS_ERROR' }
}

export const fetchAllOrders = () => {
  return { type: 'FETCH_ALL_ORDERS' }
}

export const getOrderByIdSuccess = (data) => {
  return { type: 'GET_ORDER_BY_ID_SUCCESS', data }
}

export const getOrderByIdError = () => {
  return { type: 'GET_ORDER_BY_ID_ERROR' }
}

export const fetchOrderById = (orderId) => {
  return { type: 'FETCH_ORDER_BY_ID', orderId }
}

export const getFilteredOrdersSuccess = (data) => {
  return { type: 'GET_FILTERED_ORDERS_SUCCESS', data }
}

export const getFilteredOrdersError = () => {
  return { type: 'GET_FILTERED_ORDERS_ERROR' }
}

export const fetchFilteredOrders = (orderName) => {
  return { type: 'FETCH_FILTERED_ORDERS', orderName }
}