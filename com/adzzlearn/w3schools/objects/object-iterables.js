const sampleString = "This is a sample string!";
const pattern = /\W/

for ( const letter of sampleString){
    if(pattern.test(letter)){
        console.log("This is not alpha nummeric!!!");
    }
    console.log(letter)
}

