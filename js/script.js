
//Open resume popup
document.getElementById('resume').addEventListener("click", function() {
	document.querySelector('.resume').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.resume').style.display = "none";
});
