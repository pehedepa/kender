import React, { useState, useEffect } from 'react';
import heroStore from '../flux/stores/heroStore';
import { loadHero } from '../flux/actions/heroActions';
import './hero-detail.css';

export default function HeroDetail(props) {
  const [hero, setHero] = useState(heroStore.getHero());
  const [heroId] = useState(+props.match.params.heroId);

  function nameChange(event) {
    setHero(event.target.value);
  }

  function selectedChange() {
    setHero(heroStore.getHero());
  }

  useEffect(() => {
    heroStore.addChangeListener(selectedChange);

    if (heroId) {
      loadHero(heroId);
    }

    return () => heroStore.removeChangeListener(selectedChange);
  }, [heroId]);

  function drawHero() {
    return (
      <div>
        <h2> Details</h2>
        <div>
          <span>id: </span>
          {hero.id}
        </div>
        <div>
          <label htmlFor="heroName">
            name:
            <input
              placeholder="name"
              id="heroName"
              onChange={nameChange}
              value={hero.name}
            />
          </label>
        </div>
        <button type="button">go back</button>
        <button type="button">save</button>
      </div>
    );
  }

  function noHero() {
    return <h1>No hay heroe</h1>;
  }

  return hero ? drawHero() : noHero();
}
