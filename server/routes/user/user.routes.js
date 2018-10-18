const express=require('express');
const route=express.Router();
const userController=require('../../controllers/user/user.controller');
const jwt=require('jsonwebtoken');

route.get('/',userController.getUser);
route.get('/getalluser',verifyToken,userController.getallUser);
route.post('/register',userController.register);
route.post('/login',userController.loginUser);

function verifyToken(req,res,next)
{
    let response={};
    if(!req.headers.authentication)
    {
        response.status=401;
        response.msg="Unauthorized request";
        res.send(response);
    }
    else {
        let token = req.headers.authentication.split(' ')[1];
        if(token==='null')
        {
            response.status=401;
            response.msg="Unauthorized request";
            res.send(response);
        }else{
            let payload=jwt.verify(token, 'secertkey');
            if(!payload)
            {
                response.status=401;
                response.msg="Unauthorized request";
                res.send(response);
            }
            else {
                req._id=payload.subject
                next()
            }
        }

    }
}

module.exports=route;
