const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }

  //i think we could export specific functions when we used the script tag like this:
//  <script type="module" src="script_name.js"></script>
  export {uppercaseString, lowercaseString}

  //export is to use a code block
//NOTE: I think including methods and parameters to export is equivalent to public methods. which you can access to other script using `import`
//      keyword.


//to import a codeblock, this is the way.
import {uppercaseString, lowercaseString} from './string_functions.js'
// Only change code above this line
uppercaseString("hello");
lowercaseString("WORLD!");

//with this line of code, you could import all (*) exportable codeblocks in a script file
import * as myMathModule from "./math_functions.js";

myMathModule.add(2,3);
myMathModule.subtract(5,3);

//i did not really understand this but this is another usage of export.

// named function
export default function add(x, y) {
  return x + y;
}

// anonymous function
export default function(x, y) {
  return x + y;
}

// i also dont know how to utilize this. but this is used when there is usually just a single codeblock to be exported.
//study this later


  