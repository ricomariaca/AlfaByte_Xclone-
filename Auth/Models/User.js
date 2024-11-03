const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userPhoto: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  following: [
    {
      id_user: {
        type: Number, 
        ref: 'User',
        required:false
      }
    },
  ],
  followers: [
    {
      id_user: {
        type: Number,
        ref: 'User',
        required:false
      }
    },
  ],
});

module.exports = model('User', UserSchema);

