import React from 'react'
import Loading from './index'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react-native'
import thunk from 'redux-thunk'

describe('Given a Loading function', () => {
  const mockStore = configureStore([thunk])
  let store
  beforeEach(() => {
    store = mockStore({
    })
  })

  describe('When we invoke Loading function', () => {
    test('Then the render should match its snaptshot', () => {
      const tree = render(<Provider store={store}><Loading></Loading></Provider>)

      expect(tree).toMatchSnapshot()
    })
  })
})
