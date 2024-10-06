const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  following: [
    {
      id: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required:false
      },
      name: {
        type: String,
        required: false,
      },
    },
  ],
  followers: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:false
      },
      name: {
        type: String,
        required: false,
      },
    },
  ],
});

module.exports = model('User', UserSchema);

