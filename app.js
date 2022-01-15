const express = require('express');
const postRouter = require("./routes/postRoute");
const imgRouter = require('./routes/imgRoute');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./model/config');
const bodyparser = require("body-parser");

dotenv.config();

db();
const app = express();

app.use(bodyparser.urlencoded({ extended : true}))
app.use(cors());
app.use(express.json())

app.use('/img', imgRouter);
app.use('/post/api', postRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
})

app.use((err, req, res, next) => {
    console.log('애러났음!')
    console.log(err);
    res.sendStatus(500);
})

app.listen(8080);