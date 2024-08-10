const users = [
    {
        uid: 'asdw345dasdas',
        email: "jhon.doe@gmail.com",
        username: "John Doe",
        following: [
            {"id": 2, "name": "María"},
            {"id": 3, "name": "Luis"}
          ],
        followers: [
            {"id": 4, "name": "Ana"},
            {"id": 5, "name": "Jorge"}
          ],
    },
];

const listUsers = (request, response) =>{
    const {query} = request;

    console.log(query);

    const result = users.filter((user) => user.uid === query.uid);

    if (result.length === 0) {
        return response.status(404).json({
            error: "No encontrado",
        });
    }

    response.json(result);
};

const listFollowing = (request, response) =>{
    const {query} = request;

    console.log(query);

    const user = users.find((user) => user.uid === query.uid);

    if (!user) {
        return response.status(404).json({
            error: "user no encontrado",
        });
    }

    if (user.following.length === 0) {
        return response.status(200).json({
            message: "No estás siguiendo a nadie.",
        });
    }

    response.json(user.following);
};

const listFollowers = (request, response) =>{
    const {query} = request;

    console.log(query);

    const user = users.find((user) => user.uid === query.uid);

    if (!user) {
        return response.status(404).json({
            error: "Usuario no encontrado",
        });
    }

    if (user.followers.length === 0) {
        return response.status(200).json({
            message: "No tienes seguidores.",
        });
    }

    response.json(user.followers);
};

module.exports = {
    listUsers,
    listFollowers,
    listFollowing,
};
