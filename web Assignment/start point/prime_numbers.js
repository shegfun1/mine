function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(5));
console.log(isPrime(10));
console.log(isPrime(17));
