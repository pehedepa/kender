import LoginReducer from './loginReducer'
import actionTypes from '../actions/actionTypes'

describe('Given a LoginReducer function', () => {
  let state
  beforeEach(() => {
    state = {}
  })
  describe('When invoked with its parameters, it enters case LOGIN_USER', () => {
    test('Then should return and action.payload.status(200)', () => {
      const action = {
        type: actionTypes.LOGIN_USER,
        payload: { status: 200 }
      }

      const fn = LoginReducer(undefined, action)
      expect(fn).toBe(200)
    })
  })

  describe('When invoked with its parameters, it enters case LOGIN_ERROR', () => {
    test('Then should return payload (401)', () => {
      const action = {
        type: actionTypes.LOGIN_ERROR,
        payload: 401
      }

      const fn = LoginReducer(state, action)
      expect(fn).toBe(401)
    })
  })

  describe('When invoked with its parameters, it enters case CLEAN_LOGIN_STATUS', () => {
    test('Then should return payload null', () => {
      const action = {
        type: actionTypes.CLEAN_LOGIN_STATUS,
        payload: null
      }

      const fn = LoginReducer(state, action)
      expect(fn).toBe(null)
    })
  })
  describe('When invoked with its parameters, it enters case CLEAN_LOGIN_STATUS', () => {
    test('Then should return payload null', () => {
      const action = {
        type: actionTypes
      }

      const fn = LoginReducer(state, action)
      expect(fn).toBe(state)
    })
  })
})
