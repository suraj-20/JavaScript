const sumOfThreeNumbers = (a, b, c) => {
  return a + b + c;
}

console.log(sumOfThreeNumbers(1, 2, 3));  // 6


const sumOfTreeNumbersWithCurrying = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    }
  }
}

const aFunction = sumOfTreeNumbersWithCurrying(3);  // Returns a function
const anotherFunction = aFunction(2);   // Return a function agarin
const andAnotherFunction = anotherFunction(1);   // Return value

console.log(andAnotherFunction); // 6