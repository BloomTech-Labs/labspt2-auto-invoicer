const usersResolver = require('./users');

const rootResolver = {
  ...usersResolver
};

module.exports = rootResolver;
