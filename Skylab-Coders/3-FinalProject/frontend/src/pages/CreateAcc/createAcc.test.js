import React from 'react'
import CreateAccView from './index'
import { Alert } from 'react-native'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import * as actions from '../../redux/actions/actionCreators'
import { render, fireEvent } from '@testing-library/react-native'
import thunk from 'redux-thunk'

describe('Given a CreateAcc function', () => {
  const mockStore = configureStore([thunk])
  let navigation
  let store
  beforeEach(() => {
    jest.spyOn(actions, 'cleanRegister').mockReturnValueOnce({ type: '' })
    jest.spyOn(actions, 'createAcc').mockReturnValueOnce({ type: '' })
    store = mockStore({
      statusRegistered: 201
    })
    navigation = {
      navigate: jest.fn()
    }
  })

  describe('When we invoke CreateAccView', () => {
    test('Then the render should match its snaptshot', () => {
      store = mockStore({
        statusLogin: 201
      })

      const tree = render(<Provider store={store}><CreateAccView navigation={navigation}></CreateAccView></Provider>)

      expect(tree).toMatchSnapshot()
    })
  })
  describe('When we write any string in each TextInput', () => {
    test('Then it should fire a ChangeText event', () => {
      store = mockStore({
        statusRegistered: 201
      })

      const tree = render(<Provider store={store}><CreateAccView navigation={navigation}></CreateAccView></Provider>)
      const email = tree.getByPlaceholderText('Email')
      fireEvent.changeText(email, { text: 'email' })

      const name = tree.getByPlaceholderText('Name')
      fireEvent.changeText(name, { text: 'name' })

      const location = tree.getByPlaceholderText('Location')
      fireEvent.changeText(location, { text: 'location' })

      const password = tree.getByPlaceholderText('Password')
      fireEvent.changeText(password, { text: 'password' })

      const confirmedPassword = tree.getByPlaceholderText('Confirm Password')
      fireEvent.changeText(confirmedPassword, { text: 'confirmedpassword' })

      expect(tree).toMatchSnapshot()
    })
  })
  describe('When Button Create Account is pressed', () => {
    test('Then function checkTextInput is invoked', () => {
      const tree = render(<Provider store={store}><CreateAccView navigation={navigation}></CreateAccView></Provider>)
      fireEvent.press(tree.getByTestId('CreateAccount'))
      expect(tree).toMatchSnapshot()
    })
  })
  describe('When statusLogin is 201', () => {
    test('Then the render should match its snaptshot', () => {
      jest.spyOn(Alert, 'alert').mockReturnValueOnce({})
      store = mockStore({
        statusRegistered: 401
      })

      render(<Provider store={store}><CreateAccView navigation={navigation}></CreateAccView></Provider>)
      expect(Alert.alert).toHaveBeenCalled()
    })
  })
  describe('When email has no value', () => {
    test('Then an alert should pop up', () => {
      const mockState = React.useState
      jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState(''))

      jest.spyOn(Alert, 'alert').mockReturnValueOnce({})

      const tree = render(<Provider store={store}><CreateAccView navigation={navigation}></CreateAccView></Provider>)
      fireEvent.press(tree.getByTestId('CreateAccount'))

      expect(Alert.alert).toHaveBeenCalled()
    })
  })
  describe('When name has no value', () => {
    test('Then an alert should pop up', () => {
      const mockState = React.useState
      jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState(''))
      const tree = render(<Provider store={store}><CreateAccView navigation={navigation}></CreateAccView></Provider>)
      const email = tree.getByPlaceholderText('Email')
      fireEvent.changeText(email, { text: 'Kender12345' })

      const name = tree.getByPlaceholderText('Name')
      fireEvent.changeText(name, { text: null })

      jest.spyOn(Alert, 'alert').mockReturnValueOnce({})
      fireEvent.press(tree.getByTestId('CreateAccount'))

      expect(Alert.alert).toHaveBeenCalled()
    })
  })
  describe('When location and name have no value', () => {
    test('Then an alert should pop up', () => {
      const mockState = React.useState
      jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState(''))
      const tree = render(<Provider store={store}><CreateAccView navigation={navigation}></CreateAccView></Provider>)
      const email = tree.getByPlaceholderText('Email')
      fireEvent.changeText(email, { text: 'Kender12345' })

      const name = tree.getByPlaceholderText('Name')
      fireEvent.changeText(name, { text: null })

      const location = tree.getByPlaceholderText('Location')
      fireEvent.changeText(location, { text: null })

      const password = tree.getByPlaceholderText('Password')
      fireEvent.changeText(password, { text: null })

      jest.spyOn(Alert, 'alert').mockReturnValueOnce({})
      fireEvent.press(tree.getByTestId('CreateAccount'))

      expect(Alert.alert).toHaveBeenCalled()
    })
  })
})
