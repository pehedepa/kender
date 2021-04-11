import RegisterReducer from './registerReducer'
import actionTypes from '../actions/actionTypes'

describe('Given a RegisterReducer function', () => {
  let state
  beforeEach(() => {
    state = {}
  })
  describe('When invoked with its parameters, it enters case ADD_USER', () => {
    test('Then should return and action.payload.status(200)', () => {
      const action = {
        type: actionTypes.ADD_USER,
        payload: { status: 200 }
      }

      const fn = RegisterReducer(undefined, action)
      expect(fn).toBe(action.payload)
    })
  })

  describe('When invoked with its parameters, it enters case ADD_USER_ERROR', () => {
    test('Then should return payload (401)', () => {
      const action = {
        type: actionTypes.ADD_USER_ERROR,
        payload: 401
      }

      const fn = RegisterReducer(state, action)
      expect(fn).toBe(action.payload)
    })
  })

  describe('When invoked with its parameters, it enters case CLEAN_REGISTER_STATUS', () => {
    test('Then should return null', () => {
      const action = {
        type: actionTypes.CLEAN_REGISTER_STATUS,
        payload: null
      }

      const fn = RegisterReducer(state, action)
      expect(fn).toBe(null)
    })
  })

  describe('When invoked with its parameters, it enters case DEFAULT', () => {
    test('Then should return its previous state', () => {
      const action = {
        type: actionTypes
      }

      const fn = RegisterReducer(state, action)
      expect(fn).toBe(state)
    })
  })
})
