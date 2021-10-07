let user = {
            firstName: "Adrian Paul",
            middleName: "Capistrano",
            lastName: "Rolloque",
            age: "21",
            course: "BS Computer Engineering",
}

//this is the long way to pass the user as a parameter ( passes the object as parameter)
let firstWay = (userData) => {
    let {firstName, middleName, lastName, age, course} = userData;
    console.log("-- this is the first way --");
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
    console.log(age);
    console.log(course);
}
//in this case when you passed the object, since parameters is destructured upon passing the object, you dont need to declare 
//the variables in the functional scope.
function secondWay({firstName, middleName, lastName, age, course}){
    console.log("-- this is the second way --");
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
    console.log(age);
    console.log(course);
}
firstWay(user);
secondWay(user);

console.log(Math.floor(Math.random() * 100));