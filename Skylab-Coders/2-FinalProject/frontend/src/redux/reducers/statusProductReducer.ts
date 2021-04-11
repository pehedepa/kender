import actionTypes from '../actions/actionTypes'
import initialState from '../stores/initialState'

export default function StatusProductReducer (state: {} = initialState.statusProductUploaded, action) {
  switch (action.type) {
    case actionTypes.UPLOAD_PRODUCT:
      return action.payload
    case actionTypes.CLEAN_UPLOAD_PRODUCT:
      return null
    default:
      return state
  }
}
