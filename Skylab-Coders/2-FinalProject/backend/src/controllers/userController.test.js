const {
  updateUser
} = require('./userController');
const User = require('../models/userModel');

jest.mock('../models/userModel');

describe('Given a userController component', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
    req = {
      body: {
        _id: 'id'
      }
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('When accessing updateUser function', () => {
    test('Then it should invoke res.status(200) when theres no error', async () => {
      User.findByIdAndUpdate.mockReturnValue({});
      await updateUser(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
  describe('When accessing updateUser function', () => {
    test('Then it should invoke res.status(500) when theres an error', async () => {
      User.findByIdAndUpdate.mockImplementationOnce(() => { throw new Error(); });
      await updateUser(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});
