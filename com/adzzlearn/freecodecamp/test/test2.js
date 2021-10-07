function Bird(name) {
    this.name = name;  //own property
  }
  
  Bird.prototype.numLegs = 2; // prototype property
  Bird.prototype.talk = function(){
      console.log(`Look, Im a Bird! Im ${this.name}!`)
  }
  
  let duck = new Bird("Donald");

  let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
duck.talk()