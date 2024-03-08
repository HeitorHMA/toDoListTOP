function removeButton () {
    const removeButtons = document.querySelectorAll(".deletebtn");
    removeButtons.forEach(function(button) {
        button.addEventListener("click",function(){
            const projectPage = document.querySelector("#projectDiv")
            const projectElm = button.parentElement;
            projectPage.removeChild(projectElm)
        })})
    }
export default removeButton