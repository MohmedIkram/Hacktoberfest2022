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

?>

    <?php
    $id=$_GET['threadid'];
    $sql="SELECT * FROM `threads` where thread_id=$id";
    $result=mysqli_query($conn,$sql);
    while($rows=mysqli_fetch_assoc($result)){
      $thread_title=$rows['thread_title'];
      $thread_desc=$rows['thread_desc'];
      $thread_user_id=$rows['thread_user_id'];
 
      $fetch_name="SELECT user_name FROM `users` WHERE user_id='$thread_user_id'";
      $result2=mysqli_query($conn,$fetch_name);
      $row=mysqli_fetch_assoc($result2);
      $posted_by=$row['user_name'];
    }

       ?>




    <?php
$showalert=false;
$method=$_SERVER['REQUEST_METHOD'];

if($method=='POST'){
 $comment_content=$_POST['comment'];
        $comment_content=str_replace("<","&lt;",$comment_content);
        $comment_content=str_replace(">","&gt;",$comment_content);

$comment_by=$_SESSION['userid'];
$insert_sql="INSERT INTO `comment` (`comment_content`, `comment_by`, `thread_id`, `comment_time`) VALUES ('$comment_content', '$comment_by', '$id', current_timestamp())";
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

?>



    <div class="container">
        <div class="container my-4">
            <div class="jumbotron">
                <h1 class="display-7 text-danger"><?php echo $thread_title; ?></h1>
                <p class="lead"><?php echo $thread_desc; ?></p>
                <hr class="my-4">
                <p>This is peer-to-peer forum . No Spam / Advertising / Self-promote in the forums . Do not post
                    “offensive”
                    posts, links or images.Remain respectful of other members at all times.
                </p>
                <p>Posted by:
                   <em><?PHP echo $posted_by; ?></em>
                </p>

                <div class="container float-left">

                <?php 
                    //     $id=$_GET['catid'];
                    //   echo ' <a class="btn btn-primary" href="threadlist.php?catid='.$id.'" role="button">back</a>';
                 ?>

                </div>

            </div>
        </div>
    </div>


    <?php
          if(isset($_SESSION['loggedin']) && $_SESSION['loggedin']==true){
           echo  ' <div class="container">
        <h2 class="display-7 my-5">Post a Comment</h2>
        <form action="'. $_SERVER["REQUEST_URI"] .'" method="POST">
    <div class="form-group">
        <label for="exampleFormControlTextarea1">Comment</label>
        <textarea class="form-control" id="comment" name="comment" rows="3" required></textarea>
    </div>
    <button type="submit" class="btn btn-dark">post</button>
    </form>
    </div>';
    }
    else{
    echo '<div class="container">
    <h2 class="display-7 my-5">Post a Comment</h2>
    <div class="alert alert-info" role="alert">
    <a href="#" class="alert-link"  data-toggle="modal" data-target="#loginModal">Login /</a>
    <a href="#" class="alert-link" data-toggle="modal" data-target="#signupModal"> signup</a>
    to post comment.
  </div>   
    </div>';
    }
    ?>



    <div class="container my-5">
        <h2 class="display-7 my-5">Discussions</h2>

        <?php
    
    $id=$_GET['threadid'];
    $sql="SELECT * FROM `comment` where thread_id=$id";
    $result=mysqli_query($conn,$sql);
    $no_comment=true;
    while($rows=mysqli_fetch_assoc($result)){
        $no_comment=false;
      $comment_id=$rows['comment_id'];
      $comment_content=$rows['comment_content'];
      $comment_time=$rows['comment_time'];
      $comment_by=$rows['comment_by'];
      
      $fetch_name="SELECT user_name FROM `users` WHERE user_id='$comment_by'";
      $result2=mysqli_query($conn,$fetch_name);
      $row=mysqli_fetch_assoc($result2);
    //   echo var_dump($result2);
if($result2){
      echo'   <div class="media my-4">
      <img src="img/us.png" width="35px" class="mr-3" alt="...">
      <div class="media-body">
      <p class="font-weight-bold my-0"> '. $row['user_name'] .'  at '. $comment_time   .'</p>
      '. $comment_content .'
    </div>
</div>';
}
else{
    echo 'unable to fetch';
}
    }

    if($no_comment){
        echo '<div class="jumbotron jumbotron-fluid my-4">
   <div class="container">
    <p class="display-4">No comments yet</p>
    <p class="lead ">Be the first one to comment .</p>
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