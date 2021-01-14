const initialState = {
  orders: [],
  orderDetails: {},
  loading: false,
  error: '',
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUESTED_ORDERS_SUCCEEDED':
      return {
        ...state,
        orders: action.data,
        loading: false,
        error: false,
      }
    case 'REQUESTED_ORDERS_FAILED':
      return {
        loading: false,
        error: true,
      }
    // get order by id
    case 'GET_ORDER_BY_ID_SUCCESS': 
      return {
        ...state,
        orderDetails: action.data,
        loading: false,
        error: false,
      }
    case 'GET_ORDER_BY_ID_ERROR': 
      return {
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export default rootReducer
