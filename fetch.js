fetch("/MemberSlideList.txt").then(response =>
{
	console.log("Status: " + response.status);
	console.log("Content-Type: " + response.headers.get("Content-Type"));

});

console.log("Content of the response is as follows:");

fetch("/MemberSlideList.txt").then(response => response.text()).then(text => console.log(text));