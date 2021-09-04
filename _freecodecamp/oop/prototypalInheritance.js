function Person(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  };
  
  //adding a prototype mod
  
  Person.prototype.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };

  function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
  
    this.subject = subject;
  }

  Teacher.prototype = Object.create(Person.prototype);

  console.log(Teacher.prototype)
  console.log(Teacher.prototype.constructor);

  Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true });

console.log(Teacher.prototype)
console.log(Teacher.prototype.constructor);