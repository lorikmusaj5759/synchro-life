/*
Filename: ComplexAlgorithm.js

Content: This code demonstrates a complex algorithm for finding the prime numbers within a range of values.

*/

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to generate prime numbers within a given range
function generatePrimesInRange(start, end) {
  let primes = [];

  for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }

  return primes;
}

// Main function
function main() {
  const startRange = 1;
  const endRange = 1000;

  const primesInRange = generatePrimesInRange(startRange, endRange);

  console.log("Prime numbers within the range", startRange, "to", endRange, "are:");
  console.log(primesInRange);
}

// Running the main function
main();