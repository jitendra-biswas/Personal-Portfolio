var sun = document.querySelector("#sun");
var moon = document.querySelector("#moon");
var sidenav = document.querySelector(".sidenav")
var bar = document.querySelector("#bar")
var anish = document.querySelector("#anish")


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

gsap.from(".content1 h1",{
    y:30,
    duration: 1,
    delay: 0.5,
    opacity:0
}) 

gsap.from(".content1 p",{
    y:30,
    duration: 1,
    delay:1,
    opacity:0
})

gsap.from(".content1 .button #btn",{
    y:30,
    duration: 0.5,
    delay: 1.5,
    rotate:20,
    opacity:0
})

gsap.from(".content1 .button #resume",{
    y:30,
    duration: 0.5,
    delay: 2,
    rotate:20,
    opacity:0
})

gsap.from(".content1 .button #sign-in-btn",{
    y:30,
    duration: 0.5,
    delay: 2,
    rotate:20,
    opacity:0
})

gsap.from(".content1 .icons a i",{
    opacity: 0,
    duration: 0.8,
    delay: 2.5,
    stagger:0.4
})

 


