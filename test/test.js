var data = {
    "x" : 1,
    "y" : 2
};

if("x" in data){
    console.log("It's Here!");
    console.log("The value of B is: " + data["x"] + " or " + data.y);
}else{
    console.log("Not Here!");
}
console.log(data.hasOwnProperty("x"));