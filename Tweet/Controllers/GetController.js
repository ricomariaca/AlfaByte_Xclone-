const { response } = require('express');
const Tweet =require('../../Tweet/Models/Tweet')

const getAllTweets = async (req, res = response) => {
  try {
    const tweets = await Tweet.find(); 

    res.status(200).json({
      ok: true,
      tweets, 
    });
  } catch (error) {
    console.log("(ERROR)", error);
    res.status(500).json({
      ok: false,
      error: "SOMETHING WENT WRONG, COULD NOT RETRIEVE TWEETS",
    });
  }
};

module.exports = {
  
  getAllTweets, 
};