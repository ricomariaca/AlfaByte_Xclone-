const {response } = require('express');
const Tweet =require('../../Tweet/Models/Tweet')

const createPost = async (req, res = response) => {
    const {  body, username} = req.body;
  
    try {
     
      let tweet = new Tweet({  body, username });

      await tweet.save();
  
      res.status(201).json({
        ok: true,
        message: "tweet save",
        user: {
          id_tweet: tweet.id,
          
          body: tweet.body,
         username: tweet.username
        },
      });
    } catch (error) {
      console.log("(ERROR)", error);
      res.status(500).json({
        ok: false,
        error: "SOMETHING WENT WRONG, CHECK YOUR DATA AGAIN",
      });
    }
  };

module.exports = {
    
    createPost,
};