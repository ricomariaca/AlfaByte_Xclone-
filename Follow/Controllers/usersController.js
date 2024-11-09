
const { response } = require('express');
const Follow = require('../../Follow/Models/FollowModels')


const listFollowing = async (req, res = response) => {
  const { usernameSeguidor } = req.body;  // Extraer desde req.params
  console.log("usernameSeguidor recibido:", usernameSeguidor); // Añadir esta línea

  try {
      const follow = await Follow.find({ usernameSeguidor });
      console.log("Datos encontrados:", follow); // Añadir esta línea para verificar los datos
      if (!follow || follow.length === 0) {
          return res.status(404).json({
              ok: false,
              error: "Usuario no encontrado!",
          });
      }

      res.status(200).json({
          ok: true,
          follow
      });

  } catch (error) {
      console.error(error);
      res.status(500).json({
          ok: false,
          msg: 'Error al obtener la lista de following.'
      });
  }
};



const listFollowers = async (req, res = response) => {
  const { usernameSeguido } = req.body;

  try {
      const follow = await Follow.find({ usernameSeguido });
    if (!follow) {
      return res.status(404).json({
        ok: false,
        error: "Usuario no encontrado!",
      });
    }
      res.status(200).json({
          ok: true,
          follow
      });

  } catch (error) {
      console.error(error);
      res.status(500).json({
          ok: false,
          msg: 'Error al obtener la lista de following.'
      });
  }
};










const createFollowing = async (req, res = response) => {
  const { usernameSeguidor, usernameSeguido, body } = req.body;

  try {
    // Crea una instancia de Follow
    let follow = new Follow({ usernameSeguidor, usernameSeguido, body });

    // Guarda la instancia
    await follow.save();

    res.status(201).json({
      ok: true,
      message: "Follow saved",
      user: {
        id_follow: follow._id,
        usernameSeguidor: follow.usernameSeguidor,
        usernameSeguido: follow.usernameSeguido,
        body: follow.body,
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
    
    listFollowers,
    listFollowing,
    createFollowing
};
