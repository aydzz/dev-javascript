var someObject = { another: {
                    A : "adrian",
                    B : 1
                    },
                anotherOne: {
                    a : "adrianOne",
                    b : "bitchOne"
                }
                }

const {another: {A : sampleA, B: sampleB}, anotherOne: {a: sampleC, b: sampleD}} = someObject;

console.log(someObject.another.B);
console.log(someObject.anotherOne);
console.log(sampleA);
console.log(sampleD);

