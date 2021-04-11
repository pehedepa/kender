const HeroController = require('./../controllers/heroController');

describe('', () => {
  describe('', () => {
    test('should call json on getHeroes', () => {
      const json = jest.fn();
      HeroController.getHeroes(null, { json });

      expect(json).toHaveBeenCalled();
    });
    test('should call json on getHero', () => {
      const json = jest.fn();
      const req = { params: { heroId: 11 } };
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn()
      };
      HeroController.getHeroes(req, res);

      expect(res.json).toHaveBeenCalled();
    });
    test('...', () => {
      const json = jest.fn();
      const req = { param: { heroId: 11 } };
      const res = {
        json: jest.fn(),
        send: jest.fn()
      };
      HeroController.getHeroes(req, res);

      expect(res.send).toHaveBeenCalled();
    });
    test('should change bombaso to bombasto[Deprecated]', () => {
      const req = { body: { id: 13, name: 'bombasto[deprecated]'} };
      const res = {
        json: jest.fn()
      };
      HeroController.updateHero(req, res);

      const jsonCall = res.json.mock.calls[0]
      const jsonFirstArgument = jsonCall[0]
      const bombasto = jsonFirstArgument[2]

      expect(bombasto.name).toBe('Bombasto[Deprecated]')
  }); // 1=llamadas, 2=argumentos, 3=posicion 2 en el array resultante
});
