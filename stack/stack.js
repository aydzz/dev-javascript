var obj = {
    "a":"first",
    "b":"second",
    "c":{
        "another":"object"
    },
    "sampleArray":[{
        "element1":"element!",
        "element2":"element again!"
    }]
}
var arr = [1,2,3];
var album = {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD",
      "Cassette",
      "LP"
    ],
    "gold": true
  }
  // Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
var empty = {};
function sampleFunction(){
empty["elementA"] = "Adrian";
empty["elementB"] = "Paul";
empty["elementC"] = "Rolloque";
empty["elementD"] = {"elementDA":"THIS IS DUPLICATE"};
return empty;
}


console.log(obj.sampleArray[0].element1);
console.log(album.formats[1]);
console.log(sampleFunction().elementA);
console.log(empty.elementB);
console.log(empty.elementD.elementDA);
//delete collection[5439];
console.log(collection[5439]["album"]);