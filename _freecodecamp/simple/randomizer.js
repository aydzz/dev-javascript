
function coinflip(){
    if(Math.random() * 100 > 50){
        return "HEAD!"
    }else{
        return "TAIL!"
    }
}

function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    // Only change code above this line
  }
  

console.log(coinflip());
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(Math.random() * 100));

console.log(randomRange(1, 10));