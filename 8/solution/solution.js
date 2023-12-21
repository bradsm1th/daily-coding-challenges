/*--- Using substr String method ---*/
// function removeEnds(str) {
//   if (str.length < 3) return '';
//   return str.substr(1, str.length - 2);
// }

/*--- Using for loop ---*/
function removeEnds(str) {
  if (str.length < 3) return '';
  let result= '';
  for (let i = 1; i < str.length - 1; i++) {
    result += str.charAt(i);
  }
  return result;
}

