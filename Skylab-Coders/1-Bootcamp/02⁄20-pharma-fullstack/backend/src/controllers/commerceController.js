const CommerceItem = require('../models/commerceModel');

function CommerceController() {
  function getItems(req, res) {
    CommerceItem.find({})
      .then((allItemsArr) => res.json(allItemsArr));
  }

  function createItem(req, res) {
    const newItem = new CommerceItem({
      ...req.body
    });

    newItem.save((createItemError) => {
      if (createItemError) {
        res.status(500);
        res.send('There was an error trying to create an Item');
      } else {
        res.json(newItem);
      }
    });
  }

  return {
    getItems,
    createItem
  };
}

module.exports = CommerceController();
