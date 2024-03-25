var sun = document.querySelector("#sun");
var moon = document.querySelector("#moon");
var sidenav = document.querySelector(".sidenav")
var bar = document.querySelector("#bar")


sun.addEventListener("click", function(){
    sun.style.display = "none"
    moon.style.display = "block"
    document.body.classList.toggle("white-theme")

});

moon.addEventListener("click", function(){
    sun.style.display = "block"
    moon.style.display = "none"
    document.body.classList.toggle("white-theme")

});

var check = 0;
bar.addEventListener("click",function(){
    if(check == 0){
        sidenav.style.display = "block"
        check = 1;
    }

    else{
        sidenav.style.display = "none"
        check = 0;
    }
});

