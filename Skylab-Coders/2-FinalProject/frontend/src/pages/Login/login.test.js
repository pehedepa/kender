import React from 'react'
import LoginView from './index'
import { Alert } from 'react-native'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import * as actions from '../../redux/actions/actionCreators'
import { render, fireEvent } from '@testing-library/react-native'
import thunk from 'redux-thunk'

describe('Given a LoginView function', () => {
  const mockStore = configureStore([thunk])
  let navigation
  let store
  beforeEach(() => {
    jest.spyOn(actions, 'cleanLogin').mockReturnValueOnce({ type: '' })
    jest.spyOn(actions, 'login').mockReturnValueOnce({ type: '' })
    store = mockStore({
      statusLogin: 200
    })
    navigation = {
      replace: jest.fn(),
      navigate: jest.fn()
    }
  })
  describe('When we press Login Button with email and password with string values', () => {
    test('Then the render should match its snaptshot', () => {
      jest.spyOn(Alert, 'alert').mockReturnValueOnce({})
      store = mockStore({
        statusLogin: 401
      })

      const tree = render(<Provider store={store}><LoginView navigation={navigation}></LoginView></Provider>)
      const email = tree.getByPlaceholderText('Email')
      fireEvent.changeText(email, { text: 'email' })

      const password = tree.getByPlaceholderText('Password')
      fireEvent.changeText(password, { text: 'password' })

      const login = tree.getByTestId('Login')
      fireEvent.press(login)
      expect(tree).toMatchSnapshot()
    })
  })
  describe('When statusLogin is 401', () => {
    test('Then the render should match its snaptshot', () => {
      jest.spyOn(Alert, 'alert').mockReturnValueOnce({})
      store = mockStore({
        statusLogin: 401
      })

      const tree = render(<Provider store={store}><LoginView navigation={navigation}></LoginView></Provider>)
      expect(tree).toMatchSnapshot()
    })
  })
  describe('When Button Login is pressed', () => {
    test('Then navigation.navigate is invoked', () => {
      const tree = render(<Provider store={store}><LoginView navigation={navigation}></LoginView></Provider>)
      fireEvent.press(tree.getByTestId('CreateAcc'))
      expect(navigation.navigate).toHaveBeenCalledWith('CreateAcc')
    })
  })
  describe('When email has no value', () => {
    test('Then an alert should pop up', () => {
      const mockState = React.useState
      jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState(''))

      jest.spyOn(Alert, 'alert').mockReturnValueOnce({})
      store = mockStore({
        statusLogin: 401
      })

      const tree = render(<Provider store={store}><LoginView navigation={navigation}></LoginView></Provider>)
      fireEvent.press(tree.getByTestId('Login'))

      expect(Alert.alert).toHaveBeenCalled()
    })
  })
  describe('When email has value and password has no value', () => {
    test('Then an alert should pop up', () => {
      const mockState = React.useState
      jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState('password'))

      jest.spyOn(Alert, 'alert').mockReturnValueOnce({})

      const tree = render(<Provider store={store}><LoginView navigation={navigation}></LoginView></Provider>)
      fireEvent.press(tree.getByTestId('Login'))

      expect(Alert.alert).toHaveBeenCalled()
    })
  })
})
