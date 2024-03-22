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

// ---Js end of landing page---
// ---start js of form---



// sbtn = document.querySelector(".mode #no");
// full = document.querySelector("main");
// log = document.querySelector(".loggin");
// res_log = document.querySelector("#sign-in-btn");

// sbtn.addEventListener("click",function(){
//     full.style.display = "none"
//     log.style.display = "block"
//     sbtn.style.display = "none"
    
// });

// res_log = document.querySelector("#sign-in-btn");
// res_log.addEventListener("click",function(){
//     full.style.display = "none"
//     log.style.display = "block"
    
// });





// var signin = document.querySelector(".form1");
// var signup = document.querySelector(".form");
// var register = document.querySelector(".register");
// var login = document.querySelector(".login");

// register.addEventListener("click", function(){
//     signup.style.display = "block"
//     signin.style.display = "none"
// });

// login.addEventListener("click", function(){
//     signup.style.display = "none"
//     signin.style.display = "block"
// });




