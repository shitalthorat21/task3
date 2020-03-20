const express = require('express');
const router = express.Router();
const userController=require('./userController');
const {catchErrors}=require('./errorHandlers');

router.get('/', userController.homePage);
router.get('/users', userController.user);
router.get('/add', userController.addUser);
router.post('/add', userController.getUser);
router.get('/users', userController.createUser);
// router.get('/users', userController.addData);
// router.post('/users', userController.displayUser);

module.exports = router;





