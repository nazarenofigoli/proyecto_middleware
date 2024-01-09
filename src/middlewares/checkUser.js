const express = require('express');
const router = express.Router();
const users = ['Ada','Greta', 'Vim', 'Tim'];

function checkUser(req,res,next) {

    const user = req.query.user;
    if (user.includes(user)){
        next();
    } else {
        res.send('No tienes los privilegios para ingresar');
    }
}

module.exports = checkUser;