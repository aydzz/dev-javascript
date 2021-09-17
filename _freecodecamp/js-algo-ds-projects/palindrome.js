function palindrome(str) {
    let symbolsRegex = /[^a-zA-Z0-9]/g
    let cleanString = str.replace(symbolsRegex, "")
    let strLastIndex = str.length -1
    let temp = [];

    
    for(let x = cleanString.length; x >= 0; x--){
        temp.push(cleanString[x])
    }
    
    return temp.join("").toLowerCase() == cleanString.toLowerCase() ? true : false
  }
  