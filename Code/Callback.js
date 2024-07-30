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

