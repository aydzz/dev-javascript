var countArray = [];
function countUpTo(num){
    if(num <= 0){
        return;
    }else{
        countUpTo(num - 1);
        countArray.push(num);
        return countArray;
    }
}
var countArrayB = [];
function countDownFrom(num){
    if(num <= 0){
        return;
    }else{
        countDownFrom(num - 1);
        countArrayB.unshift(num);
        return countArrayB;
    }
}
console.log( countUpTo(3))
console.log(countDownFrom(3))