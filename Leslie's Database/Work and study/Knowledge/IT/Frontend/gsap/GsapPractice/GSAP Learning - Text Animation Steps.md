# GSAP Text Animation - Learning Steps

## Core Concepts Learned

### 1. SplitText
- Splits text into individual words/characters
- `mask: "words"` wraps each word in a container with `overflow: hidden`
- Each word container is exactly the size of the word
- When `yPercent: 100`, word moves down by its own height (disappears below container)

### 2. Overlap Animation
- `overlapCount = 3` means up to 3 words animate simultaneously
- Words start at staggered times, creating a wave effect
- Not simultaneous (all starting together), but overlapping (running at same time)

### 3. Key Variables
```typescript
const totalLength = 1 + overlapCount / totalWords;
// 1 = base timeline (100% of scroll range)
// + overlapCount/totalWords = extra space needed for overlap
// Example: 1 + 3/19 = 1.158 (need 115.8% of timeline)

const scale = 1 / Math.min(totalLength, ...);
// Compression factor to fit 115.8% timeline into 100% scroll range
// Example: 1/1.158 = 0.864 (compress to 86.4%)

const startTime = (wordIndex / totalWords) * scale;
// When this specific word starts animating (0-1 range)

const endTime = startTime + (overlapCount / totalWords) * scale;
// When this specific word finishes animating

const duration = endTime - startTime;
// How long this word's animation lasts
```

### 4. Progress Values
- All values are between 0 and 1
- 0 = 0% (start), 1 = 100% (end)
- 0.5 = 50% through the animation
- These represent scroll progress percentage

---

## Step-by-Step Learning Path

### Step 1: Basic Text Splitting
**Goal:** Understand how SplitText works

```typescript
document.addEventListener("DOMContentLoaded", () => {
  const textBlocks = document.querySelectorAll(".copy-block p");
  
  textBlocks.forEach((block) => {
    const split = new SplitText(block, { type: "words", mask: "words" });
    console.log(split.words); // See the split words in console
  });
});
```

**What to observe:**
- Open browser console
- See array of word elements
- Inspect each word's wrapper container
- Notice `overflow: hidden` on containers

---

### Step 2: Basic GSAP Animation (No Scroll)
**Goal:** See words animate on page load with stagger effect

```typescript
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText);
  
  const block = document.querySelector(".copy-block p");
  const split = new SplitText(block, { type: "words", mask: "words" });
  
  // Hide all words first
  gsap.set(split.words, { yPercent: 100 });
  
  // Animate them in with a stagger
  gsap.to(split.words, {
    yPercent: 0,
    duration: 0.5,
    stagger: 0.05, // Each word starts 0.05s after the previous
    ease: "power2.out"
  });
});
```

**What to observe:**
- Words appear one by one in a wave
- Each word slides up from hidden to visible
- `stagger: 0.05` creates the delay between words

---

### Step 3: Scroll-Based Animation
**Goal:** Tie animation to scroll position

```typescript
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  
  const block = document.querySelector(".copy-block p");
  const split = new SplitText(block, { type: "words", mask: "words" });
  
  gsap.set(split.words, { yPercent: 100 });
  
  gsap.to(split.words, {
    yPercent: 0,
    duration: 0.5,
    stagger: 0.05,
    scrollTrigger: {
      trigger: block,
      start: "top 80%", // When block is 80% down the viewport
      end: "bottom 20%",
      scrub: true, // Tie animation to scroll position
      markers: true // Show visual markers for debugging
    }
  });
});
```

**What to observe:**
- Animation happens as you scroll
- `scrub: true` means you can scroll back and forth
- Green/red markers show trigger points
- Remove `markers: true` when done debugging

---

### Step 4: Add Smooth Scrolling with Lenis
**Goal:** Add smooth scrolling experience

```typescript
import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  
  // Setup Lenis smooth scroll
  const lenis = new Lenis();
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  
  lenis.on('scroll', () => ScrollTrigger.update());
  
  // Same animation code as Step 3...
  const block = document.querySelector(".copy-block p");
  const split = new SplitText(block, { type: "words", mask: "words" });
  
  gsap.set(split.words, { yPercent: 100 });
  
  gsap.to(split.words, {
    yPercent: 0,
    stagger: 0.05,
    scrollTrigger: {
      trigger: block,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true
    }
  });
});
```

**What to observe:**
- Smoother scrolling experience
- Animation stays synchronized with smooth scroll

---

### Step 5: Multiple Blocks with Transitions
**Goal:** Animate between multiple text blocks

Once Steps 1-4 are comfortable, move to the full complex implementation with:
- Multiple paragraph transitions
- Custom overlap calculations
- Manual progress control

---

## Key Takeaways

1. **Start simple** - Don't jump to complex code immediately
2. **Use console.log()** - Inspect values to understand what's happening
3. **Add markers** - `markers: true` in ScrollTrigger helps debug
4. **One concept at a time** - Master each step before moving to the next
5. **The `1` in formulas** = base timeline length (not a starting point)
6. **Overlap ≠ Simultaneous** - Words start at different times but run together

---

## Common Mistakes to Avoid

- **Typo:** `phaseProgess` vs `phaseProgress` (be consistent!)
- **Wrong property:** `words.length` instead of `outBlock.words.length`
- **Animate wrong block:** Animate `inBlock` (coming in), not `outBlock` (going out)
- **Case sensitivity:** `trackWidth` vs `trackwidth`

---

## Next Steps

1. Start with Step 1 - just split and log words
2. Move to Step 2 - basic animation on load
3. Add Step 3 - scroll triggers
4. Finally Step 4 - smooth scrolling
5. Only then tackle complex overlap calculations

---

## Resources

- GSAP Docs: https://greensock.com/docs/
- SplitText: https://greensock.com/docs/v3/Plugins/SplitText
- ScrollTrigger: https://greensock.com/docs/v3/Plugins/ScrollTrigger
- Lenis: https://github.com/studio-freight/lenis
