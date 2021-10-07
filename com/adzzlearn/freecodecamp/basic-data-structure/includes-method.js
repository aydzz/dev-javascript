function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
      for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "object"){
          if(!arr[i].includes(elem)){
              newArr.push(arr[i]);
          }
        }
      }
    // Only change code above this line
    return newArr;
  }
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  //testing with object

let sampleObject = {
    varA : "THIS IS VAR A",
    varB : true,
    varC : 10
}

console.log(sampleObject.hasOwnProperty("varA")); // i think there is some shorter method to check for object property

  