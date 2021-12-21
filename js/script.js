
//Open resume popup
 function popup(item) {
	console.log(item)
	document.getElementById(item).style.display = "flex";
}

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.resume').style.display = "none";
});
