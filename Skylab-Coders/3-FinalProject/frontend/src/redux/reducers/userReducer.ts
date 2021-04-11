import actionTypes from '../actions/actionTypes'
import initialState from '../stores/initialState'

export default function UserReducer (state: {} = initialState.userObject, action) {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return action.payload.data
    case actionTypes.UPDATE_PROFILE:
      return action.payload.data
    case actionTypes.LOG_OUT:
      return null
    default:
      return state
  }
}
