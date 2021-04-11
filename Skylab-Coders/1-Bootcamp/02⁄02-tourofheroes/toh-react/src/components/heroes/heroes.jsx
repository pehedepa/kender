import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroStore from '../flux/stores/heroStore';
import { saveHero, deleteHero } from '../flux/actions/heroActions';
import './heroes.css';

export default function Heroes() {
  const [heroes, setHeroes] = useState(heroStore.getHeroes());
  const [heroName, setHeroName] = useState('');

  function heroChanged() {
    setHeroes(heroStore.getHeroes());
  }

  useEffect(() => {
    heroStore.addChangeListener(heroChanged);

    return () => {
      heroStore.removeChangeListener(heroChanged);
    };
  }, [heroes]);

  function addClicked() {
    debugger;
    saveHero({
      id: null,
      name: heroName,
    });
    setHeroName('');
  }

  return (
    <>
      <h2>My Heroes</h2>

      <div>
        <label htmlFor="heroName">
          Hero name:
          <input id="heroName" value={heroName} onChange={(event) => setHeroName(event.target.value)} />
          <button type="button" onClick={addClicked}>
            add
          </button>
        </label>

      </div>

      <ul className="heroes">
        {
            heroes.map((hero) => (
              <li key={hero.id}>
                <Link to={`/detail/${hero.id}`}>
                  <span className="badge">{hero.id}</span>
                  {hero.name}
                </Link>
                <button
                  type="button"
                  className="delete"
                  title="delete hero"
                  onClick={() => deleteHero(hero)}
                >
                  x
                </button>
              </li>
            ))
        }
      </ul>

    </>
  );
}
