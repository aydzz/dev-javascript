'use strict';
class SampleClass{
    constructor(name = "Adrian", age="22"){
        this.name = name;
        this.age = age;
    }
}

let buffer = new ArrayBuffer(16);
if (buffer.byteLength === 16) {
    console.log("Yes, it's 16 bytes.");
  } else {
    console.log("Oh no, it's the wrong size!");
}

console.log((new SampleClass()))

let myTag = (str, name, age) => `${str[0]}${name}${str[1]}${age}${str[2]}`;
let [name, age] = ['Mika', 28];

// Participant "Mika" is 28 years old.
console.log(myTag`Participant "${ name }" is ${ age } years old.`)

//throw "yow"

// Create an object type UserException
function UserException(message) {
    this.message = message;
    this.name = 'UserException';
  }
  
  // Make the exception convert to a pretty string when used as a string
  // (e.g., by the error console)
  UserException.prototype.toString = function() {
    return `${this.name}: "${this.message}"`;
  }
  
  // Create an instance of the object type and throw it
  //throw new UserException('Value too high');

const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}

console.log(arr)

let sampleObj = {
    first: "first",
    second: "second",
    third(){
        return "third"
    }
}   

console.log(sampleObj)

for (let key in sampleObj){
    console.log(key)
}

for (let val of sampleObj){
    console.log(val)
}



