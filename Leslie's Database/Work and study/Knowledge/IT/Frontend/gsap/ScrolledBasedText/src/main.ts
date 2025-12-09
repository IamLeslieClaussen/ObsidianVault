import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const lenis = new Lenis();

    let targetVelocity = 0;

    lenis.on('scroll', (e) => {
      targetVelocity = Math.abs(e.velocity) * 0.02;
      ScrollTrigger.update()
    })
    });
})