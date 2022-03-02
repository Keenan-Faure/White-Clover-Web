/* Written by Keenan.F */
/* Splash Screen */
/* Consists of Four(4) splash screen. Breakdown:
	First: Ok.
	Second: Ok, but problems with loading with bad internet. Solution: tried to increase time, failed.
	Third: Ok. 
	Fourth: Ok. Fade-out works.
*/

/* Total time the splash screen will take is 6 seconds */
/* the times of each setTimeout method should add up to 6 seconds */

//Global variables
let Splash1 = null;
let Splash2 = null;
/***********First***********/
/* White Clover Website, black splash screen */
const splash0 = document.querySelector('.splash0');
window.addEventListener('load', (event) =>
{
	setTimeout(() =>
	{
		splash0.classList.add('display-none');
		
		
	},1200); /* 1 second */
	/***********Second***********/
	/*Creating second splash screen*/

	setTimeout(() => 
	//Timeout to start this div after the previous SplashScreen is done (took me > 5 days to figure this out btw)
	{
		//Create the div
		Splash1 = document.createElement("div");
		Splash1.className = 'splash1';
		Splash1.id = 'splsh';

		//Create the image
		var imge = document.createElement("img");
		imge.src = 'Images/logo.jpg';
		imge.className = 'fade-in';
		
		/*
		imge.style.width = "1280px";
		imge.style.height = "720px";
		*/
		
		Splash1.appendChild(imge);
		document.body.appendChild(Splash1);
	
	},1550);

	/* Tera logo splash screen */
	/*PROBLEM -> document.addEventListener dont run inside a setTimeout method because of parameter 'DOMContentLoaded' SOLUTION -> Just dont use that method .-.*/
	setTimeout(() =>
	{
		Splash1 = document.querySelector('.splash1');
		Splash1.style.animation = "fadeOut 0.5s ease-out forwards";
		setTimeout(()=>
		{
			Splash1.classList.add('display-none');
		},1000) /* 1 second */
	},2550); /* 2.501 seconds after the first splash screen is done initializing */

	/***********Third***********/
	/* Tera guildies splash screen */
	
	setTimeout(() =>
	{
		//Create div
		Splash2 = document.createElement('div');
		Splash2.className = 'splash';
		Splash2.id = 'splshLast';
	
		//Create Image
		img = document.createElement("img");
		img.src = "Images/backgroundImage2.jpg";
		
		/*
		img.style.width = "1280px";
		img.style.height = "720px";
		*/
		
		img.className = 'fade-in';
		Splash2.appendChild(img);
		document.body.appendChild(Splash2);
	
	},2850);
	setTimeout(() =>
	{
		Splash2 = document.querySelector('.splash');
		Splash2.style.animation = "fadeOut 0.5s ease-out forwards";
		setTimeout(() =>
		{
			Splash2.classList.add('display-none');
		},1000); /* 1 seconds */
	},4250) /* 3.5 seconds */


	/***********Final***********/
	/* The splash background should fade-out once all of the 2 splash screens are completely loaded 
	Try adding the animation -> look at splash0 as an example and try to get the animation inside this script*/
	const splashBackground = document.querySelector('.splashBackground');
	setTimeout(() =>
	{
		splashBackground.style.animation = "fadeOut 1s ease-out forwards";
	},5000);
	setTimeout(() =>
	{
		splashBackground.classList.add('display-none');
	},6000);
});

setTimeout(() => 
{
	console.log("After 3.1 seconds i am printed");
},3100)
