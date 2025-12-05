It is a programming paradigm based on the concept of objects. 

in OOP we represent real world entities as an object. 
They have data and behaviour.

eg
```js
let user = {
	name : 'John',
	role : 'admin',
	access: 'read-write'

	addUser(){
	        //Logic to add user
	}

	removeUser(){
	        //Logic to add user
	}

	
}
	
```

# Pillars of OOP
### Inheritance
Inheritance is mechanism that allows us to create new classes based on an existing class.

### Encapsulation
This is the process of hiding data from the outside world.

### Abstraction
This is the way of hiding the implementation details and showing only the functionality to the user.
In other words, it ignores the irrelevant details and shows only the required one. 

###  Polymorphism
We can write methods with same name but different implementation. 


# Constructor function

A function constructor is a pattern in Js based on which we can create several objects. 

-In simple terms, a constructor function is simply a function  which acts as a pattern or a template for creating objects. 

-With constructor function, we can ==instantiate== objects and implement inheritance.

-To define a ==constructor function==, a function is used. It can be a ==normal function== or a ==function expression==. 

```js
let Person = function(name, gender, birthYear){
	this.name = name;
	this.gender = gender;
	this.birthYear = birthYear;
	this.calcAge = function(){
	     let age = new Date().getfullYear() - this.birthYear;
	     console.log(age);
	
	}
}

let john = new Person('Peter', 'Male', 1990)
```


# Prototype
Each and every Js object has a prototype property.
Inheritance in JS is achieved using this prototype property
When we attach a property or a method to the prototype property of that object, those properties and methods can be inherited by the instantiated object. 


```js
let Person = function(name, gender, birthYear){
	this.name = name;
	this.gender = gender;
	this.birthYear = birthYear;

	person.prototype.calcAge = function(){
		let age = new Date().getFullYear() - this.birthYear;
		console.log(age)
	}

}

```


# Classes

Classes in JavaScript allows us to create a blueprint and based on that blueprint, we can instantiate objects.

In Js , class declaration and class expression are two ways to define classes. They are similar in many ways but differ in syntax, hoisting behaviour and naming flexibility. Here's



# Getter and Setter Functions
There are two types of properties in JavaScript.
-Data properties: 
-[[Accessor Properties]]: Are the methods that gets or sets the value of an object property.
they are of 2 types:
[[getter]]: read objects property value.
[[setter]]: set an objects property value.
