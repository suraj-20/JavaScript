console.log(message); // undefined
console.log(getName); // [Function: getName]
getName("Jai shree krishna"); // Jai shree krishna

var message = "This variable has been hoisted";

function getName(name) {
  console.log(name);
}
