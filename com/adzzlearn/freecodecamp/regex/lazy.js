let text = "<100><h1>Winter is coming</h1><h2></h3?>";
let myRegex = /<.*?>/; // Change this line
let regex2 = /win*/i
let result = text.match(myRegex);
console.log(result)
console.log(text.match(regex2))

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);

console.log(firstRegex.test(firstString))
console.log(firstString.match(firstRegex))
console.log(firstRegex.test(notFirst))
console.log(notFirst.match(firstRegex))

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "iiiiimportant_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

console.log(varNames.match(longHand))
console.log(varNames.match(shortHand))
console.log(varNames.match(/.+por[a-zA-Z]+/))

let quoteSample3 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result3 = quoteSample3.match(alphabetRegexV2).length;

console.log(result3)