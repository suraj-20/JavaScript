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
i. Own scope where variables defined between its curly brackets.
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

A Promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it's not resolved (for example, network error).

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

## Q.7 What is async/await ?

Async/await is a modern appraoch to handling asynchronous code in JavaScript. It provides a more concise and readable way to work with Promises and async operations, effectively avoiding the "callback Hell" and improving the overall structure of asynchronous code.

In Javascript, async function or keyword is used to define an asynchronous function, which returns a Promise.

Within an async function, the await keyword is used to pause the execution of the function until a Promise is resoled, effectively allowing for synchronous-looking code while with asynchronous operations.

Let's take an example:

```bash
async function fetchData() {
  try {
    const data = await fetch("http://example.com/data");
    const jsonData = await data.json();
    return jsonData;
  }
  catch {
    throw error
  }
}

fetchData()
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((err) => {
    console.error(err);
  })
```

In this example, the fetch function is defined as async function, and it uses await keyword to pause the execution and wait for the fetch and json operations, effectively working with the Promises in a way that resembles synchronous code.

## Q.7 What is arrow function ?

A shorter syntex for a normal function declaration. In case of single line function, we don't need to use the "return" keyword to return the value.

Let's see an example:

```bash
// Ways to write an arrow function
// 1.
const sum = (a, b) => {
  return a + b;
}
// 2.
const sum = (a, b) => a + b;
```

## Q.8 What is High Order Funtion ?

A high order function is a function that either accepts a function as arguments or return a function or both.

Lets's see an example:

```bash
// A. Accepts function as argument
function foo(callback) {
  // Calling callback function
  callback(); // I'm a callback function'
}

function bar() {
  console.log("I'm a callback function");
}

// Passing bar function in foo so it gets called inside foo function
foo(bar);

// B. Return a function

function foo() {
  return function () {
    console.log('Logging from returned function');
  };
}

const anotherFunction = foo()
anotherFunction() // Logging from returned function

// TIP - A function that returns another function follows the concept of closures.
```

## Q.9 What is an anonymous function ?

Anonymous functions in javascript are functions that have no name.

All arrow function a anonymous functions.

They can be used as an argument to another function or as an imidiately involked function execution.

```bash
// A. Assigning to a variable
const sum = function (a, b) {
  return a + b;
};

console.log(sum(2, 4));

// B. As callback function
[1, 2, 3, 4].forEach(function (item) { // Function inside forEach is anonymous function
  // Do something with each element
})
```

## Q.10 What is IIFE ?

IIFE stands for Immidiately Involked Function Expression.

These types of functions are like any other function buy they don't need to called. They are called just after they are created.

Let's see how a normal funtion or IIFE works:

```bash
function callMe() {
  console.log('Function get called');
}

callMe(); // Function get called

(function () {
  console.log('Immidiately called after it is created');
})();

```

## Q.11 What is a currying function ?

A function that coverts a multi-arguments funtion into a single-argument function by calling it with single argument multiple times.

Lets's see an example:

```bash
// A. Multi-argument function
const sumOfThreeNumbers = (a, b, c) => {
  return a + b + c;
}

sumOfThreeNumbers(1, 2, 3); // 6

// B. With curry function
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
```

## Q.12 What is unary function?

A function that has only one argument.

A unary function is a function that except only one argument. It stands for a single argument accepted by a function.

Let's se an Example:

```bash

const unaryFunc = (a) => console.log(a + 10); // 15

unaryFunc(5);

function foo(a) {
  console.log("I am a unary function.");
}

function bar(a, b) {
  console.log("I am not a unary function.");
}
```

## Q.13 What is memoization?

A method to increase function performance by caching it's previously calculated result. When the function runs it checks into the caches first, if data exixts then no need to compute else compute or add it to cache and then return the function.

Here cache is stored in an object;

```bash

const memoizAddition = () => {
  let cache = {};

  return (value) => {
    if(value in cache) {
      console.log("Fetching from cache");
      return cache[value];
    } else {
      console.log("Calculating resutl");
      let result = value + 20;
      cache[value] = result;
      return result;
    }
  }
}

const addition = memoizAddition();
console.log(addition(20));
console.log(addition(20));

```

## Q.14 What is setTimeout & setInterval ?

