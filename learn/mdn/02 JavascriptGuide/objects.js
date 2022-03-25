let sampleOjbect = {
    name: "Adrian",
    age: 22,
    isMale : true
}

class Sample{
    constructor(params) {
        [this.name, this.age, this.isMale] = [...params];
    }
}
    

let sample = new Sample("Adrian",22, true)


console.log(Object.getOwnPropertyNames(sampleOjbect));

console.log(Object.getOwnPropertyNames(sampleOjbect).join("-"));
