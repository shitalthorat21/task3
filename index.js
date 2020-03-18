const express = require('express');
const router = express.Router();
const userController=require('./userController');
const {catchErrors}=require('./errorHandlers');

router.get('/', userController.homePage);
router.get('/users', userController.user);
router.get('/add', userController.addUser);
router.post('/add', catchErrors(userController.createUser));
router.get('/users', catchErrors(userController.addData));
router.post('/users', catchErrors(userController.displayUser));

module.exports = router;





