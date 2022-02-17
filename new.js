/*
var userName;
var userNumber;
var userPassword;
const security = function(name = "undefined",number = 9999,password = "unknown")
{
	if(userName == "Keenan" && userNumber == 1104 && userPassword == "Clover")
	{
		console.log("Success, correct credentials and passwords");
		return true;
	}
	else
	{
		console.log("Incorrect password and credentials, Please try again");
	}
	return false;
}

const getInfo = function()
{
	username = "";
	usernumber = "";
	userpassword = "";
	console.log("You will be asked to enter your name, number and password promptly");
	username = String(prompt("Please enter your name:"));
	while(username == "")
	{
		username = String(prompt("Please enter your name:"));
	}
	usernumber = Number(prompt("Please enter your number in White Clover:"));
	while(usernumber == "")
	{
		usernumber = Number(prompt("Please enter your number in White Clover:"));
	}	
	userpassword = String(prompt("Please enter the password"));
	while(userpassword == "")
	{
		userpassword = String(prompt("Please enter the password"));	
	}
	userName = username;
	userPassword = userpassword;
	userNumber = usernumber;
	//console.log("You have entered:\nName: " + userName + "\nNumber: " + userNumber + "\nPassword: " + userpassword);
	return "Please wait a while...";
}

const newAccount = () =>
{
	let answer = String(prompt("Do you want to use the credentials that you loggin in with?\nPlease answer 'Yes' or 'No.'"));
	if(answer == "Yes")
	{
		console.log("You will now proceed to the FINAL check, Please verify if the following are correct:");
		console.log(details());
		answer = String(prompt("Are those credentials correct?\n Please answer 'Yes' or 'No'"));
		if(answer == "Yes")
		{
			console.log("You have successfully created an account!");
			console.log("Now returning to the home screen...");
			return "Success";
		}
		else
		{
			console.log("We will allow you to re-do them");
			getInfo();
			newAccount();
		}
	}
	else	
	{
		console.log("We will know ask your details with which to create the new account...");
		getInfo();
		newAccount();
	}
}
const details = function()
{
	return "Username: " + userName + "\nUsernumber: " + userNumber;
}
console.log(getInfo());
console.log(security(userName,userNumber,userPassword));
console.log(newAccount());

*/

/*function that returns the minimum of two numbers*/
/*

const minimum = function(a,b)
{
	if(a < b)
	{
		return a;
	}
	return b;
}
*/

/*function that checks if a given number is even or odd*/
/*
const isEven = function(a)
{
	if(a == 0)
	{
		return true;
	}
	else if(a == 1)
	{
		return false;
	}
	else
	{
		return(isEven(a-2));
	}
}
*/

/* Sum of a range*/

/*
const range = function(start, end, step = 1)
{
	if(start < end)
	{
		let anArray = [];
		for(let i = start; i <= end; i = i + (step))
		{
			anArray.push(i);
		}
		return anArray;
	}
	else
	{
		let anArray = [];
		for(let i = start; i >= end; i = i + (step))
		{
			anArray.push(i);
		}
		return anArray;
	}
}

const sum = function(anArray)
{
	let result = 0;
	for(let i = 0; i < anArray.length; ++i)
	{
		result = result + anArray[i];
	}
	return result;	
}
//console.log(range(5,2,-1));
//console.log(range(0,10,2).reverse());
*/
/* Reverse Array*/
/*
const reverse = function(anArray)
{
	let array = [];
	console.log(anArray.length);
	for(let i = (anArray.length - 1); i >= 0; -- i)
	{
		array.push(anArray[i]);
	}
	return array;
}
const reverseInOrder = function(anArray)
{
	for(let i = 0, j = anArray.length - 1; i < j; ++ i, -- j)
	{
		let temp = anArray[i];
		anArray[i] = anArray[j];
		anArray[j] = temp;
	}	
}
//console.log(reverse(range(0,10,2)));
*/
/* listToArray | arrayToList*/
/*
const arrayToList = function(anArray, length)
{
	let head;
	let value;
	if(length == 1)
	{

		return {value: anArray[0], head: null};	
	}
	else
	{
		let length = anArray.length - 1;
		return {value: anArray[0], head: arrayToList(anArray.slice(1), length)};
	}
}
const listToArray = function(anArray)
{
	let head;
	let value;
	let array = [];
	while(anArray.head != null)
	{	
		array.push(anArray.value);
		anArray = anArray.head;
	}
	array.push(anArray.value);
	return array;	
}
list = arrayToList(range(0,10,2),(range(0,10,2)).length);
console.log(list);
console.log(listToArray(list));

let person = {name: "Keenan", age: 18};
const po = function(object, test)
{
	if(test(object) == 18)
	{
		return("You got the age");
	}
}
//console.log(po(person,age => person.age));
*/
/* Flattening */
/*
let anArray = [1,[2,3],4,[5,6,7,8],9,10,[11,12,"SawamuraEijun"],"Keenan"];
array1 = [1,2];
array2 = [3,4];
function combine(anArray, anArray2)
{
	answer = String(anArray.concat(anArray2));
	return String(answer);	
}
console.log("Combine method: " + typeof(combine(array1,array2)));
console.log("Contatenate method: " + typeof(String(array1.concat(array2))));
const flatten = function(anArray)
{
	for(let i = 0; i < anArray.length; ++ i)
	{
		if(anArray[i].length > 1)
		{
			let sum = [];
			let item = sum.concat(anArray[i]);
			anArray[i] = item.reduce(combine,0);
		}
	}
	return anArray;
}
console.log(flatten(anArray));
*/

/*
class robinHood
{
	constructor(name, arrow, amount)
	{
		this.name = name;
		this.arrow = arrow;
		this.amount = amount;
	}
	getName()
	{
		return this.name;
	}
	getAmount()
	{
		return this.amount;
	}
	getArrow()
	{
		return this.arrow;
	}
	catchPhrase(phrase)
	{
		return phrase;	
	}
}	
let greenArrow = new robinHood("Keenan","greenArrow",5);
console.log("My name is: " + greenArrow.getName() + ". I have " + greenArrow.getAmount() + " " + greenArrow.getArrow() + ". My catch phrase is: " + greenArrow.catchPhrase("Fire away"));
*/

