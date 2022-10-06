<?php include "partials/_dbconnect.php"?>
<?php
$loggedin=false;
$showerror=false;
session_start();
// if(isset($_SESSION['loggedin']) && $_SESSION['loggedin']==true)
// {
//   $loggedin=true;
// }
echo '<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="index.php">iForum</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="about.php">About</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Top Categories
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">';
      
      $sql="SELECT category_name,category_id FROM `category` LIMIT 4";
      $result=mysqli_query($conn,$sql);
      while($row=mysqli_fetch_assoc($result))
      {
      echo '<a class="dropdown-item" href="threadlist.php?catid='. $row['category_id'] .'">'.$row['category_name'].'</a>';
      } 
      echo '</div>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="contact.php">Contact</a>
  </li>
  </ul>

  <div class="mx-2 row ">
  <form class="form-inline my-2 my-lg-0" action="search.php" method="GET">
  <input class="form-control mr-sm-2 " type="search" name="search" placeholder="Search" aria-label="Search" required>
  <button class="btn btn-dark my-2 my-sm-0 " type="submit">Search</button>
  </form>';


if(isset($_SESSION['loggedin']) && $_SESSION['loggedin']==true){
  echo    
        // '<p class=" text-center my-1 mx-2" padding:0px> welcome '. $_SESSION['username'].'</p>
        // <a href="partials/_logout.php" class="btn btn-outline-dark ml-2">logout</a>';
        '<div class="dropdown">
            <a class="nav-link dropdown-toggle text-secondary" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              '. $_SESSION['useremail'].'
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          
            <button type="submit" class="btn btn-light py-0 px-0 mx-4 "><a class="dropdown-item " href="partials/_logout.php"> logout</a></button>
           </div>
          </div>';
        
   }
 else{ 
        echo '<button class="btn btn-outline-dark ml-2 "  data-toggle="modal" data-target="#loginModal">login</button>
      <button class="btn btn-outline-dark ml-2" data-toggle="modal" data-target="#signupModal">SignUp</button>';
}

    echo '</div>
    </div>
    </nav>';

include 'partials/_login.php';
include 'partials/_signup.php';
if(isset($_GET['signup']) && $_GET['signup']=="true"){
    echo '<div class="alert alert-success alert-dismissible fade show my-0" role="alert">
    <strong>Sucess!</strong> You can now login by using your email and password.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>';
}
// else{
//   echo '<div class="alert alert-danger alert-dismissible fade show my-0" role="alert">
//   <strong>Error!</strong> '. $_GET['error'] .'
//   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//     <span aria-hidden="true">&times;</span>
//   </button>
// </div>';

// }


// login alert 

if( isset($_SESSION['loggedin']) && $_SESSION['loggedin']==true){
  echo '<div class="alert alert-success alert-dismissible fade show my-0" role="alert">
  <strong>Sucess!</strong> You are loggedin.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>';
}
else{
  echo '<div class="alert alert-danger alert-dismissible fade show my-0" role="alert">
  <strong>Error!</strong> invalid credentials.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>';  
}


?>