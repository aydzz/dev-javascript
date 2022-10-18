function Bird(name){
    this.name = name;
}

function Dog(name){
    this.name = name;
}
const duck = new Bird("Duck");
const dog = new Dog("dog");

console.log(Bird.prototype.hasOwnProperty("name")); // take note that prototype is also an object, so this will return false.
console.log(Bird.hasOwnProperty("name")); //will return true


//Trying to change/ override the Objedct prototype props.

Object.prototype.hasOwnProperty = function(param){
    if(param && param === "Hello World"){
        return true;
    }else{
        console.log("HAAA, changed the Object's hasOwnProperty");
        false;
    }
}


console.log(Bird.prototype.hasOwnProperty("name"));
console.log(Bird.hasOwnProperty("name"));

console.log(Object.prototype.isPrototypeOf(dog)); //true
console.log(Object.prototype.isPrototypeOf(duck)); //true

console.log(Bird.prototype.isPrototypeOf(duck));//true
console.log(Dog.prototype.isPrototypeOf(duck));//false
