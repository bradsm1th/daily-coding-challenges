/*--- BEST SOLUTION:  Use rest paramater syntax (ES2015) then reduce ---*/
// function addList(...nums) {
//   // nums will be an array containing all arguments 
//   return nums.reduce((sum, num) => sum + num, 0);
// }


/*--- using the arguments keyword (array-like object) and a for loop ---*/
function addList() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

/*--- make arguments a true array then forEach ---*/
// function addList() {
//   let nums = Array.from(arguments);
//   let sum = 0;
//   nums.forEach(function(num) {
//     sum += num;
//   });
//   return sum;
// }
