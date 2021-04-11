function elementsDashboard(dashBoardHeroes) {
  for (let i = 0; i < dashBoardHeroes.length; i++) {
    const { id, name } = dashBoardHeroes[i];
    const grid = document.getElementsByClassName('grid grid-pad');
    const elementAnchor = document.createElement('a');
    const elementDiv = document.createElement('div');
    const elementH = document.createElement('h4');
    elementAnchor.className = 'col-1-4';
    elementDiv.className = 'module hero';
    elementH.innerText = name;
    elementAnchor.setAttribute('href', `../hero-detail/hero-detail.html?id=${id}&name=${name}`);
    grid[0].appendChild(elementAnchor);
    elementAnchor.appendChild(elementDiv);
    elementDiv.appendChild(elementH);
  }
}

elementsDashboard(HEROES);

// module.exports = { elementsDashboard };
