const {response } = require('express');
const { Tweet } =require('../../Tweet/Models/Tweet')

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

const createPost = async (req, res=response) => {

    try {
        const newTweet= new Tweet({
            title: 'la vaquita',
            description: 'la vaquita lolaaaaa'
           });
        
           await newTweet.save();
        
           res.json({
            ok: true,
            data:{
                title: newTweet.title,
                description: newTweet.description
            }
           });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            error:"antonio writes, writes"
        })
    }
};

module.exports = {
    listPosts,
    createPost,
};