/* Robot project */
/*
const roads = ["Alice's House-Bob's House", "Alice's House-Cabin",
"Alice's House-Post Office", "Bob's House-Town Hall","Daria's House-Ernie's House", "Daria's House-Town Hall",
"Ernie's House-Grete's House", "Grete's House-Farm","Grete's House-Shop", "Marketplace-Farm","Marketplace-Post Office", "Marketplace-Shop",
"Marketplace-Town Hall", "Shop-Town Hall"];

function buildGraph(edges)
{
	let graph = Object.create(null);
	function addEdge(from, to)
	{
		if(graph[from] == null)
		{
			graph[from] = [to];
		}
		else
		{
			graph[from].push(to);
		}
	}
	for(let [from,to] of edges.map(r => r.split("-")))
	{
		addEdge(from, to);
		addEdge(to, from);
	}
	return graph;
}
const roadGraph = buildGraph(roads);

class VillageState
{
	constructor(place, parcels)
	{
		this.place = place;
		this.parcels = parcels;
	}
	move(destination)
	{
		if(!roadGraph[this.place].includes(destination))
		{
			return this;
		}
		else
		{
			let parcels = this.parcels.map(p => 
			{
				if(p.place != this.place)
				{
					return p;
				}
				return {place: destination, address: p.address};
			}).filter(p => p.place != p.address);
			return new VillageState(destination, parcels);
		}
	}
}
*/

/* Exceptions */


/* Regular expressions */
/*
let word = String(prompt("Enter a word: "));
function expression(string)
{
	return "/" + string + "/";
}
console.log(expression(word));
//let dateTime = /\d{1,2} - \d{1,2} - \d{4} - \d{1,2} : \d{2}/;
function dateConvert(string)
{
	let[_, month, day, year] = /(\d{1,2} - \d{1,2} - \d{4}/.exec(string);
	return newDate(year, month - 1, day);	
}
let tester = /'([^']*')/
console.log(tester.exec("Keenan has a 'doggy'"));
console.log(/\d+/.exec("one two 100"));
*/

