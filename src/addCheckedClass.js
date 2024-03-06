
function addCheckedClass(){
    const checkBox = document.querySelectorAll(".chckBox");
    const projectDiv = document.querySelectorAll(".project-div");
    checkBox.addEventListener(onclick , addCheck);
function addCheck(){
    if (projectDiv.classList.contains("checked")){
        projectDiv.classList.remove("checked")
    }
    else{projectDiv.classList.add("checked")};
}};
export default addCheckedClass