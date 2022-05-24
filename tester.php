<?php
    //credentials 
    $username = "root";
    $password = "Re_Ghoul";
    $email = '';
    $servername = 'localhost';
    $database = 'dbclover';
    
    //form data
    $x = $_POST['username'];
    $y = $_POST['password'];
    $z = $_POST['email'];

    //creates conenction
    $connection = new mysqli($servername, $username, $password, $database);

    if(connection->connect_error)
    {
        die("Error: " . $connection->connect_error);
    }

    //connection successfully
    $query = mysqli_query("SELECT * FROM users WHERE username='$x'");

    if(mysqli_num_rows($query) > 0)
    {
        //more than one instance of the username
        echo ("More than one instance of the username exists alrady");
    }
    else
    {
        $sql = "INSERT INTO users(username, email, password) VALUES('$x', '$y', '$z')";
        if($connection->query($sql))
        {
            echo "new record inserted successfully";
            header("location: Clover-home.html");
        }
        else
        {
            echo "Error: " . $sql . "<br>" . $connection->error;
            $connection->close();
        }
    }

?>