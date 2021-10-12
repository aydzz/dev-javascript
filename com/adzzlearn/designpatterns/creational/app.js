import Singleton  from './_singleton/_SingletonTemplate.js'

Singleton.instance.query("hello");
console.log(Singleton.instance.ID)
console.log(Singleton.instance.ID)

const connectorA = Singleton.instance;
const connectorB = Singleton.instance;

console.log(connectorA === connectorB);



let r = (Math.random() + 1).toString(36).substring(2);
console.log("random", r);
console.log((1.133).toString(12))
console.log((Math.random() * (9 *Math.exp(10))).toString(16));
