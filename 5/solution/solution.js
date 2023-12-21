/*--- Not using the modulus operator ---*/
function computeRemainder(dividend, divisor) {
  if (divisor === 0) return Infinity;
  return dividend - (Math.floor(dividend / divisor) * divisor);
}

/*--- Using the modulus operator ---*/
// function computeRemainder(dividend, divisor) {
//   if (divisor === 0) return Infinity;
//   return dividend % divisor;
// }
