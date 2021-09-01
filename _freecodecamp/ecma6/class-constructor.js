// ES6: Use class Syntax to Define a Constructor Function

//sample in es5
//this is like object declaration since SpaceShuttle returns an object with targetPlanet parameter.
//the parameter was created by the constructor function

//NOTE: I was a little confused at first since this is a function and why did it become an object?
//the declaration of the function SpaceShuttle such as `var zeus = new SpaceShuttle('Jupiter');` made it so.

var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
  var zeus = new SpaceShuttle('Jupiter');

//sample in es6 class and constructor
//here, it is more straightforward. the class is the object and the constructor do the initialization
class SpaceShuttleB {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }

    sample(){
        return 10;
    }
    
  }
  const zeusB = new SpaceShuttleB('Jupiter');
  console.log(zeusB);
  console.log(zeus);
  console.log(zeusB.sample())

let someObject = {};
    someObject["sample"] = zeus;
    console.log(someObject.sample);

var SampleFunction = function(something){
    this.something = something;
}
class SampleFunctionB{
    constructor(something){
        this.something = something
    }
}

var definitelyAnObject = {};

console.log(typeof SampleFunction("adrian"));
console.log(typeof zeus);
console.log((typeof definitelyAnObject));

let object = {a:"a",b:"b"};
function Student(name){
    this.name = name;
}
class Faculty{
    constructor(object){
        //to avoid overloading
        this.a = object.a;
        this.b = object.b;
        
    }
}

let person = new Student("Adrian");
let faculty = new Faculty(object);
console.log(faculty.a);


//So basically the class here or js object is a function that is instantiated with new keyword using `this` keyword within. OR
// simply in ECMA6 a class with a constructor.
//note that the class is not CAMEL CASE hence UPPER CAMEL CASE ThisIsASampleClassName;

