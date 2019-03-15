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
        users: users.bind(this, company._doc.users),
      };
    });
  } catch (err) {
    throw err;
  }
};

const formatData = document => {
  Object.keys(document).forEach(key => {
    if (typeof document[key] === 'string') {
    document[key] = document[key].toLowerCase();
    }
  });
  if (document.phone_num) {
    const regx = /\D+/g;
    let formatted = document.phone_num.replace(regx, '');
    (document.phone_num = formatted.charAt(0) === '1' ? formatted.slice(1) : formatted);
  };
  return document;
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
    formatData(documentInput);
    const updatedDocument = await Model.findByIdAndUpdate(
      id,
      {
        $set: { ...documentInput },
      },
      { new: true },
    );
    const documentType = Model.modelName;
    if (documentType === 'User') {
      return {
        ...updatedDocument._doc,
        companies: companies.bind(this, updatedDocument._doc.companies),
      };
    }
    if (documentType === 'Company') {
      return {
        ...updatedDocument._doc,
        users: users.bind(this, updatedDocument._doc.users),
      };
    }
    return {
      ...updatedDocument._doc
    };
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
    const documentType = Model.modelName;
    if (documentType === 'User') {
      return documents.map(document => {
        return {
          ...document._doc,
          companies: companies.bind(this, document._doc.companies),
        };
      });
    }
    if (documentType === 'Company') {
      return documents.map(document => {
        return {
          ...document._doc,
          users: users.bind(this, document._doc.users),
        };
      });
    }
  } catch (err) {
    throw err;
  }
};

const findDocumentById = async (documentId, Model) => {
  try {
    const document = await Model.findById(documentId);
    const documentType = Model.modelName;
    if (!document) {
      throw new Error(`${documentType} with the specified ID does not exist.`);
    }
    if (documentType === 'User') {
      return {
        ...document._doc,
        companies: companies.bind(this, document._doc.companies),
      };
    }
    if (documentType === 'Company') {
      return { ...document._doc, users: users.bind(this, document._doc.users) };
    }
  } catch (err) {
    throw err;
  }
};

const findAllDocuments = async Model => {
  try {
    const documents = await Model.find();
    const documentType = Model.modelName;
    if (!documents.length) {
      throw new Error(`${documentType} does not exist.`);
    }
    if (documentType === 'User') {
      return documents.map(document => {
        return {
          ...document._doc,
          companies: companies.bind(this, document._doc.companies),
        };
      });
    }
    if (documentType === 'Company') {
      return documents.map(document => {
        return {
          ...document._doc,
          users: users.bind(this, document._doc.users),
        };
      });
    }
  } catch (err) {
    throw err;
  }
};

module.exports = {
  updateDocumentById,
  findDocumentsByAnyField,
  findDocumentById,
  findAllDocuments,
  formatData,
};
