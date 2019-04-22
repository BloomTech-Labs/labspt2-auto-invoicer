const Item = require('../../models/item');

const { findAllDocuments, findDocumentById } = require('../helpers/index');

const { formatData } = require('../helpers/format');

module.exports = {
  item: ({ itemId }) => {
    return findDocumentById(itemId, Item);
  },
  items: () => {
    return findAllDocuments(Item);
  },
  createItem: async args => {
    formatData(args.itemInput);
    try {
      const { name, description, quantity, cost, amount } = args.itemInput;

      const item = new Item({
        name,
        description,
        quantity,
        cost,
        amount
      });
      const newItem = await item.save();
      return {
        ...newItem._doc
      };
    } catch (err) {
      throw err;
    }
  }
};
