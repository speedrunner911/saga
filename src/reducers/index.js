import * as actionTypes from '../constants'

const initialState = {
  orders: [],
  orderDetails: {},
  loading: false,
  error: '',
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_ORDERS_SUCCEEDED:
      return {
        ...state,
        orders: action.data,
        loading: false,
        error: false,
      }
    case actionTypes.GET_ALL_ORDERS_ERROR:
      return {
        loading: false,
        error: true,
      }
    case actionTypes.GET_ORDER_BY_ID_SUCCESS:
      return {
        ...state,
        orderDetails: action.data,
        loading: false,
        error: false,
      }
    case actionTypes.GET_ORDER_BY_ID_ERROR:
      return {
        loading: false,
        error: true,
      }
    case actionTypes.GET_FILTERED_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.data,
        loading: false,
        error: false,
      }
    case actionTypes.GET_FILTERED_ORDERS_ERROR: 
      return {
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export default rootReducer
