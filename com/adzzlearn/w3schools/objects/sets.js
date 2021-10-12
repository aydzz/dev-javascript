/**
 * A JavaScript Set is a collection of unique values.
 * Each value can only occur once in a Set.
 * A Set can hold any value of any data type.
 */


/**
 * This should be used when the UNIQUENESS is introduced to the problem.
 */


/**
 * For us, to enforce comparator, we need to use a utility function that accepts the objects that we want to  compare.
 */

function isEqual(otherObject){
    for(let item in this){
        if(this[item] !== otherObject[item]){
            return false;
        }
    }
    return true;
}



const mySet = new Set();

mySet.add("sample");
mySet.add(1);
mySet.add({"ID":'00001', "name":"Sample Name"}) // can store any datatype

console.log(mySet)


for(let item of mySet){
    if(typeof(item) === "object"){
        console.log("we got an object")
    }else{
        console.log("We dont have an object");
    }
}

console.log(typeof("sample") === "string")

mySet.forEach(function(value){
    console.log("Printing a value: " + value);
})


console.log(mySet.has({"ID":'00001', "name":"Sample Name"}))
console.log(mySet.has("sample"))

const sampleObject = {"ID":'00001', "name":"Sample Name"};
const sampleObject2 = {"ID":'00001', "name":"Sample Name 2"}
console.log(sampleObject === sampleObject);

console.log("Objects are equal: " + isEqual.call(sampleObject, sampleObject2));
