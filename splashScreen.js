const splash = document.querySelector('.splash');
window.addEventListener('load', (event) =>
{
	setTimeout(() =>
	{
		splash.classList.add('display-none');
	},1500); /* three seconds */
});