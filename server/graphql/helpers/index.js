const Company = require('../../models/company');
const User = require('../../models/user');

const users = async userId => {
  try {
    const fetchedUsers = await User.find({ _id: { $in: userId } });
    return fetchedUsers.map(user => {
      return {
        ...user._doc,
        password: null,
        companies: companies.bind(this, user._doc.companies),
      };
    });
  } catch (err) {
    throw err;
  }
};

const companies = async companyId => {
  try {
    const fetchedCompanies = await Company.find({ _id: { $in: companyId } });
    return fetchedCompanies.map(company => {
      return {
        ...company._doc,
        users: users.bind(this, company.users),
      };
    });
  } catch (err) {
    throw err;
  }
};

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
        $set: { ...documentInput },
      },
      { new: true }
    );
    return { ...updatedDocument._doc, users: users.bind(this, document.users) };
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
    const fields = Object.keys(Model.schema.paths).map(field => {
      if (Model.schema.path(field).instance.toLowerCase() === typeof value) {
        return { [field]: value };
      }
    });
    const validFields = [];
    fields.map(item => {
      if (item) {
        validFields.push(item);
      }
    });
    const documents = await Model.find({
      $or: validFields,
    });
    return documents.map(document => {
      return { ...document._doc, users: users.bind(this, document.users) };
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
    return { ...document._doc, users: users.bind(this, document.users) };
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
      return { ...document._doc, users: users.bind(this, document.users) };
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  updateDocumentById,
  findDocumentsByAnyField,
  findDocumentById,
  findAllDocuments,
};
