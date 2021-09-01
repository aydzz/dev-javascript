var sampleArr = [2, 3, 4, 5];

function sumUntil(arr,n){
    if(n <= 0){
        return 0; // sum until element 0? which is nothing to sum up
    }else if(n === 1){
        return arr[n - 1] //nothing to add with the first element
    }else{
        return arr[n - 1] + sumUntil(arr,n - 1);
    }
}

console.log(sumUntil(sampleArr, 4));

