<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>A-Forum</title>
</head>

<body>

    <?php  include "partials/_header.php"?>
    <?php include "partials/_dbconnect.php"?>
    <?php
    
    $showalert=false;
    $id=$_GET['catid'];
    $sql="SELECT * FROM `category` where category_id=$id";
    $result=mysqli_query($conn,$sql);
    while($rows=mysqli_fetch_assoc($result)){
      $catname=$rows['category_name'];
      $catdesc=$rows['category_description'];
    }
    ?>


    <?php
if(isset($_SESSION['loggedin']) && $_SESSION['loggedin']==true)
{   
$showalert=false;
$method=$_SERVER['REQUEST_METHOD'];
if($method=='POST'){
    //insert into data base
    $thread_title=$_POST['title'];
    $thread_desc=$_POST['desc'];
    $thread_title=str_replace("<","&lt;",$thread_title);
    $thread_title=str_replace(">","&gt;",$thread_title);
    $thread_desc=str_replace( "<","&lt;",$thread_desc); 
    $thread_desc=str_replace( ">","&gt;",$thread_desc); 
    $user_id=$_SESSION['userid'];

$insert_sql="INSERT INTO `threads` (`thread_title`, `thread_desc`, `thread_cat_id`, `thread_user_id`, `timestamp`) VALUES ('$thread_title', '$thread_desc', '$id', '$user_id', current_timestamp())";

$result1=mysqli_query($conn,$insert_sql);
// echo var_dump($result1);
$showalert=true;
if($showalert){
    echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Sucess!</strong> Your Thread has been added .Please wait while someone respond.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>';
}
}
}
?>

    <div class="container my-4">
        <div class="jumbotron">
            <h1 class="display-7">Welcome to <?php echo $catname; ?> forums</h1>
            <p class="lead"><?php echo $catdesc; ?></p>
            <hr class="my-4">
            <p>This is peer-to-peer
             forum . No Spam / Advertising / Self-promote in the forums . Do not post “offensive”
                posts, links or images.Remain respectful of other members at all times.
            </p>
            <a class="btn btn-primary" href="#" role="button">Learn more</a>
        </div>
    </div>
    
<?php
if(isset($_SESSION['loggedin']) && $_SESSION['loggedin']==true){
echo  '  <div class="container">
        <div class="container">
            <h2 class="display-7 my-5">Ask a question</h2>
            <form action="'.  $_SERVER["REQUEST_URI"] .'" method="POST">
    <div class="form-group">
        <label for="exampleInputEmail1"> Query Title </label>
        <input type="text" class="form-control" id="title" name="title" aria-describedby="emailHelp">

    </div>

    <div class="form-group">
        <label for="exampleFormControlTextarea1"> Description</label>
        <textarea class="form-control" id="desc" name="desc" rows="3"></textarea>
    </div>
   <button type="submit" class="btn btn-dark">Submit</button>
    </form>
    </div>
    </div>';
}
    else{
    echo '<div class="container">
    <h2 class="display-7 my-5">Ask a question</h2>
    <div class="alert alert-info" role="alert">
     <a href="#" class="alert-link"  data-toggle="modal" data-target="#loginModal">Login /</a>
     <a href="#" class="alert-link" data-toggle="modal" data-target="#signupModal"> signup</a>
     to ask query    
  </div>   
    </div>';    
}
?>
    <div class="container my-5">
    <h2 class="display-7 my-5">Browse Questions...!</h2>

        <?php
    $id=$_GET['catid'];
    $sql="SELECT * FROM `threads` where thread_cat_id=$id";
    $result=mysqli_query($conn,$sql);
    $no_result=true;
    while($rows=mysqli_fetch_assoc($result)){
        $no_result=false;
        $thread_id=$rows['thread_id'];
      $thread_title=$rows['thread_title'];
      $thread_desc=$rows['thread_desc'];
      $thread_time=$rows['timestamp'];
      $thread_user_id=$rows['thread_user_id'];
// echo var_dump($thread_user_id);

      $fetch_name="SELECT user_name FROM `users` WHERE user_id=$thread_user_id";
      $result2=mysqli_query($conn,$fetch_name);
      $row2=mysqli_fetch_assoc($result2);
    //   echo $row2['user_name'];


      echo'   <div class="media">
      <img src="img/us.png" width="35px" class="mr-3" alt="...">
      <div class="media-body">
      <h5 class="mt-0"> <a href="thread.php?threadid='. $thread_id .'&&catid='. $id .'" class="text-dark">'. $thread_title .'</a></h5>
      '. $thread_desc .'
    </div>
    <p class="font-weight-bold my-0">Asked by: '. $row2['user_name'] .'  at '. $thread_time   .'</p>
</div>';
}

if($no_result){
         echo '<div class="jumbotron jumbotron-fluid my-4">
    <div class="container">
     <p class="display-4">No question asked yet</p>
     <p class="lead ">Be the first one to Ask .</p>
    </div>
    </div>'
     ;
     } 
    
     ?>

    </div>


    <?php  include "partials/_footer.php"?>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous">
    </script>
</body>

</html>