<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/22
 * Time: 17:05
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
//post 值没有传过来？Apache和phpstorm服务器打开不一样
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(isset($_POST["username"])&&isset($_POST["password"])) {
        $user_name = trim($_POST['username']);
        $user_pass = trim($_POST['password']);

        $sql = "SELECT * FROM `userinfo` WHERE `username` = '" . $user_name . "' ";
        $result = $conn->query($sql);
        $row = $result->fetch_row();

        if ($user_name == $row[1]) {
            echo 0;
        } else {
            $sql = "insert into `userinfo` (`username`,`password`) values ('$user_name','$user_pass')";
            $conn->query($sql);
            echo 1;
        }
        $conn->close();
    }
}
?>