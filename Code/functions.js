// Arrow Function

// A. "this" in functions
const user = {
  name: "Walter White",

  // Normal function
  sayMyName: function () {
    // Arrow function inside normal function
    const sayMyNameAsArrowFunction = () => {
      console.log(this); // Logs user object because it takes "this" from outer variable ie normal function
    };

    // Calling inside arrow function
    sayMyNameAsArrowFunction();
  },

  // Arrow function outside normal function
  anotherArrowFunction: () => {
    console.log(this); // Logs window object because it takes "this" from outer variable ie global object
  },
};

// Calling normal method of user object
user.sayMyName();
// Calling outside arrow method of user object
user.anotherArrowFunction();

// B. Constructor function
// BA. With Normal function
function Flower(color) {
  this.color = color;
}

const flower = new Flower("Red");
console.log(flower);

// BB. With Arrow function
const Flower2 = (color) => {
  this.color = color;
};

const flower2 = new Flower2("Red");
console.log(flower2); // Flower2 is not a constructor

// C. "arguments” keyword exists
// C1. With Normal function
function sum1() {
  console.log(arguments); // Arguments(2) [2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}

sum1(2, 3);

// C2. With Arrow function
const sum3 = () => {
  console.log(arguments); // Error | ReferenceError: arguments is not defined
};

sum3(2, 3);

// High Order Function

// A. Accepts function as argument
function foo(callback) {
  // Calling callback function
  callback(); // I'm a callback function
}

function bar() {
  console.log("I'm a callback function");
}

// Passing bar function in foo so it gets called inside foo function
foo(bar);

// B. Returns a function
function foo() {
  return function () {
    console.log("Logging from returned function");
  };
}

const anotherFunction = foo();
anotherFunction(); // Logging from returned function

// IIFE Function 

function callMe() {
  console.log("Function get called");
}

callMe();

(function () {
  console.log("Immidiately called after is is created");
})();

// Currying function

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
const aanotherFunction = aFunction(2);   // Return a function agarin
const andAnotherFunction = aanotherFunction(1);   // Return value

console.log(andAnotherFunction); // 6