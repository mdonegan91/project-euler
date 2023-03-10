export function Multiples() {
  let i = 0;
  let sum = 0;
  while (i < 1001) {
    let remainder3 = i % 3;
    let remainder5 = i % 5;
    if (remainder3 === 0 || remainder5 === 0) {
      sum = sum + i;
    }
    i++;
  }
  return sum;
}

export function Fibonacci() {
  let ind = 1;
  let sum = 0;
  let fib = [1, 2];
  while (ind < 1001) {
    fib.push(fib[ind] + fib[ind - 1]);
    ind++;
  }
  fib.forEach(function (element) {
    if ((element % 2) === 0 && element < 4000000) {
      sum = sum + element;
    }
  });
  return sum;
}

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

export function Prime() {
  let number = 13195;
  let index1 = Math.round(number / 2);
  let primes = [];
  while (index1 > 0) {
    if ((number % index1) === 0) {
      if (isPrime(index1) === true) {
        primes.push(index1);
      }
    }
    index1--;
  }
  return primes[0];
}

export function Palindrome() {
  let number1 = 99;
  let number2 = 99;
  let number1x2 = 0;
  while (number1 > 0) {
    while (number2 > 0) {
      number1x2 = number1 * number2;
      let array1 = Array.from(number1x2.toString());
      if (array1[0] === array1[3] && array1[1] === array1[2]) {
        return array1.join("");
      }
      number2--;
    }
    number1--;
  }
}

export function smallestMultiple() {
  for (let i = 2520; i < 10000000000; i++) {
    if (i % 20 === 0 && i % 19 === 0 && i % 18 === 0 && i % 17 === 0 && i % 16 === 0 && i % 15 === 0 && i % 14 === 0 && i % 13 === 0 && i % 12 === 0 && i % 11 === 0) {
      return i;
    }
  }
}