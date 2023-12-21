function range(start, finish) {
  if (start > finish) return 'First argument must be less than second';
  
  let range = [];
  for (let n = start; n < finish; n++) {
    range.push(n);
  }
  
  return range;
}