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
const countPrimesModulus = (n) => {
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

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }

  // optimization, only calculate factors up to sqrt(n);
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// sieve of erastothenes implementation with optimizations
const countPrimes = (n) => {
  if (n < 3) {
    return 0;
  }
  const primes = Array(n).fill(true);
  let count = n - 2;

  for (let i = 2; i < n; i++) {
    if (!primes[i]) {
      // for some reason `count = count - 1` is almost 40% faster than `count -= 1`
      count = count - 1;
      continue;
    }
    // i is prime, set all higher multiples of i to false
    if (isPrime(i)) {
      // likewise, `j = j + i` is much faster than `j += i`
      for (let j = i * i; j < n; j = j + i) {
        primes[j] = false;
      }
    }
  }

  // reduce is ~30% faster than filter
  return count;
};


console.log(countPrimes(2));
console.log(countPrimes(3));
console.log(countPrimes(5));
console.time('countPrimes');
console.log(countPrimes(1500000));
console.timeEnd('countPrimes');
