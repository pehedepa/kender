import React from 'react'
import Detail from './index'
import configureStore from 'redux-mock-store'
import { Alert } from 'react-native'
import { Provider } from 'react-redux'
import * as actions from '../../redux/actions/actionCreators'
import { render, fireEvent } from '@testing-library/react-native'
import thunk from 'redux-thunk'

describe('Given a Detail function', () => {
  const mockStore = configureStore([thunk])
  let store
  let navigation
  let route
  beforeEach(() => {
    jest.spyOn(actions, 'deleteProduct').mockReturnValueOnce({ type: '' })
    jest.spyOn(actions, 'getAllProducts').mockReturnValueOnce({ type: '' })

    store = mockStore({
      userObject: {
        _id: '50',
        name: '',
        email: 'kender@gmail.com',
        address: undefined,
        cc: '',
        location: ''
      }
    })
    navigation = {
      navigate: jest.fn()
    }
    route = {
      params: {
        singleProduct: {
          description: '',
          image: '',
          name: '',
          user: {},
          category: '',
          ageRange: '',
          price: 100,
          _id: ''
        }
      }
    }
  })

  describe('When we invoke Detail function', () => {
    test('Then the render should match its snaptshot', () => {
      const tree = render(<Provider store={store}><Detail navigation={navigation} route={route}></Detail></Provider>)

      expect(tree).toMatchSnapshot()
    })
  })

  describe('When Purchase Product button has been pressed with no CC or adress', () => {
    test('Then buyProduct function must be invoked', () => {
      const tree = render(<Provider store={store}><Detail navigation={navigation} route={route}></Detail></Provider>)
      const button = tree.getByTestId('BuyProduct')
      fireEvent.press(button)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('When Purchase Product button has been pressed with a CC and an adress', () => {
    test('Then redirectToDashboard function must be invoked', () => {
      jest.spyOn(Alert, 'alert').mockReturnValueOnce({})
      store = mockStore({
        userObject: {
          _id: '50',
          name: '',
          email: 'kender@gmail.com',
          address: 'calle',
          cc: '5544',
          location: ''
        }
      })
      const tree = render(<Provider store={store}><Detail navigation={navigation} route={route}></Detail></Provider>)
      const button = tree.getByTestId('BuyProduct')
      fireEvent.press(button)
      expect(Alert.alert).toHaveBeenCalled()
    })
  })
})
