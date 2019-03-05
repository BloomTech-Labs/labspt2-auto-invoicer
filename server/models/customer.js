const { Schema, model } = require('mongoose');

const customerSchema = new Schema({});

module.exports = model('Customer', customerSchema);
