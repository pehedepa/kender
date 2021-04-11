import axios from 'axios'
import {
  login,
  createAcc,
  uploadProduct,
  getAllProducts,
  uploadProfile,
  logout,
  deleteProduct,
  applyFilter,
  cleanFilters,
  cleanRegister,
  cleanLogin,
  cleanProductUploaded
} from './actionCreators'
import actionTypes from './actionTypes'

jest.mock('axios')

describe('Given a Login function', () => {
  describe('When invoked with its parameters, it should return a function that when invoked', () => {
    test('Then should dispatch an object with type LOGIN_USER and its payload (200)', async () => {
      axios.post.mockReturnValueOnce(200)

      const action = {
        type: actionTypes.LOGIN_USER,
        payload: 200
      }

      const dispatch = jest.fn()

      const fn = login('email', 'password')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
  describe('When invoked with its parameters and throwing an error', () => {
    test('Then should dispatch an object with Type LOGIN_ERROR and payload (401)', async () => {
      axios.post.mockImplementationOnce(() => { throw new Error() })

      const action = {
        type: actionTypes.LOGIN_ERROR,
        payload: 401
      }

      const dispatch = jest.fn()

      const fn = login('email', 'password')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a CreateAcc function', () => {
  describe('When invoked with its parameters, it should return a function that when invoked', () => {
    test('Then should dispatch an object with type ADD_USER and its payload({status: 200})', async () => {
      axios.post.mockReturnValueOnce({ status: 200 })

      const action = {
        type: actionTypes.ADD_USER,
        payload: 200
      }

      const dispatch = jest.fn()

      const fn = createAcc('email', 'password', 'location', 'name')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
  describe('When invoked with its parameters and throwing an error', () => {
    test('Then should dispatch an object with Type ADD_USER_ERROR and payload (401)', async () => {
      axios.post.mockImplementationOnce(() => { throw new Error() })

      const action = {
        type: actionTypes.ADD_USER_ERROR,
        payload: 401
      }

      const dispatch = jest.fn()

      const fn = createAcc('email', 'password', 'location', 'name')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a UploadProduct function', () => {
  describe('When invoked with its parameters, it should return a function that when invoked', () => {
    test('Then should dispatch an object with type UPLOAD_PRODUCT and its payload(200)', async () => {
      axios.post.mockReturnValueOnce({ status: 200 })

      const action = {
        type: actionTypes.UPLOAD_PRODUCT,
        payload: 200
      }

      const dispatch = jest.fn()

      const fn = uploadProduct('name', 100, 'description', 'image', 'category', 'user', 'age-range')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
  describe('When invoked with its parameters and throwing an error', () => {
    test('Then should dispatch an object with Type UPLOAD_PRODUCT and payload (401)', async () => {
      axios.post.mockImplementationOnce(() => { throw new Error() })

      const action = {
        type: actionTypes.UPLOAD_PRODUCT,
        payload: 401
      }

      const dispatch = jest.fn()

      const fn = uploadProduct('name', 100, 'description', 'image', 'category', 'user', 'age-range')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a GetAllProducts function', () => {
  describe('When invoked it should return a function that when invoked', () => {
    test('Then should dispatch an object with type GET_ALL_PRODUCTS and its payload(Response.data: [])', async () => {
      const response = {
        data: []
      }
      axios.get.mockReturnValueOnce(response)

      const action = {
        type: actionTypes.GET_ALL_PRODUCTS,
        payload: response.data
      }

      const dispatch = jest.fn()

      const fn = getAllProducts()
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
  describe('When invoked with its parameters and throwing an error', () => {
    test('Then should dispatch an object with Type GET_ALL_PRODUCTS_ERROR and payload (401)', async () => {
      axios.post.mockImplementationOnce(() => { throw new Error() })

      const action = {
        type: actionTypes.GET_ALL_PRODUCTS_ERROR,
        payload: 401
      }

      const dispatch = jest.fn()

      const fn = getAllProducts()
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a UploadProfile function', () => {
  describe('When invoked it should return a function that when invoked', () => {
    test('Then should dispatch an object with type UPDATE_PROFILE and its payload(Response: {})', async () => {
      const response = { data: {} }
      axios.put.mockReturnValueOnce(response)

      const action = {
        type: actionTypes.UPDATE_PROFILE,
        payload: response
      }

      const dispatch = jest.fn()

      const fn = uploadProfile('_id', 'photo')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
  describe('When invoked with its parameters and throwing an error', () => {
    test('Then should dispatch an object with Type UPDATE_PROFILE and payload (401)', async () => {
      axios.put.mockImplementationOnce(() => { throw new Error() })

      const action = {
        type: actionTypes.UPDATE_PROFILE,
        payload: 401
      }

      const dispatch = jest.fn()

      const fn = uploadProfile('_id', 'photo')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a Logout function', () => {
  describe('When invoked with its parameters, it should return a function that when invoked', () => {
    test('Then should dispatch an object with type LOG_OUT and its payload (null)', async () => {
      axios.post.mockReturnValueOnce()

      const action = {
        type: actionTypes.LOG_OUT,
        payload: null
      }

      const dispatch = jest.fn()

      const fn = logout('email', 'password')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
  describe('When invoked with its parameters and throwing an error', () => {
    test('Then should dispatch an object with Type LOG_OUT and payload (null)', async () => {
      axios.post.mockImplementationOnce(() => { throw new Error() })

      const action = {
        type: actionTypes.LOG_OUT,
        payload: null
      }

      const dispatch = jest.fn()

      const fn = logout('email', 'password')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a DeleteProduct function', () => {
  describe('When invoked it should return a function that when invoked', () => {
    test('Then should dispatch an object with type DELETE_PRODUCT with no payload', async () => {
      axios.delete.mockReturnValueOnce({})

      const action = {
        type: actionTypes.DELETE_PRODUCT
      }

      const dispatch = jest.fn()

      const fn = deleteProduct()
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
  describe('When invoked it should return a function that when invoked with an error triggered', () => {
    test('Then should dispatch an object with type DELETE_PRODUCT with payload null', async () => {
      axios.delete.mockImplementationOnce(() => { throw new Error() })

      const action = {
        type: actionTypes.DELETE_PRODUCT,
        payload: null
      }

      const dispatch = jest.fn()

      const fn = deleteProduct()
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given an ApplyFilter function', () => {
  describe('When invoked it should return an object', () => {
    test('Then such object should contain type and payload ', () => {
      const data = 'id'
      const action = {
        type: actionTypes.FILTER_PRODUCTS,
        payload: data
      }

      const fn = applyFilter(data)
      expect(fn).toEqual(action)
    })
  })
})

describe('Given an cleanFilters function', () => {
  describe('When invoked it should return an object', () => {
    test('Then such object should contain type and payload(null) ', () => {
      const action = {
        type: actionTypes.CLEAN_FILTERS,
        payload: null
      }

      const fn = cleanFilters()
      expect(fn).toEqual(action)
    })
  })
})

describe('Given an cleanRegister function', () => {
  describe('When invoked it should return an object', () => {
    test('Then such object should contain type', () => {
      const action = {
        type: actionTypes.CLEAN_REGISTER_STATUS
      }

      const fn = cleanRegister()
      expect(fn).toEqual(action)
    })
  })
})

describe('Given an cleanLogin function', () => {
  describe('When invoked it should return an object', () => {
    test('Then such object should contain type', () => {
      const action = {
        type: actionTypes.CLEAN_LOGIN_STATUS
      }

      const fn = cleanLogin()
      expect(fn).toEqual(action)
    })
  })
})

describe('Given an cleanProductUploaded function', () => {
  describe('When invoked it should return an object', () => {
    test('Then such object should contain type', () => {
      const action = {
        type: actionTypes.CLEAN_UPLOAD_PRODUCT
      }

      const fn = cleanProductUploaded()
      expect(fn).toEqual(action)
    })
  })
})
