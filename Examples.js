

let clsBtn = document.getElementById("latom");
clsBtn.addEventListener("mousedown", (event) =>
{
	console.log("handler for close Button");
	if(event.button == 0) 
	{ 
		event.stopPropagation(); 
		let achievementContainer = document.getElementById("clicked2");
		achievementContainer.style.display = "none";
	}
});
