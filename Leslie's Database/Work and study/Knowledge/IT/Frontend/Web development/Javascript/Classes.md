classes serve as template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on ==prototypes== but also have some syntax and semantics that are unique to classes. 

Classes are "special functions", and just as you can define [[function expression]] and [[function declarations]], a class can be defined in two: a [[class expression]] or a [[class declaration]]. 

```js 
//Declaration 
class Rectangle {
constructor(height, width) {
  this.height = height;
  this.width = width;
  }
}

// Expression; the class is annonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    }
}
```

Like function expressions, class expressions may be anonymous, or have a name thats different from the variable that it is assigned to. However, unlike function declarations, class declarations have the same [[temporal dead zone]] restrictions as let or const and behave as if they are not [[hoisted]]. 


Constructor
The constructor method is a special method for creating and initialising an Object created with a class. There can only be one special method with the name "Constructor" in a class.

A constructor can use "super" Keyword to call the constructor of the super class. 

```js

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}


```
```
```

