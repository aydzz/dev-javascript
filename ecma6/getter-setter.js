//ES6: Use getters and setters to Control Access to an Object

//sample
class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut

//activity
// Only change code below this line
class Thermostat{
    constructor(fahren){
      this._fahren = fahren;
      this._celcius = (5/9 * (fahren - 32));
      console.log(this._celcius);
    }
    get temperature(){
      return this._celcius;
    }
    set temperature(updatedTemp){
        this._celcius = updatedTemp;
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  console.log(temp);

  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius
  console.log(temp);
