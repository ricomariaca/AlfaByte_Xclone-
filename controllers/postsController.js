const posts = 
[
    {
        id: new Date().getMilliseconds(),
        title: "Mi posts",
        body: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will gr-builder of human happiness. No one rejects, dislikes, or avoids ple"

    }
]

const listPosts = (resquest, response) => {
response.json(posts);
};

module.exports ={
    listPosts,
};