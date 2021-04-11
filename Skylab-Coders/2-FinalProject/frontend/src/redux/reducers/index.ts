import { combineReducers } from 'redux'
import statusLogin from './loginReducer'
import statusRegistered from './registerReducer'
import statusProductUploaded from './statusProductReducer'
import userObject from './userReducer'
import productList from './productListReducer'
import filteredProducts from './filteredProducts'

const rootReducer = combineReducers({
  statusLogin,
  statusRegistered,
  statusProductUploaded,
  productList,
  userObject,
  filteredProducts
})

export default rootReducer
