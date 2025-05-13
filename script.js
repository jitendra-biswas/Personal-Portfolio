
(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

/*JS CODE FOR HEADER AND PAGE1 SECTION*/
var header_page1 = function(){
  gsap.from(".logo a", {
    opacity: 0,
    duration: 0.6,
    x: -50,
    delay: 0.2,
  });
  
  gsap.from("nav ul a li", {
    opacity: 0,
    duration: 0.6,
    delay: 0.8,
    y: 30,
    stagger: 0.1,
  });
  
  gsap.from(".join button", {
    opacity: 0,
    duration: 0.6,
    delay: 1.3,
    y: 30,
    scale: 2,
  });
  
  gsap.from(".bar i", {
    opacity: 0,
    duration: 0.6,
    delay: 0.8,
    y: 30,
    scale: 2,
  });
  
  gsap.from(".part1 h1,h2,h3", {
    opacity: 0,
    y: 30,
    duration: 0.5,
    delay: 3,
  });
  
  gsap.from(".part1 p", {
    opacity: 0,
    x: -50,
    duration: 0.7,
    delay: 3,
  });
  
  gsap.from(".part1 .explore button", {
    y: 30,
    opacity: 0,
    duration: 0.7,
    delay: 3,
  });
  
  gsap.from(".part1 .social i", {
    opacity: 0,
    y: -50,
    stagger: 0.2,
    duration: 0.5,
    delay: 3.4,
  });
  
  gsap.from(".part2 img", {
    opacity: 0,
    x: 100,
    duration: 1,
    delay: 2,
  });
  
  gsap.from(".part2 .profile", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 1.4,
  });
  
  var btn = document.querySelector(".sidenav i");
  var bar = document.querySelector("nav .bar");
  var tl = gsap.timeline();
  
  tl.to(".sidenav", {
    right: "0",
  });
  
  
  tl.pause();
  
  bar.addEventListener("click", function () {
    tl.play();
  });
  
  btn.addEventListener("click", function () {
    tl.reverse();
  });
  
}

header_page1();


/*GSAP CODE FOR ABOUT SECTION*/
var about = function(){
  var abouttl = gsap.timeline({
    scrollTrigger:{
      trigger:".About",
      scroller: "body",
      start:"top 100%"
    }
  })
  
  abouttl.from(".About h1",{
    opacity: 0,
    y:20,
  },)
  
  abouttl.from(".profile-image",{
    opacity:0,
    x:-100,
    duration:0.5
  })
  
  abouttl.from(".discription p",{
    opacity:0,
    x:30,
    bottom:100,
    duration:0.5
  },)
  
  abouttl.from(".programming-language .program",{
    opacity:0,
    y:50,
    stagger:0.13
  },)
}
about();


/*CODE FOR FOOTER*/
