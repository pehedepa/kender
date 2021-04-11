let heroes = require('../heroes');
const HeroModel = require('../models/heroModel');

function HeroController() {
  function getAll(req, res) {
    HeroModel.find({})
      .then((allHeroes) => res.json(allHeroes));
  }

  function createHero(req, res) {
    const newHero = new HeroModel({
      ...req.body,
      id: 21
    });
    newHero.save((error) => {
      if (error) {
        res.status(500);
        res.send('hubo un error al guardar');
      } else {
        res.json(newHero);
      }
    });
    heroes = [...heroes, newHero];
    return res.json(heroes);
  }

  function deleteHero(req, res) {
    const { heroId } = req.params;
    heroes = heroes.filter(({ id }) => id !== +heroId);
    return res.json(heroes);
  }

  function updateHero(req, res) {
    const { heroId } = req.params;
    heroes = heroes.map((hero) => {
      if (hero.id === +heroId) {
        return { ...hero, name: req.body.name };
      }
      return hero;
    });

    return res.json(heroes);
  }

  function getOne(req, res) {
    const { heroId } = req.params;
    const hero = heroes.find(({ id }) => id === +heroId);

    if (hero) {
      res.status(302);
      return res.json(hero);
    }
    res.status(404);
    return res.send(`No hay hero con id: ${heroId}`);
  }

  return {
    deleteHero,
    updateHero,
    getOne,
    createHero,
    getAll
  };
}

module.exports = HeroController();
