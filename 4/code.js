/*-----------------------------------------------------------------
Challenge: 04-addList
Difficulty: Basic
Prompt:
- Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum.
- Assume all parameters will be numbers.
- If called with no arguments, return 0 (zero).
Examples:
add(1) //=> 1
add(1, 50, 1.23) //=> 52.23
add(7, -12) //=> -5

Hint:  Check out the Further Study section of the JS Functions lesson regarding "rest parameters"
-----------------------------------------------------------------*/
// Your solution for 04-addList here:

function addList(...numbers) {
  // if the length of the arguments is falsy, aka 0, then there's no arguments
  if (!numbers.length) {
    console.log("false! empty array!");
    return 0;
  } else {
    // otherwise, there are arguments…sum them up!
    console.log("true! non-empty array!");
    return (Array.from(numbers)).reduce((acc, x) => acc + x);
  }
}