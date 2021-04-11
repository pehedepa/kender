import React from 'react'
import Profile from './index'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import * as actions from '../../redux/actions/actionCreators'
import { render, fireEvent } from '@testing-library/react-native'
import thunk from 'redux-thunk'

describe('Given a CreateAd function', () => {
  const mockStore = configureStore([thunk])
  let store
  let navigation

  beforeEach(() => {
    jest.spyOn(actions, 'uploadProfile').mockReturnValueOnce({ type: '' })
    store = mockStore({
      userObject: {
        _id: '50',
        name: 'pablo',
        email: 'kender@gmail.com',
        address: 'carrer',
        cc: '5555',
        location: 'barcelona'
      },
      productList: [{ user: { _id: '50' } }]
    })
    navigation = {
      navigate: jest.fn(),
      replace: jest.fn()
    }
  })

  describe('When we invoke Profile function', () => {
    test('Then the render should match its snaptshot', () => {
      const tree = render(<Provider store={store}><Profile></Profile></Provider>)

      expect(tree).toMatchSnapshot()
    })
  })

  describe('When we press Update Button all textInputs with string values', () => {
    test('Then the render should match its snaptshot', () => {
      const tree = render(<Provider store={store}><Profile navigation={navigation}></Profile></Provider>)

      const name = tree.getByPlaceholderText('pablo')
      fireEvent.changeText(name, { text: 'manolo' })

      const address = tree.getByPlaceholderText('carrer')
      fireEvent.changeText(address, { text: 'unaltrecarrer' })

      const location = tree.getByPlaceholderText('barcelona')
      fireEvent.changeText(location, { text: 'madrid' })

      const cc = tree.getByPlaceholderText('5555')
      fireEvent.changeText(cc, { text: '55544' })

      expect(tree).toMatchSnapshot()
    })
  })

  describe('When userObject lacks location/cc/photo/name', () => {
    test('Then those useEffects should start with an empty string as value', () => {
      store = mockStore({
        userObject: {
          _id: '50',
          name: '',
          email: 'kender@gmail.com',
          address: '',
          cc: '',
          location: ''
        },
        productList: [{ user: { _id: '50' } }]
      })

      const tree = render(<Provider store={store}><Profile navigation={navigation}></Profile></Provider>)

      expect(tree).toMatchSnapshot()
    })
  })

  describe('When Update Profile button is pressed', () => {
    test('Then updateUserData function should be invoked', () => {
      const tree = render(<Provider store={store}><Profile navigation={navigation}></Profile></Provider>)
      const button = tree.getByTestId('update')
      fireEvent.press(button)
      expect(actions.uploadProfile).toMatchSnapshot()
    })
  })
})
