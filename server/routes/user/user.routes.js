const express=require('express');
const route=express.Router();
const userController=require('../../controllers/user/user.controller');
const auth=require('../../auth/auth');


route.get('/',userController.getUser);
route.get('/getalluser',auth.verifyToken,userController.getallUser);
route.post('/register',userController.register);
route.post('/login',userController.loginUser);
route.get('/getProfile',userController.getProfile);


module.exports=route;
