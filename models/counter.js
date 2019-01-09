var Visitor=require('./visitor');

class Counter extends Visitor {
    constructor(clientId,phoneNo,dateTime,url,visitCnt){
        super(clientId,phoneNo,dateTime,url);
        this.visitCnt=visitCnt;
    }
}

module.exports=Counter;