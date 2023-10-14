const reverseString = (string) => {
  // Check if the input is a string
  if (typeof string !== 'string') {
    return 'Invalid input: not a string';
  }

  // Get the length of the string
  let length = string.length;
  let reversedString = '';

  // Iterate through the string in reverse order and build the reversed string
  for (let i = length - 1; i >= 0; i--) {
    reversedString += string.charAt(i);
  }

  return reversedString;
};
export default reverseString;
