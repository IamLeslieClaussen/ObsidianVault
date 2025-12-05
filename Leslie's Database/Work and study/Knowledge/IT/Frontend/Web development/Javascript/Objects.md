An Object is a collection of related data and /or functionality. These usually consist of several variables and functions ( which are called properties and methods when inside objects).




## Bracket notation
Bracket notation provides an alternative way to access object properties. Instead of using [[dot notation]].
```
person.age;
person.name.first;

we can use square brackets:

person["age"];
person["name"]["first"];
```
Because this looks similar to arrays, objects are sometimes called associative arrays.
They map strings to values, the same way arrays map numbers to values.

The dot notation is generally preferred to the bracket notation. However, if an object property name is held in a variable, then you can't use dot notation to access the value, but you can access it using bracket notation.

when using the bracket notation, the expression in the bracket is always placed quotation marks signifying a string.


We can add new properties to an object using the dot or bracket notation.
```js
const obj = {

name: "leslie",

age: 35,

language: "Javascript",

};

obj.location = "Hamburg"
// The above line of code adds a new property to the object.
```

The difference between the bracket and dot notation are ;
Dot Notation only allows ==static Keys==(typed directly) (property names typed directly) while, 
bracket notation accepts ==dynamic keys==(property names evaluated from an expression during runtime).

Meaning, in the dot notation a new variable cannot not be used to address values that are already linked a to key of an object.
check out [video](https://www.youtube.com/watch?v=AzVvBO65SMc)

## First-class Objects
In JavaScript, **functions** are first-class objects, because they can be passed to other functions, returned from functions, and assigned to variables and properties. They can also have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called.
Functions as first class object (citizen). Meaning a function can act as regular object. 
The example below is a 'function declaration'.
```js
function pow(x, y){
let total = 1;
for (let i = 0; i < y; i++){
    total *= x;
}
return total;
}
```

As soon as you assign it to a variable, it becomes a 'function expression'
we can then call the variable as seen in the console.log(pizza(3, 3));

```js
let Pizza = function pow(x, y){
    let total = 1;
 .  for (let i = 0; i < y; i++){
         total *= x;
}
     return total;
     
}
console.log(pizza(3,3));

```

## Adding a function to an Array.
examples 
```js
let coolfuntions = [pow]; 

```

we can call a function in an array. Eg above
The function 'pow' in the array is called with index 0 ( because only the key exist with no values ).
```js
function pow(x, y) {
 let total = 1;
 for (let i = 0; i < y; i++) {
   total *= x;
 }
 return total;
}

  

let coolfunctions = [pow];

console.log(coolfunctions[0](3, 3));
```

You can also add a function to an object as as a property. this is also called a method. 
```js
let mathFunction = {
    power: pow
}

console.log(mathFunction.power(3, 3));
```

we can add properties to functions. Because a function is just an object and objects have  properties, we can add properties to functions. Examples.

```js 
pow.description = "will raise the numbers to the power 3 "
```
This can then be accessed. 

you can pass a function to a parameter. This is also known as a [[ call-back function]].


