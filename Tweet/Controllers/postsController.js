const {response } = require('express');
const Tweet =require('../../Tweet/Models/Tweet')

const listPosts = (req, res = response) => {
    const { query } = req;

    const result = posts.filter((post) => post.uid === query.uid);

    if (result.length === 0) {
        return res.status(404).json({
            error: "No se encontraron posts para este UID",
        });
    }

    res.json(result);
};

const createPost = async (req, res = response) => {
    const { title, body, id_User} = req.body;
  
    try {
     
      let tweet = new Tweet({  title, body, id_User });

      await tweet.save();
  
      res.status(201).json({
        ok: true,
        message: "tweet save",
        user: {
          id_tweet: tweet.id,
          title: tweet.email,
          body: tweet.body,
         id_user: tweet.id_User
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
    listPosts,
    createPost,
};