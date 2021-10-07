
var cache = [];
var duplicates = [];
var sampleArray = [1,2,3,4,5,4,6,4,7,5,7]
function duplicateFinder(arr){
    if(arr.length < 1){
        return duplicates.sort((a,b) => b - a); // sorts in descending
    }else{
        if(cache.includes(arr[arr.length - 1])){ // checks if the last element has been called in cache
            if(!duplicates.includes(arr[arr.length - 1])){
                duplicates.push(arr[arr.length - 1]);
            }
        }else{
            cache.push(arr[arr.length - 1]);
        }
        arr.pop();
        return duplicateFinder(arr);
    }
    
}

console.log(duplicateFinder(sampleArray));