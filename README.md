# JavaScript Questions

## Q.1 How JavaScript works?

- Javascript is a synchronous single-threaded langauage.

- Synchronous single-threaded language means that JavaScript can only execute one command at a time , and in a specific order.

- Everything in JavaScript happens inside a execution context.

- Execution context have two components i.e., Memory or Code.

- Memory stores the key: value payers, or functions() in it, kay: value means that a = 10, and a functions means that the whole function: fn(){..}

- Code execute the commands one by one to get the desired output.

- In memory component it first stores all the variable as undefined if there is a function variable it stores the whole function in it, and when the function invoked it create a new execution context in the code component with both the components.

## Q.2 Hoisting in JavaScript?

- Hoisting in Javascript mechenism where variables, function declarations, and classes are moved to the top of their scope before code execution. Remember that Javascript only hoists declarations, not initialsation.

- Let's take a simple example:

  ```bash
        console.log(message);
        var message = "This variable has been hoisted";`

  ```

- Example2:

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

- "var" has function-level scrope, whereas "let" or "const" has a block level scope.
- variables declared with the "var" and "let" can be reassigned whereas the "const" cannot be reassigned.
- variables declared with "var" are hoisted, whereas "let" and "const" are hoisted but not initialized.
- variables declared with "var" don't have a temoporal dead zone whereas "let" and "const" have a temoparal dead zone.

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
