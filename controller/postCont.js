const postModel = require('../model/postSchema');

const createPost = async (req, res) => {
    const { title, content, section} =req.body;
    console.log(title,content,section)
    if(!title || !content) {
        res.status(406).json({"error" : "전부 입력해주세요"});
        return;
    }
    try {
        const data = await postModel.createPost(title, content, section);
        res.status(201).json(data);
    } catch(error) {
        res.status(error.status).json({ "message" : "post fail" })
    }
}

const getPost = async (req, res) => {
    const image = req.files[0].path;
    console.log(req.files);
    console.log(image);
    try{
        const data = await postModel.getPost();
        res.status(200).json(data);
    } catch(error){
        res.status(error.status).json({ "message" : "get fail" });
    }
}
const getOnePost = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await postModel.getOnePost(id);
        res.status(200).json(data);
    } catch(error) {
        res.status(error).json({ "message" : "get fail" });
    }
}

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content , section} = req.body;
    if(!title || !content) {
        res.status(404).json({"message" : "전부 입력해주세요"});
        return;
    }
    try {
        const data = await postModel.updatePost(id, title, content, section);
        res.status(201).json(data);
    } catch (error) {
        res.status(error.status).json({ "message" : "update fail" })
    }
}

const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        await postModel.deletePost(id);
        res.status(200).json({ "message" : "delete success" });
    } catch (error) {
        res.status(error.status).json({ "message" : "not find"});
    }
}
module.exports = {createPost, getPost, updatePost, deletePost, getOnePost}