import portfolioActionTypes from '../actions/portfolioActionTypes';
import initialState from '../stores/initialState';

export default function genericReducer(state = [initialState], action) {
  switch (action.type) {
    case portfolioActionTypes.GET_GENERIC:
      return action.data;
    default:
      return state;
  }
}
