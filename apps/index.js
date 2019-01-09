
var mongo = require('../mongo/mongoServer');
var visitor=require('../models/visitor');
var counter=require('../models/counter');
var router = function (app) {
    app.get('/', function (req, res) {
        console.log('Hello World! 嘻嘻嘻');
        res.send("Hello World! 嘻嘻嘻'");
        res.end();
    })
    app.post('/visitors', (req, res) => {
        // 重新构造参数
        var data=new visitor(req.body.Id,req.body.phoneNo,req.body.dateTime,req.body.url);
        mongo.createVisit(data).then((data) => {
            console.log('create sucess')
        }).catch(err => {

        })
        res.send("1 document inserted");
    }),
    app.get('/visitors',(req,res)=>{
        mongo.getVisiters("").then(data=>{
            res.send(data);
        })
        .catch(err=>{

        })
    }),
    app.post('/counter',(req,res)=>{
        var cnt=new counter(req.body.Id,req.body.phoneNo,req.body.dateTime,req.body.url);
        mongo.createCounter(cnt).then((data) => {
            console.log('create sucess')
        }).catch(err => {
        })
        res.send("1 document inserted");
    })
    app.get('/counter',(req,res)=>{
        //var cnt=new counter(req.body.Id,req.body.phoneNo,req.body.dateTime,req.body.url,1);
        mongo.getCounter("").then((data) => {
           res.send(data);
        }).catch(err => {
        })
        //res.send("1 document inserted");
    })
}
exports.route = router;