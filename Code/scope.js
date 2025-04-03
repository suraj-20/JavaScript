// // Global scope
// var globalVariable = "I'm a global variable";

// function exampleFunction() {
//   // Local scope
//   var localVariable = "I'm a local variable";

//   console.log(globalVariable); // "I'm a global variable"
//   console.log(localVariable); // "I'm a local variable"
// }

// exampleFunction();

// // console.log(localVariable); // ReferenceError: localVariable is not defined

// var a = 10;

// {
//   var a = 20;
// }

// func();

// let b = a;

// {
//   let b = 40;
// }

// console.log(b);

// let dessert = 'cake';

// if (dessert.length < 6) console.log(dessert);

// let dessert = 'ice cream';

// if (dessert) {
//   if (dessert.length < 5) {
//     console.log('quick snack');
//   } else {
//     console.log('lengthy treat');
//   }
// }

// let dessert = "tart";

// if (dessert) {
//   let dessert = "cannoli";
//   if (dessert.length < 5) {
//     console.log("quick snack");
//   } else {
//     console.log("lengthy treat");
//   }
// } else {
//   console.log("no dessert...");
// }

// let tea = 'sweet';

// if (true) {
//   let tea = 'iced';
//   tea = 'sour';
// }

// console.log(tea);

// let tea = 'sweet';

// if (true) {
//   tea = 'sour';
//   var tea = 'iced';
// }

// console.log(tea);

// let numberOfBagels = 5;

// function eatBagel() {
//   numberOfBagels -= 1;
//   if (numberOfBagels === 0) {
//     console.log('Oh nO, Out Of bagles!');
//   } else {
//     console.log(`Yummy. There are ${numberOfBagels} left!`);
//   }
// }

// eatBagel();
// eatBagel();
// console.log(numberOfBagels);

let numberOfBagels = 5;

function eatBagel(bagels) {
  bagels -= 1;
  if (bagels === 0) {
    console.log('Oh nO, Out Of bagles!');
  } else {
    console.log(`Yummy. There are ${bagels} left!`);
  }
}

eatBagel(numberOfBagels);
eatBagel(numberOfBagels);
console.log(numberOfBagels);