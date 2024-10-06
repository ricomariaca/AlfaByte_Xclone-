const { Schema, model } = require('mongoose');

const TweetSchema = Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true 
  }
});

module.exports = model('Tweet', TweetSchema);