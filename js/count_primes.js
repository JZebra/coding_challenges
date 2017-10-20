// https://leetcode.com/problems/count-primes/description/

// try to check if a number is prime with minimal modulus operations
const isPrimeModulus = (num, primesLessThanNum) => {
  for (let i = 0; i < primesLessThanNum.length; i++) {
    const currentPrime = primesLessThanNum[i];
    if (num % currentPrime === 0) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
  if (n < 2) {
    return 0;
  }

  const primes = [];
  for (let i = 2; i < n; i++) {
    if (isPrimeModulus(i, primes)) {
      primes.push(i);
    }
  }
  return primes.length;
};


console.log(countPrimes(2));
console.log(countPrimes(3));
console.log(countPrimes(4));
console.time('countPrimes');
// console.log(countPrimes(1000));
console.log(countPrimes(499979));
console.timeEnd('countPrimes');
