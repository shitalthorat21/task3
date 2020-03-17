const express = require('express');
const router = express.Router();
const userController=require('./userController');
const {catchErrors}=require('./errorHandlers');

router.get('/users', userController.createUser);
// router.get('/users', catchErrors(userController.getUsers));
// router.post('/users', userController.adduser);
// router.get('/users', userController.displayusers);
router.post('/users', userController.displayusers);

router.get('/users', userController.addUser);
router.post('/users', catchErrors(userController.addUser));

module.exports = router;




