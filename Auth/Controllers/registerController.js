const { response, json } = require("express");
const jwt = require('jsonwebtoken');
const User = require('../../Auth/Models/User')
const { JWT_SECRET } = process.env
const bcrypt = require('bcrypt');
  
  const listUser = (request, response) => {
    const { query } = request;
  
    const result = users.filter((user) => user.uid === query.uid);
  
    if (result.length === 0) {
      return response.status(404).json({
        error: "not found",
      });
    }
    response.json(result);
  };
  
  const createUser = async (req, res = response) => {
  const { phoneNumber, name, email, password,following,followers, id_user } = req.body;
  const saltRounds = 10;

  try {

    const hashedPassword = await bcrypt.hash(password, saltRounds);
   
    let user = new User({ name, email, password: hashedPassword, phoneNumber, following,followers,id_user });

    
    await user.save();

    
    const token = jwt.sign({ email, name, phoneNumber }, JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({
      ok: true,
      message: "User Registered",
      user: {
        id: user.id,
        email: user.email,
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
  createUser,
};