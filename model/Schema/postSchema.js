const mongoose = require("mongoose");
const schema = mongoose.Schema({
    title: {
        type: String,
        maxLength: 100,
        require: true
    },
    titleImg: {
        type: String,
        default: "default.png"
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

module.exports = mongoose.model("post",schema);