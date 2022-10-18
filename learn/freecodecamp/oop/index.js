function Bird(name){
    this.name = name;
}

console.log(Object.entries(new Bird("Duck")));

for([prop,val] of (Object.entries(new Bird("Duck")))){
    console.log(val);
}


const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);

  console.log(entries);