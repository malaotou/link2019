var url="https://link2019.herokuapp.com";

$(document).ready(function () {
    
    //window.localStorage.JQa = "JQA";
     
    console.log(window.location.href);
    console.log(window.localStorage.getItem("nginx_cst_token"));
    $(document).on('click', 'span', function () {
        console.log($('.registered-form-phone').val());
        
        //window.localStorage.JQa = "JQA";
        var token = $('.registered-form-phone').val();// window.localStorage.getItem("nginx_cst_token");
        if (token != undefined && token != null) {
            window.localStorage.nginx_cst_token = $('.registered-form-phone').val();// "JQA1";
            //var token = window.localStorage.setItem("JQa", "token");
        }
        console.log(token);
        console.log("this works");
        console.log(window.location.href);
        var data={
            Id:1,
            phoneNo:2,
            dateTime:2,
            url:123
        }
        $.post("demo_ajax_gethint.asp",data,function(result){
          console.log('post ok');
          });

        return false;
    });
    setInterval(function () {
        var data = $('p').html();
        console.log(data);
    }, 3000);
});