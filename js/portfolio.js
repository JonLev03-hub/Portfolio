const username = "JonLev03-hub"
let repos = {
    index : []
}
d3.json(`https://api.github.com/users/${username}/starred`).then( starred =>{
    starred.forEach(project => {repos.index.push(project.name);});
})

function getRepos(data) {
    data.forEach(repo => {
        repos[repo.name] = {
            desc : repo.description,
            link : repo.html_url
        }
        if (repos.index.includes(repo.name) == false && repo.name !==username ) {
            repos.index.push(repo.name)
        };
    })
};
function createItems() {
    let projects = document.getElementById("projects")
    repos.index.forEach(repo => {
        // define all of the items for the project
        let title = document.createElement("h1");
        title.textContent = repo;
        console.log(title)
        let desc = document.createElement("p")
        desc.textContent = repos[repo].desc;
        console.log(desc)
        let link = repos[repo].link;
        //assign all of the items to the project
        let project = document.createElement('div')
        project.classList += "project";
        project.insertAdjacentHTML("beforeend", `<h1>${repo}</h1>`)
        project.appendChild(desc)
        project.insertAdjacentHTML("beforeend", `<a href="${link}"><image class="git" src = "resources/github.png"></image></a>`);
        projects.appendChild(project)

     })
}
//collect the data from githu
d3.json(`https://api.github.com/users/${username}/repos`).then( data =>{
getRepos(data)
createItems()
})