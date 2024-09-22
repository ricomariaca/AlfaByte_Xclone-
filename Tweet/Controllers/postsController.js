const posts = [
    {
        uid: 'asdw345dasdas',
        id: new Date().getMilliseconds(),
        title: "Mi post",
        body: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born..."
    }
];

const listPosts = (req, res) => {
    const { query } = req;

    const result = posts.filter((post) => post.uid === query.uid);

    if (result.length === 0) {
        return res.status(404).json({
            error: "No se encontraron posts para este UID",
        });
    }

    res.json(result);
};

const createPost = (req, res) => {
    const { title, body } = req;

    const newPost = {
        id: new Date().getMilliseconds(),
        title,
        body,
    };

    posts.push(newPost);

    res.status(201).json({
        mensaje: "Publicación exitosa",
        post: newPost
    });
};

module.exports = {
    listPosts,
    createPost,
};