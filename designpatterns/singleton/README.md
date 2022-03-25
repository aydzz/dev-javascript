# Take in Javascript Singletons
I think there are 3 ways to implement this, will try to see if these works


### Exporting a single instance and hiding the class in a module [singleton 1]
- Create an module
- Define the Singleton class in there.
- Instantiate the the class in there.
- Export the instance and hide the class from the rest of the code.

This is actually pretty straightforward. Through the use of javascript modules plus passing by reference, we can implement singleton this way.

### Using a Service to serve the instance for your use case [singleton 2]
Note that the implementation i did here is just passing the DB instance to the Service Prototype. Not sure if this is efficient or even a correct implementaton.
- Create a an instance
- Define a static member where in we will sto re the instance of our singleton.
- Define abstracted functions ( if you want to further abstract the singleton's functions )
- Access singleton through `Service.singleton.method|attr`;

I am not really sure how to implement this but singleton-2.js was what I came up with.
- This is the simplest and the only implementation i can do if i want to use constructor function ( i dont know why i want to use this. ) 
- In essence, we are serving the `database` instance as a prototype prop of the Service. 
- As we all know, if the prop is not a MEMBER, js will look into the prototype if it exist.

### Using ES6 Class and Static ( a class keyword, only works in the class context)
- Same as singleton-2 ( actually the singleton-2 implementation) but ACTUALLY USING ES6 Class instead of functions.