/**
 * Given a string, reverse each word in the sentence
 *  Step 1: get each string in the sentence
 *  Step 2: put it in an array.
 *  Step 3: reverse all chars of each word
 *  Step 4: append strings using the same delimiter.
 */


let sampleString = "Luke! I am your father!"

const stringCol = sampleString.split(" ");
let wordsReversed = "";
for(let word of stringCol){
    word.trim();
    let temp = ''
    for(let i = word.length - 1; i >=0; i--){
        temp+=word[i];
    }
    wordsReversed = wordsReversed + temp + " ";
}

console.log(wordsReversed.trim())

//there is a problem with this. What if we have a multiple white space per spacing? in this case, we need the regex to do the work.

//OTHER
//create a regex that matches a string before a group of whitespace.
//match the strings ONLY then do the other logic




