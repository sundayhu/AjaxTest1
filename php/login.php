<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/22
 * Time: 15:46
 */

$username='root';
$password='';
$host='localhost';
$database='users';
$conn=new mysqli($host,$username,$password,$database);
if(!$conn){
    echo '-1';
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
    echo 0;
}else{
    echo 1;
}
$conn->close();
?>
