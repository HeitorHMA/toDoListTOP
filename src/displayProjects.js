import {userProjects} from "./userProjects";


function displayProjects(){
    const pageContent = document.querySelector("#projectDiv")
    for(let i = 0; i < userProjects.length; i++){
        
        const projectDisplayDiv= document.createElement("h1");
        const projectName = userProjects[i].name;
        projectName.textContent = "projectName";
        pageContent.appendChild(projectDisplayDiv);
      }
    };
export default displayProjects 