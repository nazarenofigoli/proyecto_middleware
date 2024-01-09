const fs = require ('fs');

const controller = {
    
    index: (req,res)=>{
        res.render('index', {title : "Home"})
    },

    login : (req,res) => {
        const user = req.query.user;
        res.send(`Hola admin : ${user}`);
    }
}

module.exports = controller;