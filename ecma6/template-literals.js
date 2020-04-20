const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  
  // Template literal with multi-line and string interpolation
  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  
  console.log(greeting); // prints
  // Hello, my name is Zodiac Hasbro!
  // I am 56 years old.

//activity
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
  
    // Only change code below this line
    const resultDisplayArray = []; // initially equal to null
    for(let i = 0; i< arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    // Only change code above this line
  
    return resultDisplayArray;
  }
  
  const resultDisplayArray = makeList(result.failure);
  console.log(resultDisplayArray);