/* 
Rules:
When a symbol appears after a larger (or equal) symbol it is added
But if the symbol appears before a larger symbol it is subtracted
Don't use the same symbol more than three times in a row 

I: 1
V: 5
X: 10
L: 50
C: 100
D: 500
M: 1000
*/

/* 
accept user input
assign user input to variable

pass the variable to the evaluator
let x = number
loop

    check if the number is greater than 1000
        if yes, then get the quotion from the division
            iterate until you get the count of characters
            append final characters to temp list.
            return the remainder of the division.
        end if
        if no, then
            return the remainder of the division 
        end if
    end if for 1000

*/

let symbols = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1,
};

let temp = [];
let cond = {
    "done": false,
    "number": 0,
    "quotient": 0,
    "rem": 0,
    "iter":0
}
function convertToRoman(num) {
    cond.number = num;
    cond.quotient = 0;
}

console.log(symbols)

function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    console.log(digits)
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}