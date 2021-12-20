// const user = "jonlev03-hub"

// // fetch(`https://api.github.com/users/jonlev03-hub/repos`).then(data => console.log(data));
// // var bio = document.getElementById("bio");
// // bio.textContent = "hmm";

// ajax({
//     url : "https://api.github.com/users/jonlev03-hub/repos",
//     method : "GET"
// }).then(result => console.log(result))

d3.json("https://api.github.com/users/jonlev03-hub").then(data => {
    console.log(data);
    let bio = document.getElementById("bio");
    bio.textContent = data.bio; 

})
//test