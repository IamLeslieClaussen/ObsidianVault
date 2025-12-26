import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const lenis = new Lenis();

  let targetVelocity = 0;

  lenis.on("scroll", (e) => {
    targetVelocity = Math.abs(e.velocity) * 0.02;
    ScrollTrigger.update();
  });

  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const textBlocks = gsap.utils.toArray(".copy-block p");

  const splitInstances = textBlocks.map((block) => {
    return SplitText.create(block, { type: "words", mask: "words" });
  });

  gsap.set(splitInstances[1].words, { yPercent: 100 });
  gsap.set(splitInstances[2].words, { yPercent: 100 });

  const overlapCount = 3;

  const getWordProgress = (phaseProgress, wordIndex, totalWords) => {
    const totalLength = 1 + overlapCount / totalWords;

    const scale =
      1 /
      Math.min(
        totalLength,
        1 + (totalWords - 1) / totalWords + overlapCount / totalWords
      );

    const startTime = (wordIndex / totalWords) * scale;
    const endTime = startTime + (overlapCount / totalWords) * scale;
    const duration = endTime - startTime;

    if (phaseProgress <= startTime) return 0;
    if (phaseProgress >= endTime) return 1;
    return (phaseProgress - startTime) / duration;
  };

  const animatedBlock = (outBlock, inBlock, phaseProgress) => {
    outBlock.words.forEach((word, i) => {
      const progress = getWordProgress(phaseProgress, i, outBlock.words.length);
      gsap.set(word, { yPercent: progress * 100 });
    });

    inBlock.words.forEach((word, i) => {
      const progress = getWordProgress(phaseProgress, i, inBlock.words.length);
      gsap.set(word, { yPercent: 100 - progress * 100 });
    });
  };

  const indicator = document.querySelector(".scroll-indicator");

  const marqueeTrack = document.querySelector(".marquee-track");
  const items = gsap.utils.toArray(".marquee-item");

  items.forEach((item) => marqueeTrack?.appendChild(item.cloneNode(true)));

  let marqueePosition = 0;
  let smoothVelocity = 0;

  gsap.ticker.add(() => {
    smoothVelocity += (targetVelocity - smoothVelocity) * 0.5;

    const baseSpeed = 0.45;
    const speed = baseSpeed + smoothVelocity * 9;

    marqueePosition -= speed;

    const trackWidth = marqueeTrack.scrollWidth / 2;

    if(marqueePosition <= )
  });
});
