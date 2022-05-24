<head>
<style>
	body
	{
		margin: 0;
		font-family: Arial, Helvetica, sans-serif;
	}
	.main
	{
		background-image: url("Images/14.png");
		position: relative;
		background-color: black;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		height: 977px;
		width: 1880px;
		margin: 0;
	}
	.popUp
	{
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,0.5);
		width: 1880px;
		height: 977px;
		overflow: auto;
		z-index: 10;
	}
	.animate
	{
		-webkit-animation: animatezoom 0.6s;
		animation: animatezoom 0.6s;
	}
	@-webkit-keyframes animatezoom
	{
		from { -webkit-transform: scale(0)}
		to { -webkit-transform: scale(1)}
	}
	@keyframes animatezoom
	{
		from { transform: scale(0)}
		to { transform: scale(1)}
	}
	.textPosition
	{
		position: absolute;
		top: 20%;
		left: 40%;
	}
	.text
	{
		font-size: 30px;
		font-color: #ff6000;
	}
	.retryButton
	{
		background-color: #ff0000;
		border-radius: 9px;
		color: white;
		border: none;
		width: 100%;
		cursor: pointer;
		position: absolute;
		top: 30%;
		left: 46%;
		z-index: 10;
		width: 100px;
		height: 25px;
		padding: 6px 10px;
		font-size: 20px;
		text-align: center;
		transition-duration: 0.20s;
	}
	.retryButton:hover
	{
		font-size: 25;
		background-color: #de1e1e;
		height: 30px;
	}
</style>
<?php

$x = $_POST["username"];
$y = $_POST["email"];
$z = $_POST["password"];

//servername
$servername = "localhost";
$username = "root";
$email = "";
$password = "";
$dbname = "dbclover";

//Creates Connection to database
$conn = new mysqli($servername, $username, $password, $dbname);

//check connection
if($conn->connect_error)
{
	die("Connection failed: " . $conn->connect_error);
}
//Connected Successfully;
$query = mysqli_query($conn, "SELECT * FROM users WHERE username='$x'");
if(mysqli_num_rows($query) > 0)
{	
	echo '<div class="main">';
	echo '<div class="popUp animate">';
	echo '<p class="textPosition text">Username already Exists!!</p>';
	echo "<a class='retryButton' id='retryBtn'>Retry?</a>";
	echo "</div></div>";
}
else
{
	$sql = "INSERT INTO users (username, email, password) VALUES ('$x','$y','$z')";
	if($conn->query($sql) === TRUE)
	{
		echo "New record created successfully";
		//Sets the session variable to true
		//because the user logged in
		$_SESSION["isUser"] = true;
		//closes Connection
		$conn->close();
		//redirects user
		header("location: Clover-home.html");
	}
	else
	{
		echo "Error: " .$sql . "<br>" . $conn->error;
		//closes Connection
		$conn->close();
	}
}
?>
<script>
	var retryOnclick = document.getElementById('retryBtn');
	retryOnclick.addEventListener("click", () =>
	{
		window.location.href = 'Clover-Register.php';
	});
</script>
</head>
<body>
</body>