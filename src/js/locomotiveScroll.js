import LocomotiveScroll from "locomotive-scroll";
import {gsap,Sine, Expo,Power4} from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


export const container=".portfolio-container";
const locoScroll= new LocomotiveScroll({
    el:document.querySelector(container),
    smooth:true,
    multiplier:0.6
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(container, {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
 return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(container).style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh(); 

