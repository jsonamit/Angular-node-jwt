const cors=require('cors');
const bodyParser=require('body-parser');
const routes=require('../routes/index');

module.exports=(app)=>{
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:false}));
  routes(app);
};