<html>
	<head>
	<link rel="icon" href="Logo/wtcl.ico" type="image/ico">
	<meta name = "viewport" content = "width = device-width, initial-scale = 1">
		<style>
			body
			{
				margin: 0;
				font-family: Arial, Helvetica, sans-serif;
			}
			.splash
			{
				position: fixed; /* so that the user cant scroll, or pass by the screen */
				top: 0%;
				left: 0%;
				width: 100%;
				height: 100%; /* 100% */
				background: black;
				z-index: 200; /* infront of everything else */
				color: white;
				font-family: 'Times New Roman', serif;
				text-align: center;
				line-height: 90vh;
			}
			.splash.display-none
			{
				position: fixed; /* so that the user cant scroll, or pass by the screen */
				top: 0;
				left: 0;
				opacity: 0;
				width: 100%;
				height: 100%; /* 100% */
				background: black;
				z-index: -10; /* behind everything else */
				transition: all 0.5s;
			}
			@keyframes fadeIn
			{
				to
				{
					opacity: 1;
				}
			}
			.fade-in 
			{
				opacity: 0;
				animation: fadeIn 1s ease-in forwards; /* forwards retains the final keyframe, sets the text to an opacity of 1 */
			}
			.backgroundImage
			{
				background-image: url("Images/11.png");
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
				position: relative;
				height: 977;
				width: 1880px;
				margin: 0;
			}
			/*** Modal form ***/
			/* Model Button */
			.modalButton
			{
				background-color: #e3bf3c;
				border-radius: 7px;
				color: white;
				padding: 14px 20px;
				border: none;
				cursor: pointer;
				margin: 8px 0px;
			}
			.modalButton:hover
			{
				background-color: #f2e807;
				transition-duration: 0.4s;
			}
			/* Cancel button */
			.cancelButton
			{
				width: auto;
				cursor: pointer;
				padding: 10px 18px;
				background-color: #f44336; /* red */
			}
			/* Center the image and postion the close button */
			.imgContainer
			{
				text-align: center;
				margin: 24px 0px 12px 0px;
				position: relative;
			}
			img.avatar
			{
				width: 60%;
				border-radius: 50%;
			}
			.container
			{
				padding: 16px;
			}
			span.psw
			{
				float: right;
				padding-top: 16px;
			}
			/* The Modal (background) */
			.modal
			{
				display: none; /* hidden by default */
				position: fixed; /* Stay in Place */
				z-index: 1; /* Sit on top */
				left: 0;
				top: 0;
				width: 100%; /* Full width */
				height: 100%; /* Full height */
				overflow: auto; /* Enable scroll if needed */
				background-color: rgb(0,0,0); /* Fallback color */
				background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
				padding-top: 60px;
			}
			/* Modal Content */
			.modalContent
			{
				background-color: #fefefe;
				opacity: 0.9;
				margin: 5% auto 15% auto; /* 5% from the top, 15%  from the buttom and centered */
				border: 1px solid #a49d9d;
				width: 27%; /* Could be more or less, depending on the screen size */
			}
			/* The close button */
			.close
			{
				position: absolute;
				right: 25px;
				top: 0;
				color: #000;
				font-size: 35px;
				font-weight: bold;
			}
			.close:hover, .close:focus
			{
				color: red;
				cursor: pointer;	
			}
			/* Add Zoom animation */
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
			
			/* Change style for span and cancel button on extra small screens */
			@media screen and (max-width: 300px)
			{
				span.psw
				{
					display:block;
					float: none;
				}
				.cancelButton
				{
					width: 100%;
				}
			}
			/*** Login ***/
			/* Container that holds the login form */
			.loginContainer
			{
				position: absolute;
				height: 300px;
				width: 280px;
				top: 10%;
				left: 50%;
				padding: 16px;
				opacity: 1;
			}
			.loginContainer:hover
			{
				opacity: 1;
			}
			/* Login button */
			.buttonLogin
			{
				background-color: #cca246;
				color: black;
				padding: 16px 20px;
				border: none;
				cursor: pointer;
				width: 100%;
			}
			/* Full width input fields */
			input[type=text], input[type=password], input[type=email]
			{
				width: 100%;
               	display: inline-block;
				border: 1px solid #ccc;
				background-color: #f1f1f1;
				margin: 8px 0;
				padding: 12px 20px;
                box-sizing: border-box;
			}
			input[type=text]:focus, input[type=password]:focus input[type=email]:focus
			{
				background-color: #ddd;
				outline: none;
				opacity: 1;
			}
			
			.teraIcon
			{
				background-position: center;
				position: relative;
				height: 50px;
				width: 50px;
				background-image: url("Images/icon.ico");
				background-repeat: no-repeat;
				background-size: cover;
				display: block;
			}
			/*** Top iconBar ***/
			.sideBarContainer
			{
				position: relative;
				background-image: url("Images/7.png");
				background-color: black;
				background-position: center;
				height: 60px;
				background-size: cover;
				top: 0%;
			}
			.sideBarContainer:hover
			{
				background-image: url("backgroundImage1.png");
				width: 1880px;
				height: 60px;
				transition-duration: 0.4s;
			}
			/* Sidebar text */
			/* change font sizes depending on the type of message displayed, dont keep them the same size */
            .sideBarTextLogo 
			{
                font-size: 15px;
                font-family: 'Times New Roman', serif;
                color: #000000;
                left: 54%;
				top: 11px;
				position: absolute;
            }
            .sideBarTextLogo:hover 
			{
                color: #cacadc;
            }
            .sideBarTextLevel
			{
                font-size: 15px;
                font-family: 'Times New Roman', serif;
                color: #000000;
                top: 8px;
				left: 35%;
				position: absolute;
            }
            .sideBarTextLevel:hover
            {
				color: #cacadc;
            }
            .sideBarTextSize 
            {
                font-size: 8px;
                font-family: 'Times New Roman', serif;
                color: #000000;
                top: 11px;
                left: 40%;
                position: absolute;
            }
			.sideBarTextSize:hover
			{
				color: #cacadc;
			}
            .sideBarTextMembers 
			{
                font-size: 15px;
                font-family: 'Times New Roman', serif;
                color: #000000;
				top: 0px;
				left: 20%;
				position: absolute;
            }
			.sideBarTextMembers:hover
			{
				color: #cacadc;
			}
            .sideBarTextGM 
			{
                font-size: 15px;
                font-family: 'Times New Roman', serif;
				top: -5px;
				left: 70%;
                color: #000000;
				position: absolute;
            }
			.sideBarTextGM:hover
			{
				color: #cacadc;
			}

			/* Sidebar guilds logo */
            .sideBarGuildLogo 
			{
               	background-image: url("Images/WhiteClover.bmp");
                background-position: center;
               	position: relative;
                background-repeat: no-repeat;
                background-size: cover;
                height: 55px;
           		width: 55px;
                border: 2px solid #9eb7c1;
                left: 50%;
				top: -50px;
				cursor: pointer;
				border: 2px solid #9eb7c1;
				transition-duration: 0.75s;
            }
			.sideBarGuildLogo:hover
			{
				background-image: url("Images/WhiteClover2.bmp");
			}
			
		</style>
	</head>
	
	<body>
		<div class="splash">
			<h1 class="fade-in">Login Page</h1>
		</div>
		<div class="backgroundImage">
			<div class = "sideBarContainer">
				<a class = "teraIcon" href = "https://gameforge.com/en-US/play/tera" title = "tera Icon" id = "Icon"></a>
				<div class = "sideBarGuildLogo"></div>
				<h1 class = "sideBarTextLogo">White Clover</h1>
				<h2 class = "sideBarTextLevel">Guild Lv.252</h2>
				<h3 class = "sideBarTextMembers">Members:<br /> 88 / 100</h3>
				<h4 class = "sideBarTextGM">Guild Master:<br>Keenan.F</h4>
			</div>
			<div class="loginContainer">
			<button class="modalButton" onclick="document.getElementById('id02').style.display='block';" style="width: auto;">Login</button>
			<div class="modal" id='id02'>
				<form class = "modalContent animate" action="login.php" method = "post">
					<div class = "imgContainer">
						<span onclick = "document.getElementById('id02').style.display = 'none'" class = "close" title = "Close"> &times; </span>
						<img src = "Images/logo.jpg" alt = "Avatar" class = "avatar">
					</div>
					<div class = "container">
						<label for="uname"><b>Username</b></label>
						<input type="text" placeholder="Enter Username" name="username" required>
						
						<label for="psw"><b>Password</b></label>
						<input type="password" placeholder="Enter Password" name="password" required>
						
						<button class="modalButton" type="submit">Login</button>
						<label>
							<input type="checkbox" checked="checked" name="remember"> Remember me
						</label>
					</div>
					<div class = "container" style = "background-color: #f1f1f1">
						<button type = "button" onclick = "document.getElementById('id02').style.display = 'none'" class = "cancelButton">Cancel</button>
						<span class = "psw">Forgot <a href = "#">password?</a></span> 
					</div>
				</form>
			
			</div>
			</div>
		</div>
		
		<script src = "modalLogin.js"></script>
		<script src = "splashScreen.js"></script>
		<script src = "returnHome2.js"></script>
	</body>
	
<html>