const express = require('express');
const user_router = express.Router();
//require đến file ../models/usersModel
var users = require('../models/usersModel');

user_router.get('/:userName', (req, res) => {
    const val = users.read(req.params.userName);
    if (val) {
        res.send(val);
    } else {
        res.send({});
    }
});

//Tạo mới thông tin cmt từ người dùng
user_router.post('/Send', (req, res) => {
    res.send(users.Send(req.body.userName, req.body.password, req.body.email, req.body.comment));
});

//Exports cho biến user_router
module.exports = user_router;