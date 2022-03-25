const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];

//   webTechs.forEach(function(val,i,arr){
//       console.log(arr);
//   });

Array.prototype.myForEach = function(callback){
    let sample = 'Hello World!';
    callback(sample);
}
  
webTechs.myForEach(function(value){
    console.log(value);
})

console.log(Array.prototype);