<html>
<head>
	<style>
		img
		{
			width: 15px;
			height: 15px;
		}
		.error
		{
			color: #FF0000;
		}
	</style>
</head>
<body>

	<?php
		//define variables
		$name = $email = $gender = $comment = $website = "";
		$nameErr = $emailErr = $genderErr = $websiteErr = "";
		
		if($_SERVER["REQUEST_METHOD"] == "POST")
		{
			if(empty($_POST["name"]))
			{
				$nameErr = "Name is required";
			}
			else
			{
				$name = testInput($_POST["name"]);
				//checks if its a valid name
				if(!preg_match("/^[a-zA-Z-' ]*$/", $name))
				{
					$nameErr = "Only letters and white spaces allowed";
				}
			}
			if(empty($_POST["email"]))
			{
				$emailErr = "email is required";
			}
			else
			{
				$email = testInput($_POST["email"]);
				//checks if its a valid email address
				if(!filter_var($email, FILTER_VALIDATE_EMAIL))
				{
					$emailErr = "Invalid email format";
				}
			}
			if(empty($_POST["website"]))
			{
				$websiteErr = "website is required";
			}
			else
			{
				$website = testInput($_POST["website"]);
				//checks if its a valid URL address
				if(!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[a-z0-9+&@#\/%?=~_|!:,.;]*[a-z0-9+&@#\/%=~_|]/i",$website))
				{
					$websiteErr = "Invalid URL";
				}
			}
			if(empty($_POST["gender"]))
			{
				$genderErr = "gender is required";
			}
			else
			{
				$gender = testInput($_POST["gender"]);
			}
		}
		function testInput($data)
		{
			$data = trim($data);
			$data = stripslashes($data);
			$data = htmlspecialchars($data);
			return $data;
		}
	?>
	<p><span class = "error"><img src = "Nonsense/images.jif"> required field</span></p>
	<form method="post" action = "<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">
		Name: <input type="text" name="name">
		<span class = "error">*<?php echo $nameErr; ?></span>
		<br><br>
		Email: <input type="email" name="email" value="<?php echo $name;?>">
		<span class = "error">*<?php echo $emailErr; ?></span>
		<br><br>
		Website: <input type="text" name="website" value="<?php echo$website; ?>">
		<span class = "error">*<?php echo $websiteErr; ?></span>
		<br><br>
		Comment: <textarea name="comment" rows="5" columns="40"><?php echo comment;?></textarea>
		<br><br>
		Gender:
		<input type="radio" <?php if(isset($gender) && $gender == "female") echo "checked";?> value="female" name="gender">Female
		<input type="radio" <?php if(isset($gender) && gender == "male") echo "checked"; ?> value = "male" name="gender">Male
		<input type="radio" <?php if(isset($gender) &&gender == "other") echo "checked";?> value="other" name="gender">Other
		<span class = "error">* <?php echo $genderErr; ?></span>
		<br><br>
		<input type="submit">
	</form>
</body>
</html>