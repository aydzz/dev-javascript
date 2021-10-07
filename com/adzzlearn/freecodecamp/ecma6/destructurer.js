//following ECMA5
const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34

//following ECMA6, same will happen but with cleaner code.
//the name and age variable would be mapped with the same object attribute name and its value.
const { name, age } = user;
// name = 'John Doe', age = 34


//using new names instead of old ones (INITIAL_NAME : NEW_NAME)
const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34

//referencing to a nested object
const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };

  //variable with same name
  const { johnDoe: { age, email }} = user;
  //variable with new name
  const { johnDoe: { age: userAge, email: userEmail }} = user;

//--------------------------------------------------------------------------
//activity : destructuing
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  const {today, tomorrow} = HIGH_TEMPERATURES;
  
  // Only change code above this line

//activity : destructuing with name
  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  const { today: hightToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
  
  // Only change code above this line
  
  //activity : destructuing for nested object
  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
  const{today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
  
  // Only change code above this line
  

