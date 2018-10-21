const jwt=require('jsonwebtoken');


module.exports.verifyToken=(req,res,next)=> {
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
                req.body.userid=payload
                next();
            }
        }

    }
}