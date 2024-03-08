import removeItemFromTodos, { userProjects } from "./userProjects";

function removeButton () {
    const removeButtons = document.querySelectorAll(".deletebtn");
    userProjects
    removeButtons.forEach(function(button) {
        button.addEventListener("click",function(){
            const projectPage = document.querySelector("#projectDiv")
            const projectElm = button.parentElement;
            projectPage.removeChild(projectElm);
            removeItemFromTodos();
            
        })})
    }
export default removeButton