/*** Modal Login ***/

//get the modal
var modal = document.getElementById("id01");

//When the user clicks anywhere outisde of the modal, close it
window.onclick = function(event)
{
	if(event.target == modal)
	{
		modal.style.display = "none";
	}
}

//End of script