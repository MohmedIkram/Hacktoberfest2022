<?php
include_once '../db.php';
session_start();
// remove all session variables
session_unset();

$invalid_form = false;
$email = format_input($_POST['email']);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $_SESSION['email_err'] = "Invalid email format";
    $invalid_form = true;
}
$password = format_input($_POST['password']);

if ($invalid_form == true) {
    header("Location: http://localhost:8080/login.php");
} else {
    $sql = "SELECT id, username, email, password FROM users WHERE email='$email'";
    $result = mysqli_query($connection, $sql);

    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        while ($row = mysqli_fetch_assoc($result)) {
            if (password_verify($password, $row['password'])) {
                $_SESSION['username'] = $row['username'];
                $_SESSION['email'] = $row['email'];
                $_SESSION['password'] = $row['password'];
                header("Location: http://localhost:8080/pages/home.php");
            } else {
                $_SESSION['pass_err'] = 'invalid credentials';
                header("Location: http://localhost:8080/pages/login.php");
            }
        }
    } else {
        $_SESSION['pass_err'] = 'invalid credentials';
        header("Location: http://localhost:8080/pages/login.php");
    }

    mysqli_close($connection);
}


function format_input($input)
{
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
}
