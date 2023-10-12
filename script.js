const tabs = document.querySelectorAll(".tab");
tabs.forEach(function(tab){
  tab.addEventListener("click", ()=> tab.classList.toggle("selected"))
})