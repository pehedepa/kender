import commerceActionTypes from '../actions/commerceActionTypes';
import initialState from '../store/initialState';

export default function cartReducer(state = initialState, action) {
  // eslint-disable-next-line no-debugger
  debugger;
  switch (action.type) {
    case commerceActionTypes.ADD_ITEM_TO_CART:
      return [...state, action.data];
    default:
      return state;
  }
}
