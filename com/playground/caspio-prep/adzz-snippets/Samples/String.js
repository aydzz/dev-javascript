let stringA = "Hello World!";
let stringB = new String("Hello World in another Variable!") 

// console.log(stringA);
// console.log(stringB);



//extracting part of strings slicing
function stringSlicing(){
    console.log(stringA.slice(2,3))
    console.log(stringB.slice(5, 10))
    console.log(stringA.slice(-5))
}

function stringSubString(){
    let str = "Apple, Banana, Kiwi";
    console.log(str.substring(6,13));
}

function stringReplace(){
    let str = "Apple, Banana, Kiwi";
    console.log(str.replace("Apple","Mango"));

}

function stringConcat(){
    let str = "Apple, Banana, Kiwi";
    let newStr = str.concat(str, ", Adrian", ", Audric");
    console.log(newStr);
}

function stringTrim(){
    let str = "Apple, Banana, Kiwi";
    console.log("    ADRIAN PAUL     ".trim());
}

stringTrim();

function stringPadding(start = true){
    let str = "109"
    if(start){
        console.log(str.padStart(5,"0"));
    }else{
        console.log(str.padEnd(5,"x"));
    }
}

let glString = "Hello YellO World!";

console.log(glString.charAt());

console.log(glString.indexOf("or"));
console.log(glString.search("rld!"));

console.log(glString.match(/[A-Za-z]ello/ig));
console.log(glString.includes("Hell"));
