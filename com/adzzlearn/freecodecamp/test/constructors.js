class Human{
    constructor(name, age,sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    get myName(){
        return this.name + "PUTA"
    }
    set myName(newName){
        this.name = newName;
    }
}
let sample = new Human("Adrian", 22, null)
console.log((sample))

Human.prototype = {
    race: "Asian",
    birthday: "01012021"
}

console.log(sample);

console.log(sample instanceof Human);
console.log(sample.constructor === Human)
console.log(sample.constructor === Object)

