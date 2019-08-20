// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

const countDown = function() {
  var num = 10;

  return function() {
    num--;
    return num;
  }
}

let counter = countDown();
for(let i = 0; i < 10; i++) {
  console.log(counter());
}

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  let count = 0;

  function counter() {
    count++;
    return count;
  }

  return counter;
};
/* Example usage: */const myCounter = counterMaker();
console.log("-------------------counterMaker------------------");
console.log(myCounter()); // 1
console.log(myCounter()); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

console.log("-------------------Closure.js Challenge 3------------------");
const newCounterMaker = (limit) => {
  let count = 0;

  function counter() {
    if(count < limit)
      count++;
    else
      count = 1;

    return count;
  }

  return counter;
};

const myNewCounter = newCounterMaker(4);
console.log(myNewCounter());
console.log(myNewCounter());
console.log(myNewCounter());
console.log(myNewCounter());
console.log(myNewCounter());


// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  var count = 0;
  
  var factory = {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    }
  };

  return factory;
};
console.log("-------------------counterFactory------------------");
var factory = counterFactory();
console.log(factory.decrement());
console.log(factory.decrement());
console.log(factory.decrement());
console.log(factory.increment());
console.log(factory.increment());
console.log(factory.increment());
console.log(factory.increment());


