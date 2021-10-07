//Use recursion to get the summation of the number

function summation(num){
    if(num === 0){
        return 0;
    }else{
        return num + summation(num - 1);
    }
}

console.log(summation(4));