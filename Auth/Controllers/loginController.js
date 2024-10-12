const { response } = require("express");
const jwt = require('jsonwebtoken');
const User = require('../../Auth/Models/User')
const { JWT_SECRET } = process.env
const bcrypt = require('bcrypt');
const LoginUser = async (req, res = response) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
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
  
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json({
          ok: false,
          error: "Missing Token!",
        });
      }
  
      jwt.verify(token, JWT_SECRET, (error, decoded) => {
        if (error) {
          return res.status(403).json({
            ok: false,
            error: "Invalid Token!",
          });
        }
  
        return res.status(200).json({
          ok: true,
          message: "You are logged in",
          user: {
            id: user.id,
            email: user.email,
          },
        });
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