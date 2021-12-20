const username = "JonLev03-hub"

function getRepos(data) {
    data.forEach(repo => console.log(repo))
};
//collect the data from github
d3.json(`https://api.github.com/users/${username}/repos`).then( data =>{

getRepos(data)
})