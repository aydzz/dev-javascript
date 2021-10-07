// Regular Expressions: Match Letters of the Alphabet
// You saw how you can use character sets to specify a group of characters to match, 
// but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). 
// Fortunately, there is a built-in feature that makes this short and simple.

// Inside a character set, you can define a range of characters to match using a hyphen character: -.

// For example, to match lowercase letters a through e you would use [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

//activity

// Match all the letters in the string quoteSample.

// Note
// Be sure to match both upper- and lowercase letters.

//NOTE: I dont really understand why but here:
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line


// Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

// For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

// Also, it is possible to combine a range of letters and numbers in a single character set.
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);

//activity
// Create a single regex that matches a range of letters between h and s, and a 
// range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.

let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/gi; // Change this line
let result2 = quoteSample2.match(myRegex); // Change this line

console.log(result2)
