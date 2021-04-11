import ProductListReducer from './productListReducer'
import actionTypes from '../actions/actionTypes'

describe('Given a ProductListReducer function', () => {
  let state
  beforeEach(() => {
    state = {}
  })
  describe('When invoked with its parameters, it enters case GET_ALL_PRODUCTS', () => {
    test('Then should return and action.payload []', () => {
      const action = {
        type: actionTypes.GET_ALL_PRODUCTS,
        payload: [1, 2, 3]
      }

      const fn = ProductListReducer(undefined, action)
      expect(fn).toEqual([1, 2, 3])
    })
  })

  describe('When invoked with its parameters, it enters case GET_ALL_PRODUCTS_ERROR', () => {
    test('Then should return payload (401)', () => {
      const action = {
        type: actionTypes.GET_ALL_PRODUCTS_ERROR,
        payload: 401
      }

      const fn = ProductListReducer(state, action)
      expect(fn).toBe(401)
    })
  })
  describe('When invoked with its parameters, it enters case DELETE_PRODUCT', () => {
    test('Then should return previous state', () => {
      const action = {
        type: actionTypes.DELETE_PRODUCT
      }

      const fn = ProductListReducer(state, action)
      expect(fn).toBe(state)
    })
  })
  describe('When invoked with its parameters, it enters case DEFAULT', () => {
    test('Then should return previous state', () => {
      const action = {
        type: actionTypes
      }

      const fn = ProductListReducer(state, action)
      expect(fn).toBe(state)
    })
  })
})
