// Regular expressions are used in programming languages to match parts of strings. You create patterns to help you 
// do that matching.

// If you want to find the word "the" in the string "The dog chased the cat", you could use the following 
// regular expression: /the/. Notice that quote marks are not required within the regular expression.

// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. 
// The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), 
// and returns true or false if your pattern finds something or not.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true

//activity
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result);

//NOTE: REGEX strings are case sensitive when searching.

// Using regexes like /coding/, you can look for the pattern "coding" in another string.

// This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using 
// the alternation or OR operator: |.

// This operator matches patterns either before or after it. For example, if you wanted to match "yes" or "no", 
// the regex you want is /yes|no/.

// You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators 
// separating them, like /yes|no|maybe/.

let myStringA = "This string h@s symbols and numb3r5 in it!";
let myRegexA = /@|3/;
let myRegexB = /string/;

console.log(myRegexA.test(myStringA));
console.log(myRegexB.test(myStringA));

// Sometimes you won't (or don't need to) know the exact characters in your patterns. 
// Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .

// The wildcard character . will match any one character. 
// The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. 
// For example, if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true