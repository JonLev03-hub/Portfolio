
const username = "JonLev03-hub"
d3.json(`https://api.github.com/repos/${username}/${username}`).then(data => {
    console.log(data);
    let bio = document.getElementById("bio");
    bio.textContent = data.description; 
})
