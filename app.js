let burger = document.querySelector(".burger");
let Links = document.querySelector(".nav-links");
burger.addEventListener('click',()=>{
    Links.classList.toggle("nav-show");
})

window.addEventListener("scroll",function(){
    var header =document.querySelector(".header-content");
    header.classList.toggle("sticky", window.scrollY > 0);
})