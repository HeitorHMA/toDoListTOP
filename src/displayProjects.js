import {userProjects} from "./userProjects";


function displayProjects(){
    const pageContent = document.querySelector("#projectDiv")
    for(let i = 0; i < userProjects.length; i++){
        
        const projectDisplayDiv= document.createElement("div");
        const projectName = userProjects[i].name;
        projectName.innerHTML = `<h1>${projectName}</h1>`;
        pageContent.appendChild(projectDisplayDiv);
      }
    };
export default displayProjects 