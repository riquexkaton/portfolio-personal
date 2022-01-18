import { gsap, Power4, Sine, Expo } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { container } from "./locomotiveScroll";

gsap.registerPlugin(ScrollTrigger);


//header logo
gsap.from("header .logo h2", {
  y: "-100%",
  duration: 0.7,
  ease: Sine.easeIn
});
//marquee animation
gsap.timeline({
  scrollTrigger: {
    trigger: ".marquee",
    scroller: ".portfolio-container",
    start: "top top",
    end: "+=200%",
    pin: true,
    scrub: 3
  }
})
  .to(".marquee h2", {
    x: 0
  });
//background width about
gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "-=300 top",
    scroller: container
  }
}).fromTo(".about img", {
  width: 0
}, {
  width: "60%",
  duration: 2,
  ease: Expo.easeInOut
});

//maruqee-skills
gsap.timeline({ repeat: -1, ease: "linear" })
  .to(".marquee-skills h2", {
    x: "300rem",
    duration: 20
  });

//text animation

function textAnimate(tri) {
  gsap.timeline({
    scrollTrigger: {
      trigger: tri,
      end: "top",
      scroller: container,
      markers: true
    }
  })
    .fromTo(tri+" .title h2", {
      y: "100%"
    }, {
      y: 0,
      duration: 1.5,
      ease: Sine.easeInOut
    });
}

textAnimate(".projects-before");


//background animation
gsap.timeline({
  scrollTrigger:{
    trigger:".projects-after",
    scroller:container,
    end:"top",
    scrub:true
  }
})
.to("body",{

  backgroundColor:"black"
})
.to("header",{
  color:"#EEEDE7"
});

//animation change width
gsap.timeline({
  scrollTrigger:{
    trigger:".img-animation",
    scroller:container,
    pin:true,
    scrub:1,
    start:"top top"
  }
})
.to(".img-animation img",{
  width:"100%"
})
.fromTo(".img-animation h2",{
  opacity:0
},{
  opacity:1
})