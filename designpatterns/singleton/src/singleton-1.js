function Database(name){
    this.name = name;
    if(this.instance == null || this.instace == undefined){
        console.log("Creating a new instance for database: " + this.name);
        this.instance = this;
    }else{
        console.log("Returning the first instance...");
        return this.instance;
    }
}

const database = new Database("MySQL");
Object.freeze(database);

export default database; 