const posts = 
[
    {
        id: new Date().getMilliseconds(),
        title: "Mi posts",
        body: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will gr-builder of human happiness. No one rejects, dislikes, or avoids ple"

    }
]

const listPosts = (request, response) =>{
    const {query} = request;

    console.log(query);

    const result= posts.filter((user) => user.uid === query.uid);


    if(result.length === 0){
        return response.status(404).json({
                error: "not found",
            });
    }
    response.json(result);
};

module.exports ={
    listPosts,
};