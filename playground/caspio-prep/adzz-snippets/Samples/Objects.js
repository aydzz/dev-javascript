function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`Hi there, my name is ${name} and I am ${age} years old!`);
    }
}








/**
 * 
 * @param {Person} anotherPerson 
 */
Person.prototype.isEqual = function(anotherPerson){
    if(anotherPerson.name == this.name && anotherPerson.age == this.age){
        return true;
    }else{
        return false;
    }
}

Person.prototype.talk = function(text){
    console.log(`${this.name}: ${text}`);
}

let samplePerson = new Person("Adrian","23");
let adrian = new Person("Adrian", 23);
let adrianB = new Person("Adrian",23);

console.log(adrian.isEqual(adrianB));

let Animal = Object.create(samplePerson);

//Animal["age"] = 25
console.log(Animal.age);
console.log(samplePerson.age);

console.log(Animal.isEqual(samplePerson));
Animal.talk("Hello there!")
