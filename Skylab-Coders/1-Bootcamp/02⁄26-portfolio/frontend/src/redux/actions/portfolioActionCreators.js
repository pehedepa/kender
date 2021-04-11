import axios from 'axios';
import portfolioActionTypes from './portfolioActionTypes';

const api = 'http://localhost:5000/api/portfolio';

export default function getGenericData() {
  const generic = '/generic';
  return async (dispatch) => {
    const { data } = await axios(api + generic);
    dispatch({
      type: portfolioActionTypes.GET_GENERIC,
      data
    });
  };
}

export function getTradeSkillsData() {
  const tradeSkills = '/tradeskills';
  return async (dispatch) => {
    const { data } = await axios(api + tradeSkills);
    dispatch({
      type: portfolioActionTypes.GET_TRADESKILLS,
      data
    });
  };
}
