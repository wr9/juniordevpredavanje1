const MAX_PRIME = 1000000;

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
};

const random = (max) => Math.floor(Math.random() * max);

const generatePrimesFunc = (quota = 1000000) => {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
};

export const generatePrimes = () => generatePrimesFunc();
