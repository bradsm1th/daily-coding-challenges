/*--- convert one string to array and reduce ---*/
// function hammingDistance(s1, s2) {
//   if (s1.length !== s2.length) return NaN;
//   s1.split('').reduce(function(count, char, idx) {
//     return char !== s2.charAt(idx) ? count + 1 : count;
//   }, 0);
// }

function hammingDistance(s1, s2) {
  if (s1.length !== s2.length) return NaN;
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1.charAt(i) !== s2.charAt(i)) count++;
  }
  return count;
}

