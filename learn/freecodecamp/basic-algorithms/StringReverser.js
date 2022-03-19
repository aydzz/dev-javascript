
function reverseThisString(sample){
    let reverse = [];
    for(let i = sample.length -1; i >= 0; i--){
        reverse.push(sample[i]);
    }
    console.log(reverse.join("")); //will not change the value of the variable. Only returns the needed array with specific separator
    console.log(reverse);
    return reverse;
}

let sample  = reverseThisString("Hack me Dawg!");
console.log(sample);
console.log(sample.join(""));
console.log(sample[1]);
