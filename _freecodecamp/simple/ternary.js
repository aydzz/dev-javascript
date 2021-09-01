//Format for Ternary (Conditional) Operator
    //condition ? statement-if-true : statement-if-false;
    //could also be nested like this
    // (a === b) ? "a and b are equal" 
    //         : (a > b) ? "a is greater" 
    //         : "b is greater";
var a = "a";
console.log(  a=== "a" ? true : false);
console.log( a === "b" ? true : false);

function checkSign(num) {
    return (num > 0) ? "positive"
                     : (num === 0) ? "zero"
                     : (num < 0) ? "negative" : "something went wrong";
}

console.log(checkSign(10));
console.log(checkSign(-10));
console.log(checkSign(0));
console.log(checkSign("a"));
