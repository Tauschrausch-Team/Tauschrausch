
// Uncaught ReferenceError: button is not defined
// at util.js:2
document.getElementById(button).addEventListener("click", function(){
	// make popup window visible
	document.querySelector(".popup").style.display = "flex";
	console.log("pressed on popup-button");
});

document.querySelector(".close").addEventListener("click", function(){
	document.querySelector(".popup").style.display = "none";
});