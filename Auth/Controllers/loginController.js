const { response } = require("express");
const jwt = require('jsonwebtoken');
const User = require('../../Auth/Models/User');
const { JWT_SECRET } = process.env;
const bcrypt = require('bcrypt');

const LoginUser = async (req, res = response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        ok: false,
        error: "Invalid Credentials, please check again!",
      });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        ok: false,
        error: "Invalid Credentials, please check again!",
      });
    }

    const token = jwt.sign(
      { username: user.username, name: user.name, userPhoto: user.userPhoto },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      ok: true,
      message: "You are logged in",
      user: {
        id: user.id,
        username: user.username,
        name: user.name,
        userPhoto: user.userPhoto

      },
      token,
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
  LoginUser,
};
