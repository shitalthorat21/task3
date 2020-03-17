const express = require('express');
const router = express.Router();
const userController=require('./userController');
const {catchErrors}=require('./errorHandlers');

router.get('/users', (userController.addUser));
// router.get('/users', catchErrors(userController.getUsers));
// // router.post('/users', userController.addusers);

// router.get('/add', userController.addUser);
router.post('/users', catchErrors(userController.createUser));

module.exports = router;




