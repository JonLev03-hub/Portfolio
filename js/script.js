
//Open resume popup
document.getElementById('resume').addEventListener("click", function() {
	document.querySelector('.resume').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.resume').style.display = "none";
});

//collect information for portfolio items

//open the website
//scrape the list of pinned projects

//scrape the list of projects if project isnt already in project list
//for each project in project list scrape the Title,first paragraph, and languages, last commit date
//for each project in project list append items scraped
