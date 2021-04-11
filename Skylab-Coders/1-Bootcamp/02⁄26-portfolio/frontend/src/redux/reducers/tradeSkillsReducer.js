import portfolioActionTypes from '../actions/portfolioActionTypes';
import initialState from '../stores/initialState';

export default function tradeSkillsReducer(state = [initialState], action) {
  switch (action.type) {
    case portfolioActionTypes.GET_TRADESKILLS:
      return action.data;
    default:
      return state;
  }
}
