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



//  sbtn = document.querySelector(".mode #no");
//  full = document.querySelector("main");
//  log = document.querySelector(".loggin");
//  lbtn = document.querySelector(".content1 #sign-in-btn")
 

//  sbtn.addEventListener("click",function(){
//      full.style.display = "none"
//      log.style.display = "block"
//      sbtn.style.display = "none"

//  });

//  log = document.querySelector(".loggin");
//  lbtn = document.querySelector(".content1 #sign-in-btn")
//  bar = document.querySelector(".mode #bar")
//  full = document.querySelector("main");
//  lbtn.addEventListener("click",function(){
//     log.style.display = "block"
//     bar.style.display = "none"
//     full.style.display = "none"
//  })


 


