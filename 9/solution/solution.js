/*--- convert str to array and use reduce with a ternary ---*/
// function charCount(str) {
//   return str.split('').reduce(function(countObj, char) {
//     countObj[char] = countObj[char] ? ++countObj[char] : 1;
//     return countObj;
//   }, {});
// }

/*--- using a for loop ---*/
function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    // already seen this char?
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

