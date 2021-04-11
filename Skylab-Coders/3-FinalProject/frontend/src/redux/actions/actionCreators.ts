import axios from 'axios'
import actionTypes from './actionTypes'
import { loginURL, registerURL, productsURL, usersURL, logoutURL } from '../../constants'
import { Dispatch } from 'react'

export function login (email: string, password: string): Promise<any> {
  const data = { email, password }
  return async function dispatchInfo (dispatch) {
    try {
      const response = await axios.post(loginURL, data)
      dispatch({
        type: actionTypes.LOGIN_USER,
        payload: response
      })
    } catch (error) {
      dispatch({
        type: actionTypes.LOGIN_ERROR,
        payload: 401
      })
    }
  }
}

export function createAcc (email: string, password: string, location: string, name: string): Promise<any> {
  const data = { email, password, location, name }
  return async function dispatchInfo (dispatch) {
    try {
      const response = await axios.post(registerURL, data)
      dispatch({
        type: actionTypes.ADD_USER,
        payload: response.status
      })
    } catch (error) {
      dispatch({
        type: actionTypes.ADD_USER_ERROR,
        payload: 401
      })
    }
  }
}

export function uploadProduct (name: string, price: number, description: string, image: string, user: string, category: string, ageRange: string, keywords: any[]): Promise<any> {
  const data = { name, price, description, image, user, category, ageRange, keywords }
  return async function dispatchInfo (dispatch) {
    try {
      const response = await axios.post(productsURL, data)
      dispatch({
        type: actionTypes.UPLOAD_PRODUCT,
        payload: response.status
      })
    } catch (error) {
      dispatch({
        type: actionTypes.UPLOAD_PRODUCT,
        payload: 401
      })
    }
  }
}

export function getAllProducts (): Promise<any> {
  return async function dispatchInfo (dispatch) {
    try {
      const response = await axios.get(productsURL)
      dispatch({
        type: actionTypes.GET_ALL_PRODUCTS,
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type: actionTypes.GET_ALL_PRODUCTS_ERROR,
        payload: 401
      })
    }
  }
}

export function uploadProfile (_id, photo, name, address, cc, location): Promise<any> {
  const data = { _id, photo, name, address, cc, location }
  return async function dispatchInfo (dispatch) {
    try {
      const response = await axios.put(usersURL, data)
      dispatch({
        type: actionTypes.UPDATE_PROFILE,
        payload: response
      })
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_PROFILE,
        payload: 401
      })
    }
  }
}

export function logout (email, password): Promise<any> {
  const data = { email, password }
  return async function dispatchInfo (dispatch) {
    try {
      await axios.post(logoutURL, data)
      dispatch({
        type: actionTypes.LOG_OUT,
        payload: null
      })
    } catch (error) {
      dispatch({
        type: actionTypes.LOG_OUT,
        payload: null
      })
    }
  }
}

export function deleteProduct (_id) {
  return async function dispatchInfo (dispatch) {
    try {
      await axios.delete(`${productsURL}/${_id}`)
      dispatch({
        type: actionTypes.DELETE_PRODUCT
      })
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_PRODUCT,
        payload: null
      })
    }
  }
}

export function applyFilter (data: string) : { type: string, payload: string } {
  return {
    type: actionTypes.FILTER_PRODUCTS,
    payload: data
  }
}

export function cleanFilters (): { type: string, payload: null } {
  return {
    type: actionTypes.CLEAN_FILTERS,
    payload: null
  }
}

export function cleanRegister (): { type: string } {
  return {
    type: actionTypes.CLEAN_REGISTER_STATUS
  }
}

export function cleanLogin (): { type: string } {
  return {
    type: actionTypes.CLEAN_LOGIN_STATUS
  }
}

export function cleanProductUploaded (): { type: string } {
  return {
    type: actionTypes.CLEAN_UPLOAD_PRODUCT
  }
}
