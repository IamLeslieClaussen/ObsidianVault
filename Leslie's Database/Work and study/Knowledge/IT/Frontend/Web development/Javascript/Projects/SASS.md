 -###index.html

###css
style.css ( this is done by the compiler)

###scss
##_commonElements
##_main.scss
##_mixins.scss
##[[reset.scss]]
##_variables



sass --watch --no-source-map scss/style.scss  css/style.css

## Structure

- Style
	- main
  - base 
    - _reset.scss
    - _typography.scss
    - global.scss
    - variables.scss

	- components
		-  _button.scss
		- _card.scss
		- carousel.scss
		- dropdown.scss
		- cover.scss
		

	- layout
		- _grid.scss
		- _flexb ox.scss
		- navigation.css
		- header.scss
		- footer.scss
		- sidebar.scss
		- forms.scss

	- themes
		- _light.scss
		- _dark.scss

	- abstracts
		- _mixins.scss
		- _functions.scss
		


# 1-Base
## _global.scss
body {
font-family: $ff-Sans;
font-size: $f-normal;

height: 100vh;
display: flex;
justify-content: center;
align-items: center;

background-image: url(/images/bg-intro-mobile.png);
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-color: $primary-red;

@media only screen and (min-width: 1025px) {
background-image: url(/images/bg-intro-desktop.png);

}
}

## _resets.scss
html {
box-sizing: border-box;
font-size: 100%;
}

*,
*::before,
*::after {
box-sizing: border-box;
}

* {
margin: 0;
padding: 0;
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

## _typography.scss
## _variables.scss
/*******COLORS********/

/**primary**/
$primary-red: hsl(0, 100%, 74%);
$primary-green: hsl(154, 59%, 51%);
$primary-accent-blue: hsl(248, 32%, 49%);

/**Neutral**/
$neutral-dark-blue: hsl(249, 10%, 26%);
$neutral-grayish-blue: hsl(246, 25%, 77%);

/*font-size*/
$f-normal: 16px;
$f-large: 40px;

/*font-weight*/
$fw-400: 300;
$fw-500: 500;
$fw-600: 600;
$fw-700: 700;

/*Media queries*/
$tablet: 768px;
$large: 1024px;
$desktop: 1280px;

$ff-Sans: "Poppins", sans-serif;


# 2-Abstracts
## _functions.scss
## _mixins.scss
@mixin linear-gradient($degrees, $color1, $color2) {
background-image: linear-gradient($degrees, $color1, $color2);
}

@mixin flex-column {
display: flex;
flex-direction: column;
}

@mixin flex-center {
display: flex;
align-items: center;
justify-content: center;
}

@mixin flex-center-column {
@include flex-center;
flex-direction: column;
}

  
/******Media Queries********/
@mixin tablet {
@media only screen and (min-width: #{$tablet}) {
@content;
}
}

@mixin large {
@media only screen and (min-width: #{$large}) {
@content;
}
}

@mixin desktop {
@media only screen and (min-width: #{$desktop}) {
@content;
}
}

@mixin cover-background {
background-repeat: no-repeat;
background-size: cover;
background-position: center;
}

@mixin box($width, $height: $width) {
width: $width;
height: $height;
}


# 3-Layout 
## _flexbox.scss
## _grid.scss

## _layout.scss
.wrapper {
width: calc(100% - 48px);
max-width: 1216px;
margin-inline: auto;

@include tablet {
width: calc(100% - 80px);
}

@include large {
width: calc(100% - 224px);
}
}



#  4-components
## _boxes.scss
## _images.scss
##  _logos.scss