import {userProjects} from "./userProjects";

function displayProjects(){
    const pageContent = document.querySelector("#projectDiv")
    for(let i = 0; i < userProjects.length; i++){
        
        const projectName = document.createElement("h1");
        projectName.textContent = `${userProjects[i].name}`
        pageContent.appendChild(projectName);
      }
    };
export default displayProjects