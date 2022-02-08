const myPromiseA = new Promise((resolve, reject) => {
    let promiseFulfilled = true // or false base on the situation
    if(promiseFulfilled){
        resolve("Promise was fulfilled!");
    }else{
        reject("Promise was not fulfilled!");
    }
});

const mypromise = new Promise((res,rej) => {
    let condition = false;
    console.log(typeof(res));
    console.log(typeof(rej));
    console.log((res.toString()));
    console.log((rej.toString()));
    if(condition){
        
        res("success");
    }else{
        rej("fail")
    }
});

mypromise.then((res)=>{
    console.log(res)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("I think talagang kahit ano lang dito, since FINALLY NGA.")
});

mypromise.then(function(res){
    console.log("new" + res)
},function(err){
    console.log("new" + err);
});;