/* Asynchronous Programming */
/*
setTimeout(() => console.log("Tick"), 500);

import { bigOak } from "./crow-tech";
bigOak.readStorage("food cache", cache =>
{
	let firstCache = cache[0];
	bigOak.readStorage(firstCache, info =>
	{
		console.log(info);
	});
});

bigOak.send("Cow pasture", "note", "Lets caw loudly at 7PM", () => console.log("Note Delivered"));

import { defineRequestType } from "./crow-tech";
defineRequestType("note", (nest, content, source, done) =>
{
	console.log(nest.name + "recieved note: " + content);
	done();
});

//Promises
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log("Got: " + value));

function storage(nest, name)
{
	return new Promise(resolve =>
	{
		nest.readStorage(name, result => resolve.result);
	});
}

storage(bigOak, "enemies").then(value => console.log("Got: " + value));

requestType("connections", (nest, {name, neightbors},source =>
{
	let connections = nest.state.connections;
	if(JSON.stringify(connectons.get(name)) == JSON.stringify(neighbors))
	{
		return;
	}
	connections.set(name, neightbors);
	broadcaseConnections(nest,name,source);
});

function broadcastConnections(nest, name, exceptFor = null)
{
	for(let neighbor of nest.neighbors)
	{
		if(neighbor == exceptFor)
		{
			continue;
		}	
		request(nest, neighbor, "connections", {name, neighbors: nest.state.connections.get(name)});
	}
}	

everywhere(nest => 
{
	nest.state.connections = new Map();
	nest.state.connections.set(nest.name, nest.neighbors);
	broadcastConnections(nest, nest.name);
});

function findRoute(from, to, connections)
{
	let work = [{at: from, via null}];
	for(let i = 0; i < work.length, ++i)
	{
		let {at, via} = work[i];
		for(let next of connections.get(at) || [])
		{
			if(next == to)
			{
				return via;
			}
			if(!work.some(w => w.at == next))
			{
				work.push({at: next, via: via || next});
			}
		}
	}
	return null;
}

function routeRequest(nest, target, type, content)
{
	if(nest.neighbors.includes(target))
	{
		return request(nest, target, type, content);
	}
	else
	{
		let via = findRoute(next.name, target, nest.state.connections);
		if(!via)
		{
			throw new Error("No route to: " + target);
		}
		return request(nest, via, "route", {target, type, content});
	}
}
requestType("storage", (nest, name) => storage(nest, name));

function findInStorage(nest, name)
{
	return storage(nest, name).then(found =>
	{
		if(found != null)
		{
			return found;
		}
		else
		{
			return findInRemoteStorage(nest, name);
		}	
	});
}
function network(nest)
{
	return Array.from(nest.state.connections.keys());
}

function findInRemoteStorage(nest, name)
{
	let sources = network(nest).filer(n => n!= nest.name);
	function next()
	{
		if(sources.length == 0)
		{
			return Promise.reject(new Error("not found"));
		}
		else
		{
			let source = sources[Math.floor(Math.random() * sources.length)];
			sources = sources.filter(n => n != source);
			return routeRequest(nest, source, "storage", name).then(value => value != null ? vlaue : next(), next);
		}
	}
	return next();
}

async function findInStorage(nest, name)
{
	let local = await storage(nest, name);
	if(local != null)
	{
		return local;
	}
	let sources = network(nest).filter(n => n != nest.name);
	while(sources.length > 0)
	{
		let source = sources[Math.floor(Math.random() * sources.length)];
		try
		{
			let found =await routeRequest(nest, source, "storage", name);
			if(found != null)
			{
				return found;
			}
		}
		catch(_)
		{

		}
	}
	throw new Error("Not Found");

}
*/
/* A programming language */
/*
{
	type: "apply",
	operator: {type: "word", name: ">"},
	args: 
	[
		{type: "word", name: "x"},
		{type: "value", value: 5}
	]
	
}
/*
//checks if a given program is a digit, text, whitespace...etc
function parseExpression(program)
{
	program = skipSpace(program);
	let match, expr;
	if(match = /^"([^"]*)"/.exec(program))
	{
		expr = {type: "value", value: match[1]};
	}
	else if(match = /^\d+\b/.exec(program))
	{
		expr = {type: "value", value: Number(match[0])};
	}
	else if(match = /^[^\s(),#"]+/.exec(program))
	{
		expr = {type: "word", name: match[0]};
	}
	else
	{
		throw new SyntaxError("Unexpected syntax: " + program);
	}
	return parseApply(expr, program.slice(match[0].length));
}

//if its a white space we cut it off from the program.
function skipSpace(string)
{
	let first = string.search(/\S/);
	if(first == -1)
	{
		return string.slice(first);
	}
}

function parseApply(expr, program)
{
	program = skipSpace(program);
	if(program[0] != "(")
	{
		return {expr: expr, rest: program};
	}
	program = skipSpace(program.slice(1));
	expr = {type: "apply", operator: expr, args[]};
	while(program[0] != ")")
	{
		let arg = parseexpression(program);
		expr.args.push(arg.expr);
		program = skipSpace(arg.rest);
		if(program[0] == ",")
		{
			program = skipSpace(program.slice(1));
		}
		else if(program[0] != ")")
		{
			throw new SyntaxError("expected ',' or')'");
		}
	}
	return parseApply(expr, program.slice(1));
}

function parse(program)
{
	let {expr, rest} = parseExpression(program);
	if(skipSpace(rest.length > 0)
	{
		throw new SyntaxError("Unexpected text after program");
	}
	return expr;
}

const specialForms = Object.create(null);
function evaluate(expr, scope)
{
	if(expr.type == "value")
	{
		return expr.value;
	}
	else if(expr.type == "word")
	{
		if(expr.name in scope)
		{
			return scope[expr.name];
		}
		else
		{
			throw new ReferenceError("Undefined binding: " + {expr.name});	
		}
	}
	else if(expr.type == "apply")
	{
		let {operator, args} = expr;
		if(operator.type == "word" && operator.name in specialForms)
		{
			return specialForms[operator.name](expr.args, scope);
		}
		else
		{
			let op = evaluate(operator, scope);
			if(typeof op == "function")
			{
				return op(...args.map(arg => evauate(arg, scope)));
			}
			else
			{
				throw new TypeError("Applying a non-function.");
			}
		}
	}
}	

specialForms.if = (args, scope) =>
{
	if(args.length != 3)
	{
		throw new SyntaxError("Wrong number of args to if")
	}
	else if(evaluate(args[0], scope) !== false)
	{
		return evaluate(args[1], scope);
	}
	else
	{
		return evaluate(args[2], scope);
	}
};

specialForms.while = (args, scope) =>
{
	if(args.length != 2)
	{
		throw new SyntaxError("Wrong number of args to while");
	}
	while(evaluate(args[0], scope) !=== false)
	{
		evaluate(args[1], scope);
	}
	return false;
};

specialForms.do = (args, scope) =>
{
	let value = false;
	for(let arg of args)
	{
		value = evaluate(arg, scope);
	}
	return value;
};
specialForms.define - (args, scope) =>
{
	if(args.length != 2 || args[0].type != "word")
	{
		throw new SyntaxError("Incorrect use of define");
	}
	let value = evaluate(args[1], scope);
	scope[args[0].name] = value;
	return value;
}
	
const topScope = Object.create(null);
topScope.true = true;
topScope.false = false;

let prog = parse('if(true, false, true)');
console.log(evaluate(prog, topScope));
// -> false

for(let op of ["+", "-", "*", "/", "==", "<", ">"])
{
	topScope[op] = Function("a","b", "return a " + op + b + ";");
}

topScope.print = value =>
{
	console.log(value);
	return value;
}

function run(program)
{
	return evaluate(parse(program), Object.create(topScope));
}

run('
do(define(total,0),
	define(count, 1),
	while(<(count, 11),
		do(define(total, +(total, count)),
			define(count, +(count, 1)));
	print(total));
');
// -> 55

specialForms.fun = (args, scope) =>
{
	if(!agrs.length)
	{
		throw new SyntaxError("Functions need a body");
	}
	let body = args[args.length - 1];
	let params = args.slive(0, args.length - 1).map(expr =>
	{
		if(expr.type !=  "word")
		{
			throw new SyntaxError("Parameters names must be words");
		}
		return expr.name;
	});
	return function()
	{
		if(arguments.length != params.length)
		{
			throw new TypeError("Wrong number of arguments");
		}
		let localScope = Object.create(scope);
		for(let i = 0; i < arguments.length, ++i)
		{
			localScope[params[i]] = arguments[i];
		}
		return evaluate(body, localScope);
	};
};

run('
do(define(plusOne, fun(a, +(a, 1))),
	print(plusOne(10)))
');
// -> 11

run('
do(define(pow, fun(base, exp, 
	if( == (exp, 0),
		1,
		*(base, pow(base, -(exp, 1)))))),
	print(pow(2, 10)))
');
// -> 1024

/*






/* Document Object Model */





/*
function talksAbout(node, string)
{
	if(node.type == Node.ELEMENT_NODE)
	{
		for(let child of node.childNodes)
		{
			if(talksAbout(child, string))
			{
				return true;
			}
		}
		return false;
	}
	else if(node.nodeType == Node.TEXT_NODE)	
	{
		return node.nodeValue.indexOf(string) > -1;
	}
}
*/
/* getElementsByTagName ->  collects all elements with the given tag name that are descendants of that node and returns them as an array-like object */
/* getElementsByClassName ->  searches through the contents of an element node and retrieves all elements that have the given string in their class attribute */
/* getElements ById -> Like getElementsByTagName it is used to find a specific node */

