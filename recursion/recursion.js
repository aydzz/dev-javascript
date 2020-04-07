function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
  function multiplyRec(arr, n) {
   
    if (n <= 0) {
      return 1;
    } else {
       
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

var countdown = function(value) {
    if (value > 0) {
        console.log(value);
        return countdown(value - 1);
    } else {
        return value;
    }
};

function addition(arr,until){
    if(until <=0){
        return 0;
    }else{
        return addition(arr, until - 1) + arr[until - 1];
    }
}
function factorial(num){
    if(num <=0){
        return 1;
    }else{
        return num * factorial(num - 1);
    }
}

function oddEven(number){
    if(number == 0){
        return "Even";
    }else if(number < 0){
        return "Odd";
    }else{
        return oddEven(number - 2);
    }
}

countdown(10);
console.log(multiply([1,2,3,4],4));
console.log(multiplyRec([1,2,3,4],4));
console.log(addition([1,2,3,4],4));
console.log(factorial(6));
console.log(oddEven(10021));
console.log(oddEven(101));
