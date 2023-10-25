// The array on which the operations are performed
const arr: number[] = [];

// times how long it takes to run the given function in ms
function time(fn: () => void): number {
  const start = Date.now();
  fn();
  const end = Date.now();
  const runtime = end - start;
  return runtime;
}

// get value of specific item in the array
function get(index: number) {
  return arr[index];
}

// add items to end of the array
function push(items: number) {
  for (let i = 0; i < items; i++) {
    arr.push(Math.random());
  }
}

// remove items from the end of the array
function pop(items: number) {
  for (let i = 0; i < items; i++) {
    arr.pop();
  }
}

// add items to the start of the array
function unshift(items: number) {
  for (let i = 0; i < items; i++) {
    arr.unshift(Math.random());
  }
}

// removes items from the start of the array
function shift(items: number) {
  for (let i = 0; i < items; i++) {
    arr.shift();
  }
}

// higher order function wrapper for get
function getFn(index: number) {
  return () => {
    get(index);
  };
}

// higher order function wrapper for push
function pushFn(items: number) {
  return () => {
    push(items);
  };
}

// higher order function wrapper for pop
function popFn(items: number) {
  return () => {
    pop(items);
  };
}

// higher order function wrapper for unshift
function unshiftFn(items: number) {
  return () => {
    unshift(items);
  };
}

// higher order function wrapper for shift
function shiftFn(items: number) {
  return () => {
    shift(items);
  };
}

const iterations = [100, 1000, 10000, 100_000, 1_000_000];

// Test cases
console.log("Testing get");
iterations.forEach((amount) => {
  arr.length = 0;
  push(amount);
  console.log("items:", amount, "timeTaken:", time(getFn(amount - 1)), "ms");
});

console.log("Testing push");
iterations.forEach((amount) => {
  arr.length = 0;
  push(amount);
  console.log("items:", amount, "timeTaken:", time(pushFn(1000)), "ms");
});

console.log("Testing pop");
iterations.forEach((amount) => {
  arr.length = 0;
  push(amount);
  console.log("items:", amount, "timeTaken:", time(popFn(1000)), "ms");
});

console.log("Testing unshift");
iterations.forEach((amount) => {
  arr.length = 0;
  push(amount);
  console.log("items:", amount, "timeTaken:", time(unshiftFn(1000)), "ms");
});

console.log("Testing shift");
iterations.forEach((amount) => {
  arr.length = 0;
  push(amount);
  console.log("items:", amount, "timeTaken:", time(shiftFn(1000)), "ms");
});
