import userProjects from "./userProjects";

function displayProjects(){
    userProjects.array.forEach(element => {
        const projectDiv = document.createElement("div");
        projectDiv.textContent = element.name
        const pageDiv = document.getElementById("pageDiv")
        pageDiv.appendChild(projectDiv)
    });
}
export default displayProjects