function oddEven(number){
    if(number === 0){
        return "Even";
    }else if(number < 0){
        return "Odd";
    }else{
        return oddEven(number - 2)
    }

}

console.log(oddEven(11));