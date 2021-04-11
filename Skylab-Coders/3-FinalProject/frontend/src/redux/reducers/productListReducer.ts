import actionTypes from '../actions/actionTypes'
import initialState from '../stores/initialState'

export default function ProductListReducer (state: any[] = initialState.productList, action: {type: string, payload: {}}) {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS:
      return action.payload
    case actionTypes.GET_ALL_PRODUCTS_ERROR:
      return action.payload
    case actionTypes.DELETE_PRODUCT:
      return state
    default:
      return state
  }
}
