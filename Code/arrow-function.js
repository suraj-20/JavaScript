function callMe() {
  console.log("Function get called");
}

callMe();

(function () {
  console.log("Immidiately called after is is created");
})();