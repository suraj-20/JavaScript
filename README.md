# JavaScript Questions

## Q.1 How JavaScript works?

Javascript is a synchronous single-threaded langauage.

Synchronous single-threaded language means that JavaScript can only execute one command at a time , and in a specific order.

Everything in JavaScript happens inside a execution context.

Execution context have two components i.e., Memory or Code.

Memory stores the key: value payers, or functions() in it, kay: value means that a = 10, and a functions means that the whole function: fn(){..}

Code execute the commands one by one to get the desired output.

In memory component it first stores all the variable as undefined if there is a function variable it stores the whole function in it, and when the function invoked it create a new execution context in the code component with both the components.

## Q.2 Hoisting in JavaScript?

Hoisting in Javascript mechenism where variables, function declarations, and classes are moved to the top of their execution. scope before code Remember that Javascript only hoists declarations, not initialsation.

Let's take a simple example:

```bash
console.log(message);
var message = "This variable has been hoisted";`

```

Example2:

```bash
console.log(message);  // undefined
console.log(getName);  // [Function: getName]
getName("Jai shree krishna"); // Jai shree krishna
var message = "This variable has been hoisted";

function getName(name) {
 console.log(name);
}
```

## Q.3 "let", "var", or "const" ?

"var" has function-level scrope, whereas "let" or "const" has a block level scope.

variables declared with the "var" and "let" can be reassigned whereas the "const" cannot be reassigned.

variables declared with "var" are hoisted, whereas "let" and "const" are hoisted but not initialized.

variables declared with "var" don't have a temoporal dead zone whereas "let" and "const" have a temoparal dead zone.

```bash
// console.log(a);  // undefined
// console.log(b);  // ReferenceError: Cannot access 'b' before initialization
// console.log(c);  // ReferenceError: Cannot access 'c' before initialization

var a = 10;
a = 40;
console.log(a); // 40

let b = 20;
b = 50;
console.log(b); // 50

const c = 30;
c = 60;
console.log(c); // TypeError: Assignment to constant variable.

// console.log(a);  //10
// console.log(b);  //20
// console.log(c);  //30
```

## Q.4 What is clousre?

A clousre is a combination of a function bundled (or enclosed) together with its lexical environment within which the function was declared i.e, It is an inner function that has access to the outer or enclosing functions's variables, functions and other data even after the outer function has finished its execution.

The clousre has three scope chains.
i. Own scope ehrere variables defined between its curle brackets.
ii. Outer function variables.
iii. Globle variables.

Example 1:

```bash
function outer() {
  var a = 10;
  function inner() {
    console.log(a);  // 10
  }
  return inner;
}
outer();
```

Example 2:

```bash
function Welcome(name) {
  var greetingInfo = function (message) {
    console.log(message + " " + name);
  }
  return greetingInfo;
}

var myFunction = Welcome("John");
myFunction("Welcome")  // Welcome John
myFunction("Hello Mr.")  // Hello Mr. John
```

## Q.5 What is callback function and callback hell?

In Javascript, callbacks are commanly used to handle asynchronous operations.

A callback function is a function passed into another function as an argument. This function invoked inside the outer function to complete an action.

Example 1:

```bash
function fetchData(url, callback) {
  setTimeout(() => {
    const data = "Some data from server";
    callback(data);
  }, 1000);
}

function processData(data) {
  console.log("Processing data: ", data);
}

fetchData("http://example.com/data", processData);
```

Example 2:

```bash
function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = prompt("Please enter your name: ");
  callback(name);
}

outerFunction(callbackFunction);
```

In this example, the fetchData function takes a URL and a callback function as arguments. After fetching the data from server (simulated using setTimeout), it calls the callback function and parse the retrived data to it.

### Callback Hell :-

Callback hell, also known as "Pyramid of doom" is a term used in JS programming to describe a situation where multiple nested callbacks are used within asynchronous function.

"Callback Hell occurs when asynchronous operation depend on the result of previous asynchronous operations, resulting in deeply nested and often hard-to-read code".

Let's see example of callback hell.

```bash
fs.readFile('file1.txt', 'utf8', function (err, data) {
  if (err) {
    console.error(err);
  } else {
    fs.readFile('file2.txt', 'utf8', function (err, data) {
      if (err) {
        console.error(err);
      } else {
        fs.readFile('file3.txt', 'utf8', function (err, data) {
          if (err) {
            console.error(err);
          } else {
            // Continue with more nested callbacks...
          }
        });
      }
    });
  }
});
```

To avoid callback hell, modern JS provides alternatives like Pormises and async/await. Here the same code using Promises.

```bash
const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readFile("file1.txt")
  .then((data1) => {
    return readFile("file2.txt");
  })
  .then((data2) => {
    return readFile("file3.txt");
  })
  .then((data3) => {
    return readFile("file4.txt");
  })
  .catch((err) => {
    console.error(err);
  })
```

## Q.5.1 Why do we need callback?

The callbacks are needed because JS is an event driven langauage. That means instead of waiting for a response Js will keep executing while listening for other events.

## Q.6 What is Promise?

A Promise is used to handle asynchronous operations in JavaScript.

A Promise is an object that may produce a single value some tome in the future with either a resolved value or a reason that it's not resolved (for example, network error).

Promise have three states:
i. Pending - It is an initial state of the promise before an operation begins.
ii. Fulfilled - It indicates that the specified operation was completed.
iii. Rejected - This state indicates that the operation did not complete.

Syntax of promise:-

```bash
const promise = new Promise(function(resolve, reject) {
  // Promise description
})
```

Promise constructor has two parameters (resolve, reject) which are functions. If the async task has been completed without errors than call the resolved function with message or fatched data.

If an error occurred than call the reject function and pass the error on it.

we can access the result of promise using .then() handler.

or we can catch the error using .catch() handler in promises.

Let's take an example of Promise:

```bash
const fatchData = new Promise((resolve, reject) => {
  setTimeout(() =>  {
    const data = "Some data from server";
    resolve(data);
  },1000)
})

fatchData
  .then((data) => {
    console.log("Data Fatched: ", data);
  })
  .catch((err) => {
    console.error(err)
  })
```

Promise chaining : The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining.

It involeve chaining multiple .then() methods to a Promise to perform a series of tasks in a specific order.

Example of Promise chaining :

```bash
new Promise(function(resolce, reject) {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})
.then((result) => {
  console.log(result);  // 1
  return result * 1;
})
.then((result) => {
  console.log(result);  // 2
  return result * 2;
})
.then((result) => {
  console.log(result);  // 6
  return result * 3;
})
.catch((err) => {
  console.log(err)
})
```
