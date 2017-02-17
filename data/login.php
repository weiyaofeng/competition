<?php
	header('Content-Type: application/json');
	$output = ['status'=>0, 'msg'=>''];
	$uname = $_POST["uname1"];
	$upwd = $_POST['upwd1'];
	//echo $uname.$upwd ;
	$conn = mysqli_connect("127.0.0.1","root","","login",3306);
	mysqli_query($conn,"SET NAMES UTF8");
	//SELECT dno,uname FROM login_in WHERE uname='478221322@qq.com' AND pwd='woaimumu13140'
	$sql = "SELECT dno,uname FROM login_in WHERE uname='$uname' AND pwd='$upwd'";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	if($row){
		$output["status"] = intval($row["dno"]);
		$output["msg"] = $row["uname"];
	}else{
		$output["status"] = -404;
		$output["msg"] = "您输入的用户名或密码错误";
	};
	echo json_encode($output);
	
?>


