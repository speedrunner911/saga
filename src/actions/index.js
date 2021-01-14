export const getAllOrdersSuccess = (data) => {
  return { type: 'REQUESTED_ORDERS_SUCCEEDED', data }
}

export const getAllOrdersError = () => {
  return { type: 'REQUESTED_ORDERS_FAILED' }
}

export const fetchAllOrders = () => {
  return { type: 'FETCHED_ORDERS' }
}
