import axios from 'axios';
import commerceActionTypes from './commerceActionTypes';

const api = 'http://localhost:5000/api/commerce';

export default function getItems() {
  return async (dispatch) => {
    const { data } = await axios(api);
    dispatch({
      type: commerceActionTypes.LOAD_ITEMS,
      data
    });
  };
}

export function pushItemToCart(name, _id, url, stock, price) {
  const payload = {
    name,
    _id,
    url,
    stock,
    price
  };

  return (dispatch) => {
    dispatch({
      type: commerceActionTypes.ADD_ITEM_TO_CART,
      data: payload
    });
  };
}
