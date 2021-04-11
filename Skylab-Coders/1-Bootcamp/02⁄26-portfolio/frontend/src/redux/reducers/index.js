import { combineReducers } from 'redux';
import generic from './genericReducer';
import tradeSkills from './tradeSkillsReducer';

const rootReducer = combineReducers({
  generic,
  tradeSkills
});

export default rootReducer;
