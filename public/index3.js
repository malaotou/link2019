var url = "https://link2019.herokuapp.com/";

$(document).ready(function () {
    var phoneNo = window.localStorage.getItem("nginx_cst_token");
    if (phoneNo == undefined || phoneNo == null) {
        var newId = guid();
        window.localStorage.custId = newId;
        console.log('new User');
        var data = {
            Id: newId,
            phoneNo: phoneNo,
            dateTime: new Date().Format("yyyy-MM-dd HH:mm:ss"),
            url: window.location.href
        }
        console.log(data);
        $.post(url + "counter", data, function (result) {
            console.log('post ok');
        });
    }

    $(document).on('click', 'span', function () {
        console.log($('.registered-form-phone').val());
        // var token = $('.registered-form-phone').val();// window.localStorage.getItem("nginx_cst_token");
        window.localStorage.nginx_cst_token = $('.registered-form-phone').val();// "JQA1";
        console.log(window.localStorage.getItem("nginx_cst_token"));
        return false;
    });
    var post = setInterval(function () {
        var data = $('p').html();
        var phoneNo = window.localStorage.getItem("nginx_cst_token");
        var custId = window.localStorage.getItem("custId")
        console.log(phoneNo);
        console.log(custId);

        if (phoneNo != null && phoneNo != undefined && data == "恭喜您") {
            console.log('注册成功');
            //visitors
            var data = {
                Id: custId,
                phoneNo: phoneNo,
                dateTime: new Date().Format("yyyy-MM-dd HH:mm:ss"),
                url: window.location.href
            }
            console.log(data);
            $.post(url + "visitors", data, function (result) {
                console.log('post ok');
            });
            localStorage.clear();
            clearInterval(post);
        }
    }, 3000);

    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    function guid() {
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }


});
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
