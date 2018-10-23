const User=require('../../models/user/user.model');
const jwt=require('jsonwebtoken');

module.exports.getUser=(req,res)=>{
  res.send('this is base route');
};
module.exports.getallUser=(req,res)=>{
    const response={};
   User.find((err,userData)=>{
       if(err)
       {
           response.status=500;
           response.data=err;
           response.msg="server error";
           res.send(response);
       }
       else{
           response.status=200;
           response.data=userData;
           response.msg="Access successfully";
           res.send(response);
       }

   })
};
module.exports.register=(req,res)=>{
  const response={};
  if(req.body.name && req.body.email && req.body.password)
  {
      User.find({email:req.body.email},(err,exitingUser)=>{
        if(err)
        {
          response.status=500;
          response.data=err;
          response.msg="server error";
          res.send(response);
        }
        else {
          if(exitingUser.length>0)
          {
              response.status = 409;
              response.msg = 'This email number already exist!';
              res.send(response);
          }

          // const userReg={name:req.body.name,email:req.body.email,password:req.body.password};
            const userData=req.body;
            const user=new User(userData);
            user.save((err,data)=>{
            if(err)
            {
              response.status=500;
              response.msg="Resgistration failed";
              res.send(response);
            }
            else {
                const pay={subject:data._id};
                const token=jwt.sign(pay,'secertkey');
                response.status=200;
                response.msg="Resgistration successfull";
                response.data=data;
                response.token=token;
                res.send(response);
            }
          })
        }
      });
  }
  else
  {
    response.status=401;
    response.msg="some data missing";
    res.send(response);
  }
};

module.exports.loginUser=(req,res)=>{
  const response={};
  if(req.body.email && req.body.password)
  {
        User.findOne({email:req.body.email},(err,userData)=>{
          if(err)
          {
              response.status=500;
              response.msg="server error";
              res.send(response);
          }
          else
          {
            if (userData)
            {
                const pay={subject:userData._id};
                const token=jwt.sign(pay,'secertkey');
                response.status=200;
                response.msg="login successfully";
                response.data=userData;
                response.token=token;
                res.send(response);
            }
            else
            {
                response.status=401;
                response.msg="check Email and password";
                res.send(response);
            }
          }
        })
  }
  else {
    response.status=402;
    response.msg="missing some data";
    res.send(response);
  }
}

module.exports.getProfile=(req,res)=>{

        const response = {};

            const user_id = req.body.userid;
            console.log(user_id);
            User.findOne({ _id: user_id }, (err, user) => {
                if (err) {
                    response.status = 500;
                    response.data = null;
                    response.msg = 'server error';
                    res.send(response);
                }
                else {
                    response.status = 200;
                    response.data = user;
                    response.msg = 'user profile';
                    res.send(response);
                }

            })
}

