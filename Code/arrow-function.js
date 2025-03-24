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
