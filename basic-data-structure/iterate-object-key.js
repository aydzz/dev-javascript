let sampleObject = {
    varA : "varA",
    varB : "varB",
    varC : "varC",
    varD : "varD",
    varE : "varE",
    objB : {
        a : "a",
        b : "b",
        c : "c",
    }
}


for(let element in sampleObject){
    console.log(sampleObject[element]);
}

console.log(Object.keys(sampleObject));
