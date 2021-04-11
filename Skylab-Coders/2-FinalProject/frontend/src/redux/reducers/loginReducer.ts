import actionTypes from '../actions/actionTypes'
import initialState from '../stores/initialState'

export default function LoginReducer (state: {} = initialState.statusLogin, action: {type: string, payload: {status: number}}) {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return action.payload.status
    case actionTypes.LOGIN_ERROR:
      return action.payload
    case actionTypes.CLEAN_LOGIN_STATUS:
      return null
    default:
      return state
  }
}
