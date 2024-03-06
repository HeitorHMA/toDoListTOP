function addCheckedClass(){
    let checkBoxes = document.querySelectorAll(".chckBox");
    checkBoxes.forEach(function(checkBox){
        checkBox.addEventListener("click",function(){
            let projectDiv = checkBox.parentElement
            if(projectDiv.classList.contains("checked")){
                projectDiv.classList.remove("checked")
            }
            else{projectDiv.classList.add("checked")}})})};
export default addCheckedClass