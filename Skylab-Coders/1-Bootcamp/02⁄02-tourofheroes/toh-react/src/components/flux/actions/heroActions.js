import dispatcher from '../dispatcher/dispatcher';
import heroActionTypes from './heroActionTypes';

export function saveHero(hero) {
  debugger;
  const action = {
    type: hero.id ? heroActionTypes.UPDATE_HERO : heroActionTypes.ADD_HERO,
    hero,
  };

  dispatcher.dispatch(action);
}

export function deleteHero({ id }) {
  debugger;
  const action = {
    type: heroActionTypes.DELETE_HERO,
    heroId: id,
  };

  dispatcher.dispatch(action);
}

export function loadHero(heroId) {
  const action = {
    type: heroActionTypes.LOAD_HERO,
    heroId,
  };

  dispatcher.dispatch(action);
}
