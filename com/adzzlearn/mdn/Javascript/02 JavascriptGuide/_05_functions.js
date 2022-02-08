function sample1(var1){
    console.log(var1)
}

class SampleObject{
    name = "_defaultName";
    age = "0";
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("Hi, I am " + this.name);
    }
}

let sampleObject = new SampleObject("Adrian","23");

let result = [1, 2, 3, 4, 5].map(function(value,index,array) {
        this.greet();
        if(value === 1){
            return true;
        }else{
            return false;
        }
    }, sampleObject);

console.log(result);


// some test for recursion here.

var global = this;

var sillyFunction = function(recursed) {
    if (!recursed) { return arguments.callee(true); }
    if (this !== global) {
        console.log('This is: ' + this);
    } else {
        console.log('This is the global');
    }
}

sillyFunction();


//argument callee usage:

