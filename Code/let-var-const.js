// console.log(a);  // undefined
// console.log(b);  // ReferenceError: Cannot access 'b' before initialization
// console.log(c);  // ReferenceError: Cannot access 'c' before initialization

var a = 10;
a = 40;
console.log("Outside function var : ",a); // 40

let b = 20;
b = 50;
console.log("Outside Function let : " ,b); // 50

const c = 30;
// c = 60;
console.log(c); // TypeError: Assignment to constant variable.

// console.log(a);  //10
// console.log(b);  //20
// console.log(c);  //30

function checkVar() {
    var a = 60;
    console.log("Inside function var : ",a);
    let b = 80;
    console.log("Inside function let : ",b);
}

checkVar();
// console.log("After function declaration var : ",a);
// console.log("After function declaration let : ",b);

