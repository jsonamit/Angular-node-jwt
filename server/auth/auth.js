const jwt=require('jsonwebtoken');


module.exports.verifyToken=(req,res,next)=> {
    let response={};
    if(!req.headers.authorization)
    {
        response.status=401;
        response.msg="Unauthorized request";
        res.send(response);
    }
    else {
        let token = req.headers.authorization.split(' ')[1];
        console.log(token);
        if(token === 'null')
        {
            response.status=401;
            response.msg="Unauthorized request";
            res.send(response);
        }else{
            let payload=jwt.verify(token, 'secertkey');
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