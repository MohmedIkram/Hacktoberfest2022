<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        <?php include '../styles/style.css'; ?>
    </style>
</head>

<body>
    <main class="main-container">
        <div class="container">
            <form method="POST" action="../controllers/LoginController.php" class="login-form">
                <h2 class="title">Login form</h2>
                <label for="email">email</label>
                <input type="email" name="email" id="" placeholder="example@gmail.com" class="email-in in" required>
                <p class="error">
                    <?php
                    if (isset($_SESSION['email_err'])) {

                        echo $_SESSION['email_err'];
                    }
                    ?>
                </p>
                <label for="password">password</label>
                <input type="password" name="password" id="" class="pass-in in" required>
                <p class="error">
                    <?php
                    if (isset($_SESSION['pass_err'])) {

                        echo $_SESSION['pass_err'];
                    }
                    ?>
                </p>
                <input type="submit" value="Login" name="submit_signup" class="signup-btn">
            </form>
        </div>
    </main>
</body>

</html>