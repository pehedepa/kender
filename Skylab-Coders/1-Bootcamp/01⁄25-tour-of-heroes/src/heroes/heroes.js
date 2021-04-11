// const { HEROES } = require('../../hero'); // SI DEJO ESTO, PETA

function elementsHeroes(heroes) {
  for (let i = 0; i < heroes.length; i++) {
    const { id, name } = heroes[i];
    const list = document.getElementsByClassName('heroes');
    const elementLi = document.createElement('li');
    const elementAnchor = document.createElement('a');
    const elementSpan = document.createElement('span');
    const elementButton = document.createElement('button');
    elementSpan.className = 'badge';
    elementSpan.innerHTML = id;
    elementButton.className = 'delete';
    elementButton.innerHTML = 'x';
    elementAnchor.setAttribute('href', `../hero-detail/hero-detail.html?id=${id}&name=${name}`);
    elementButton.setAttribute('title', 'delete hero');
    list[0].appendChild(elementLi);
    elementLi.appendChild(elementAnchor);
    elementAnchor.appendChild(elementSpan);
    elementAnchor.innerHTML += name;
    elementLi.appendChild(elementButton);
  }
}
// module.exports = { elementsHeroes }; // SI DEJO ESTO, PETA
elementsHeroes(HEROES);