/*

<script>
	let link = document.body.getElementByTagName("a")[0]; // get the first link that appears in the html
	console.log(link.href);
</script>
<script>
	let paragraphs = document.body.getElementsByTagName("p"); //basically paragraphs
	document.body.insertBefore(paragraphs[2], paragraphs[0]);
</script>

<p>The <img src = "img/cat.png" alt = "Cat"> in the <img src = "img/hat.png" alt = "Hat">.</p>

<p><button onclick = "replaceImages()">Replace</button></p>

<script>
// alt returns true if the image shows, and returns false if the image is not shown on the screen
function replaceImages()
{
	let images = document.body.getElementsByTagName("img");
	for(let i = images.length - 1; i >= 0, --i)
	{
		let image = images[i];
		if(image.alt)
		{
			let text = document.createTextNode(image.alt);
			image.parentNode.replaceChild(text, image);
		}
	}
}
</script>

let arrayish = {0: "one", 1: "two, length: 2};
let array = Array.from(arrayish);
console.log(array.map(s => s.toUpperCase()));

<blockquote id = "quote">
	No book can ever be finished...
</blockquote>

<script>
	function elt(type, ...children)
	{
		let node = document.createElement(type);
		for(let child of children)
		{
			if(typeof child != "string")
			{
				node.appendChild(child);
			}
			else
			{
				node.appendChild(document.createTextNode(child));
			}
			return node;
		}
	}
	document.getElementById(quote).appendChild
		(elt("footer","-",elt("strong", "Karl Popper"), ", preface to the second edition of ", elt("em", "The Open Society and its enemies"),",1950"));
</script>


/* If you create your own attributes then there is a method u can use to parse */

/*
<p data-classified = "secret">The lauch code is 00000000.</p>
<p data-classified = "unclassified">I have two feet.</p>

<script>
let paras = document.body.getElementsByTagName("p");
	for(let para of Array.from(paras))
	{
		if(para.getAttribute("data-classified") == "secret")
		{
			para.remove();
		}
	}
</script>


<p style = "border: 3px solid red">
	Im boxed in
</p>

<script>
let para = document.body.getElementsByTagName("p")[0];
console.log("clientHeight: " + para.clientHeight);
console.log("offsetHeight: " + para.offsetHeight);
</script>


*/

/*
<p><span id = "one"></span></p>
<p><span id = "two"></span></p>

<script>
function time(name, action)
{
	let start = Date.now() //Current Time in milliseconds
	action();
	console.log(name + " took " + Date.now() - start + "ms");
}
time("naive", () =>
{
	let target = document.getElementById("one");
	while(target.offsetWidth < 2000)
	{
		target.appendChild(document.createTextNode("X"));
	}
	
});
//-> naive took 32 ms
time("clever", function() 
{
	let target = document.getElementById("two");
	target.appendChild(document.createTextNode("XXXXX"));
	let total = Math.ceil(2000 / (target.offsetWidth / 5));
	target.firstChild.nodeValue = "X".reapeat(total);
});
// -> clever took 1 ms
</script>


<p id = "para" style = "color: purple">
	Nice text
</p>
<script>
	let para = document.getElementById("para");
	console.log(para.style.color);
	para.style.color = "magneta";
</script>

<style>
	strong
	{
		font-style: italic;
		color: grey;
	}
</style>
<p>Now <strong> Strong text</strong> is italic and grey.</p>

.subtle
{
	color: grey;
	font-size: 80%;
}
#header
{
	background: blue;
	color: white;
}
/* p elements with id main and with classes a and b */

