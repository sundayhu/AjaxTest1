<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/23
 * Time: 13:08
 */
//header("Content-Type: text/plain;charset=utf-8");
//header("Content-Type: application/json;charset=utf-8");
//header("Content-Type: text/xml;charset=utf-8");
//header("Content-Type: text/html;charset=utf-8");
//header("Content-Type: application/javascript;charset=utf-8");
//jsonp 解决GET跨域 客户端dataType: "jsonp",jsonp:"callback", 服务端$jsonp = $_GET["callback"]; echo $jsonp.'({"success":false,"msg":"数据库连接失败！"})';
//XHR2 解决跨域 不支持IE10以下 只需要在服务端加入以下两句
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:POST,GET");
$jsonp = $_GET["callback"];

$username='root';
$password='';
$host='localhost';
$database='users';
$conn=new mysqli($host,$username,$password,$database);
if(!$conn){
    echo $jsonp.'({"success":false,"msg":"数据库连接失败！"})';
    exit;
}
$conn -> query("set names 'utf8' ");
$conn -> query("set character_set_client=utf8");
$conn -> query("set character_set_results=utf8");


$user_name = trim($_GET['username']);
$user_pass = trim($_GET['password']);
//$user_name=trim('郭二哥');
//$user_pass=trim('123456');
$sql="SELECT * FROM `userinfo` WHERE `username` = '".$user_name."' ";
$result=$conn -> query($sql);
$row = $result -> fetch_row();

if($row[1]==""||$user_pass!=$row[2]){
    echo $jsonp.'({"success":true,"msg":"0"})';
}else{
    echo $jsonp.'({"success":true,"msg":"1"})';
}
$conn->close();
?>