import calculator from '../calculator';

test('add numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtract numbers', () => {
  expect(calculator.add(1, 2)).toBe(-1);
});

test('multiply numbers', () => {
  expect(calculator.add(1, 2)).toBe(2);
});

test('divide numbers', () => {
  expect(calculator.add(4, 2)).toBe(2);
});

test('detect non-numbers', () => {
  expect(calculator.add('2', 2)).toBe('Invalid input value');
});

test('detect non-numbers', () => {
  expect(calculator.add(4, '2')).toBe('Invalid input value');
});

test('detect non-numbers', () => {
  expect(calculator.add('4', '2')).toBe('Invalid input value');
});
