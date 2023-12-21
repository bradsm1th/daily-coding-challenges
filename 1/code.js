/*-----------------------------------------------------------------
Challenge: 13-mumble
Difficulty: Intermediate
Prompt:
- Write a function called mumble that accepts a single string argument.
- The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
- Examples describe it best..
Examples:
mumble('X'); //=> 'X'
mumble('abc'); //=> 'a-bb-ccc'
mumble('121'); //=> '1-22-111'
mumble('!A 2'); //=> '!-AA-   -2222'
-----------------------------------------------------------------*/
// Your solution for 13-mumble here:

function mumble(str) {
    // store array of chars so i have their index
    const chars = [...str];
    let result = [];
  
    for (let i = 0; i < chars.length; i++) {
      // add that char that # of times
      let timesToPrint = i+1;
      while (timesToPrint > 0) {
        result.push(chars[i])
        timesToPrint--;
      }
      // add the hyphen separator except after the last element
      if (i + 1 !== chars.length) { 
        result.push('-');
      }
    }
      // turn result back into a string
    return result.join('');
  }