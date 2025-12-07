import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const lenis = new Lenis();
});
