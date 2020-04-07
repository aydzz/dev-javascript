//use recursion for this problem
var arr = [];
function rangeOfNumbers(startNum, endNum) {
    if(endNum < startNum){
        return;
    }else{
        //The reason why the last pushed number in the array is the max even though endNum is Decrementing is becuase the push() is called later than the recursion.
        //so looking at the call stack, after returning from the base case, which is call(sn, 0), the call(sn, 1) then call(sn, 2) would now be pushed to like
        //this [1,2]. so Basically, the first call would be the last to be pushed which is endNum, the reason why endNum would be the last in the array.
        rangeOfNumbers(startNum, endNum - 1);
        arr.push(endNum);
        return arr;
    }
};

console.log(rangeOfNumbers(19, 20));
  