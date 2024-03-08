
import addCheckedClass from "./addCheckedClass";
import removeButton from "./deleteButton";
import {userProjects} from "./userProjects";


function displayProjects(){
    const pageContent = document.querySelector("#projectDiv")
    for(let i = 0; i < userProjects.length; i++){
        
        const projectDisplayDiv= document.createElement("div");
        const projectName = userProjects[i].name;
        const projectIndex = userProjects.indexOf(projectDisplayDiv);
        projectDisplayDiv.classList.add("project-div")
        projectDisplayDiv.classList.add(projectIndex)
        projectDisplayDiv.innerHTML = `<input type = "checkbox" class="chckBox" /><h2><span class="usrTsk">${projectName}</span></h2><button class= "deletebtn">X</button>`;
        pageContent.appendChild(projectDisplayDiv);
          }
    addCheckedClass()
    removeButton()
    };
export default displayProjects 