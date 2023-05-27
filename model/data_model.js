const mongoose = require ('mongoose');
const db = require('../controller/database_mongoose');

var schemaTable = new mongoose.Schema();
schemaTable = {
  'user_id': Number,
  'password': String,
  'permission': String,
};
module.exports  = db.model('post', schemaTable, 'login_desk');