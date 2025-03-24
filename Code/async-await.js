const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved!");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved!");
  }, 10000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved outise the async functions");
  }, 15000);
});

async function handlePromise() {
  console.log("Hello world");

  const val1 = await p1;
  console.log("Namaste Javascript 1");
  console.log(val1);

  const val2 = await p2;
  console.log("Namaste Javascript 2");
  console.log(val2);
}

handlePromise();

const val3 = p3;
console.log("Namaste Javascript 3");
console.log(val3);

// const getData = async () => {
//   let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const responseData = await data.json();
//   console.log(responseData);
//   return responseData;
// };

// console.log("Before get Data");
// getData()
//   .then((data) => {
//     console.log(data);
//   })
//   .then((data) => {
//     console.log("After getting the data from fetch function");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// console.log(responseData);
// console.log("After get Data");
