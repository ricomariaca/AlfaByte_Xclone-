const { Schema, model } = require('mongoose');

const TweetSchema = Schema({
  body: {
    type: String,
    require: true 
  }
  ,
  username: {
    type: String,
    require: true 
  }
});

module.exports = model('Tweet', TweetSchema);