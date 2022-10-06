<?php
$signup=false;
// $showerror="false";
// include '_header.php';
// echo $_SERVER['REQUEST_METHOD'];
if($_SERVER['REQUEST_METHOD']=='POST'){

include '_dbconnect.php';
$d_name=$_POST['dname'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$password=$_POST['password'];
$cpassword=$_POST['cpassword'];

$exists_email="SELECT * FROM `users` WHERE user_email=$email";
$result=mysqli_query($conn,$exists_email);
$numrows=mysqli_num_rows($result);
if($numrows>0){
    $showerror= "email Id already in use";
    // header("Location: /forum/index.php?signup=false&error=$showerror");
}
else{
    if($password==$cpassword){
        $hash=password_hash($password,PASSWORD_DEFAULT);
        $insert_sql="INSERT INTO `users` ( `user_name`, `user_phone`, `user_email`, `user_password`, `timestamp`) VALUES ( '$d_name', '$phone', '$email', '$hash', current_timestamp())";
        $result=mysqli_query($conn,$insert_sql);
        if($result){
            $showalert=true;
            header("Location: /forum/index.php?signup=true");
            exit();
        }
        
    }
    else{
        $showerror="password do no match";
        // header("Location: /forum/index.php?signup=false&error=$showerror");
        
    }
}
header("Location: /forum/index.php?signup=false&error=$showerror");

}

?>