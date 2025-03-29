const memoizAddition = () => {
  let cache = {};

  return (value) => {
    if (value in cache) {
      console.log("Fetching from cache...");
      return cache[value];
    } else {
      console.log("Calculating result...");
      let result = value + 20;
      cache[value] = result;
      return result;
    }
  };
};

const addition = memoizAddition();
console.log(addition(20));
console.log(addition(20));
