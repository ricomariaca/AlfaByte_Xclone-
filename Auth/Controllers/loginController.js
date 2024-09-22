const users = [
    {
        uid: 'asdw345dasdas',
        email: "jhon.doe@gmail.com",
        name: "John Doe",
        photoUrl: "xxxxdfasd.jpg",
        password: "password123",
    },
];

const listLogin = (request, response) => {
    const { email, password } = request; 

  
    const user = users.find((user) => user.email === email);

    
    if (!user) {
        return response.status(404).json({
            error: "Usuario no encontrado",
        });
    }

    
    if (user.password !== password) {
        return response.status(401).json({
            error: "Contraseña incorrecta",
        });
    }

   
    return response.status(200).json({
        uid: user.uid,
        email: user.email,
        name: user.name,
        photoUrl: user.photoUrl,
    });
};

module.exports = {
    listLogin,
};
