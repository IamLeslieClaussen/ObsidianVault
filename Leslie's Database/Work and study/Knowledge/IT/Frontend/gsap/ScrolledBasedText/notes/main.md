[[lenis]]:It is a lightweight modern JS library for smooth scrolling. It used to replace the browsers native scroll behavior with a smoother, more fluid scrolling experience. 

```js
lenis.on('scroll', (e) => {
    targetVelocity = Math.abs(e.velocity) * 0.02;
    ScrollTrigger.update()
  })
```

lenis.on('scroll', (e) => {...}) - Listens for scroll events from Lenis
e.velocity - The scroll velocity (speed and direction) provided by Lenis
Math.abs(e.velocity) - Converts velocity to absolute value (always positive, removes direction)
* 0.02 - Scales down the velocity to a smaller number (2% of original)
targetVelocity = ... - Stores this scaled velocity value (likely used later for animations)
ScrollTrigger.update() - Tells GSAP's ScrollTrigger to recalculate positions because Lenis is controlling the scroll, not the browser.

[[requestAnimationFrame]] (RAF) is a browser API that runs a function before the next screen repaint - typically 60 times per second (60fps)