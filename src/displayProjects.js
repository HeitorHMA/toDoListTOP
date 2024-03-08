import addCheckedClass from "./addCheckedClass";
let userProjects = require('userProjects.json');


function displayProjects(){
    const pageContent = document.querySelector("#projectDiv");
    const arrayLenght = (Object.keys(userProjects).length);
    for(let i = 0; i < arrayLenght; i++){
    if(userProjects[i] == undefined){
      continue
    }
    else{
        const projectDisplayDiv= document.createElement("div");
        const projectName = userProjects[i].name;
        projectDisplayDiv.classList.add("project-div");
        projectDisplayDiv.innerHTML = `<input type = "checkbox" class="chckBox" /><h2><span class="usrTsk">${projectName}</span></h2>`;
        pageContent.appendChild(projectDisplayDiv);

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `X`;
        projectDisplayDiv.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", function(){
        const projectDiv = deleteBtn.parentElement;
        pageContent.removeChild(projectDiv);
        delete userProjects[i];
        })
          }
    addCheckedClass()
    }};
export default displayProjects 