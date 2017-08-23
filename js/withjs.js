document.getElementById("login").onclick=function () {
    var request=new XMLHttpRequest();
    request.open("GET","php/login.php?username="+document.getElementById("user-name").value+"&password="+document.getElementById("user-password").value);
    request.send();
    request.onreadystatechange=function () {
        if(request.readyState===4){
            if(request.status===200){
                //alert(request.responseText);
                switch (parseInt(request.responseText)){
                    case 0:alert("登录失败！");break;
                    case 1:alert("登录成功！");break;
                }
            }else {
                alert("发生错误：" + request.status);
            }
        }
    }
};
document.getElementById("sign").onclick = function() {
    var request = new XMLHttpRequest();
    // request.open("GET","register.php?username="+document.getElementById("user-name").value+"&password="+document.getElementById("user-password").value);
    // request.send();
    request.open("POST", "php/register.php");
    var data = "username="+document.getElementById("user-name").value+"&password="+document.getElementById("user-password").value;
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    request.send(data);
    request.onreadystatechange = function() {
        if (request.readyState===4) {
            if (request.status===200) {
                //alert(request.responseText);
                switch (parseInt(request.responseText)){
                    case 0:alert("注册失败！");break;
                    case 1:alert("注册成功！");break;
                }
            } else {
                alert("发生错误：" + request.status);
            }
        }
    }
};