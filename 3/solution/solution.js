/*--- okay solution ---*/
function sumNumbers(nums) {
  let sum = 0;
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

/*--- better solution (use forEach unless you have to exit loop early) ---*/
// function sumNumbers(nums) {
//   let sum = 0;
//   nums.forEach(function(num) {
//     sum += num;
//   });
//   return sum;
// }

/*--- best solution (don't worry, this will make sense soon enough) ---*/
// function sumNumbers(nums) {
//   return nums.reduce((sum, num) => sum += num, 0);
// }