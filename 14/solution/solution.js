/*--- using forEach ---*/
function fromPairs(arr) {
  let obj = {};
  arr.forEach(function(kvArr) {
    obj[kvArr[0]] = kvArr[1];
  });
  return obj;
}

/*--- using reduce & arrow function ---*/
// function fromPairs(arr) {
//   return arr.reduce((obj, kvArr) => {
//       obj[kvArr[0]] = kvArr[1];
//       return obj;
//   }, {});
// }