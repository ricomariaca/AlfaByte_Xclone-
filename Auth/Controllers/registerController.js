const { response } = require("express");
const User = require('../../Auth/Models/User');
const bcrypt = require('bcrypt');

const createUser = async (req, res = response) => {
  const { name, email, lastName, username, password, following, followers, userPhoto } = req.body;
  const saltRounds = 10;

  try {
    // Verificar si el username ya existe en la base de datos
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({
        ok: false,
        message: "Ya existe una cuenta con ese usuario",
      });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Crear el nuevo usuario
    let user = new User({
      name,
      lastName,
      username,
      email,
      password: hashedPassword,
      following,
      followers,
      userPhoto,
    });

    // Guardar el usuario en la base de datos
    await user.save();

    res.status(201).json({
      ok: true,
      message: "Usuario registrado",
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      }
    });
  } catch (error) {
    console.error("(ERROR)", error);
    res.status(500).json({
      ok: false,
      error: "Hubo un problema, revisa tus datos.",
    });
  }
};

module.exports = {
  createUser,
};
