let userlist = ["JACK","Jo","Oceans11","RegexGuru","Z97","AB1","BadUs3rnam3","c57bT3"]
let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z][A-Za-z]+\d$|[A-Za-z][A-Za-z]/; // Change this line
let result = userCheck.test(username);

for(x in userlist){
    console.log(`Testing: ${userlist[x]}-> ${userCheck.test(userlist[x]) ? "passed":"failed"}`)
}