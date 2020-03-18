const express = require('express');
const router = express.Router();
const userController=require('./userController');
const {catchErrors}=require('./errorHandlers');

router.get('/', userController.homePage);
router.get('/users', userController.users);
router.get('/add', userController.addUser);
router.post('/add', catchErrors(userController.createUser));


module.exports = router;





