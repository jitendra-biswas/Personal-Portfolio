gsap.from(".feedback",{
    opacity:0,
    duration:1,
    x:100,
    delay:0.5
})

gsap.from(".part1 h1",{
    opacity:0,
    y:50,
    delay:1,
    duration:1
})

gsap.from(".contact-icon #icon",{
    opacity:0,
    x:100,
    delay:1.5,
    stagger:0.2
})


var btn = document.querySelector(".sidenav i")
var bar = document.querySelector("nav .bar")
var tl = gsap.timeline()

    tl.to(".sidenav",{
       right:"0",
    })

    tl.from(".sidenav ul li",{
        x:100,
        opacity:0,
        stagger:0.2
    })

    tl.from(".sidenav i",{
        x:100,
        opacity:0,
        duration:1
    })

    tl.pause()

    bar.addEventListener("click",function(){
        tl.play()
    })

    btn.addEventListener("click",function(){
        tl.reverse()
    })



