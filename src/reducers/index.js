const initialState = {
  orders: [],
  loading: false,
  error: '',
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUESTED_ORDERS':
      return {
        url: '',
        loading: true,
        error: false,
      }
    case 'REQUESTED_ORDERS_SUCCEEDED':
      return {
        orders: action.data,
        loading: false,
        error: false,
      }
    case 'REQUESTED_ORDERS_FAILED':
      return {
        url: '',
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export default rootReducer
