import React from 'react';
import './dashboard.css';

const defaultHeroes = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

export default function Dashboard() {
  return (
    <>
      <h3>Top Heroes</h3>
      <div className="grid grid-pad">
        {
          defaultHeroes.map((hero) => (
            <a href={`/detail/${hero.id}`} className="col-1-4" key={hero.id}>
              <div className="module hero">
                <h4>{hero.name}</h4>
              </div>
            </a>
          ))
        }
      </div>
    </>

  );
}
