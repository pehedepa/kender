import EventEmitter from 'events';
import Dispatcher from '../dispatcher/dispatcher';
import heroActionTypes from '../actions/heroActionTypes';

let heroes = [];
let selectedHero = null;

class HeroStore extends EventEmitter {
  addChangeListener(callback) {
    this.on('HERO_STORE_CHANGE', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('HERO_STORE_CHANGE', callback);
  }

  emitChange() {
    this.emit('HERO_STORE_CHANGE');
  }

  // eslint-disable-next-line class-methods-use-this
  getHeroes() {
    return heroes;
  }

  // eslint-disable-next-line class-methods-use-this
  getHero() {
    return selectedHero;
  }
}

const heroStore = new HeroStore();

Dispatcher.register((action) => {
  debugger;
  switch (action.type) {
    case heroActionTypes.ADD_HERO:
      if (!heroes.find((hero) => hero.name.toLowerCase() === action.hero.name.toLowerCase())) {
        heroes = [...heroes, { ...action.hero, id: heroes.length + 1 }];
        heroStore.emitChange();
      }
      break;

    case heroActionTypes.UPDATE_HERO:
      heroes = heroes.map((hero) => {
        if (hero.id === action.hero.id) {
          return action.hero;
        }
        return hero;
      });
      heroStore.emitChange();

      break;

    case heroActionTypes.DELETE_HERO:
      heroes = heroes.filter((hero) => hero.id !== action.heroId);
      heroStore.emitChange();
      break;

    case heroActionTypes.LOAD_HERO:
      selectedHero = heroes.find((hero) => hero.id === action.heroId);
      heroStore.emitChange();
      break;
    default:
      break;
  }
});

export default heroStore;
