import addCheckedClass from "./addCheckedClass";
import {userProjects} from "./userProjects";


function displayProjects(){
    const pageContent = document.querySelector("#projectDiv")
    for(let i = 0; i < userProjects.length; i++){
        
        const projectDisplayDiv= document.createElement("div");
        const projectName = userProjects[i].name;
        projectDisplayDiv.classList.add("project-div")
        projectDisplayDiv.innerHTML = `<input type = "checkbox" class="chckBox"/><h2><span class="usrTsk">${projectName}</span></h2><button class= "deletebtn">X</button>`;
        pageContent.appendChild(projectDisplayDiv);
      }
    addCheckedClass()
    };
export default displayProjects 