const express=require('express');
const app=express();
const config=require('./config/express');
require('./conn/db');

config(app);
const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});

