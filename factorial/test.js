const factorial = require('./index');

it('should return 1 with 0', () => {
  expect(factorial(0)).toEqual(1);
});

it('should return 1 with 1', () => {
  expect(factorial(1)).toEqual(1);
});

it('should return 2 with 2', () => {
  expect(factorial(2)).toEqual(2);
});

it('should return 6 with 3', () => {
  expect(factorial(3)).toEqual(6);
});

it('should return 24 with 4', () => {
  expect(factorial(4)).toEqual(24);
});