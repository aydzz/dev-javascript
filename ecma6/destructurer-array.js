const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
// The variable a is assigned the first value of the array, and b is assigned the second value of the array. 
// We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
const [x, y,,, z] = [1, 2, 3, 4, 5, 6];
console.log(x, y, z); // 1, 2, 5


//activity
// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
let c = 8, d = 6;
// Only change code below this line
[c,d] = [d,c];

console.log(c);
console.log(d);

//so basically destructuring the array ( assigning the value of the array element to the left side's element not as an array object but
//                                       individual variable [a] = [1,2] // 1)

let sampleObject = {
    varA : "this is a string",
    varB : 2,
    varC : true,
    varD : {
        subVarA : false
    }
}

let {varA :newVarA, varD:{subVarA: newSubVarA}} = sampleObject;

console.log(newVarA);
console.log(newSubVarA);

let sampleArray = [1,2,3,4];

const [e,f] = sampleArray;
const [...g] = sampleArray;
const [h,i,...j] = sampleArray; //j will take the rest of the element
console.log(e + " and " + f);
console.log(g);
console.log(h + " and " + i);
console.log(j);
console.log(sampleArray);


