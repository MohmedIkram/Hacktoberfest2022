<?php
if($_SERVER['REQUEST_METHOD']=='POST'){
    include '_dbconnect.php';
    $email=$_POST['email'];
    $password=$_POST['password'];
// echo $email;
    $fetchsql="SELECT * from `users` WHERE user_email='$email'";
    $result=mysqli_query($conn,$fetchsql);
//    echo var_dump($result);
    $numrows=mysqli_num_rows($result);
    if($numrows==1){
        $row=mysqli_fetch_assoc($result);  
           $username=$row['user_name'];
           if(password_verify($password,$row['user_password']))
           {
               session_start();
               $_SESSION['loggedin']=true;
               $_SESSION['useremail']=$email;
               $_SESSION['userid']=$row['user_id'];
               $_SESSION['username']=$row['user_name'];
            
               echo " loggedin " . $email;
            echo   $username;
               
            header("Location: /forum/index.php?");
        }    
        else{
            header("Location: /forum/index.php");
            echo "unable to login";
        }
  }
}
?>