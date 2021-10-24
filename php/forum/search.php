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

<style>
.container-flex{
    display:flex;
    margin:40px 46px;
    justify-content:center;
    align-items: center;
}

#main-container{
    min-height:90vh; 

}
</style>
</head>
<body>
    <?php  include "partials/_header.php"?>
    <?php include "partials/_dbconnect.php"?>
    
 <div id="main-container" class="container my-2">
<h2 class="my-4">search result for "<em><?php echo $_GET['search']?></em>"</h2>

<?php
$noresult=true;
$query=$_GET['search'];
$sql="SELECT * FROM threads WHERE match (thread_title,thread_desc) against('$query')";
$result=mysqli_query($conn,$sql);

    while($rows=mysqli_fetch_assoc($result))
    {
        $noresult=false;
            $thread_title=$rows['thread_title'];
            $thread_desc=$rows['thread_desc'];
            $thread_id=$rows['thread_id'];
            // $cat_id=$_GET['catid'];

            $url="thread.php?threadid=$thread_id ";
            echo '<div class="result my-3">
            <h4 ><a href="' .$url.'" class="text-dark">' . $thread_title .'</a></h4>
            <p>' . $thread_desc . ' </p>
            
            </div>';
}
    
if($noresult){
    echo '<div class="jumbotron jumbotron-fluid mt-5 py-2">
<div class="container">
<p class="display-4">No result found</p>
<p class="lead "> 

               <ul>Suggestions:
               <li> Make sure that all words are spelled correctly.</li>
               <li> Try different keywords.</li>
               <li> Try more general keywords.</li>
               </ul>
</p>
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