
function one(argOne) {
  return function two(argTwo) {
    return function three(argThree) {
      console.log(argOne + argTwo + argThree);
    }
  }
}

one(1)(2)(2)