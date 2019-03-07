const updateDocumentById = async (documentInput, id, Model) => {
  try {
    const documentExists = await Model.findById(id);
    if (!documentExists) {
      throw new Error('There is no document with the specified ID!');
    }
    Object.keys(documentInput).forEach(key => {
      if (!documentInput[key]) {
        delete documentInput[key];
      }
    });
    const updatedDocument = await Model.findByIdAndUpdate(
      id,
      {
        $set: { ...documentInput }
      },
      { new: true }
    );
    return { ...updatedDocument._doc };
  } catch (err) {
    throw err;
  }
};

const findDocumentsByAnyField = async (documentInput, fields, Model) => {
  try {
    Object.keys(documentInput).forEach(key => {
      if (!documentInput[key]) {
        delete documentInput[key];
      }
    });
    const value = Object.values(documentInput)[0];
    const arr = fields.map(field => {
      if (field.type === typeof value) {
        return { [field.name]: value };
      }
    });
    const newArr = [];
    arr.map(item => {
      if (item) {
        newArr.push(item);
      }
    });
    const documents = await Model.find({
      $or: newArr
    });
    return documents.map(document => {
      return { ...document._doc };
    });
  } catch (err) {
    throw err;
  }
};

module.exports = { updateDocumentById, findDocumentsByAnyField };
