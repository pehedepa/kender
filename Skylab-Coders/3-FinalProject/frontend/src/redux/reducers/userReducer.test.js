import UserReducer from './userReducer'
import actionTypes from '../actions/actionTypes'

describe('Given a UserReducer function', () => {
  let state
  beforeEach(() => {
    state = {}
  })
  describe('When invoked with its parameters, it enters case LOGIN_USER', () => {
    test('Then should return and action.payload.data', () => {
      const action = {
        type: actionTypes.LOGIN_USER,
        payload: { data: {} }
      }

      const fn = UserReducer(state, action)
      expect(fn).toBe(action.payload.data)
    })
  })
  describe('When invoked with its parameters it enters case UPDATE_PROFILE', () => {
    test('Then should return and action.payload.data', () => {
      const action = {
        type: actionTypes.UPDATE_PROFILE,
        payload: { data: {} }
      }

      const fn = UserReducer(undefined, action)
      expect(fn).toBe(action.payload.data)
    })
  })

  describe('When invoked with its parameters, it enters case LOG_OUT', () => {
    test('Then should return null', () => {
      const action = {
        type: actionTypes.LOG_OUT,
        payload: null
      }

      const fn = UserReducer(state, action)
      expect(fn).toBe(null)
    })
  })

  describe('When invoked with its parameters, it enters case DEFAULT', () => {
    test('Then should return its previous state', () => {
      const action = {
        type: actionTypes
      }

      const fn = UserReducer(state, action)
      expect(fn).toBe(state)
    })
  })
})
