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
    duration: 0.7,
    delay: 2,
    scale:2,
    opacity:0
}) 

gsap.from(".content1 p",{
    y:30,
    duration: 1,
    delay:2.7,
    opacity:0
})

gsap.from(".content1 .button #btn",{
    x:-30,
    duration: 0.5,
    delay: 3.3,
    opacity:0
})

gsap.from(".content1 .button #resume",{
    duration: 0.6,
    delay: 3.7,
    x:-30,
    opacity:0
})

gsap.from(".content1 .button #sign-in-btn",{
    duration: 0.6,
    delay: 2.7,
    x:-30,
    opacity:0
})

gsap.from(".content1 .icons a i",{
    opacity: 0,
    duration: 0.5,
    delay: 4,
    stagger:0.3
})

gsap.from(".profile img",{
    opacity:0,
    left:100,
    duration:1.5,
    delay:0.5
})

gsap.from(".responsive",{
    opacity:0,
    y:100,
    duration:1.3,
})
 


