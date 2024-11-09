const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  usernameSeguidor: {
    type: String,
    require: false
  },
  usernameSeguido: {
    type: String,
    require: false,
    
  },
  body: {
    type: String,
    require: false
  }
});

module.exports = model('Follow', UserSchema);