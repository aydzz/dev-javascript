function sample(){
    "use strict";
    let x = 10;
    //var x = 13;
    console.log(x);
}
sample();

var someFunc;
function sampleB(){
    for(var i = 0; i < 5; i++){
        if(i === 3){
            someFunc = function(){
                return i;
            }
        }  
    }
}

console.log(sampleB());
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}

console.log(printNumTwo());
// returns 3

let sampleFunc = (z) => console.log("sampleFunctionZ" + z);

sampleFunc("ADASDSA")