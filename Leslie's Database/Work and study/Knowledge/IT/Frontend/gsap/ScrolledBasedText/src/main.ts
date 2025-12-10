import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText, ScrollTrigger);

  // initializing Lenis for smooth scrolling
  const lenis = new Lenis()

  let targetVelocity = 0;

  lenis.on('scroll', (e) =>{
    targetVelocity = Math.abs(e.velocity) * 0.02;
    ScollTrigger.update()
  })

  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0)

  const textBlocks = gsap.utils.toArray(".copy-block p")

  const splitInstances = textBlocks.map((block) => 
    SplitText.create(block, {type: "words", mask: "words"})
);

gsap.set(splitInstances[1].words, {yPercent: 100})
gsap.set(splitInstances[2].words, {yPercent: 100})

const overlap = 3

getWordProgress = (phaseProgress, wordIndex, totalWords) => {
    const totalLength = 1 + overlapCount / totalWords
    const scale = 1 / Math.min(totalLength, 1 + (totalWords - 1) / totalWords + overlapCount / totalWords)


const startTime = (wordIndex / totalWords) * scale;
const endTime = startTime + (overlapCount / totalWords) * scale;
const duration = endTime - startTime;

if(phaseProgress <= startTime) return 0;
if(phaseProgress >= endTime) return 1;
return (phaseProgress - startTime) / duration;

}

})