const object = {
  name: "Suraj",
  age: 21,
};

const stringifiedObject = JSON.stringify(object);
console.log(stringifiedObject);
console.log(typeof stringifiedObject);

const parsedObject = JSON.parse(stringifiedObject);
console.log(parsedObject);
console.log(typeof parsedObject);