setTimeout - Call the callback funtion only once after a specific period of time.
setInterval - Call the callback funtion after a perticular interval of time has been passed.

See with an example:

```bash

setTimeout(function () {
  console.log("I am a callback function of setTimeout.");
}, 2000);

setInterval(function () {
  console.log("I am a callback function of setInterval");
}, 500);

```

## Q.15 What is JSON & its methods ?

JSON means Javascript Object Notation. It's a file that consists of key-value pairs and is used for interchanging data between two resources like APIs.

It has two important methods -

JSON.stringify() - It convert javascript object into string.
JSON.parse() - It convert string to javascript object.

Let's see an example:

```bash

const object = {
  name: 'Suraj',
  age: 21,
};

const stringifiedObject = JSON.stringify(object);
console.log(stringigiedObject);
console.log(typeof stringifiedObject);

const parsedObject = JSON.parse(stringifiedObject);
console.log(parsedObject);
console.log(typeof parsedObject);

```

## Q.16 What is Object Referencing?

The data type in javascript store values in two ways-

By Value - In the case of primitive data type

By Reference - In the case of non-primitive data type

Let's see an example-

```bash

// By value => Primitive data type
const message = 'Hello';
const anotherMessage = message;

console.log(message);  // Hello
console.log(anotherMessage);   // Hello

// By Reference => Primitive data type

const user = {
  name: 'John';
}

Here user points to the object which has the **name** property on it.
```

## Q.17 How does Javascript Engine Work?

The JavaScript engine is responsible for executing JavaScript code and managing the memory and resources used by the code. A JavaScript engine is implemented as part of a web browser or a standalone JavaScript runtime environment, such as Node.js.

The general process for how a javascript engine works is as follows:

Parsing: The Javascript engine parses the code, converting it into an internal representation called an abstract syntax tree(AST). The parser performs syntax checking and generates an error if it encounters any syntax errors.

Compilation: The javascript engine compiles the AST into machinve code that can be executed by the computer's processor. This process is also called just-in-time (JIT) compilation. The machine code is optimized for performance and stored in a cache for later use.

Execution: The javascript engine executes the machine code, following the instructions in the code to perform operations, manipulate data, and call functions. The engine also manages the memory and resources used by the code, allocating and freeing memory as needed.

Garbage Collection: The javascript engine performs garbage collection, which is the process of freeing up memory that is no longer needed by the code. The engine uses a mark-and-sweep algorithm to determine which objects are no longer reachable by the code and reclaims their memory.

## Q.18 What is an Event Loop?

The event loop is a core component of the JS runtime environment. It is responsible for scheduling and executing asynchronous tasks. The event loop works by continuously monitoring two queues: The call stack and the event queue.

The call stack is a stack (LIFO) data structure that stores the functions that are currently being executed (store the execution contaxt created during the code execution).

Web APIs is the place where the async operations (just like setTimeout, fatch, promises) with their callbacks are waiting to complete. It borrows the thread from thread pool to complete the task in the background without blocking the main thread.

The job queue (or microtasks) is FIFO structure that holds the callbacks of async/await, promises, that are ready to be executed.

The task queue (or macrotasks) is a FIFO structure holds the callback of async operations (timer like setTimeout, setInterval) that are ready to be executed.

The event loop parmanently monitors wheater the callstack is empty. If the call stack is empty, the event loop into the job queue or task queue and dequeue any callback ready to be executed into the call stack.

## Q.19 What are primitve and non-primitive data Types?

Primitive data types are pre-defined in JS like String, Number, Boolean, NULL, Undefined.

Non-Primitive data types are derived from primitive data types like Array & Object.

```bash

// A. Primitive data types
const string = 'string'
const number = 5
const boolean = true
const nullValue = null
const undefinedValue = undefined

// B. Non-Primitive data types
const array = []
const object = {}

```

## Q.20 Difference between null and undefined?

null

- It is a value that asigned to a variable which means that the variable points to no object.
- The type of null is an object.
- It means the value of variable is absent.

undefine

- It is not a assigned value for a variable. When a variable is declared but not assigned to any value its value is undefined.
- The type of undefined is undefined.
- It means even a variable is absent.

Example-

```bash
let x;
console.log(x);  // undefined

let x = null;
console.log(x);  // null
```

