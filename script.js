gsap.from(".logo a",{
    opacity:0,
    duration:0.6,
    x:-50,
    delay:0.2
})

gsap.from("nav ul a li",{
    opacity:0,
    duration:0.6,
    delay:0.8,
    y:30,
    stagger:0.2
})

gsap.from(".join button",{
    opacity:0,
    duration:0.6,
    delay:2,
    y:30,
    scale:2,
})

gsap.from(".bar i",{
    opacity:0,
    duration:0.6,
    delay:1,
    y:30,
    scale:2,
})

gsap.from(".part1 h1",{
    opacity:0,
    y:30,
    duration:0.5,
    delay:3.2
})

gsap.from(".part1 p",{
    opacity:0,
    x:-50,
    duration:0.7,
    delay:3.2
})

gsap.from(".part1 .explore button",{
    y:30,
    opacity:0,
    duration:0.7,
    delay:3.2
})

gsap.from(".part1 .social i",{
    opacity:0,
    y:-50,
    stagger:0.2,
    duration:0.5,
    delay:3.6
})

gsap.from(".part2 img",{
    opacity:0,
    x:100,
    duration:1,
    delay:2.4
})

gsap.from(".part2 .profile",{
    opacity:0,
    y:100,
    duration:1,
    delay:1.8
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

    gsap.from(".heading",{
        opacity:0,
        y:50,
        duration:0.5,
        delay:0.5,
        stagger:0.3,
        scrollTrigger:{
            trigger:".page2",
            scroller: "body",
        }
    })

    gsap.from(".project1,.project2,.project3",{
        opacity:0,
        y:50,
        duration:0.5,
        delay:0.7,
        stagger:0.3,
        scrollTrigger:{
            trigger:".page2",
            scroller: "body",
        }
    })

    gsap.from(".footer-part1 .logo h1",{
        opacity:0,
        y:50,
        duration:0.5,
        delay:0.2,
        scrollTrigger:{
            trigger:".footer-part1",
            scroller: "body",
            start:"top 80%"
        }
    })

    gsap.from(".footer-part1 .icons i",{
        opacity:0,
        y:30,
        duration:1,
        delay:0.5,
        stagger:0.2,
        scrollTrigger:{
            trigger:".footer-part1",
            scroller: "body",
            start:"top 80%"
        }
    })
  
    gsap.from(".footer-part1 .gmail p",{
        opacity:0,
        x:-50,
        duration:1,
        delay:0.4,
        scrollTrigger:{
            trigger:".footer-part1",
            scroller: "body",
            start:"top 80%"
        }
    })

    gsap.from(".footer-part2 #topic",{
        opacity:0,
        y:50,
        duration:1,
        delay:0.5,
        scrollTrigger:{
            trigger:".footer-part1",
            scroller: "body",
            start:"top 80%"
        }
    })

    gsap.from(".footer-part2 .library a",{
        opacity:0,
        y:50,
        duration:1,
        delay:0.7,
        scrollTrigger:{
            trigger:".footer-part1",
            scroller: "body",
            start:"top 80%"
        }
    })