function fetchData(url, callback) {
  setTimeout(() => {
    const data = "Some data from the server.";
    callback(data);
  }, 5000);
}

const url = "https://example.com/data";

fetchData(url, function processData(data) {
  console.log("Processing data:", data);
});

function mainFunction(firstCallback) {
  firstCallback(callBack2);
}

function callback1(secondCallback) {
  console.log("First callback");

  secondCallback(callback3);
}

function callBack2(thirdCallback) {
  console.log("Second callback");

  thirdCallback();
}

function callback3() {
  console.log("Third callback");
}

mainFunction(callback1);

function firstFunction() {
  // Simulate a code delay
  setTimeout(function () {
    console.log("First function called");
  }, 1000);
}
function secondFunction() {
  console.log("Second function called");
}
function thirdFunction() {
  // Simulate a code delay
  setTimeout(function () {
    console.log("Third function called");
  }, 1000);
}
function forthFunction() {
  console.log("Forth function called");
}
firstFunction();
secondFunction();
thirdFunction();
forthFunction();