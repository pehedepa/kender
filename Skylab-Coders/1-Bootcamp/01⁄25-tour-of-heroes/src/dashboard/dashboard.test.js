const topHeroes = require('./dashboard');

describe('Give a topHeroes function', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('When hero has name Dr Nice', () => {
    test('Then h4 text content is Dr Nice', () => {
      const testHeroes = [
        { id: 11, name: 'Dr Nice' }
      ];

      topHeroes(testHeroes);

      const { textContent } = document.getElementsByTagName('h4')[0];

      expect(textContent).toBe('Dr Nice');
    });
  });

  describe('When hero has no name', () => {
    test('Then h4 text content is -', () => {
      const testHeroes = [
        { id: 11, name: null }
      ];

      topHeroes(testHeroes);

      const { textContent } = document.getElementsByTagName('h4')[0];

      expect(textContent).toBe('-');
    });
  });

  describe('When hero has no id', () => {
    test('Then topHeroes function will return undefined', () => {
      const testHeroes = [
        { }
      ];

      expect(topHeroes(testHeroes)).toBeUndefined();
    });
  });
});
