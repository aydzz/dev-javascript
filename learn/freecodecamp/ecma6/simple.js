function countArgs(...args){
    console.log(args.length);
}

countArgs(1,2,3);

const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }

console.log(sum(1,2));

sampleArray = [1,2,3,4];
//reduce() is a function for ARRAYS with 4 parameters reduce(function(total, currentElement, index, arr),initialVal);
const sumB = (sampleArray) => {
    return sampleArray.reduce(function(a,b,c,d){
        console.log("The index: " + c);
        console.log("The array: " + d);
        return a + b;
    },1)
}

console.log(sumB(sampleArray));

//ES6: Write Concise Declarative Functions with ES6
//NOTE: we could use `this` keyword if we are within the object and is using an object attribute.

//this is for the traditional
const person = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
  };

//in es6 we could remove colon and the function keyword
const personB = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
  };

console.log(personB.sayHello());

//for activity
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);
  