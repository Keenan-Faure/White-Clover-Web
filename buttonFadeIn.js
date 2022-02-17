/* buttonFadeIn */

/* gets variables */
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let button4 = document.querySelector('.button4');
let button5 = document.querySelector('.button5');

/* adds fadeIn effect at a 0.1s gap between each button*/
setTimeout(() =>
{
	button1.style.animation = 'buttonSlide 1s ease-in forwards';
},6000);

setTimeout(() =>
{
	button2.style.animation = 'buttonSlide 1s ease-in forwards';
},6100);

setTimeout(() =>
{
	button3.style.animation = 'buttonSlide 1s ease-in forwards';
},6200);

setTimeout(() =>
{
	button4.style.animation = 'buttonSlide 1s ease-in forwards';
},6300);

setTimeout(() =>
{
	button5.style.animation = 'buttonSlide 1s ease-in forwards';
},6400);

