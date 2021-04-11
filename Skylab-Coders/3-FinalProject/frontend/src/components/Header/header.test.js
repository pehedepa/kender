import React from 'react'
import Dashboard from './index'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import * as actions from '../../redux/actions/actionCreators'
import { render } from '@testing-library/react-native'
import thunk from 'redux-thunk'

jest.mock('@react-navigation/native')
jest.mock('../../components/Header', () => 'HeaderMocked')
jest.mock('../../components/Categories', () => 'CategoriesMocked')
jest.mock('../../components/Loading', () => 'LoadingMocked')

describe('Given a Dashboard function', () => {
  const mockStore = configureStore([thunk])
  let store
  let navigation
  beforeEach(() => {
    jest.spyOn(actions, 'getAllProducts').mockReturnValueOnce({ type: '' })
    store = mockStore({
      productList: {},
      filteredProducts: {}
    })
    navigation = {
      navigate: jest.fn()
    }
  })

  describe('When we invoke Dashboard function', () => {
    test('Then the render should match its snaptshot', () => {
      const tree = render(<Provider store={store}><Dashboard navigation={navigation}></Dashboard></Provider>)

      expect(tree).toMatchSnapshot()
    })
  })
})
