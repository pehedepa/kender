import React from 'react'
import HamburguerModal from './index'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import * as actions from '../../../redux/actions/actionCreators'
import { render, fireEvent } from '@testing-library/react-native'
import thunk from 'redux-thunk'

describe('Given a HamburguerModal function', () => {
  const mockStore = configureStore([thunk])
  let store
  let navigation
  let status
  beforeEach(() => {
    jest.spyOn(actions, 'logout').mockReturnValueOnce({ type: '' })
    store = mockStore({
      userObject: {}
    })
    navigation = {
      navigate: jest.fn(),
      replace: jest.fn()
    }
    status = true
  })

  describe('When we invoke HamburguerModal function', () => {
    test('Then the render should match its snaptshot', () => {
      const tree = render(<Provider store={store}><HamburguerModal status={status} navigation={navigation}></HamburguerModal></Provider>)

      expect(tree).toMatchSnapshot()
    })
  })

  describe('When we press profile button ', () => {
    test('Then navigation.navigate should go to Profile', () => {
      const { getByTestId } = render(<Provider store={store}><HamburguerModal status={status} navigation={navigation}></HamburguerModal></Provider>)

      fireEvent.press(getByTestId('Profile'))
      expect(navigation.navigate).toHaveBeenCalledWith('Profile')
    })
  })

  describe('When we press CreateAd button ', () => {
    test('Then navigation.navigate should go to CreateAd', () => {
      const { getByTestId } = render(<Provider store={store}><HamburguerModal status={status} navigation={navigation}></HamburguerModal></Provider>)

      fireEvent.press(getByTestId('CreateAd'))
      expect(navigation.navigate).toHaveBeenCalledWith('CreateAd')
    })
  })

  describe('When we press LogOut button ', () => {
    test('Then actions.logout should be invoked', () => {
      const { getByTestId } = render(<Provider store={store}><HamburguerModal status={status} navigation={navigation}></HamburguerModal></Provider>)

      fireEvent.press(getByTestId('Logout'))
      expect(actions.logout).toHaveBeenCalled()
    })
  })

  describe('When we press invoke Hamburguer with no userObject ', () => {
    test('Then navigation.replace should go to Login', () => {
      store = mockStore({
        userObject: undefined
      })
      render(<Provider store={store}><HamburguerModal status={status} navigation={navigation}></HamburguerModal></Provider>)

      expect(navigation.replace).toHaveBeenCalled()
    })
  })
})
