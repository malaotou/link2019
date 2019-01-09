const express = require('express')
const path = require('path')
var router = require('./apps/index');
var mongo = require('./mongo/mongoServer');
// var mongo = require('mongodb');
const PORT = process.env.PORT || 5000
var bodyParser = require('body-parser');
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://licai:licai2019@ds016108.mlab.com:16108/licai";
var app = express();

app
  .use(express.static(path.join(__dirname, 'public')))
  .use('/wall', express.static('wall'))
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(bodyParser.json());
   // 允许跨域
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
router.route(app);
//.set('views', path.join(__dirname, 'views'))
//  .set('view engine', 'ejs')
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
