const users =[
    {
        uid: 'asdw345dasdas',
        email: "jhon.doe@gmail.com",
        name: "John Doe",
        PhotoUrl: "xxxxdfasd.jpg",
    },
];

const listLogin = (request, response) =>{
    const {query} = request;

    console.log(query);

    const result= users.filter((user) => user.uid === query.uid);


    if(result.length === 0){
        return response.status(404).json({
                error: "not found",
            });
    }
    response.json(result);
};
module.exports ={
    listLogin,
};