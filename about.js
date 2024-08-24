gsap.from(".part2 .profile",{
    opacity:0,
    y:100,
    duration:1,
    delay:0.5
})

gsap.from(".social-icon i",{
    opacity:0,
    y:-50,
    stagger:0.2,
    duration:0.5,
    delay:1.1
})

gsap.from(".social p",{
    opacity:0,
    x:-50,
    duration:0.5,
    delay:1
})

gsap.from(".part1 h1",{
    opacity:0,
    y:30,
    duration:0.5,
    delay:1.6
})

gsap.from(".part1 p",{
    opacity:0,
    x:-50,
    duration:0.7,
    delay:2
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
