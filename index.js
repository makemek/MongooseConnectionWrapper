var Connection = require('./lib/connection.js');
var mongoose = require('mongoose');

var exports = {};

/* Utilities */
exports.Schema = mongoose.Schema;

/* Database Connection Module */
exports.connection = Connection;

module.exports = exports;