
const users = [
    {
      uid: 'asdw345dasdas',
      email: "Emado@gmail.com",
      username: "John Doe",
    },
    {
      uid: 'k4jh5k4j5h4k5h4',
      email: "majo@hotmail.com",
      username: "Mike Jones",
    },
    {
      uid: 'lmn4opq5rst6uv',
      email: "brucemyQueen@gmail.com",
      username: "Bruce Prince",
    },
  ];
  
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
  
  const createUser = (request, response) => {
    const { uid, email, username } = request;
  
    const userVerification = users.find((user) => user.uid === uid);
    if (userVerification) {
      return response.status(409).json({
        error: "hey pa, ya existe mi fafa",
      });
    } else {
      const CreateUser = {
        uid,
        email,
        username,
      };
      users.push(CreateUser);
  
      response.status(201).json({
        msj: "creación exitosa",
        user: CreateUser
      });
    }
  };
  
  module.exports = {
    listUser,
    createUser,
  };
  