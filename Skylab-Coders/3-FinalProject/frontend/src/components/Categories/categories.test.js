import React from 'react'
import Categories from './index'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import * as actions from '../../redux/actions/actionCreators'
import { render, fireEvent } from '@testing-library/react-native'
import thunk from 'redux-thunk'

describe('Given a Categories function', () => {
  const mockStore = configureStore([thunk])
  let store
  beforeEach(() => {
    jest.spyOn(actions, 'applyFilter').mockReturnValueOnce({ type: '' })
    jest.spyOn(actions, 'cleanFilters').mockReturnValueOnce({ type: '' })
    jest.spyOn(actions, 'getAllProducts').mockReturnValueOnce({ type: '' })

    store = mockStore({
      productList: [
        { category: 'Toys' },
        { category: 'Books' },
        { category: 'Other' }
      ]
    })
  })

  describe('When we invoke Categories function', () => {
    test('Then the render should match its snaptshot', () => {
      const tree = render(<Provider store={store}><Categories></Categories></Provider>)

      expect(tree).toMatchSnapshot()
    })
  })

  describe('When we press Toys category button and filterByCategory gets called', () => {
    test('Then TOYS argument should invoke actions.applyFilter', () => {
      const { getByTestId } = render(<Provider store={store}><Categories></Categories></Provider>)

      fireEvent.press(getByTestId('Toys'))

      expect(actions.applyFilter).toHaveBeenCalled()
    })
  })

  describe('When we press Clothes category button and filterByCategory gets called', () => {
    test('Then CLOTHES argument should invoke actions.applyFilter', () => {
      const { getByTestId } = render(<Provider store={store}><Categories></Categories></Provider>)

      fireEvent.press(getByTestId('Clothes'))

      expect(actions.applyFilter).toHaveBeenCalled()
    })
  })

  describe('When we press Books category button and filterByCategory gets called', () => {
    test('Then BOOKS argument should invoke actions.applyFilter', () => {
      const { getByTestId } = render(<Provider store={store}><Categories></Categories></Provider>)

      fireEvent.press(getByTestId('Books'))

      expect(actions.applyFilter).toHaveBeenCalledWith()
    })
  })

  describe('When we press Other category button and filterByCategory gets called', () => {
    test('Then OTHER argument should invoke actions.applyFilter', () => {
      const { getByTestId } = render(<Provider store={store}><Categories></Categories></Provider>)

      fireEvent.press(getByTestId('Other'))

      expect(actions.applyFilter).toHaveBeenCalled()
    })
  })

  describe('When we press All category button and filterByCategory gets called', () => {
    test('Then NULL argument should invoke actions.cleanFilters', () => {
      const { getByTestId } = render(<Provider store={store}><Categories></Categories></Provider>)

      fireEvent.press(getByTestId('All'))

      expect(actions.cleanFilters).toHaveBeenCalled()
    })
  })
})
