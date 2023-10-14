import reverseString from '../reverseString';

test("'test should be tset'", () => {
  expect(reverseString('test')).toBe('tset');
});

test("'Test should be tseT'", () => {
  expect(reverseString('Test')).toBe('tseT');
});

test("'12tes3t should be t3set21'", () => {
  expect(reverseString('12tes3t')).toBe('t3set21');
});

test("1234 should return not a string'", () => {
  expect(reverseString(1234)).toBe('Invalid input: not a string');
});
