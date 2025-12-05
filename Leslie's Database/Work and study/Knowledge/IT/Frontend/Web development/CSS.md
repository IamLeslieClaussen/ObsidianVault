Advanced [[CSS]] Techniques
-Flexbox
-CSS Grid
-SASS-CSS Preprocessor




ROOT Template;
:root {

--ff-sans: "Poppins", sans-serif;

  

--fs-400: 0.9275rem;

--fs-500: 1.25rem;

--fs-600: 1.625rem;

--fs-900: 2.5rem;

  

--fw-light: 200;

--fw-normal: 400;

--fw-bold: 600;

  

--clr-ntrl-900: hsl(234, 12%, 34%);

--clr-ntrl-400: hsl(229, 6%, 66%);

--clr-ntrl-100: hsl(0, 0%, 98%);

  

--clr-red: hsl(0, 78%, 62%);

--clr-cyan: hsl(180, 62%, 55%);

--clr-orange: hsl(34, 97%, 64%);

--clr-blue: hsl(212, 86%, 64%);

}


### CSS RESET
```css
*,

*::before,

*::after {

box-sizing: border-box;

}

  

* {

margin: 0;

}

  

img,

picture,

video,

canvas,

svg {

display: block;

max-width: 100%;

}

  

input,

button,

textarea,

select {

font: inherit;

}

  

p,

h1,

h2,

h3,

h4,

h5,

h6 {

overflow-wrap: break-word;

}
```


[[CSS Breaking points]]
Most used breaking points in css are the following:
- 1024px (desktops)
- 768px (tablets)
- 320px (smartphones)