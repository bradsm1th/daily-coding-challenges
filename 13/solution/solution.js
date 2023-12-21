function mumble(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      // the ((i || '') && '-') only adds a dash if it's not the first iteration
      result += ((i || '') && '-') + str.charAt(i).repeat(i + 1);
    }
    return result;
  }
  
  /*--- convert to array and use reduce (break that one-liner down!) ---*/
  // function mumble(str) {
  //   return str.split('').reduce((result, c, i) => result + ((i || '') && '-') + c.repeat(i + 1), '');
  // }