/*
p#main.a.b
{
	margin-bottom: 20px;
}
/*
The notation p > a …{} applies the given styles to all <a> tags that are direct
children of <p> tags. Similarly, p a …{} applies to all <a> tags inside <p> tags,
whether they are direct or indirect children.

The querySelectorAll method, which is defined both on the document object
and on element nodes, takes a selector string and returns a NodeList containing
all the elements that it matches
*/
/*
<p>And if u go chasing 
	<span class = "animal">rabbits</span></p>
<p>And you kno you're going to fall</p>
<p>Tell 'em a <span class = "character">hookah smoking 
	<span class = "animal"> caterpillar</span></span></p>
<p>Has given you the call</p>

<script>
	function count(selector)
	{	
		return document.querySelectorAll(selector).length;
	}
	console.log(count("p")); // All <p> elements
	// -> 4
	console.log(count(".animal")); // Class animal
	// -> 2
	console.log(count("p .animal")); // animal inside of <p>
	// -> 2
	console.log(count("p > .animal")); // Direct child of <p>
	// -> 1
</script>

/*

The querySelector method (without the All part) works in a similar way.
This one is useful if you want a specific, single element. It will return only the
first matching element or null when no element matches.

*/
/*
<p style = "text-align: center">
	<img src = "img/cat.png" style = "position: relative">
</p>

<script>

let cat = document.querySelector("img);
let angle = Math.PI / 2;

function animate(time, lastTime)
{
	if(lastTime != null)
	{
		angle += (time - lastTime) * 0.001;
	}
	cat.style.top = (Math.sin(angle) * 20) + "px";
	cat.style.left = (math.cos(angle) * 200) + "px";
	requestAnimationFrame(newTime => animate(newTime, time));
}
requestAnimationFrame(animate);
</script>

<p> Click this document to activate the handler </p>
<script>
	window.addEventListener("click", () => 
	{
		console.log("you knocked?");
	});
</script>

/*
The window binding refers to a built-in object provided by the browser
*/
/*
<button>Click me</button>
<p>No handler here.</p>
<script>
let button = document.querySelector("button");
button.addEventListener("click", () =>
{
	console.log("Button clicked");	
});

</script>

<button>Act-once button</button>
<script>
let button = document.querySelector("button");
function once()
{
	console.log("Done");
	button.removeEventListener("click", once);
}
button.addEventListender("click", once);
</script>

<button>CLick me anyway you like</button>
<script>
let button = document.querySelector("button");
button.addEventListener("mousedown", event =>
{
	if(event.button == 0)
	{
		console.log("left button");
	}
	else if(event.button == 1)
	{
		console.log("middle button");
	}
	else if(event.button == 2)
	{
		console.log("right button");
	}
	
});
</script>

<p> A paragraph with a <button>button</button></p>
<script>
let para = document.querySelector("p");
let button = dociment.querySelector("button");
para.addEventListener("mousedown", () =>
{
	console.log("Handler for paragraph.");
});
button.addEventListener("mousedown", event =>
{
	console.log("Handler for button");
	if(event.button == 2)// if the user clicks the right button...
	{
		event.stopPropagation();
	}
});
</script>

<button>A</button>
<button>B</button>
<button>C</button>
<script>
document.body.addEventListener("click", event =>
{
	if(event.target.nodeName == "BUTTON")
	{
		console.log("Clicked " + event.target.textContext);
	}
});
</script>

<a hfre = "https://developer.mozilla.org/">MDN</a>
<script>
let link = document.querySelector("a");
link.addEventListener("click", event =>
{
	console.log("Nope");
	event.preventDefault();
});
</script>

<p> This page turns violet when you hold the V key.</p>
<script>
window.addEventListener("keydown", event =>
{
	if(event.key == "v")
	{
		document.body.style.background = "violet";
	}
});
window.addEventListener("keyup", event =>
{
	if(event.key == "v")
	{
		document.body.style.background = "";
	}
});
</script>

<Press Control-Space to continue.</p>
<script>
window.addEventLisener("keydown", event =>
{
	if(event.key == " " && event.ctrlKey)
	{
		console.log("Continuing!");
	}
});
</script>


<style>
body
{
	height: 200px;
	background: beige;
}
.dot
{
	height: 8px;
	border-radius: 4px;
	background: blue;
	position: absolute;
}
</style>
<script>
window.addEventListener("click", event =>
{
	let dot = document.createElement("div"); //creates a new node, div
	dot.className = "dot";
	dot.style.left = (event.pageX - 4) + "px";
	dot.style.right = (event.pageY - 4) + "px";
	document.body.appendChild(dot); //places the new node into the body of the html
});
</script>


<p> Drag the bar to change its width </p>
<div style = "background: oranhe; width: 60px; height: 20px">
</div>
<script>
	let lastX; // Tracks the last observed mouse X position
	let bar = document.querySelector("div");
	bar.addEventListener("mousedown", event =>
	{
		if(event.button == 0)
		{
			lastX = event.clientX;
			window.addEventListener("mousemove", moved);
			event.preventDefault(); // Prevents selection
		}
	});
	function moved(event)
	{
		if(event.buttons == 0)
		{
			window.removeEventListener("mousemove", moved);
		}
		else
		{
			let dist = event.clientX - lastX;
			let newWidth = Math.max(10, bar.offsetWidth + dist);
			bar.style.width = newWidth + "px";
			lastX = event.clientX;
		}
	}
</script>


<style>
	dot
	{
		position: abolsute;
		display: block;
		border: 2px solid red;	
		border-radius: 50px;
		height: 100px;
		width: 100px;
	}
</style>
<p> Touch this page</p>
<script>
function update(event)
{
	for(let dot, dot = document.querySelector("dot");)
	{
		dot.remove();
	}
	for(let i = 0; i < event.touches.length, ++i)
	{
		let {pageX, pageY} = event.touches[i]; // get the x and y points where the user touched
		let dot = document.createElement("dot");
		dot.style.left = (pageX - 50) + "px";
		dot.style.top = (pageY - 50) + "px";
		document.body.appendChild(dot);
	}
}
window.addEventListener("touchstart", update);
window.addEventListener("touchmove", update);
window.addEventListener("touchend", update);

</script>


<style>
	#progress
	{
		border-bottom: 2px solid blue;
		width: 0;
		position: fixed;
		top: 0;
		left: 0;
	}
</style>

<div id = "progress"></div>
<script>
//Create some content
document.body.appendChild(document.createTextNode("supercalifragilistcdoisos ".repeat(1000)));
let bar = document.querySelector("#progress");
window.addEventListener("scroll", () =>
{
	let max = document.body.scrollHeight - innerHeight;
	bar.style.width = (pageYOffset / max) * 100 + " %";
});
</script>

<p>Name: <input type = "text" data-help = "Your full name"></p>
<p>Age: <input type = "text" data-help = "Your age in years"></p>
<p id = "help"></p>

<script>
	let help = document.querySelector("#help");
	let fields = document.querySelectorAll("input");
	for(let field of Array.frm(fields))
	{
		field.addEventListener("focus", event =>
		{
			let text = event.target.getAttribute("data-help");
			help.textContent = text;
		});
		field.addEventListener("blur", event =>
		{
			help.textContent = "";
		});
	}
</script>


<script>
let squareWorker = new Worker("squareworker.js");
squareWorker.addEventListener("message", event =>
{
	console.log("The worker responded: " + event.data);
});
squareWorker.postMessage(10);
squareWorker.postMessage(24);

</script>

/*** Timer ***/
/*
let bombTimer = setTimeout( () =>
{
	console.log("BOOM!");
}, 500);
if(Math.random() < 0.5) // 50% chance
{
	console.log("Defused.");
	clearTimeout(bombTimer);
}

let ticks = 0;
let clock = setInterval( () =>
{
	console.log("tick " + ticks++);
	if(ticks == 10)
	{
		clearInterval(clock);
		console.log("stop.");
	}
}, 200);

/*** Timer ***/
/*
<textarea>Type something here... <textarea>
<script>
	let textarea = document.querySelector("textarea");
	let timeout;
	textarea.addEventListener("input", () =>
	{
		clearTimeout(timeout);
		timeout = setTimeout( () => console.log("Typed!"), 500);
	});
</script>


<script>
	let scheduled = null;
	window.addEventListener("mousemove", event =>
	{
		if(!scheduled)
		{
			setTimeout( () =>
			{
				document.body.textContent = "Mouse at " + scheduled.pageX + " " + scheduled.pageY);
				scheduled = null;
			}, 250);
		}
		scheduled = event;	
	});
</script>
/*** Project: a Platform Game ***/
/*
class Level
{
	constructor(plan)
	{
		let rows = plan.trim().split("\n").map(l => [...l]);
		this.height = rows.length;
		this.width = rows[0].length;
		this.startActors = [];

		this.rows = rows.map((row, y) =>
		{
			return row.map((ch, x) =>
			{
				let type = levelChars[ch];
				if(typeof type == "string")
				{
					return type;
				}
				this.startActors.push(type.create(new Vec(x,y), ch));
				return "empty";
			});	
		});
	}
}

class State
{
	constructor(level, actors, status)
	{
		this.level = level;
		this.status = status;
		this.actors = actors;
	}
	static start(level)
	{
		return new State(level, level.startActors, "playing");
	}
	get player()
	{
		return this.actors.find(a => a.type == "player");
	}
}

class Vec
{
	constructor(x, y)
	{
		this.x = x;
		this.y =y;
	}
	plus(other)
	{
		return new Vec(this.x + other.x, this.y + other.y);
	}
	times(factor)
	{
		return new Vec(this.x * factor, this.y * factor);
	}
}

class Player
{
	constructor(pos, speed)
	{
		this.pos = pos; 
		this.speed = speed;
	}
	get type()
	{
		return "player";	
	}
	static create(pos)
	{
		return new Player(pos.plus(new Vec(0, -0.5)), new Vec(0, 0));
	}
}
Player.prototype.size = new Vec(0.8, 1.5);

class Lava
{
	constructor(pos, speed, reset)
	{
		this.pos = pos; 
		this.speed = speed;
		this.reset = reset;
	}
	get type()
	{
		return "lava";
	}
	static create(pos, ch)
	{
		if(ch == "=")
		{
			return new Lava(pos, new Vec(2,0));
		}
		else if(ch == "|")
		{
			return new Lava(pos, new Vec(0, 2));
		}
		else if(ch == "v")
		{
			return new Lava(pos, new Vec(0, 3), pos);
		}
	}
}

Lava.prototype.size = new Vec(1, 1);

class Coin
{
	constructor(pos, basePos, wobble)
	{
		this.pos = pos; 
		this.basePos = basePos; 	
		this.wobble = wobble;
	}
	get type()
	{
		return "coin";
	}
	static create(pos)
	{
		let basePos = pos.plus(new Vec(0.2, 0.1));
		return new Coin(basePos, basePos, Math.random() * Math.PI * 2);
	}
}

Coin.prototype.size = new Vec(0.6, 0.6);

const levelChars = 
{
	".": "empty",
	"#": "wall",
	"+": "lava",
	"@": "player",
	"o": "Coin",
	"=": "lava",
	"|": "lava",
	"v": "lava"
};

let simpleLevel = new Level(simpleLevelPlan);
console.log(simpleLevel.width + " by " + simpleLevel.height);

function elt(name, attrs, ...children)
{
	let dom = document.createElement(name);
	for(let attr of Object.keys(attrs))
	{
		dom.setAttribute(attr, attrs[attr]);
	}
	for(let child of children)
	{
		dom.appendChild(child);
	}
	return dom;
}

class DOMDisplay
{
	constructor(parent, level)
	{
		this.dom = elt("div", {class: "game"}, drawGrid(level));
		this.actorLayer = null;
		parent.appendChild(this.dom);
	}
	clear()
	{
		this.dom.remove();
	}
}

const scale = 20;

function drawGrid(level)
{
	return elt("table", 
	{
		class: "background",
		style: "width: " + (level.width) * scale + "px"
	},  ...level.rows.map(row =>
	{
		elt("tr", {style: + "height: " + scale + "px"},
			...row.map(type => elt("td", class: type})))
	});
}

/**CSS***/
/*
.background
{
	background: rgb(52,166,251);
	table-layout: fixed;
	border-spacing: 0;
}
.background td
{
	padding: 0;
}
.lava
{
	background: rgb(255,100,100);
}
.wall
{
	background: white;
}

/***/
/*
function drawActors(actors)
{
	return elt("div", {}, ...actions.map(actors =>
	{
		let rect = elt("div", {class: "actor " + actor.type}});
		let rect.style.width = actor.size.x * scale + "px";
		let style.height = actor.size.y * scale + "px";
		let style.left = actor.pos.x * scale + "px";
		let style.top = actor.pos.y * scale + "px";
		return rect;
	}));
}

.actor
{
	position: absolute;
}
.coin
{
	background: rgb(241,229,89);
}
.player
{
	background: rgb(64,64,64);
}

DOMDisplay.prototype.syncState = function(state)
{
	if(this.actorLayer)
	{
		this.actorLayer.remove();
	}
	this.actorLayer = drawActors(state.actors)
	this.dom.appendChild(thos.actorLayer);
	this.dom.className = "game " + state.status;
	this.scrollPlayerIntoView(state);
});

.lost .player
{
	background: rgb(160, 64, 64);
}
.won .player
{
	box-shadow: -4px -7px 8px white. 4px -7px 8px white;
}

.game
{
	overflow: hidden;
	max-width: 600px;
	max-height: 450px;
	position: relative;
}

DOMDisplay.prototype.scollPlayerIntoView = function(state)
{
	let width = this.dom.clientWidth;
	let height = this.dom.clientHeight;
	let margin = width / 3;

	//The viewPoint
	let left = this.dom.scollLeft, right = left + width
	let top = this.dom.scrollTop, bottom = top + height;

	let player = state.player;
	let center = player.pos.plus(player.size.times(0.5)).times(scale);

	if(center.x < left + margin)
	{
		this.dom.scollLeft = center.x - margin
	}
	else if(center.x > right - margin)
	{
		this.dom.scrollLeft = center.x + margin - width;
	}
	if(center.y < top + margin)
	{
		this.dom.scollTop = center.y - margin;
	}
	else if(center.y > bottom - margin)
	{
		this.dom.scrollTop = center.y + margin - height;
	}
};

/**Loading the Game**/
/*
<link rel = "stylesheet" href = "css/game.css">

<script>
	let simpleLevel = new Level(simpleLevelPlan);
	let display = new DOMDisplay(document.body, simpleLevel);
	display.syncState(State.start(simpleLevel));
</script>

Level.prototype.touches = function(pos, size, type)
{
	var xStart = Math.floor(pos.x);
	var xEnd = Math.ceil(pos.x + size.x);
	var yStart = Math.floor(pos.y);
	var yEnd = Math.ceil(pos.y + size.y);

	for(var y = yStart; y < yEnd; ++y)
	{
		for(var x = xStart; x < xEnd; ++x)
		{
			let isOutside = x < 0 || x >= this.width || y < 0 || y > this.height;
			let here = isOutside ? "wall" : this.rows[y][x];
			if(here == type)
			{
				return true;
			}
		}
	}
	return false
};

State.prototype.update = function(time, keys)
{
	let actors = this.actors.map(actos => actor.update(time, this, keys));
	let newState = new State(this.level, actors, this.status);
	
	if(newState.status != "playing")
	{
		return newState;
	}
	let player = newState.player;
	if(this.level.touches(player.pos, player.size, "lava"))
	{
		return newState(this.level, actos, "lost");
	}
	for(let actos of actors)
	{
		if(actor != player && overlap(actor, player))
		{
			newState = actor.collide(newState);
		}
	}
	return newState;
};

function overlap(actor1, actor2)
{
	return actor1.pos.x + actor1.size > actors2.pos.x &&
	actor1.pos.x < actor1.pos.x + actor2.size.x &&
	actor1.pos.y + actor1.size.y > actor2.pos.y &&
	actor1.pos.y < actor2.pos.y + actor2.size.y;
}

Lava.prototype.collide = function(state)
{
	return new State(state.level, state.actors, "lost");
};

Coin.prototype.collide = function(state)
{
	let filtered = state.actors.filter(a => a != this);
	let status = state.status;
	if(!filtered.some(a => a.type == "coin"))
	{
		status = "won";
	}
	return new State(state.level, filtered, status);
};

Lava.prototype.update = function(time, state)
{
	let newPos = this.pos.plus(this.peed.times(time));
	if(!state.level.touches(newPos, this.size, "wall"))
	{
		return new Lava(newPos, this.speed, this.reset);
	}
	else if(this.reset)
	{
		return new Lava(this.reset, this.speed, this.reset);
	}
	else
	{
		return new Lava(this.pos, this.speed.times(-1));
	}
};

const wobbleSpeed = 8;
const wobbleDist = 0.07;

Coin.prototype.update = function(time)
{
	let wobble = this.wobble + time * wobbleSpeed;
	let wobblePos = Math.sin(wobble) * wobbleDist;
	return new Coin(this.basePos.plus(new Vec(0, wobblePos)),this.basePos, wobble);
};

const playerXSpeed = 7;
const gravity = 30;
const jumpSpeed = 17;

Player.prototype.update = function(time, state, keys)
{
	if(keys.ArrowLeft)
	{
		xSpeed -= playerXSpeed;
	}
	if(keys.ArrowRight)
	{
		xSpeed += playerXSpeed;
	}
	let pos = this.pos;
	let movedX = pos.plus(new Vec(xSpeed * time, 0));
	if(!state.level.touches(movedX, this.size, "wall"))
	{
		pos = movedX;
	}

	let ySpeed = this.speed.y + time * gravity;
	let movedY = pos.plus(new Vec(0, ySpeed * time));
	if(!state.level.touches(movedY, this.size, "wall"))
	{
		pos = movedY;
	}
	else if(keys.ArrowUp && ySpeed > 0)
	{
		ySpeed = -jumpSpeed;
	}
	else
	{
		ySpeed = 0;	
	}
	return new Player(pos, new Vec(xSpeed, ySpeed));
};


function trackKeys(keys)
{
	let down = Object.create(null);
	function track(event)
	{
		if(keys.includes(event.key))
		{
			down[event.key] = event.type == "keydown";
			event.preventDefault();
		}
	}
	window.addEventListener("keydown, track);
	window.addEventListener("keyup", track);
}

const arrowKeys = trackKeys(["ArrowLeft", "ArrowRight", ArrowUp"]);
function runAnimation(frameFunc)
{
	let lastTime = null;
	function frame(time)
	{
		if(lastTime != null)
		{
			let timeStep = Math.min(time - lastTime, 100) / 1000;
			if(frameFunc(timeStep) === false)
			{
				return;
			}
		}
		lastTime = time;
		requestAnimationFrame(frame);
	}
	requestAnimationFrame(frame);
}

function runLevel(leve, Display)
{
	let display = new Display(document.body, level);
	let state = State.start(level);
	let ending = 1;
	return new Promise(resolve =>
	{
		runAnimation(time =>
		{
			state = state.update(time, arrowKeys);
			display.syncState(state);
			if(state.status == "playing")
			{
				return true;
			}
			else if(ending > 0)
			{
				ending -= time;
				return true;
			}
			else
			{
				display.clear();
				resolve(state.status);
				return false;
			}
		});
	});
}

async function runGame(plans, Display)
{
	for(let level = 0; level < plans.length;)
	{
		let status = await runLevel(new Level(plans[level]), Displayu);
		if(status == "won")
		{
			level ++;
		}
	}
	console.log("You've Won!");
}

<link rel = "stylesheet" href = "css/game.css">

<body>
	<script>
		runGame(GAME_LEVELS, DOMDisplay);
	</script>
</body>

fetch("example/data.txt").then(response =>
{
	console.log(response.status);
	// -> 200
	console.log(response.headers.get("Content-Type"));
	// -> text/plain
});

fetch("eample/data.txt").then(resp => respt.text()).then(text => console.log(text));
// -> This is the content of data.txt

fetch("example/data.txt", {method: "DELETE"}).then(resp =>
{
	console.log(resp.status);
	// -> 405 because it can delete / method not allowed
});

fetch("example.data.txt", {headers: {Range: "bytes = 8-19"}}).then(resp => resp.text()).then(console.log);
// the content


<p><input type = "text" value = "abc">(text)</p>
<p><input type = "password" value = "abc">(password)</p>
<p><input type = "checkbox" checked>(checkbox)</p>
<p><input type = "radio" value = "A" name = "choise">
   <input type = "radio" value = "B" name = "choise" checked>
   <input type = "radio" value = "C" name = "choise">(radio)</p>
<p><input type = "file">(file)</p>

<textarea>
one 
two three
</textarea>


<select>
	<opion>Pancakes</option>
	<option>Pudding</option>
	<option>Ice cream</option>
</select>


<input type = "text">
<script>
	document.querySelector("input").focus();
	console.log(document.activeElement.tagName);
	// -> INPUT
	document.querySelector("input").blur();
	console.log(document.activeElement.tagName);
	// -> BODY
</script>


lets the focus jump from the text input to the OK button, rather than going through the help link


<input type = "text" tabindex = 1><a href = ".">(help)</a>
<button onclick = "console.log('ok')" tabindex = 2>OK</button>


A tabIndex of -1 makes tabbing skip over an element, even if it is normally focusable


All form fields can be disabled through their disabled attribute
<button>Im all right</button>
<button disabled>Im out</button>


<form action = "example/submit.html">
	Name: <input type = "text" name = "name"><br>
	Password: <input type = "password" name = "password">
	<button type = "submit">Log in</button
</form>
<script>
	let form = document.querySelector("form");
	console.log(form.elements[1].type);
	// -> password
	console.log(form.elements.password.type);
	// -> password
	console.log(form.elements.name.form == form);
	// -> true
</script>


<form action = "example.submit.html">
	Value: <input type = "text" name = "value">
	<button type = "submit"> Save </button>
</form>
<script>
	let form = document.querySelector("form");
	form.addEventListener("submit", event =>
	{
		console.log("Saving value " + form.elements.value.value);
		event.preventDefault();
	});
</script>


<textarea></textarea>
<script>
	let textarea = document.querySelector("textarea");
	textarea.addEventListener("keydown", event =>
	{
		//KeyCode for F2 button
		if(event.keyCode == 113)
		{
			replaceSelection(textarea, "Khasekhemwy");
			event.preventDefault();
		}
	});
	function replaceSelection(field, word)
	{
		let from = field.selectionStart;
		let to = field.slectionEnd;
		field.value = field.value.slice(0, from) + word + field.value.slice(to);
		//put the Cursor after the word
		field.selectionStart = from + word.length;
		field.selectionEnd = from + word.length;
	}
</script>


<input type = "text">Length: <span id = "length">0</span>
<script>
	let text = document.querySelector("input");
	let output = document.querySelector("#length");
	text.addEventListener("input", () =>
	{
		output.textContent = text.value.length;
	});
</script>


<label>
	<input type = "checkbox" id = "purple">Make this page purple
</label>

<script>
	let checkbox = document.querySelector("#purple");
	checkbox.addEventListener("change", () =>
	{
		document.body.style.background = checkedbox.checked ? "mediumpurple" : "";
	});
</script>


Color:
<label>
	<input type = "radio" name = "color" value = "orange"> Orange
</label>
<label>
	<input type = "radio" name = "color" value = "lightgreen"> Green
</label>
<label>
	<input type = "radio" name = "color" value = "lightblue"> Blue
</label>
<script>
	let buttons = document.querySelectorAll("[name = color]");
	for(let button of Array.from(buttons))
	{
		button.addEventListener("change", () =>
		{
			document.body.style.background = button.value;
		});
	}
</script>


<select multiple>
	<option value = "1">0001</option>
	<option value = "2">0010</option>
	<option value = "4">0100</option>
	<option value = "8">1000</option>
</select> = <span id = "output">0</span>

<script>
	let select = document.querySelector("select");
	let output = document.querySelector("#output");
	select.addEventListener("change", () =>
	{
		let number = 0;
		for(let option of Array.from(select.options))
		{
			if(option.selected)
			{
				number += Number(option.value);
			}
		}
		output.textContent = number;
	});
</script>


<input type = "file">
<script>
	let input = document.querySelector("input");
	input.addEventListener("change", () =>
	{
		if(input.files.length > 0)
		{
			let file = input.files[0];
			console.log("You chose: " + file.name);
			if(file.type)
			{
				console.log("it has type: " + file.type);
			}
		}
	});
</script>

<input type = "file" multiple>
<script>
	let input = document.querySelector("input");
	input.addEventListener("change", () =>
	{
		for(let file of Array.from(input.files))
		{
			let reader = new Filereader();
			reader.addEventListener("load", () =>
			{
				console.log("File " + file.name + " starts with + " reader.result.slice(0, 20));
			});
			reader.readAsText(file);
		}
	});
</script>

function readFileText(file)
{
	return new Promise((resolve, reject) =>
	{
		let reader = new Filereader();
		reader.addEventListener("load", () =>
		{
			resolve(reader.result)
		});
		reader.addEventListener("error", () =>
		{
			reject(reader.error);
		});
		reaer.readAsText(file);
	});
}


localStorage.setItem("username", "marijn");
console.log(localStorage.getItem("username));
// -> marijn
localStorage.removeItem("username");


Notes: <select></select> <button>Add</button><br>
<textarea style = "width: 100%"></textarea>

<script>
	let list = document.querySelector("select");
	let note = document.querySelector("textarea");
	
	let state;
	function setState(newState)
	{
		list.textContent = "";
		for(let name of Object.keys(newState.notes));
		{
			let option = document.createElement("option");
			option.textContent = name;
			if(newState.selected == name)
			{
				option.selected = true;
			}
			list.appendChild(option);
		}
		note.value = newState.notes[newState.selected];
		
		localStorage.setItem("Notes", JSON.stringify(newState));
		state = newState;
	}
	setState(JSON.parse(localStorage.getItem("Notes")) || 
	{ 
		notes: 
		{
			"shopping list": "Carrot\nRaisins"
		}
		selected: "shopping list"
	});
	list.addEventListener("change", () =>
	{
		setState(
		{
			notes: state.notes, selected: list.value
		});
	});
	note.addEventListener("change", () =>
	{
		setState(
		{
			notes: Object.assign({}, state.notes, {[state.selected]": note.value}),
			selected: state.selected
		});
	});
	document.querySelector("button").addEventListener("click", () =>
	{
		let name = prompt("Note name");
		if(name)
		{
			setState(
			{
				notes: Object.assign({}. state.notes, {[name]: ""}),
				selected: name
			});
		}
	});
</script>

