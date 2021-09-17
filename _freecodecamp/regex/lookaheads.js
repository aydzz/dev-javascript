let password = "abc123";
let password2 = "%1abc123%";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

console.log(password.match(checkPass))
console.log(password2.match(checkPass))


let repeatNum = "42 42 42 42";
let reRegex = /(\d+) \1 \1/; // Change this line
let result = reRegex.test(repeatNum);
console.log(result)

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3, $2, $1"; // Change this line
let result2 = str.replace(fixRegex, replaceText);
console.log(str)
console.log(result2)

let hello = "   Hello, World!  ";
let wsRegex = /\s+.\s/; // Change this line
let result3 = hello.replace(wsRegex, ""); // Change this line
console.log(result3)

hello.length;