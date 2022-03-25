function Database(name){
    this.name = name;
    this.counter = 0;
    this.incrementCounter = ()=>{
        this.counter++;
    }
}
/**
 * This is the simplest and the only implementation i can do if i want to use constructor function ( i dont know why i want to use this. ) 
 * In essence, we are serving the database as a prototype prop of the Service. 
 * As we all know, if the prop is not a MEMBER, js will look into the prototype if it exist.
 */
function Service(){
    if(Service.prototype.database ==null){
        Service.prototype.database = new Database("sample");
    }
}

console.log((new Service()).database.incrementCounter());//counter = 1
console.log((new Service()).database.incrementCounter());//counter = 2
console.log((new Service()).database.incrementCounter());//counter = 3
console.log((new Service()).database.counter);

Service.prototype.database = "new value"; //this will change the the single instance we are serving

console.log((new Service()).database)