import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const lenis = new Lenis();

  let targetVelocity = 0;

  lenis.on('scroll', (e) => {
    targetVelocity = Math.abs(e.velocity) * 0.02;
    ScrollTrigger.update()
  })

  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0)

  const textBlocks = gsap.utils.toArray<HTMLElement>(".copy-block p");
  

  const splitInstances = textBlocks.map((block) => 
    SplitText.create(block, { type: "words", mask: "words" })
  );

  gsap.set(splitInstances[1].words, { yPercent: 100  });
  gsap.set(splitInstances[2].words, { yPercent: 100  });

  const overlapCount = 3;

  const getWordProgress = (phaseProgress, wordIndex, totalwords) => {
    const totalLength = 1 + overlapCount / totalwords;
    const scale = 
    1 / Math.min(totalLength, 1 + (totalwords - 1) / totalWords + overlapCount / totalwords); 

    const startTime = (wordIndex / totalWords) * scale;
    const endTime = startTime + (overlapCount / totalwords) * scale;
    const duration = endTime - startTime;

    if (phaseProgress <= startTime) return 0;
    if (phaseProgress >= endTime) return 1;
    return (phaseProgress - startTime) / duration;
  }

});
