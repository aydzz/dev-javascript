function generateArray(len){
    let arr = [];
    for(let i = 0; i < len; i++){
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}


console.log(generateArray(200));