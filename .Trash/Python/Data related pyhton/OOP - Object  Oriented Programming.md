Code defined around objects. 
Everything in Python is actually an object: When working with Python, you are creating and manipulating obects.

[[NumPy and Pandas]]: These two libraries are essential to working with data in Python - both define a number of their own object types.

[[Matplotlib]]: Used to create data visualisations - uses object types to define the objects you create.

[[Skikit-learn]]: Used to create machine learning models - uses object types to represent the models you train and make predictions with. 

[[Object]]: An object is an entity that stores data. 

An object's  [[Class]]  defines specific properties that the object will have. 

We use an  [[instance]] to describe each individual object

[[Methods]]
 Methods allow objects to perform actions. 
 
 
 [[Init Method]]
 The power of objects lies in the ability to store data using attributes.
 An example is Mercedes. An object of the Mercedes class has attributes, eg colour, size, motor. Similarly, Python strings have attributes - The data that is stored inside the string. 
 
 We can think of attributes of special variables that are stored in a class. 
 Attribues let us store Specific values(characteristic) that belong to the instances of the class. 
 
 When we [[instantiate]] an object, mostly we specify the data(attribute), that we want the object to have, based on the ones attributes mentioned in the Class creation. 
 
 Eg. my_int = int(3)
 
 we provided the int() ---Method
 my_int                         --- Object
 "3"                              --- Arguement
 
 The string arguement '3' converted by the method ''int()'' into an  intiger and stored by the object 'my_int()'. 
 
 We definde what is done with any arguement provided at the  instaniation using the Init Method.
 
 The init Method - also called the constructor - is a special method, that runs when an instance is created so we can perform any tasks to set up the instance.
 
 This init method has a special name (__init__()).
 
 
 
 
 
 
 
 