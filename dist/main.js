(()=>{"use strict";const e=[{name:"test",urgency:1,description:"null"},{name:"test 2 ",urgency:1,description:"null"},{name:"test 3",urgency:1,description:"null"}];!function(){const t=document.querySelector("#projectDiv");for(let n=0;n<e.length;n++){const c=document.createElement("div"),s=e[n].name;c.classList.add("project-div"),c.innerHTML=`<input type = "checkbox" class="chckBox"/><h2><span class="usrTsk">${s}</span></h2><button class= "deletebtn">X</button>`,t.appendChild(c)}}()})();