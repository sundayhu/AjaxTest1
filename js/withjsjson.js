document.getElementById("login").onclick = function() {
    var request = new XMLHttpRequest();
    request.open("GET", "php/loginjson.php?username="+document.getElementById("user-name").value+"&password="+document.getElementById("user-password").value);
    request.send();
    request.onreadystatechange = function() {
        if (request.readyState===4) {
            if (request.status===200) {
                var data = JSON.parse(request.responseText);
                if (data.success) {
                    switch (parseInt(data.msg)){
                        case 0:alert("登录失败！");break;
                        case 1:alert("登录成功！");break;
                    }
                } else {
                    alert("出现错误：" + data.msg);
                }
            } else {
                alert("发生错误：" + request.status);
            }
        }
    }
}

document.getElementById("sign").onclick = function() {
    var request = new XMLHttpRequest();
    request.open("POST", "php/registerjson.php");
    var data = "username="+document.getElementById("user-name").value+"&password="+document.getElementById("user-password").value;
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    request.send(data);
    request.onreadystatechange = function() {
        if (request.readyState===4) {
            if (request.status===200) {
                var data = JSON.parse(request.responseText);
                if (data.success) {
                    switch (parseInt(data.msg)){
                        case 0:alert("注册失败！");break;
                        case 1:alert("注册成功！");break;
                    }
                } else {
                    alert("发生错误：" + request.status);
                }
            } else {
                alert("发生错误：" + request.status);
            }
        }
    }
}