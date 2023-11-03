/**********************************************
 * Filename: complexCode.js
 * Content: Complex JavaScript code example
 **********************************************/

// Define a class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Define a class representing a Car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log(`Starting the ${this.make} ${this.model}'s engine...`);
  }
}

// Create a new instance of Person
const john = new Person("John Doe", 30);
john.greet();

// Create a new instance of Car
const myCar = new Car("Toyota", "Camry", 2020);
myCar.startEngine();

// Define a function to find the factorial of a number recursively
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120

// Define an async function to simulate asynchronous operations
async function simulateAsyncOperation() {
  console.log("Simulating asynchronous operation...");

  // Wait for 2 seconds before resolving
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("Async operation completed.");
}

simulateAsyncOperation();

// Define a higher-order function that takes a callback
function higherOrderFunction(callback) {
  console.log("Executing higher order function...");

  // Call the callback function after 1 second
  setTimeout(callback, 1000);
}

// Define a callback function
function callbackFunction() {
  console.log("Callback function called.");
}

higherOrderFunction(callbackFunction);

// Generate a random number between min (inclusive) and max (exclusive)
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomNumber(1, 10)); // Output: Random number between 1 and 10

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use array methods to perform operations on the array
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

// Define a Promise that resolves after a given time
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Use async/await to perform asynchronous operations sequentially
async function performSequentialAsyncTasks() {
  console.log("Task 1 started.");
  await delay(1000);
  console.log("Task 1 completed.");

  console.log("Task 2 started.");
  await delay(2000);
  console.log("Task 2 completed.");

  console.log("Task 3 started.");
  await delay(3000);
  console.log("Task 3 completed.");
}

performSequentialAsyncTasks();

// Generate a random color code in HEX format
function getRandomColorCode() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

console.log(getRandomColorCode()); // Output: Random color code in HEX format

// Define a recursive function to calculate the Fibonacci sequence
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(6)); // Output: 8

// Define a JavaScript generator function
function* fibonacciGenerator() {
  let current = 0;
  let next = 1;

  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const fibGenerator = fibonacciGenerator();
console.log(fibGenerator.next().value); // Output: 0
console.log(fibGenerator.next().value); // Output: 1
console.log(fibGenerator.next().value); // Output: 1
console.log(fibGenerator.next().value); // Output: 2

// Define a class representing a Rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    this.width = Math.sqrt(value);
    this.height = Math.sqrt(value);
  }
}

const rectangle = new Rectangle(4, 5);
console.log(rectangle.area); // Output: 20
rectangle.area = 16;
console.log(rectangle.width, rectangle.height); // Output: 4, 4

// Define a function that applies a function to each element in an array
function mapArray(arr, callback) {
  const mappedArray = [];

  for (let i = 0; i < arr.length; i++) {
    mappedArray.push(callback(arr[i]));
  }

  return mappedArray;
}

const mappedNumbers = mapArray(numbers, (num) => num * 3);
console.log(mappedNumbers); // Output: [3, 6, 9, 12, 15]

// Define a class representing a Stack
class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  get length() {
    return this.stack.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Output: 2
console.log(stack.length); // Output: 1

// Define a class representing a Queue
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    return this.queue.shift();
  }

  get length() {
    return this.queue.length;
  }
}

const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
console.log(queue.dequeue()); // Output: "A"
console.log(queue.length); // Output: 1

// Define a function that checks if a number is prime
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(12)); // Output: false

// Define a class representing a Point
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const pointA = new Point(0, 0);
const pointB = new Point(3, 4);
console.log(Point.distance(pointA, pointB)); // Output: 5

// Define a module using the Revealing Module Pattern
const myModule = (function () {
  let privateVariable = "I am private";

  function privateFunction() {
    console.log("Private function called");
  }

  function publicFunction() {
    console.log("Public function called");
  }

  return {
    publicFunction,
  };
})();

myModule.publicFunction(); // Output: "Public function called"