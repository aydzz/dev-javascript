// So far, you have only been checking if a pattern exists or not within a string. 
// You can also extract the actual matches you found with the .match() method.

// To use the .match() method, apply the method on a string and pass in the regex inside the parentheses. Here's an example:

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

console.log(result);

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
let ourRegexG = /Repeat/g;
console.log(testStr.match(ourRegex));
// Returns ["Repeat"]
console.log(testStr.match(ourRegexG));
//Returns [ 'Repeat', 'Repeat', 'Repeat' ]

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let resultB = twinkleStar.match(starRegex); // Change this line

console.log(resultB);

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let resultC = unRegex.test(exampleStr);

