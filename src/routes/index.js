const express = require ('express');
const router = express.Router();
const checkUser = require ('../middlewares/checkUser')


const indexController = require ('../controllers/indexController.js');

router.get("/" , indexController.index);
router.get('/admin' , checkUser, indexController.login)

module.exports = router;