const hamburger = document.getElementById("hamburger");
const ULlist = document.getElementById("ul-list");

hamburger.addEventListener("click",function(){
    ULlist.classList.toggle("show");
});