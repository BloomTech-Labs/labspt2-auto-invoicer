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

const findDocumentsByAnyField = async (documentInput, Model) => {
  try {
    Object.keys(documentInput).forEach(key => {
      if (!documentInput[key]) {
        delete documentInput[key];
      }
    });
    const value = Object.values(documentInput)[0];
    const arr = Object.keys(Model.schema.paths).map(field => {
      if (Model.schema.path(field).instance.toLowerCase() === typeof value) {
        return { [field]: value };
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

const findDocumentById = async (documentId, Model) => {
  try {
    const document = await Model.findById(documentId);
    if (!document) {
      throw new Error('There is no document with the specified ID!');
    }
    return { ...document._doc };
  } catch (err) {
    throw err;
  }
};

const findAllDocuments = async Model => {
  try {
    const documents = await Model.find();
    if (!documents.length) {
      throw new Error(
        'There is no document yet in this collection, please try again later'
      );
    }
    return documents.map(document => {
      return { ...document._doc };
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  updateDocumentById,
  findDocumentsByAnyField,
  findDocumentById,
  findAllDocuments
};
