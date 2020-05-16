'use strict'
function findLongestWordLength(str) {
    let sample = str.split(" "); // split will split the strings into element to an array with the defined separator
    let len = 0;
    let temp;
    for(let i = 0; i < sample.length; i++){
        if(len < sample[i].length){
          len = sample[i].length;
          temp = sample[i];
        }
    }
    return temp;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  