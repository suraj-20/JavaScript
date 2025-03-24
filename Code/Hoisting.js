console.log(message); // undefined
console.log(getName); // [Function: getName]
getName("Jai shree krishna"); // Jai shree krishna

var message = "This variable has been hoisted";

function getName(name) {
  console.log(name);
}

function sayMyName(characterName) {
  var profession = 'Drug Dealer';

  if (characterName) {
    let age = 50;
    console.log(profession); // Drug Dealer
    console.log(age); // 50
  }

  console.log(age); // ReferenceError: age is not defined
  console.log(noOfChildren); // ReferenceError: noOfChildren is not defined
}

sayMyName('Walter White');