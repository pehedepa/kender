const md5 = require('md5');
const {
  register,
  login,
  logout
} = require('./authController');

const User = require('../models/userModel');

jest.mock('../models/userModel');

describe('Given an authController component', () => {
  let res;
  let req;

  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
    req = {
      logout: jest.fn(),
      body: {
        password: 'tonteria'
      }
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('When invoking login function', () => {
    test('Then it should return res.json when theres no error', async () => {
      User.findOne.mockReturnValueOnce({});
      await login(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When invoking register function', () => {
    test('Then it should return res.status(201) when theres no error', async () => {
      User.findOne.mockReturnValueOnce(null);
      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
    });
    test('Then it should return res.status(203) when nothing is found', async () => {
      User.findOne.mockReturnValueOnce({});
      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(203);
    });
    test('Then it should return res.status(203) when theres an error', async () => {
      User.findOne.mockImplementationOnce(() => { throw new Error(); });
      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
    });
  });

  describe('When invoking logout function', () => {
    test('Then it should invoke req.logout method', () => {
      logout(req, res);

      expect(req.logout).toHaveBeenCalled();
    });
  });
});
