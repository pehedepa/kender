import React from 'react'
import Avatar from './index'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
// import * as actions from '../../redux/actions/actionCreators'
import { render } from '@testing-library/react-native'
import thunk from 'redux-thunk'

describe('Given a Avatar function', () => {
  const mockStore = configureStore([thunk])
  let store
  beforeEach(() => {
    store = mockStore({
      userObject: {}
    })
  })

  describe('When we invoke Avatar function', () => {
    test('Then the render should match its snaptshot', () => {
      store = mockStore({
        userObject: {}
      })

      const tree = render(<Provider store={store}><Avatar></Avatar></Provider>)

      expect(tree).toMatchSnapshot()
    })
  })

  describe('When we invoke Avatar function with userObject.photo', () => {
    test('Then the render should match its snaptshot', () => {
      store = mockStore({
        userObject: { photo: 'string' }
      })

      const tree = render(<Provider store={store}><Avatar></Avatar></Provider>)

      expect(tree).toMatchSnapshot()
    })
  })
})
