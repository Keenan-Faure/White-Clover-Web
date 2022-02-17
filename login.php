<style>
	body
	{
		margin: 0;
		font-family: Arial, Helvetica, sans-serif;
	}
	.main
	{
		background-image: url("Images/13.png");
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
		position: absolute;
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
		width: 50%;
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
	img
	{
		width: 100px;
		height: 100px;
		cursor: pointer;
		position: absolute;
		left: 49%;
		top: 28%;
	}
</style>
<?php
	session_start();
	$x = $_POST["username"];
	$z = $_POST["password"];
	
	//servername
	$servername = "localhost";
	$username = "root";
	$email = "";
	$password = "";
	$dbname = "dbclover";
	
	//creates new connection
	$connection = new mysqli($servername,$username, $password, $dbname);
	
	//checks the connection
	if($connection->connect_error)
	{
		die("Connection failed:" . connection->connect_error);
	}
	
	$query = mysqli_query($connection, "SELECT * FROM users WHERE username='$x' AND password='$z'");
	if(mysqli_num_rows($query) > 0)
	{
		//Then the user has been registered
		header("location: Clover-home.html");
	}
	else
	{
		//incorrect username/password 
		echo "<div class='main'>";
		echo "<div class='popUp animate'>";
		echo "<p class='textPosition text'>Incorrect Username or Password!!</p>";
		echo "<img src='Images/refresh.png' id='retryIco'>";
	}
?>

<script>
	var retryOnClick = document.getElementById('retryIco');
	retryOnClick.addEventListener("click", () =>
	{
		window.location.href = 'Clover-login.php';
	});
</script>
