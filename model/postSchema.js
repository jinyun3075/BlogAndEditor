const config = require("./config");
const mongoose = require("mongoose");
const schema = mongoose.Schema({
    title: {
        type: String,
        maxLength: 100,
        require: true
    },
    content: {
        type: String,
        maxLength:2000,
        require: false
    },
    section: {
        type: String,
        require: false,
        default: ""
    },
    view:{
        type: Number,
        default:0
    },
    pubDate: {
        type: Date,
        default: Date.now
    },
    modData : {
        type: Date,
        default: Date.now
    }
})

const post = mongoose.model("post",schema);

const createPost = (title, content, section) => {
    const data = new post({
        title,
        content,
        section,
        pubDate : new Date(),
        modDate : new Date()
    })
    return data.save();
}

const getPost = (section) => {
    return section? post.find({section}):data = post.find();
}
const getOnePost = (id) => {
    return post.findByIdAndUpdate(id,{$inc :{view:+1}},{new:true});
}

const updatePost = (id, title, content, section) => {
    return post.findByIdAndUpdate(
        id,
        {
            title,
            content,
            section,
            modDate : new Date()
        },
        {
            new: true,
        }
    )
}

const deletePost = (id) => {
    return post.findByIdAndDelete(id);
}
module.exports = {createPost, getPost, updatePost, deletePost, getOnePost}

