import FilteredReducer from './filteredProducts'
import actionTypes from '../actions/actionTypes'

describe('Given a FilteredReducer function', () => {
  let state
  beforeEach(() => {
    state = {}
  })

  describe('When invoked with its parameters, it enters case FILTER_PRODUCTS', () => {
    test('Then should return and action.payload(string)', () => {
      const action = {
        type: actionTypes.FILTER_PRODUCTS,
        payload: 'toys'
      }

      const fn = FilteredReducer(undefined, action)
      expect(fn).toEqual(action.payload)
    })
  })

  describe('When invoked with its parameters, it enters case CLEAN_FILTERS', () => {
    test('Then should return an empty array []', () => {
      const action = {
        type: actionTypes.CLEAN_FILTERS,
        payload: []
      }

      const fn = FilteredReducer(state, action)
      expect(fn).toEqual(action.payload)
    })
  })
  describe('When invoked with its parameters, it enters case DEFAULT', () => {
    test('Then should return previous state', () => {
      const action = {
        type: actionTypes,
        payload: []
      }

      const fn = FilteredReducer(state, action)
      expect(fn).toEqual(state)
    })
  })
})
