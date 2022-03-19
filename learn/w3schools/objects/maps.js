const myMap = new Map();

for(let x = 0; x < 10; x++){
    myMap.set(x,"val"+x);
}


myMap.set(1, "newValue");

console.log(myMap)

// myMap.forEach(function (key,val){
//     console.log(key);
//     console.log(val);
// });
console.log(myMap.keys().next());
console.log(myMap.keys().next());
console.log(myMap.keys().next().done);

for(let item of myMap.keys()){
    console.log(item);
}

for(let item of myMap.values()){
    console.log(item);
}

for(let x = 0; x < 10; x++){
    console.log(myMap.keys().next())
}