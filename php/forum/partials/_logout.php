<?php
session_start();
echo "logging you out plese wait";
session_unset();
session_destroy();
header("Location: /forum/index.php?");
?>