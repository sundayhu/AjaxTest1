$(document).ready(function(){
    $("#login").click(function(){
        $.ajax({
            type: "GET",
            url: "php/loginjson.php?username="+$("#user-name").val()+"&password="+$("#user-password").val(),
            dataType: "json",
            success: function(data) {
                if (data.success) {
                    switch (parseInt(data.msg)){
                        case 0:alert("登录失败！");break;
                        case 1:alert("登录成功！");break;
                    }
                } else {
                    alert("发生错误：" + request.status);
                }
            },
            error: function(jqXHR){
                alert("发生错误：" + jqXHR.status);
            },
        });
    });

    $("#sign").click(function(){
        $.ajax({
            type: "POST",
            url: "php/registerjson.php",
            data: {
                username: $("#user-name").val(),
                password: $("#user-password").val(),
            },
            dataType: "json",
            success: function(data){
                if (data.success) {
                    switch (parseInt(data.msg)){
                        case 0:alert("注册失败！");break;
                        case 1:alert("注册成功！");break;
                    }
                } else {
                    alert("发生错误：" + request.status);
                }
            },
            error: function(jqXHR){
                alert("发生错误：" + jqXHR.status);
            },
        });
    });
});