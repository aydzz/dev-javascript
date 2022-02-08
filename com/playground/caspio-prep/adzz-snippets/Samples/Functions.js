function Person(name, age){
    this.name = name;
    this.age = age;
}
function greet(){
    console.log(`${this.name}: Hello there!`);
}


greet.call(new Person("Adrian", 23));




