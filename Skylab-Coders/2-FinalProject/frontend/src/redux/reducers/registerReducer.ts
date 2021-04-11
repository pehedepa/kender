import actionTypes from '../actions/actionTypes'
import initialState from '../stores/initialState'

export default function RegisterReducer (state: {} = initialState, action: {type: string, payload: {}}) {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return action.payload
    case actionTypes.ADD_USER_ERROR:
      return action.payload
    case actionTypes.CLEAN_REGISTER_STATUS:
      return null
    default:
      return state
  }
}
