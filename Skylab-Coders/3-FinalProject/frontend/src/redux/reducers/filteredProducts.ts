import actionTypes from '../actions/actionTypes'
import initialState from '../stores/initialState'

export default function FilteredReducer (state: any[] = initialState.filteredProducts, action: { type: string, payload: string}) {
  switch (action.type) {
    case actionTypes.FILTER_PRODUCTS:
      return action.payload
    case actionTypes.CLEAN_FILTERS:
      return []
    default:
      return state
  }
}
