/*--- Using a for loop ---*/
function isPalindrome(str) {
  str = str.toLowerCase();
  // Remove all spaces
  str = str.replaceAll(' ', '');
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false;
  }
  return true;
}

/*--- Using array to reverse string ---*/
// function isPalindrome(str) {
//   // regular expression to replace all spaces
//   str = str.toLowerCase().replaceAll(' ', '');
//   return str === str.split('').reverse().join('');
// }
