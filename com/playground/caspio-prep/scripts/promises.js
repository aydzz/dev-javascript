async function sample(){
    return true
}

let myVar = (async function(){
    return await sample();
})();


console.log(myVar);

function printer(text){
    console.log(text);
}

function textPrinter(text1,text2, myCallback){
    if(text1 != null && text2 != null){
        myCallback(text1 + text2);
    }
}
textPrinter("Adrian ", "Paul",function(text){
    console.log("The tetx you sent was: " + text);
});

function extractData(){
    return sample().then(function(e){
        if(e === true){
            return "The value is  true!";
        }else{
            return "The value is  false!";
        }
    });
}