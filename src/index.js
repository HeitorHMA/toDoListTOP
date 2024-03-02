import {userProjects} from "./userProjects";

function displayProjects(){
    for(let i = 0; i < userProjects.length; i++){
        console.log(userProjects[i].name);
      }
    };
displayProjects()