var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://licai:licai2019@ds016108.mlab.com:16108/licai";

module.exports = {
    createVisit: function (data) {
        var promise = new Promise(function (resolve, reject) {
            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db("licai");
                var myobj = data;
                dbo.collection("visitors").insertOne(myobj, function (err, res) {
                    if (err) {
                        reject("error");
                        throw err;
                    }
                    else {
                        resolve('sucess');
                    }
                    db.close();
                });
                db.close();
            });

        });
        return promise;
    },
    getVisiters: function (filter) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, (err, db) => {
                if (err) throw err;
                var dbo = db.db("licai");
                //var myobj = data;
                dbo.collection("visitors").find({}).toArray(function (err, result) {
                    if (err) reject(err);
                    else
                        resolve(result);
                })
            })
        })
    },
    createCounter:function(data){
        var promise = new Promise(function (resolve, reject) {
            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db("licai");
                var myobj = data;
                dbo.collection("counters").insertOne(myobj, function (err, res) {
                    if (err) {
                        reject("error");
                        throw err;
                    }
                    else {
                        resolve('sucess');
                    }
                    db.close();
                });
                db.close();
            });

        });
        return promise;
    }
}