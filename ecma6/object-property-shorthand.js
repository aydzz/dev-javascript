//Write Concise Object Literal Declarations Using Object Property Shorthand


//with  this, you can use the x and y and assign it to the return value manually
const getMousePosition = (x, y) => ({
    x: x,
    y: y
  });
//with object property shorthand, you could return an object using the x and y parameter directly
const getMousePositionA = (x, y) => ({ x, y });

console.log(getMousePosition(10,20));
console.log(getMousePositionA(30,40));

//activity
const createPerson = (name, age, gender) => {
    "use strict";
    // Only change code below this line
    return ({
      name,
      age,
      gender
    });

    // Only change code above this line
  };

  //when returning a direct object when performing lambda expression or arrow function, i think you should encasulate it within a '()'
  //since the braces after the arrow signifies a function body instead of object itself.

  let sampleFunction = (x,y) => ({x,y});
  function sampleFunctionA(x,y){
      return {x,y};
  }
  console.log(sampleFunction("adrian","paul").x);
  console.log(sampleFunctionA("adrianA","paulA").x);


