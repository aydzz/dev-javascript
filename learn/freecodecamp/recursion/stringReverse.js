//Use recursion to return the Reversed String series of the Input String ( i did this with array input)
var reversed = [];
var sampleStringArray = ["r","a","c","e"];
function stringReverse(arr){
    if(arr.length < 1){
        return reversed;
    }else{
        reversed.push(arr.pop());
        return stringReverse(arr);
    }
}
console.log(stringReverse(sampleStringArray)) //should return "ecar"