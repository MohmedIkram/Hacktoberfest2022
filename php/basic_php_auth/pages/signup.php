<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        <?php include '../styles/style.css'; ?>
    </style>
    <title>Register</title>
</head>

<body>

    <main class="main-container">
        <div class="container">
            <form method="POST" action="../controllers/SignupController.php" class="signup-form">
                <h2 class="title">Registration form</h2>
                <label for="name">username</label>
                <input type="text" name="username" id="" placeholder="John Doe" class="name-in in" required>
                <p class="error">
                    <?php
                    if (isset($_SESSION['name_err'])) {

                        echo $_SESSION['name_err'];
                    }
                    ?>
                </p>
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
                <label for="confirm_password">confirm password</label>
                <input type="password" name="confirm_password" id="" class="pass-in in" required>
                <p class="error">
                    <?php
                    if (isset($_SESSION['pass_err'])) {

                        echo $_SESSION['pass_err'];
                    }
                    ?>
                </p>
                <input type="submit" value="Register" name="submit_signup" class="signup-btn">

            </form>
        </div>
    </main>

</body>

</html>