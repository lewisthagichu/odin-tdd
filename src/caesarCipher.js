const caeserCipher = (str, num) => {
  const uppercaseAlphabet = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index)
  );
  const lowercaseAlphabet = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(97 + index)
  );

  let index = findIndex(num);
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (isLetter(char)) {
      let isUpper = isUpperCase(char);
      let alphabet = isUpper ? uppercaseAlphabet : lowercaseAlphabet;
      let charIndex = isUpper
        ? char.charCodeAt(0) - 65
        : char.charCodeAt(0) - 97;
      let newIndex = (charIndex + index) % 26;
      if (newIndex < 0) {
        newIndex += 26;
      }
      newStr += alphabet[newIndex];
    } else {
      newStr += char;
    }
  }
  return newStr;
};

const isLetter = (char) => {
  return /^[a-zA-Z]$/.test(char);
};

const findIndex = (num) => {
  return num % 26;
};

const isUpperCase = (char) => {
  return char == char.toUpperCase() && char != char.toLowerCase();
};

export default caeserCipher;
