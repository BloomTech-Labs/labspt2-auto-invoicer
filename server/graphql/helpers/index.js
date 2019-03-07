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

module.exports = { updateDocumentById };
