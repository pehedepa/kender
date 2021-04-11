function parseIdFromLocation(currentLocation) {
  let id = currentLocation.search;
  id = id.replace('?', '');
  const withoutAmpersan = id.split('&');
  const idQuery = withoutAmpersan.find((search) => search.includes('id='));
  return idQuery ? +idQuery.split('=')[1] : null;
}

const heroId = parseIdFromLocation(location);
const hero = HEROES.find((hero) => hero.id === heroId);

function drawTitle(hero) {
  if (hero) {
    const nameElement = document.getElementById('hero__title-name');
    nameElement.innerText = `${hero.name} Details`;

    const idElement = document.getElementById('hero__id');
    idElement.innerText += hero.id;

    const nameInput = document.getElementById('hero__name');
    nameInput.value = hero.name;
  }
}

function mainContainer() {
  const mainFlexContainer = document.createElement('section');
  mainFlexContainer.className = 'main__container';
  const positionBody = document.getElementsByTagName('body');
  positionBody[0].append(mainFlexContainer); // colocar antes de script
}
function leftSideElements(hero, itemsLi) {
  const mainContainer = document.querySelector('.main__container');
  const screenLeft = document.querySelector('.container__left');
  const divFlex = document.createElement('div');
  const divContainer = document.createElement('div');
  const elementImg = document.createElement('img');
  const elementUl = document.createElement('ul');
  mainContainer.appendChild(screenLeft);
  screenLeft.append(divFlex);
  divFlex.appendChild(divContainer);
  divContainer.appendChild(elementImg);
  divContainer.appendChild(elementUl);

  for (let i = 0; i < itemsLi; i++) {
    const elementLi = document.createElement('li');
    elementLi.className = 'stats';
    elementUl.appendChild(elementLi);
  }

  divContainer.className = 'stats__container';
  elementImg.setAttribute('src', `${hero.images.sm}`);
  elementImg.setAttribute('alt', 'Super-Hero close up image');
  elementUl.className = 'powerstats';
}

function setStatsHero(values, element) {
  const elementsArr = document.getElementsByClassName(`${element}`);
  const entriesArr = Object.entries(values);
  for (let i = 0; i < elementsArr.length; i++) {
    elementsArr[i].innerHTML = `${entriesArr[i][0]} :  ${entriesArr[i][1]}`;
  }
}

function paintRightSideTop() {
  const mainContainer = document.getElementsByClassName('main__container');
  const divFlexContainer = document.createElement('div');
  divFlexContainer.className = 'container__right';
  document.body.appendChild(divFlexContainer);

  const divImg = document.createElement('div');
  divImg.className = 'img__portrait';
  const divNameSlug = document.createElement('div');
  divNameSlug.className = 'div__name-slug';
  const divAppearance = document.createElement('div');
  divAppearance.className = 'div__appearance';

  divFlexContainer.appendChild(divImg);
  divFlexContainer.appendChild(divNameSlug);
  divFlexContainer.appendChild(divAppearance);
  mainContainer[0].appendChild(divFlexContainer);
}

// function paintRightSideMid() {
//   const divBiography = document.createElement('div');
// }

// function paintRightSideBottom() {
//   const divOccupationConnections = document.createElement('div');
// }

module.exports = {
  parseIdFromLocation,
  mainContainer,
  drawTitle,
  leftSideElements,
  setStatsHero,
  paintRightSideTop
  // paintRightSideMid,
  // paintRightSideBottom
};
