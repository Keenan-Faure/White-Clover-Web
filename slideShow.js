/* Function for the SlideShow */

var slideIndex = 0;

function showSlides()
{
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for(i = 0; i < slides.length; ++i)
	{
		slides[i].style.display = "none";
	}
	++ slideIndex;
	if(slideIndex > slides.length)
	{
		slideIndex = 1;
	}
	slides[slideIndex - 1].style.display = "block";
	setTimeout(showSlides, 2500); // change image every 2 seconds 
}

showSlides();

/* End of Function*/


/* Problem is that when using the class of f-effect together with the slideShowContainer and removing the splash screens it works fine
   just when adding the animation it doesnt work anymore. Check how it was done inside splashScreenOther.js, try to use it with the class
   if it doesnt work anyother way, there should be a method though */
let ssButton = document.getElementById('sS');
let slider = document.querySelector('.slideShowContainer');
ssButton.addEventListener("click", (event) =>
{
	//try to create slideShow here after the button is clicked
	//create slideShowContainer
	slider.style.animation = "fEffect 1s ease-in forwards";
	slider.classList.add('N');
});

setTimeout(()=>
{
	console.log(document.querySelector(".slideShowContainer"));
	
},10000);