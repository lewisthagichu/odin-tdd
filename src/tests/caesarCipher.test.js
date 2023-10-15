import caeserCipher from '../caesarCipher';

test('"aaabbbccc" becomes "bbbcccddd"', () => {
  expect(caeserCipher('aaabbbccc', 1)).toBe('bbbcccddd');
});

test('"aAabBbzZz" becomes "bBbcCcaAa"', () => {
  expect(caeserCipher('aAabBbzZz', 1)).toBe('bBbcCcaAa');
});

test('"a1ab#bc c" becomes "b1bc#cd d"', () => {
  expect(caeserCipher('a1ab#bc c', 1)).toBe('b1bc#cd d');
});

test('1 becomes "not a string"', () => {
  expect(caeserCipher('1', 1)).toBe('1');
});
