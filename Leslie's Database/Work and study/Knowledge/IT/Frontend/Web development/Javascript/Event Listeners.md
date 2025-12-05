They allow us to listen to events that are taking place on a webpage.
There are 3 ways of creating event listeners

```js
javascript 
```

In order to create an eventListener, we need to first target the Object (class) in the  document(HTML) in question. We do this by ( this is just an example)
```js
const accordionHeader = document.querySelectorAll('classObject')
```


Then we need to define what the eventListener entails. We do this by;

```js
accordionHeader.AddEventListener('click', (event) => {
 accordionHeader.classList.toggle('active')
}
```

[[classList]]: is read-only property that returns a live [[DOMTokenList]] collection of the class attributes of the element. This can then be used to manipulate the class list. 

[[toggle()]]: Its a feature, that allows you to switch between two states, typically used for showing or hiding elements on a webpage. 
It can be used to add or remove classed from elements, providing a simple way to change their appearance or behaviour. 