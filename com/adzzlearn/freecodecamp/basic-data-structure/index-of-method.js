// Basic Data Structures: Check For The Presence of an Element With indexOf()

// Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece 
// of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with 
// another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element 
// on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, 
// of that element, or -1 if the element does not exist on the array.

// For example:

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, the first index at which the element exists

//NOTE: I WILL TRY IF I COULD FIND AN INSTANCE OF AN OBJECT HERE!

let adrian = {
        name: "adrian",
        age: 21,
        sex: false,
        school: "PUP"
}
let adrian2 = {
    name: "adrian",
    age: 21,
    sex: false,
    school: "PUP"
}

let sampleArray = [1,true,"string",[1,2,3],adrian,true];

console.log(sampleArray.indexOf(adrian));
console.log(sampleArray.indexOf(adrian2));
console.log(sampleArray.indexOf([1,2,3])); // even though this array is equal, arrays are objects so i think we need the specific instance.
console.log(sampleArray.indexOf("string"));
console.log(sampleArray.indexOf(true)); // the first instance is the index that was called which is index 1


//turns out that it could see the object instance.

//activity

// indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. 
// We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function 
// using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

function quickCheck(arr, elem) {
    // Only change code below this line
    if(arr.indexOf(elem) >= 0){
      return true;
    }else{
      return false;
    }
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
  
