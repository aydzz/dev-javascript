
function stringToInteger(str){
    return parseInt(str); //straight forward parsing of string to integer
}

function parseBinToDecimal(str){
    return parseInt(str,2); //returns an integer from binary string str
}
function parseOctToDecimal(str){
    return parseInt(str,8); //returns an integer from octal string str
}
function parseDecToDecimal(str){
    return parseInt(str,10); //returns an integer from decimal string str
}
function parseHexToDecimal(str){
    return parseInt(str,16); //returns an integer from hex string str
}

console.log(parseBinToDecimal("11"));
console.log(parseOctToDecimal("11"));
console.log(parseDecToDecimal("11"));
console.log(parseHexToDecimal("11"));