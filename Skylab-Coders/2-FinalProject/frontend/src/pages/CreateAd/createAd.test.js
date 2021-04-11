import React from 'react'
import CreateAd from './index'
import { Alert } from 'react-native'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import * as actions from '../../redux/actions/actionCreators'
import { fireEvent, render } from '@testing-library/react-native'
import thunk from 'redux-thunk'

describe('Given a CreateAd function', () => {
  const mockStore = configureStore([thunk])
  let navigation
  let store
  let image
  beforeEach(() => {
    jest.spyOn(actions, 'uploadProduct').mockReturnValueOnce({ type: '' })
    jest.spyOn(actions, 'cleanProductUploaded').mockReturnValueOnce({ type: '' })
    jest.spyOn(actions, 'getAllProducts').mockReturnValueOnce({ type: '' })

    store = mockStore({
      statusProductUploaded: 200,
      userObject: {}
    })
    navigation = {
      navigate: jest.fn()
    }
  })

  describe('When we invoke CreateAd', () => {
    test('Then the render should match its snaptshot', () => {
      const tree = render(<Provider store={store}><CreateAd navigation={navigation}></CreateAd></Provider>)

      expect(tree).toMatchSnapshot()
    })
  })

  describe('When we get statusProductUploaded(401)', () => {
    test('Then an alert should pop up', () => {
      jest.spyOn(Alert, 'alert').mockReturnValueOnce({})
      store = mockStore({
        statusProductUploaded: 401
      })
      render(<Provider store={store}><CreateAd navigation={navigation}></CreateAd></Provider>)

      expect(Alert.alert).toHaveBeenCalled()
    })
  })

  describe('When we press Publish Product Button and no TextInput has value', () => {
    test('Then Alert.alert should show up', () => {
      const mockState = React.useState
      jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => mockState('a'))
        .mockImplementationOnce(() => mockState(null))
      const tree = render(<Provider store={store}><CreateAd navigation={navigation}></CreateAd></Provider>)

      jest.spyOn(Alert, 'alert').mockReturnValueOnce({})
      fireEvent.press(tree.getByTestId('Publish'))

      expect(Alert.alert).toHaveBeenCalled()
    })
  })

  describe('When we press Publish Product Button and Item has text', () => {
    test('Then Alert.alert should show up', () => {
      const mockState = React.useState
      jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => mockState('a'))
        .mockImplementationOnce(() => mockState(null))
      const tree = render(<Provider store={store}><CreateAd navigation={navigation}></CreateAd></Provider>)

      const name = tree.getByPlaceholderText('Item Name')
      fireEvent.changeText(name, { text: 'manolo' })
      jest.spyOn(Alert, 'alert').mockReturnValueOnce({})
      fireEvent.press(tree.getByTestId('Publish'))

      expect(Alert.alert).toHaveBeenCalled()
    })
  })

  describe('When we press Publish Product Button and Item/Price/Description have text', () => {
    test('Then the render should match its snaptshot', () => {
      const tree = render(<Provider store={store}><CreateAd navigation={navigation}></CreateAd></Provider>)

      const name = tree.getByPlaceholderText('Item Name')
      fireEvent.changeText(name, { text: 'manolo' })

      const address = tree.getByPlaceholderText('Price')
      fireEvent.changeText(address, { text: 'unaltrecarrer' })

      const location = tree.getByPlaceholderText('Description')
      fireEvent.changeText(location, { text: 'madrid' })
      fireEvent.press(tree.getByTestId('Publish'))
      expect(tree).toMatchSnapshot()
    })
  })

  describe('When we press Publish Product Button and Description has no value', () => {
    test('Then Alert.alert should show up', () => {
      const mockState = React.useState
      jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => mockState('a'))
        .mockImplementationOnce(() => mockState(undefined))
      const tree = render(<Provider store={store}><CreateAd navigation={navigation}></CreateAd></Provider>)

      const name = tree.getByPlaceholderText('Item Name')
      fireEvent.changeText(name, { text: 'manolo' })
      const address = tree.getByPlaceholderText('Price')
      fireEvent.changeText(address, { text: 'unaltrecarrer' })

      jest.spyOn(Alert, 'alert').mockReturnValueOnce({})

      fireEvent.press(tree.getByTestId('Publish'))

      expect(Alert.alert).toHaveBeenCalled()
    })
  })
})
