const mongoose=require('mongoose');
const mongoConfig=require('../config/mongoose');

mongoose.connect(mongoConfig.DB_URI,(err)=>{
    if(!err)
    {
        console.log("connection successfully created");
    }
    else{
        console.log("connection error"+JSON.stringify(err,undefined,2));
    }
});

require('../models/user/user.model');