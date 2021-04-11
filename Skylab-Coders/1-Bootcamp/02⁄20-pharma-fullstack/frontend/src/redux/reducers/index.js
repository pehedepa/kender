import { combineReducers } from 'redux';
import shopItems from './itemsReducer';
import cartItems from './cartReducer';

const rootReducer = combineReducers({
  shopItems,
  cartItems
});

export default rootReducer;
