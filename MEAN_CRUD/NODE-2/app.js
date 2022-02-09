const path = require('path');

const express = require("express");
const bodyParser = require('body-parser');
const multer = require('multer');

const productRoutes = require("./routes/productRoutes");
const sequelize = require("./util/database");

const fileStorage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'./images');
  },
  filename:(req,file,cb)=>{
    cb(null,new Date().getTime()+file.originalname.toString().split(' ').join(''));
  }
});


const app = express();


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



app.use(bodyParser.json());
app.use(multer({storage:fileStorage}).single('image'));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(productRoutes);

sequelize
  .sync()
  .then((success) => {
      app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
