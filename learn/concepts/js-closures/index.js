function Human(){
    var privateName = "John Private Doe"
    this.getName = function(){
        return function(){
            return privateName;
        }();
    }();
}

console.log(new Human().getName)