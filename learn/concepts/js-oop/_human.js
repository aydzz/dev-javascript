function Human(name, age){
    this.name = name;
    this.age = age;

    this.talk = (text ="") => {
        if(text !== ""){
            console.log(text);
        }else{
            console.log("I dont know what to say!");
        }
    }

    this.socialSec = function(){
        return function(){
            return "ssnum123321";
        }();
    }();
}
