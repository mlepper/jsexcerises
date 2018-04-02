// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if (n < 2) {
    return n;
  }

  // O(2^n)
  return fib(n-2) + fib(n-1);
}

function fiblin(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push( result[i-1] + result[i-2]);
  }

  return result[n];
}

function fibCache(n, cache) {
  cache = cache || {};
  if (cache[n]) {
    return cache[n];
  }

  if (n < 2) {
    return n;
  }

  cache[n-1] = fibCache(n-1, cache);
  cache[n-2] = fibCache(n-2, cache);

  return cache[n-1] + cache[n-2];
}

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    cache[args] = fn.apply(null, args);
    return cache[args];
  }
}

const memFib = memoize(fib);
module.exports = memFib;
