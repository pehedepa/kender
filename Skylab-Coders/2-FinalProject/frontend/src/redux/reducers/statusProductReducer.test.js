import StatusProductReducer from './statusProductReducer'
import actionTypes from '../actions/actionTypes'

describe('Given a StatusProductReducer function', () => {
  let state
  beforeEach(() => {
    state = {}
  })
  describe('When invoked with its parameters, it enters case UPLOAD_PRODUCT', () => {
    test('Then should return and action.payload(200)', () => {
      const action = {
        type: actionTypes.UPLOAD_PRODUCT,
        payload: 200
      }

      const fn = StatusProductReducer(undefined, action)
      expect(fn).toBe(200)
    })
  })

  describe('When invoked with its parameters, it enters case CLEAN_UPLOAD_PRODUCT', () => {
    test('Then should return null', () => {
      const action = {
        type: actionTypes.CLEAN_UPLOAD_PRODUCT,
        payload: null
      }

      const fn = StatusProductReducer(state, action)
      expect(fn).toBe(null)
    })
  })

  describe('When invoked with its parameters, it enters case DEFAULT', () => {
    test('Then should return its previous state', () => {
      const action = {
        type: actionTypes
      }

      const fn = StatusProductReducer(state, action)
      expect(fn).toBe(state)
    })
  })
})
