/*--- Using the padStart String method ---*/
// function formatWithPadding(int, char, length) {
//   return int.toFixed(0).padStart(length, char);
// }

/*--- Using for while loop ---*/
function formatWithPadding(int, char, length) {
  let result = int.toFixed(0);
  while (result.length < length) {
    result = char + result;
  }
  return result;
}

