import commerceActionTypes from '../actions/commerceActionTypes';
import initialState from '../store/initialState';

export default function ItemsReducer(state = initialState, action) {
  // eslint-disable-next-line no-debugger
  debugger;
  switch (action.type) {
    case commerceActionTypes.LOAD_ITEMS:
      return action.data;
    default:
      return state;
  }
}
