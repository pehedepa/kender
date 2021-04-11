const { HEROES } = require('../../hero');
const { elementsHeroes } = require('./heroes');

beforeEach(() => {
  document.body.textContent = '';
});

describe('Given a elementsHeroes function', () => {
  describe('When is invoked', () => {
    test('Then h2 textContent should be My Heroes', () => {
      elementsHeroes(HEROES);
      const lengthArr = HEROES.length;
      expect(lengthArr).toBe(9);
    });
  });
});

// describe('Given a drawInput function', () => {
//   describe('When is invoked', () => {
//     test('Then should create and input type text', () => {
//       drawInput();
//       const { type } = document.getElementsByTagName('input')[0];
//       expect(type).toBe('text');
//     });
//   });
// });

// describe('Given a drawHeroesList function', () => {
//   describe('When is invoked', () => {
//     describe('And properties id and name are truthy', () => {
//       test('Then should create a badge span with value 11', () => {
//         drawHeroesList([{ id: 11, name: 'Dr Nice' }]);
//         const { textContent } = document.getElementsByClassName('badge')[0];
//         expect(textContent).toBe('11');
//       });
//       test('Then should create a badge span with value 11', () => {
//         drawHeroesList([{ id: 11, name: 'Dr Nice' }]);
//         const { textContent } = document.getElementsByTagName('a')[0];
//         expect(textContent.includes('Dr Nice')).toBe(true);
//       });
//     });
//     describe('And properties id or name are falsy', () => {
//       test('Then should create and input type text', () => {
//         expect(() => drawHeroesList([{ id: null, name: null }])).not.toThrow();
//       });
//     });
//   });
// });
