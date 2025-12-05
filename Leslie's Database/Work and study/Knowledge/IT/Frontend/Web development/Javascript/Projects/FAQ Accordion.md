Technologies: [[Tailwind]]
```HTML
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8" />

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<title>Document</title>

<link rel="stylesheet" href="output.css" />

<link

href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"

rel="stylesheet"

/>

</head>

<body>

<div class="py-40 h-screen">

<h1 class="text-center font-semibold text-slate-900 text-3xl mb-10">

Accordion Tailwind CSS with Javascript

</h1>

<div class="max-w-2xl mx-auto">

<div class="bg-green-300 rounded-xl border-2 p-3">

<div class="accordion-header flex items-center justify-between">

<span class="font-semibold">What is Web Development?</span>

<i class="bx bxs-chevron-down text-2xl"></i>

</div>

  

<div class="accordion-body">

<div class="p-4 border-t">

<p>

what is web Development Lorem, ipsum dolor sit amet consectetur

adipisicing elit. Quaerat consequuntur voluptates laudantium

asperiores laboriosam dolores possimus, unde error hic expedita

quos alias in obcaecati iste deserunt doloribus perferendis quod

voluptatum.

</p>

</div>

</div>

</div>

</div>

</div>

<script src="main.js"></script>

</body>

</html>

```

JS
```js
const accordionHeader = document.querySelectorAll(".accordion-header");

  

accordionHeader.forEach((accordionHeader) => {

accordionHeader.addEventListener("click", (event) => {

accordionHeader.classList.toggle("active");

const accordionBody = accordionHeader.nextElementSibling;

if (accordionHeader.classList.contains("active")) {

accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";

} else {

accordionBody.style.maxHeight = 0;

}

});

});

```