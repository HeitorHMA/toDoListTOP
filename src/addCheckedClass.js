function addCheckedClass(){
    const projectDiv = document.querySelector(".project-div");
    const checkBox = document.querySelector(".chckBox");
    checkBox.addEventListener("click", addCheck)
function addCheck(){
   if( projectDiv.classList.contains("checked")){
    projectDiv.classList.remove("checked")}
    else{
        projectDiv.classList.add("checked")
    }
}}
export default addCheckedClass