clear.onclick=function(){
  document.getElementById("notes").value="";
  localStorage.setItem("work","");
}

function saveTitle(){
  localStorage.setItem("name",document.getElementById("title").value);
}

function saveWork(){  localStorage.setItem("work",document.getElementById("notes").value);
}

window.onload=function(){
  document.getElementById("notes").value=localStorage.getItem("work");
  document.getElementById("title").value=localStorage.getItem("name");
}