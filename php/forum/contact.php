<?php
$submit=false;
$method=$_SERVER['REQUEST_METHOD'];
if($method=='POST'){
   include "partials/_dbconnect.php";
   $name=$_POST['name'];
   $email=$_POST['email'];
   $phone=$_POST['phone'];
   $desc=$_POST['desc'];

$sql="INSERT INTO `contact` (`contact_name`, `contact_email`, `contact_phone`, `contact_desc`, `contact_time`) VALUES ('$name', '$email', '$phone', '$desc', current_timestamp())";
$result=mysqli_query($conn,$sql);
if($result){
  $submit=true;
}
}
?>



<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>A-Forum</title>
    <style>
    /* .form-groups{
      margin:20px 180px;
    } */
  
  body{
      background:url("img/contact.jpg")
    }
    
    </style>
  </head>
  <body>
   <?php  include "partials/_header.php"?>
   <?php
   
   if($submit){
     echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
     <strong>Sucess!</strong> Your detail has been submitted .Please wait for the responce.
     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
       <span aria-hidden="true">&times;</span>
     </button>
   </div>';
   }

   ?>
           
 <div class="containers text-light mx-5 my-5 px-4 pb-5">
     <h1 class="form-groups text-center text-light py-3"> Contact US</h1> 
     <form action="<?php $_SERVER['REQUEST_URI'] ?>" method="POST">
  <div class="form-groups my-4 mx-4 px-4">
    <label for="exampleFormControlInput1">Your Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" name="name" Required>
  </div>
  <div class="form-groups my-4 mx-4 px-4">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Email" name="email" Required>
  </div>
  <div class="form-groups my-4 mx-4 px-4">
    <label for="exampleFormControlInput1">Your Phone Number</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Phone no." min="8" max="12" name="phone" Required>
  </div>

  <div class="form-groups my-4 mx-4 px-4 py-4">
    <label for="exampleFormControlTextarea1">Information you want to share</label>
    <textarea class="form-control" placeholder="Your message" id="exampleFormControlTextarea1" rows="3" name="desc" Required></textarea>
  </div>

  <button type="submit" class="btn btn-light form-btn ml-5 ">Submit</button>
</form>
 </div>
 <style>
 .container{
   min-height:100vh;
 }
 </style>
   <?php  include "partials/_footer.php"?>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>