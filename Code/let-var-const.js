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

