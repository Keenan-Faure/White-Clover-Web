const home = document.querySelector('.sideBarGuildLogo');
if(home == null)
{
	console.log("Dont exist");
}
else
{
	home.addEventListener("click", () =>
	{
		window.location.href = "Clover-home.html";
	});
	
}