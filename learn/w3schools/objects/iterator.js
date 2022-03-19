/**
 * You can convert your object to iterable object.
 * But for now, i think i will pass on learning this.
*/ 
const arr1 = [1,2,3,4,5]
const myObject = {};
const myNumbers = {};

myObject[Symbol.iterator] = function(){
    let n = 0;
    let done = false;
    return {
        next(){
            n+=1;
        }
    }
}

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10; 
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

// let text = ""
// for (const num of myNumbers) {
//     console .log(num)
// }

var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
const sampleArray = [...myIterable] // [1, 2, 3]

console.log(sampleArray)

for(let item of sampleArray){
  console.log(item);
}




//but i think i am more comfortable using the common item key accessor.
let myObject01 = {
  "first": "first",
  "second": "second",
  "third": "third"
}

for(let item in myObject01){
  console.log(myObject01[item])
}


