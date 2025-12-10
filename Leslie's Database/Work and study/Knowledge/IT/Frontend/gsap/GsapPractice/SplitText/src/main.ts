import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText, ScrollTrigger);

  //initializing Lenis for smooth scrolling
 const lenis = new Lenis();
 gsap.ticker.add((time) => lenis.raf(time * 1000));
 gsap.ticker.lagSmoothing(0);
 
 
 lenis.on('scroll', ScrollTrigger.update());


 const textBlocks = document.querySelectorAll(".text p");

 textBlocks.forEach((text) => {
   const split = new SplitText(text as HTMLElement, { type: "words", mask: "words"})

   gsap.set(split.words, {yPercent: 100})

   gsap.to(split.words, {
     yPercent: 0,
     stagger: 0.05,
     duration: 1,
     ease: "power3.inOut",
     scrollTrigger: {
       trigger: text,
       start: "top 80%",
       end: "bottom 20%",
       scrub: true, 
       markers: true
     }
   })
 })
})