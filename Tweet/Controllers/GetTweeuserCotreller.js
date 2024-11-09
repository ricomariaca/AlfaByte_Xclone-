const { response } = require('express');
const Tweet = require('../Models/Tweet');

const GetTweeUserCotreller = async (req, res = response) => {
  const { username } = req.params;

  try {
   
    const tweets = await Tweet.find({ username });

    if (!tweets.length) {
      return res.status(404).json({
        ok: false,
        message: "No tweets found for this username",
      });
    }

    res.status(200).json({
      ok: true,
      tweets,
    });
  } catch (error) {
    console.error("(ERROR)", error);
    res.status(500).json({
      ok: false,
      error: "SOMETHING WENT WRONG, CHECK YOUR DATA AGAIN",
    });
  }
};

module.exports = {
  GetTweeUserCotreller,
};
