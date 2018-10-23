const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
require('dotenv').config();
module.exports.verifyToken=(req,res,next)=> {
    const response={};
    if(!req.headers.authorization)
    {
        response.status=401;
        response.msg="Unauthorized request";
        res.send(response);
    }
    else {
        const token = req.headers.authorization.split(' ')[1];
        console.log(token);
        if(token === 'null')
        {
            response.status=401;
            response.msg="Unauthorized request";
            res.send(response);
        }else{
               const payload=jwt.verify(token, 'secertkey');
             //const payload=jwt.verify(token, process.env.secretkey);
            if(!payload)
            {
                response.status=402;
                response.msg="Unauthorized request";
                res.send(response);
            }
            else {
                req.body.userid=payload.subject
                next();

            }
        }

    }
}