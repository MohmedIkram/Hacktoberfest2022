<?php
session_start();
session_unset();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <style>
        <?php include './styles/style.css'; ?>
    </style>
</head>
<body>
    
<main class="main-container">
    <div class="container">
        <div class="welcome-container">
            <h2 class="title">
                php authentication example
            </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, mollitia nemo? Nostrum eveniet maxime quidem.</p>
            <div class="btn-container">
                <a href="./pages/login.php" class="login-link">login</a>
                <a href="./pages/signup.php" class="signup-link">register</a>
            </div>
        </div>
    </div>
</main>
</body>
</html>