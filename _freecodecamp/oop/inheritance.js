function Human(name, age){
    this.name = name;
    this.age = age;
    this.greetings = function(){
        console.log(`Hi, My name is: ${this.name} and I am ${this.age}`)
    }
}

class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greetings(){
        console.log(`Hi, My name is: ${this.name} and I am ${this.age}`)
    }
}

function Boy(name, age, gender = "Male"){
    Human2.call(this, name,age);
    this.gender = gender;
}


let boy = new Boy("Adrian", 22);

console.log(boy)