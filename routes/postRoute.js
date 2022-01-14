const express = require('express');
const cont = require('../controller/postCont');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const storage = multer.diskStorage({
    destination:(req, file, cd) => {
        try{
            fs.accessSync('upload/'+req.params.name);
        } catch(error) {
            fs.mkdirSync('upload/'+req.params.name);
        }
        cd(null, 'upload/'+req.params.name);
    },
    filename:(req, file, cd)=>{
        const name = file.originalname;
        cd(null, name);
    }
})
const upload = multer ({
    storage: storage,
    fileFilter : (req, file, callback )=>{
        let ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(res.end('이미지만 넣어라!!'), null);
        }
        callback(null,true);
    },
    limit : { fileSize:5*1024*1024 },
});

const router = express.Router();

router.get('/:name', upload.array('image',4) ,cont.getPost);
router.get('/:id', cont.getOnePost);

router.post('/:name', cont.createPost);

router.put('/:id', cont.updatePost);

router.delete('/:id', cont.deletePost);
module.exports = router;