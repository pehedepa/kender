const {
  createProduct,
  getAllProducts,
  deleteProduct
} = require('./productController');
const Product = require('../models/productModel');

jest.mock('../models/productModel');

describe('Given a productController component', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
    req = {
      params: {
        _id: ''
      },
      body: {}
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('When accessing createProduct function', () => {
    test('Then it should invoke res.status(200) when theres no error', () => {
      createProduct(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe('When accessing getAllProducts function', () => {
    test('Then it should invoke res.json when theres no error', async () => {
      Product.find.mockReturnValueOnce({ populate: jest.fn() });
      await getAllProducts(req, res);

      expect(res.json).toHaveBeenCalled();
    });
    test('Then it should invoke res.status(500) when theres an error', () => {
      Product.find.mockImplementationOnce(() => { throw new Error(); });
      getAllProducts(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });

  describe('When accessing deleteProduct function', () => {
    test('Then it should send res.status(200) when theres no error', async () => {
      await deleteProduct(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
    test('Then it should invoke res.status(500) when theres an error', async () => {
      Product.findByIdAndDelete.mockImplementationOnce(() => { throw new Error(); });
      await deleteProduct(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});
